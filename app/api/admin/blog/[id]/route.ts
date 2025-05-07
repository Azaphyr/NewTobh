import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import type { Category } from "@/src/app/generated/prisma"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Ensure params is properly typed and awaited
    const id = (await params).id

    const blogPost = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        translations: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })

    if (!blogPost) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    // Fetch main category if it exists
    let mainCategory: Category | null = null
    if (blogPost.mainCategoryId) {
      mainCategory = await prisma.category.findUnique({
        where: { id: blogPost.mainCategoryId },
        select: {
          id: true,
          slug: true,
          nameEn: true,
          nameFr: true,
          createdAt: true,
          updatedAt: true
        }
      })
    }

    // Fetch subcategories if they exist
    let subCategories: Category[] = []
    if (blogPost.subCategoryIds?.length > 0) {
      subCategories = await prisma.category.findMany({
        where: { id: { in: blogPost.subCategoryIds } },
        select: {
          id: true,
          slug: true,
          nameEn: true,
          nameFr: true,
          createdAt: true,
          updatedAt: true
        }
      })
    }

    return NextResponse.json({
      ...blogPost,
      mainCategory,
      subCategories
    })
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return NextResponse.json({ error: "Failed to fetch blog post" }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await request.json()
    const { 
      slug, 
      publishDate, 
      mainCategoryId,
      subCategoryIds,
      tags, 
      isPublished, 
      isFeatured, 
      readTime, 
      translations 
    } = body

    if (!slug || !translations) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    const id = (await params).id

    // Check if slug is already in use by another post
    const existingPost = await prisma.blogPost.findFirst({
      where: {
        slug,
        id: { not: id }
      }
    })
    
    if (existingPost) {
      return new NextResponse("Slug is already in use", { status: 400 })
    }

    // Update blog post and its translations
    const blogPost = await prisma.blogPost.update({
      where: { id },
      data: {
        slug,
        publishedAt: isPublished ? new Date(publishDate) : null,
        mainCategoryId,
        subCategoryIds: subCategoryIds || [],
        tags: tags || [],
        isPublished: isPublished || false,
        isFeatured: isFeatured || false,
        readTime: readTime || null,
        translations: {
          deleteMany: {},
          create: translations.map((t: any) => ({
            languageCode: t.languageCode,
            title: t.title,
            description: t.description,
            content: t.content,
            metaDescription: t.metaDescription,
            metaKeywords: t.metaKeywords,
          })),
        },
      },
      include: {
        translations: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
    })

    // Fetch main category if it exists
    let mainCategory: Category | null = null
    if (blogPost.mainCategoryId) {
      mainCategory = await prisma.category.findUnique({
        where: { id: blogPost.mainCategoryId },
        select: {
          id: true,
          slug: true,
          nameEn: true,
          nameFr: true,
          createdAt: true,
          updatedAt: true
        }
      })
    }

    // Fetch subcategories if they exist
    let subCategories: Category[] = []
    if (blogPost.subCategoryIds.length > 0) {
      subCategories = await prisma.category.findMany({
        where: { id: { in: blogPost.subCategoryIds } },
        select: {
          id: true,
          slug: true,
          nameEn: true,
          nameFr: true,
          createdAt: true,
          updatedAt: true
        }
      })
    }

    return NextResponse.json({
      ...blogPost,
      mainCategory,
      subCategories
    })
  } catch (error) {
    console.error("Error updating blog post:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    // Delete translations first
    await prisma.blogPostTranslation.deleteMany({
      where: { blogPostId: params.id }
    })

    // Then delete the blog post
    await prisma.blogPost.delete({
      where: { id: params.id }
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
} 