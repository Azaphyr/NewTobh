import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const blogPost = await prisma.blogPost.findUnique({
      where: { id: params.id },
      include: {
        translations: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        category: {
          select: {
            id: true,
            slug: true,
            nameEn: true,
            nameFr: true
          }
        }
      },
    })

    if (!blogPost) {
      return new NextResponse("Blog post not found", { status: 404 })
    }

    return NextResponse.json(blogPost)
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
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
      categoryId,
      tags, 
      isPublished, 
      isFeatured, 
      readTime, 
      translations 
    } = body

    if (!slug || !translations) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    // Check if slug is already in use by another post
    const existingPost = await prisma.blogPost.findFirst({
      where: {
        slug,
        id: { not: params.id }
      }
    })
    
    if (existingPost) {
      return new NextResponse("Slug is already in use", { status: 400 })
    }

    // Update blog post and its translations
    const blogPost = await prisma.blogPost.update({
      where: { id: params.id },
      data: {
        slug,
        publishedAt: isPublished ? new Date(publishDate) : null,
        categoryId,
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
        },
        category: {
          select: {
            id: true,
            slug: true,
            nameEn: true,
            nameFr: true
          }
        }
      },
    })

    return NextResponse.json(blogPost)
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