import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendEventRegistrationConfirmation } from "@/lib/email/email"

export async function POST(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params
    const body = await request.json()
    const { firstName, lastName, email, phone, isMember } = body

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Find the event
    const event = await prisma.event.findUnique({
      where: { slug },
      include: {
        translations: {
          where: {
            language: {
              isDefault: true,
            },
          },
        },
      },
    })

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 })
    }

    // Check if there are spots left
    if (event.spotsLeft !== null && event.spotsLeft <= 0) {
      return NextResponse.json({ error: "This event is fully booked" }, { status: 400 })
    }

    // Create registration
    const registration = await prisma.eventRegistration.create({
      data: {
        eventId: event.id,
        firstName,
        lastName,
        email,
        phone,
        isMember: !!isMember,
      },
    })

    // Update spots left
    if (event.spotsLeft !== null) {
      await prisma.event.update({
        where: { id: event.id },
        data: {
          spotsLeft: event.spotsLeft - 1,
        },
      })
    }

    // Send confirmation email
    const eventTitle = event.translations[0]?.title || "Upcoming Event"
    await sendEventRegistrationConfirmation(email, firstName, eventTitle, event.eventDate)

    return NextResponse.json({ success: true, id: registration.id })
  } catch (error) {
    console.error("Error processing event registration:", error)
    return NextResponse.json({ error: "Failed to process registration" }, { status: 500 })
  }
}
