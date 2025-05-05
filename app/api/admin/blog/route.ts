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

    const searchParams = new URL(request.url).searchParams
    const includeTranslations = searchParams.get("includeTranslations") === "true"
    const languageCode = searchParams.get("languageCode") || "en"
    const search = searchParams.get("search") || undefined
    const path = new URL(request.url).pathname

    let whereClause: any = {
      isArchived: path.includes('/archived')
    }

    // Add search functionality
    if (search) {
      whereClause.translations = {
        some: {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
            { content: { contains: search, mode: "insensitive" } },
          ],
        },
      }
    }

    const blogPosts = await prisma.blogPost.findMany({
      where: whereClause,
      orderBy: {
        publishedAt: "desc",
      },
      include: {
        translations: includeTranslations,
      },
    })

    return NextResponse.json(blogPosts)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
} 