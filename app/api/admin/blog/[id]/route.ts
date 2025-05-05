import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    const blogPost = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        translations: true,
      },
    })

    if (!blogPost) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    return NextResponse.json(blogPost)
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    const data = await request.json()
    const { translations, ...postData } = data

    // First, get the existing post to check current translations
    const existingPost = await prisma.blogPost.findUnique({
      where: { id },
      include: { translations: true },
    })

    if (!existingPost) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    // Update the blog post and its translations
    const updatedPost = await prisma.blogPost.update({
      where: { id },
      data: {
        slug: postData.slug,
        category: postData.category,
        isPublished: postData.isPublished,
        isFeatured: postData.isFeatured,
        readTime: postData.readTime,
        tags: postData.tags,
        translations: {
          upsert: translations.map((translation: any) => ({
            where: {
              blogPostId_languageCode: {
                blogPostId: id,
                languageCode: translation.languageCode,
              },
            },
            create: {
              languageCode: translation.languageCode,
              title: translation.title,
              description: translation.description,
              content: translation.content,
              metaDescription: translation.metaDescription,
              metaKeywords: translation.metaKeywords,
            },
            update: {
              title: translation.title,
              description: translation.description,
              content: translation.content,
              metaDescription: translation.metaDescription,
              metaKeywords: translation.metaKeywords,
            },
          })),
        },
      },
      include: {
        translations: true,
      },
    })

    return NextResponse.json(updatedPost)
  } catch (error) {
    console.error("Error updating blog post:", error)
    return NextResponse.json(
      { error: "Failed to update blog post" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    // Delete the blog post and its translations
    await prisma.blogPost.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await request.json()
    const { isArchived, isPublished, isFeatured } = body

    if (typeof isArchived !== "boolean" && typeof isPublished !== "boolean" && typeof isFeatured !== "boolean") {
      return new NextResponse("Invalid value", { status: 400 })
    }

    // First get the current post to check its status
    const currentPost = await prisma.blogPost.findUnique({
      where: { id: parseInt(params.id) }
    })

    if (!currentPost) {
      return new NextResponse("Blog post not found", { status: 404 })
    }

    // If setting as featured, first unfeature any other featured post
    if (isFeatured === true) {
      await prisma.blogPost.updateMany({
        where: {
          isFeatured: true,
          id: { not: parseInt(params.id) }
        },
        data: {
          isFeatured: false
        }
      })
    }

    const blogPost = await prisma.blogPost.update({
      where: {
        id: parseInt(params.id)
      },
      data: {
        ...(typeof isArchived === "boolean" && {
          isArchived,
          // When archiving, set isPublished to false
          // When unarchiving, restore the previous isPublished status
          isPublished: isArchived ? false : currentPost.isPublished
        }),
        ...(typeof isPublished === "boolean" && {
          isPublished,
          // If publishing, set publishedAt to now if not already set
          ...(isPublished && !currentPost.publishedAt && {
            publishedAt: new Date().toISOString()
          })
        }),
        ...(typeof isFeatured === "boolean" && {
          isFeatured
        })
      }
    })

    return NextResponse.json(blogPost)
  } catch (error) {
    console.error("[BLOG_PATCH]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 