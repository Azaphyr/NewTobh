import type { ReactNode } from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import AdminSidebar from "@/components/admin/sidebar"

export default async function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  console.log("Admin Layout - Checking session...")
  const session = await getServerSession(authOptions)
  console.log("Admin Layout - Session:", session)

  if (!session) {
    console.log("Admin Layout - No session, redirecting to /login")
    redirect("/login")
  }

  console.log("Admin Layout - Session valid, rendering admin content")
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  )
}
