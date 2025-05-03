import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { getLocale } from "@/lib/i18n/locales"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params
    const searchParams = new URL(request.url).searchParams
    const includeTranslations = searchParams.get("includeTranslations") === "true"
    const languageCode = searchParams.get("languageCode") || "en"

    const blogPost = await prisma.blogPost.findUnique({
      where: {
        slug,
      },
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

    if (!blogPost) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    return NextResponse.json(blogPost)
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return NextResponse.json({ error: "Failed to fetch blog post" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { slug } = params
    const data = await request.json()
    const { imageUrl, isPublished, publishedAt, readTime, category, translations } = data

    // Check if blog post exists
    const existingPost = await prisma.blogPost.findUnique({
      where: {
        slug,
      },
    })

    if (!existingPost) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    // Update blog post
    const updatedPost = await prisma.blogPost.update({
      where: {
        slug,
      },
      data: {
        imageUrl, // Include imageUrl in the update
        isPublished,
        publishedAt: publishedAt ? new Date(publishedAt) : null,
        readTime,
        category,
      },
    })

    // Update translations
    for (const translation of translations) {
      await prisma.blogPostTranslation.upsert({
        where: {
          blogPostId_languageCode: {
            blogPostId: updatedPost.id,
            languageCode: translation.languageCode,
          },
        },
        update: {
          title: translation.title,
          description: translation.description,
          content: translation.content,
        },
        create: {
          blogPostId: updatedPost.id,
          languageCode: translation.languageCode,
          title: translation.title,
          description: translation.description,
          content: translation.content,
        },
      })
    }

    return NextResponse.json(updatedPost)
  } catch (error) {
    console.error("Error updating blog post:", error)
    return NextResponse.json({ error: "Failed to update blog post" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { slug } = params

    // Check if blog post exists
    const existingPost = await prisma.blogPost.findUnique({
      where: {
        slug,
      },
    })

    if (!existingPost) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    // Delete blog post (translations will be deleted via cascade)
    await prisma.blogPost.delete({
      where: {
        slug,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return NextResponse.json({ error: "Failed to delete blog post" }, { status: 500 })
  }
}
