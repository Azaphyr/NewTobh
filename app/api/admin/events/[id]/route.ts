import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import formidable from "formidable"
import { promises as fs } from "fs"
import { listImagesInFolder, uploadImageToFolder } from "@/lib/services/cloudinaryService"
import { UploadApiResponse } from "cloudinary"

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { params } = context;
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const event = await prisma.event.findUnique({
      where: { id: params.id },
      include: {
        translations: true,
      },
    })

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 })
    }

    return NextResponse.json(event)
  } catch (error) {
    console.error("Error fetching event:", error)
    return NextResponse.json(
      { error: "Failed to fetch event" },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  const { params } = context;
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const {
      slug,
      eventType,
      eventDate,
      eventEndDate,
      location,
      address,
      capacity,
      price,
      priceMembers,
      pricePremium,
      translations,
    } = body

    // Validate required fields
    if (!slug || !eventType || !eventDate || !location || !capacity) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check if event exists
    const existingEvent = await prisma.event.findUnique({
      where: { id: params.id },
    })

    if (!existingEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 })
    }

    // Update the event
    const updatedEvent = await prisma.event.update({
      where: { id: params.id },
      data: {
        slug,
        eventType,
        eventDate: new Date(eventDate),
        eventEndDate: eventEndDate ? new Date(eventEndDate) : null,
        location,
        address,
        capacity: Number(capacity),
        price: price ? Number(price) : null,
        priceMembers: priceMembers ? Number(priceMembers) : null,
        pricePremium: pricePremium ? Number(pricePremium) : null,
        translations: {
          deleteMany: {},
          create: translations.map((translation: any) => ({
            languageCode: translation.languageCode,
            title: translation.title,
            description: translation.description,
            longDescription: translation.longDescription,
            requirements: translation.requirements,
            additionalInfo: translation.additionalInfo,
            instructorName: translation.instructorName,
            instructorBio: translation.instructorBio,
          })),
        },
      },
      include: {
        translations: true,
      },
    })

    return NextResponse.json(updatedEvent)
  } catch (error) {
    console.error("Error updating event:", error)
    return NextResponse.json(
      { error: "Failed to update event" },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: Request,
  context: { params: { id: string } }
) {
  const { params } = context;
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await request.json()
    const { isArchived } = body

    if (typeof isArchived !== "boolean") {
      return new NextResponse("Invalid isArchived value", { status: 400 })
    }

    const event = await prisma.event.update({
      where: {
        id: params.id
      },
      data: {
        isArchived
      }
    })

    return NextResponse.json(event)
  } catch (error) {
    console.error("[EVENT_PATCH]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const { params } = context;
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const event = await prisma.event.delete({
      where: {
        id: params.id
      }
    })

    return NextResponse.json(event)
  } catch (error) {
    console.error("[EVENT_DELETE]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 