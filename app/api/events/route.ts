import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { getLocale } from "@/lib/i18n/locales"

// Extend the default session type
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}

// GET all events with translations
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const locale = getLocale(searchParams.get("locale") || undefined)
    const type = searchParams.get("type")
    const past = searchParams.get("past") === "true"
    const limit = Number.parseInt(searchParams.get("limit") || "100")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const skip = (page - 1) * limit

    const where = {
      ...(type ? { eventType: type } : {}),
      ...(past ? { eventDate: { lt: new Date() } } : { eventDate: { gte: new Date() } }),
    }

    const events = await prisma.event.findMany({
      where,
      orderBy: {
        eventDate: past ? "desc" : "asc",
      },
      include: {
        translations: {
          where: {
            languageCode: locale,
          },
        },
      },
      skip,
      take: limit,
    })

    // If some events don't have translations in the requested locale,
    // fetch translations in the default locale
    const eventsWithTranslations = await Promise.all(
      events.map(async (event) => {
        if (event.translations.length === 0) {
          const defaultTranslation = await prisma.eventTranslation.findFirst({
            where: {
              eventId: event.id,
              language: {
                isDefault: true,
              },
            },
          })
          return {
            ...event,
            translations: defaultTranslation ? [defaultTranslation] : [],
          }
        }
        return event
      }),
    )

    const total = await prisma.event.count({ where })

    return NextResponse.json({
      events: eventsWithTranslations,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit,
      },
    })
  } catch (error) {
    console.error("Error fetching events:", error)
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 })
  }
}

// POST a new event (admin only)
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const {
      slug,
      imageUrl,
      eventDate,
      eventEndDate,
      location,
      address,
      capacity,
      price,
      priceMembers,
      eventType,
      translations,
    } = body

    if (!slug || !eventDate || !eventType || !translations) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if slug is already in use
    const existingEvent = await prisma.event.findUnique({
      where: { slug },
    })

    if (existingEvent) {
      return NextResponse.json({ error: "Slug is already in use" }, { status: 400 })
    }

    // Create event with translations
    const event = await prisma.event.create({
      data: {
        slug,
        imageUrl,
        eventDate: new Date(eventDate),
        eventEndDate: eventEndDate ? new Date(eventEndDate) : undefined,
        location,
        address,
        capacity,
        spotsLeft: capacity,
        price,
        priceMembers,
        eventType,
        createdById: Number.parseInt(session.user.id),
        translations: {
          create: translations.map((t: any) => ({
            languageCode: t.languageCode,
            title: t.title,
            description: t.description,
            longDescription: t.longDescription,
            requirements: t.requirements,
            additionalInfo: t.additionalInfo,
            instructorName: t.instructorName,
            instructorBio: t.instructorBio,
          })),
        },
      },
      include: {
        translations: true,
      },
    })

    return NextResponse.json(event)
  } catch (error) {
    console.error("Error creating event:", error)
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 })
  }
}
