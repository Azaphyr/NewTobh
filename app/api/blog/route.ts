import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { getLocale } from "@/lib/i18n/locales"

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
      include: {
        translations: includeTranslations
          ? {
              where: {
                languageCode,
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

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    const { slug, imageUrl, isPublished, publishedAt, readTime, category, translations } = data

    // Check if slug already exists
    const existingPost = await prisma.blogPost.findUnique({
      where: {
        slug,
      },
    })

    if (existingPost) {
      return NextResponse.json({ error: "A blog post with this slug already exists" }, { status: 400 })
    }

    // Create blog post with translations
    const blogPost = await prisma.blogPost.create({
      data: {
        slug,
        imageUrl, // Include imageUrl in the creation
        isPublished,
        publishedAt: publishedAt ? new Date(publishedAt) : null,
        readTime,
        category,
        translations: {
          create: translations.map((translation: any) => ({
            languageCode: translation.languageCode,
            title: translation.title,
            description: translation.description,
            content: translation.content,
          })),
        },
      },
    })

    return NextResponse.json(blogPost)
  } catch (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 })
  }
}
