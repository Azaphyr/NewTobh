import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { isRead } = body

    if (typeof isRead !== "boolean") {
      return NextResponse.json({ error: "Invalid isRead value" }, { status: 400 })
    }

    const submission = await prisma.contactSubmission.update({
      where: { id: params.id },
      data: { isRead },
    })

    return NextResponse.json(submission)
  } catch (error) {
    console.error("Error updating contact submission:", error)
    return NextResponse.json({ error: "Failed to update contact submission" }, { status: 500 })
  }
}
