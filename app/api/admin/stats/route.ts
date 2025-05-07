import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

interface Category {
  id: string
  slug: string
  nameEn: string
  nameFr: string
}

interface PostWithCategory {
  categoryId: string | null
  category: Category | null
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get total number of blog posts
    const totalPosts = await prisma.blogPost.count()

    // Get number of published posts
    const publishedPosts = await prisma.blogPost.count({
      where: { isPublished: true }
    })

    // Get number of featured posts
    const featuredPosts = await prisma.blogPost.count({
      where: { isFeatured: true }
    })

    // Get posts by category
    const postsByCategory = await prisma.blogPost.findMany({
      select: {
        categoryId: true,
        category: {
          select: {
            id: true,
            slug: true,
            nameEn: true,
            nameFr: true
          }
        }
      }
    })

    // Count posts per category
    const categoryCounts = postsByCategory.reduce((acc: Record<string, number>, post: PostWithCategory) => {
      if (post.categoryId) {
        const category = post.category
        if (category) {
          const key = category.slug
          acc[key] = (acc[key] || 0) + 1
        }
      }
      return acc
    }, {})

    // Get total number of categories
    const totalCategories = await prisma.category.count()

    return NextResponse.json({
      totalPosts,
      publishedPosts,
      featuredPosts,
      postsByCategory: categoryCounts,
      totalCategories
    })
  } catch (error) {
    console.error('Error updating stats:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 