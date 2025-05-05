import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const isRead = searchParams.get("isRead")

    const where = isRead ? { isRead: isRead === "true" } : {}

    const submissions = await prisma.contactSubmission.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json({ submissions })
  } catch (error) {
    console.error("Error fetching contact submissions:", error)
    return NextResponse.json({ error: "Failed to fetch contact submissions" }, { status: 500 })
  }
}
