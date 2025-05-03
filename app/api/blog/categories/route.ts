import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    // Get all unique categories from blog posts
    const categories = await prisma.blogPost.findMany({
      where: {
        isPublished: true,
      },
      select: {
        category: true,
      },
      distinct: ["category"],
    })

    // Extract and sort categories
    const categoryList = categories
      .map((item) => item.category)
      .filter(Boolean)
      .sort()

    return NextResponse.json({ categories: categoryList })
  } catch (error) {
    console.error("Error fetching blog categories:", error)
    return NextResponse.json({ error: "Failed to fetch blog categories" }, { status: 500 })
  }
}
