import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// GET /api/admin/categories/[id] - Get a single category
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const category = await prisma.category.findUnique({
      where: { id: params.id }
    })

    if (!category) {
      return new NextResponse("Category not found", { status: 404 })
    }

    return NextResponse.json(category)
  } catch (error) {
    console.error('Error fetching category:', error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

// PUT /api/admin/categories/[id] - Update a category
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
    const { slug, nameEn, nameFr } = body

    if (!slug || !nameEn || !nameFr) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    // Check if slug already exists for other categories
    const existingCategory = await prisma.category.findFirst({
      where: {
        slug,
        NOT: {
          id: params.id
        }
      }
    })

    if (existingCategory) {
      return new NextResponse("Category with this slug already exists", { status: 400 })
    }

    const category = await prisma.category.update({
      where: { id: params.id },
      data: {
        slug,
        nameEn,
        nameFr
      }
    })

    return NextResponse.json(category)
  } catch (error) {
    console.error('Error updating category:', error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

// DELETE /api/admin/categories/[id] - Delete a category
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    // Check if category has any blog posts
    const postsCount = await prisma.blogPost.count({
      where: { categoryId: params.id }
    })

    if (postsCount > 0) {
      return new NextResponse(
        "Cannot delete category with associated blog posts. Please reassign or delete the posts first.",
        { status: 400 }
      )
    }

    await prisma.category.delete({
      where: { id: params.id }
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error('Error deleting category:', error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
} 