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
    const { status } = body

    if (!["pending", "approved", "rejected"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 })
    }

    const application = await prisma.membershipApplication.update({
      where: { id: params.id },
      data: { status, updatedAt: new Date() },
    })

    return NextResponse.json(application)
  } catch (error) {
    console.error("Error updating membership application:", error)
    return NextResponse.json({ error: "Failed to update membership application" }, { status: 500 })
  }
}
