import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    // Get all categories
    const categories = await prisma.category.findMany({
      orderBy: {
        nameEn: 'asc'
      }
    })

    return NextResponse.json({ categories })
  } catch (error) {
    console.error("Error fetching blog categories:", error)
    return NextResponse.json({ error: "Failed to fetch blog categories" }, { status: 500 })
  }
}