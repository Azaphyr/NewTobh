import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { hash } from "bcryptjs"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const users = await prisma.adminUser.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(users)
  } catch (error) {
    console.error("[USERS_GET]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  try {
    const data = await request.json()
    const { name, email, password } = data

    // Check if user already exists
    const existingUser = await prisma.adminUser.findUnique({
      where: { email },
    })

    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 })
    }

    // Hash password
    const passwordHash = await hash(password, 12)

    // Create user
    const user = await prisma.adminUser.create({
      data: {
        name,
        email,
        passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error("Error creating user:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
} 