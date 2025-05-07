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
      whereClause.mainCategoryId = category
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
        mainCategoryId: true,
        subCategoryIds: true,
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

    // Fetch categories for all posts
    const postsWithCategories = await Promise.all(
      blogPosts.map(async (post) => {
        const mainCategory = post.mainCategoryId
          ? await prisma.category.findUnique({
              where: { id: post.mainCategoryId },
              select: {
                id: true,
                slug: true,
                nameEn: true,
                nameFr: true,
              },
            })
          : null;

        const subCategories = post.subCategoryIds.length > 0
          ? await prisma.category.findMany({
              where: { id: { in: post.subCategoryIds } },
              select: {
                id: true,
                slug: true,
                nameEn: true,
                nameFr: true,
              },
            })
          : [];

        return {
          ...post,
          mainCategory,
          subCategories,
        };
      })
    );

    // Return posts with pagination metadata
    return NextResponse.json({
      posts: postsWithCategories,
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
