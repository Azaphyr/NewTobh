import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  try {
    const id = parseInt(params.id)

    // Don't allow deleting the last admin user
    const totalUsers = await prisma.adminUser.count()
    if (totalUsers <= 1) {
      return new NextResponse("Cannot delete the last admin user", { status: 400 })
    }

    // Delete user
    await prisma.adminUser.delete({
      where: { id },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error("Error deleting user:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
} 