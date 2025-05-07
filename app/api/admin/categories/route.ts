import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// GET /api/admin/categories - Get all categories
export async function GET(request: Request) {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        nameEn: 'asc'
      }
    })

    return NextResponse.json(categories)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

// POST /api/admin/categories - Create a new category
export async function POST(request: Request) {
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

    // Check if slug already exists
    const existingCategory = await prisma.category.findUnique({
      where: { slug }
    })

    if (existingCategory) {
      return new NextResponse("Category with this slug already exists", { status: 400 })
    }

    const category = await prisma.category.create({
      data: {
        slug,
        nameEn,
        nameFr
      }
    })

    return NextResponse.json(category)
  } catch (error) {
    console.error('Error creating category:', error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
} 