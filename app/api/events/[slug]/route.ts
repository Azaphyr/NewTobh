import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { getLocale } from "@/lib/i18n/locales"

// GET a single event by slug
export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params
    const searchParams = request.nextUrl.searchParams
    const locale = getLocale(searchParams.get("locale") || undefined)

    const event = await prisma.event.findUnique({
      where: { slug },
      include: {
        translations: {
          where: {
            languageCode: locale,
          },
        },
      },
    })

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 })
    }

    // If no translation found in requested locale, get the default locale translation
    if (event.translations.length === 0) {
      const defaultTranslation = await prisma.eventTranslation.findFirst({
        where: {
          eventId: event.id,
          language: {
            isDefault: true,
          },
        },
      })

      if (defaultTranslation) {
        event.translations = [defaultTranslation]
      }
    }

    return NextResponse.json(event)
  } catch (error) {
    console.error("Error fetching event:", error)
    return NextResponse.json({ error: "Failed to fetch event" }, { status: 500 })
  }
}

// PUT to update an event (admin only)
export async function PUT(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { slug } = params
    const body = await request.json()
    const {
      newSlug,
      imageUrl,
      eventDate,
      eventEndDate,
      location,
      address,
      capacity,
      spotsLeft,
      price,
      priceMembers,
      eventType,
      translations,
    } = body

    // Check if event exists
    const event = await prisma.event.findUnique({
      where: { slug },
    })

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 })
    }

    // Check if new slug is already in use (if changing slug)
    if (newSlug && newSlug !== slug) {
      const existingEvent = await prisma.event.findUnique({
        where: { slug: newSlug },
      })

      if (existingEvent) {
        return NextResponse.json({ error: "New slug is already in use" }, { status: 400 })
      }
    }

    // Update event
    const updatedEvent = await prisma.event.update({
      where: { slug },
      data: {
        slug: newSlug || slug,
        imageUrl,
        eventDate: eventDate ? new Date(eventDate) : undefined,
        eventEndDate: eventEndDate ? new Date(eventEndDate) : undefined,
        location,
        address,
        capacity,
        spotsLeft,
        price,
        priceMembers,
        eventType,
        updatedAt: new Date(),
      },
    })

    // Update translations if provided
    if (translations && translations.length > 0) {
      for (const translation of translations) {
        await prisma.eventTranslation.upsert({
          where: {
            eventId_languageCode: {
              eventId: event.id,
              languageCode: translation.languageCode,
            },
          },
          update: {
            title: translation.title,
            description: translation.description,
            longDescription: translation.longDescription,
            requirements: translation.requirements,
            additionalInfo: translation.additionalInfo,
            instructorName: translation.instructorName,
            instructorBio: translation.instructorBio,
          },
          create: {
            eventId: event.id,
            languageCode: translation.languageCode,
            title: translation.title,
            description: translation.description,
            longDescription: translation.longDescription,
            requirements: translation.requirements,
            additionalInfo: translation.additionalInfo,
            instructorName: translation.instructorName,
            instructorBio: translation.instructorBio,
          },
        })
      }
    }

    // Get updated event with translations
    const eventWithTranslations = await prisma.event.findUnique({
      where: { id: event.id },
      include: {
        translations: true,
      },
    })

    return NextResponse.json(eventWithTranslations)
  } catch (error) {
    console.error("Error updating event:", error)
    return NextResponse.json({ error: "Failed to update event" }, { status: 500 })
  }
}

// DELETE an event (admin only)
export async function DELETE(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { slug } = params

    // Check if event exists
    const event = await prisma.event.findUnique({
      where: { slug },
    })

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 })
    }

    // Delete event (this will cascade delete translations and registrations)
    await prisma.event.delete({
      where: { slug },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting event:", error)
    return NextResponse.json({ error: "Failed to delete event" }, { status: 500 })
  }
}
