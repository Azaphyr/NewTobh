import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    const event = await prisma.event.findUnique({
      where: { id },
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
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    const data = await request.json()
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
    } = data

    // Validate required fields
    if (!slug || !eventType || !eventDate || !location || !capacity) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check if event exists
    const existingEvent = await prisma.event.findUnique({
      where: { id },
    })

    if (!existingEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 })
    }

    // Update event and its translations
    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        slug,
        eventType,
        eventDate: new Date(eventDate),
        eventEndDate: eventEndDate ? new Date(eventEndDate) : null,
        location,
        address,
        capacity,
        price: price ? parseFloat(price) : null,
        priceMembers: priceMembers ? parseFloat(priceMembers) : null,
        pricePremium: pricePremium ? parseFloat(pricePremium) : null,
        translations: {
          deleteMany: {},
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
  { params }: { params: { id: string } }
) {
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
        id: parseInt(params.id)
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
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const event = await prisma.event.delete({
      where: {
        id: parseInt(params.id)
      }
    })

    return NextResponse.json(event)
  } catch (error) {
    console.error("[EVENT_DELETE]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 