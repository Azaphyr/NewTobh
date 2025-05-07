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

    // Get posts with their categories
    const posts = await prisma.blogPost.findMany({
      select: {
        mainCategoryId: true,
        subCategoryIds: true
      }
    })

    // Count posts per category (both main and subcategories)
    const categoryCounts: Record<string, number> = {}
    
    for (const post of posts) {
      // Count main category
      if (post.mainCategoryId) {
        const mainCategory = await prisma.category.findUnique({
          where: { id: post.mainCategoryId },
          select: {
            id: true,
            slug: true,
            nameEn: true,
            nameFr: true
          }
        })

        if (mainCategory) {
          const mainKey = mainCategory.slug
          categoryCounts[mainKey] = (categoryCounts[mainKey] || 0) + 1
        }
      }

      // Count subcategories
      if (post.subCategoryIds.length > 0) {
        const subCategories = await prisma.category.findMany({
          where: { id: { in: post.subCategoryIds } },
          select: {
            id: true,
            slug: true,
            nameEn: true,
            nameFr: true
          }
        })

        for (const category of subCategories) {
          const subKey = category.slug
          categoryCounts[subKey] = (categoryCounts[subKey] || 0) + 1
        }
      }
    }

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