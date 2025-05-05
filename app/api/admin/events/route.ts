import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

interface EventTranslation {
  title: string
  description: string
  shortDescription: string
}

interface ExtendedSession {
  user: {
    id: string
    email: string
    name: string
  }
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions) as ExtendedSession | null

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  try {
    const searchParams = new URL(request.url).searchParams
    const showArchived = searchParams.get("showArchived") === "true"

    const events = await prisma.event.findMany({
      where: showArchived ? {} : {
        isArchived: false
      },
      include: {
        translations: true,
      },
      orderBy: {
        eventDate: 'desc'
      }
    })

    return NextResponse.json(events)
  } catch (error) {
    console.error("Error fetching events:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions) as ExtendedSession | null

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  try {
    const data = await request.json()
    const {
      slug,
      imageUrl,
      eventDate,
      eventEndDate,
      location,
      address,
      capacity,
      spotsLeft,
      price,
      priceMembers,
      pricePremium,
      eventType,
      translations,
    } = data

    // Check if event with slug already exists
    const existingEvent = await prisma.event.findUnique({
      where: { slug },
    })

    if (existingEvent) {
      return new NextResponse("Event with this slug already exists", { status: 400 })
    }

    // Create event with translations
    const event = await prisma.event.create({
      data: {
        slug,
        imageUrl,
        eventDate: new Date(eventDate),
        eventEndDate: eventEndDate ? new Date(eventEndDate) : null,
        location,
        address,
        capacity: capacity ? parseInt(capacity) : null,
        spotsLeft: spotsLeft ? parseInt(spotsLeft) : null,
        price: price ? price : null,
        priceMembers: priceMembers ? priceMembers : null,
        pricePremium: pricePremium ? pricePremium : null,
        eventType,
        createdById: session.user.id,
        translations: {
          create: Object.entries(translations as Record<string, EventTranslation>).map(([languageCode, translation]) => ({
            languageCode,
            title: translation.title,
            description: translation.description,
            shortDescription: translation.shortDescription,
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
    return new NextResponse("Internal Server Error", { status: 500 })
  }
} 