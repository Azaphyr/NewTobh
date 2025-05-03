import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendMembershipConfirmation } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, membershipType, experienceLevel, interests, comments } = body

    if (!firstName || !lastName || !email || !membershipType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Save to database
    const application = await prisma.membershipApplication.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        membershipType,
        experienceLevel,
        interests,
        comments,
      },
    })

    // Send confirmation email
    await sendMembershipConfirmation(email, firstName, membershipType)

    return NextResponse.json({ success: true, id: application.id })
  } catch (error) {
    console.error("Error processing membership application:", error)
    return NextResponse.json({ error: "Failed to process membership application" }, { status: 500 })
  }
}
