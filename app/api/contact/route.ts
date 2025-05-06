import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendContactFormEmail } from "@/lib/email/email"

// Rate limiting configuration from environment variables
const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW || "3600000") // Default to 1 hour if not set
const MAX_REQUESTS = parseInt(process.env.MAX_REQUESTS_PER_HOUR || "5") // Default to 5 if not set

// Get the real IP address from the request
function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    // Get the first IP in the chain (client IP)
    return forwardedFor.split(",")[0].trim()
  }
  
  const realIp = request.headers.get("x-real-ip")
  if (realIp) {
    return realIp
  }

  return "unknown"
}

// Clean up old rate limit entries
function cleanupRateLimits() {
  const now = Date.now()
  for (const [ip, data] of rateLimit.entries()) {
    if (now - data.timestamp > RATE_LIMIT_WINDOW) {
      rateLimit.delete(ip)
    }
  }
}

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; timestamp: number }>()

export async function POST(request: NextRequest) {
  try {
    // Clean up old entries on each request
    cleanupRateLimits()

    const ip = getClientIp(request)
    const now = Date.now()

    // Check rate limit
    const rateLimitInfo = rateLimit.get(ip)
    if (rateLimitInfo) {
      if (now - rateLimitInfo.timestamp < RATE_LIMIT_WINDOW) {
        if (rateLimitInfo.count >= MAX_REQUESTS) {
          console.warn(`Rate limit hit for IP: ${ip}`)
          return NextResponse.json(
            { error: "Too many requests" },
            { 
              status: 429,
              headers: {
                'Retry-After': Math.ceil((RATE_LIMIT_WINDOW - (now - rateLimitInfo.timestamp)) / 1000).toString()
              }
            }
          )
        }
        rateLimitInfo.count++
      } else {
        rateLimit.set(ip, { count: 1, timestamp: now })
      }
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now })
    }

    const body = await request.json()
    const { name, email, subject, message, language = 'en' } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate language
    if (language && !['en', 'fr'].includes(language)) {
      return NextResponse.json({ error: "Invalid language" }, { status: 400 })
    }

    // Additional bot protection checks
    if (
      name.length > 100 || // Unusually long name
      email.length > 100 || // Unusually long email
      subject.length > 200 || // Unusually long subject
      message.length > 5000 || // Unusually long message
      !email.includes("@") || // Invalid email format
      !email.includes(".") || // Invalid email format
      /[<>]/.test(name) || // HTML injection attempt
      /[<>]/.test(subject) || // HTML injection attempt
      /[<>]/.test(message) // HTML injection attempt
    ) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 })
    }

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        subject,
        message,
        language,
      },
    })

    // Send email notification
    await sendContactFormEmail(name, email, subject, message, language)

    return NextResponse.json({ success: true, id: submission.id })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
