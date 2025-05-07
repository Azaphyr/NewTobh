import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { getLocale } from "@/lib/i18n/locales"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = new URL(request.url).searchParams
    const includeTranslations = searchParams.get("includeTranslations") === "true"
    const publishedOnly = searchParams.get("publishedOnly") === "true"
    const featured = searchParams.get("featured") === "true"
    const languageCode = searchParams.get("languageCode") || "en"
    const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit") as string) : undefined
    const category = searchParams.get("category") || undefined
    const search = searchParams.get("search") || undefined

    // Pagination parameters
    const page = searchParams.get("page") ? Number.parseInt(searchParams.get("page") as string) : 1
    const pageSize = searchParams.get("pageSize") ? Number.parseInt(searchParams.get("pageSize") as string) : 10
    const skip = (page - 1) * pageSize

    const whereClause: any = {}
    if (publishedOnly) {
      whereClause.isPublished = true
    }
    if (category) {
      whereClause.category = category
    }
    if (featured) {
      whereClause.isFeatured = true
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

    // Count total matching posts for pagination
    const totalPosts = await prisma.blogPost.count({
      where: whereClause,
    })

    // Get paginated posts
    const blogPosts = await prisma.blogPost.findMany({
      where: whereClause,
      orderBy: {
        publishedAt: "desc",
      },
      skip: skip,
      take: pageSize,
      select: {
        id: true,
        slug: true,
        imageUrl: true,
        publishedAt: true,
        isPublished: true,
        readTime: true,
        category: true,
        tags: true,
        authorId: true,
        createdAt: true,
        updatedAt: true,
        isFeatured: true,
        translations: includeTranslations
          ? {
              where: {
                languageCode,
              },
              select: {
                id: true,
                blogPostId: true,
                languageCode: true,
                title: true,
                description: true,
                content: true,
                metaDescription: true,
                metaKeywords: true,
              },
            }
          : false,
      },
    })

    // Return posts with pagination metadata
    return NextResponse.json({
      posts: blogPosts,
      total: totalPosts,
      page: page,
      pageSize: pageSize,
      totalPages: Math.ceil(totalPosts / pageSize),
    })
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}
