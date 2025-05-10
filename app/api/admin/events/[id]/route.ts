import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import formidable from "formidable"
import { promises as fs } from "fs"
import { listImagesInFolder, uploadImageToFolder } from "@/lib/services/cloudinaryService"
import { UploadApiResponse } from "cloudinary"
import type { ExtendedSession } from "@/lib/auth"
import { logInfo, logError, logDebug, logWarn } from "@/lib/logger"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const eventId = params.id
    logInfo("Fetching event", { eventId })

    const event = await prisma.event.findUnique({
      where: { id: eventId },
      include: {
        translations: {
          include: {
            language: true
          }
        },
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    })

    if (!event) {
      logWarn("Event not found", { eventId })
      return NextResponse.json({ error: "Event not found" }, { status: 404 })
    }

    logInfo("Event found", { eventId })
    return NextResponse.json(event)
  } catch (error) {
    logError("Error fetching event", error instanceof Error ? error : new Error("Unknown error"))
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const eventId = params.id
    const data = await request.json()
    logInfo("Updating event", { eventId, data })

    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: {
        slug: data.slug,
        eventType: data.eventType,
        eventDate: data.eventDate,
        eventEndDate: data.eventEndDate,
        location: data.location,
        address: data.address,
        capacity: data.capacity,
        price: data.price,
        priceMembers: data.priceMembers,
        pricePremium: data.pricePremium,
        language: data.language,
        gameType: data.gameType,
        modifiedBy: (session as ExtendedSession).user?.name || null,
      },
      include: {
        translations: {
          include: {
            language: true
          }
        },
      },
    })

    // Update translations
    if (data.translations) {
      for (const translation of data.translations) {
        await prisma.eventTranslation.upsert({
          where: {
            id: translation.id || "",
          },
          create: {
            eventId: eventId,
            languageCode: translation.languageCode,
            title: translation.title,
            description: translation.description,
            longDescription: translation.longDescription,
            requirements: translation.requirements,
            additionalInfo: translation.additionalInfo,
            instructorName: translation.instructorName,
            instructorBio: translation.instructorBio,
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
        })
      }
    }

    logInfo("Event updated successfully", { eventId })
    return NextResponse.json(updatedEvent)
  } catch (error) {
    logError("Error updating event", error instanceof Error ? error : new Error("Unknown error"))
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    const {
      slug,
      eventDate,
      eventEndDate,
      location,
      address,
      capacity,
      price,
      priceMembers,
      pricePremium,
      eventType,
      translations,
      isArchived,
    } = data

    // Check if slug is already in use by another event
    if (slug) {
      const existingEvent = await prisma.event.findFirst({
        where: {
          slug,
          id: { not: params.id },
        },
      })
      if (existingEvent) {
        return NextResponse.json({ error: "Slug is already in use" }, { status: 400 })
      }
    }

    // Update event
    const event = await prisma.event.update({
      where: { id: params.id },
      data: {
        ...(slug && { slug }),
        ...(eventDate && { eventDate: new Date(eventDate) }),
        ...(eventEndDate && { eventEndDate: new Date(eventEndDate) }),
        ...(location && { location }),
        ...(address && { address }),
        ...(capacity && { capacity }),
        ...(price && { price }),
        ...(priceMembers && { priceMembers }),
        ...(pricePremium && { pricePremium }),
        ...(eventType && { eventType }),
        ...(typeof isArchived === "boolean" && { isArchived }),
        ...(translations && {
          translations: {
            deleteMany: {},
            create: translations.map((t: any) => ({
              languageCode: t.languageCode,
              title: t.title,
              description: t.description,
              shortDescription: t.shortDescription,
            })),
          },
        }),
      },
      include: {
        translations: true,
      },
    })

    return NextResponse.json(event)
  } catch (error) {
    console.error("Error updating event:", error)
    return NextResponse.json(
      { error: "Failed to update event" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const eventId = params.id
    logInfo("Deleting event", { eventId })

    // First delete all translations
    await prisma.eventTranslation.deleteMany({
      where: { eventId },
    })

    // Then delete the event
    await prisma.event.delete({
      where: { id: eventId },
    })

    logInfo("Event deleted successfully", { eventId })
    return NextResponse.json({ success: true })
  } catch (error) {
    logError("Error deleting event", error instanceof Error ? error : new Error("Unknown error"))
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 