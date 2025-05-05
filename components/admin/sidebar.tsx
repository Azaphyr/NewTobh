"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  FileText,
  Calendar,
  Users,
  Mail,
  UserPlus,
  LogOut,
  Dice1Icon as Dice,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Blog Posts",
    href: "/admin-blog",
    icon: FileText,
  },
  {
    name: "Events",
    href: "/admin/events",
    icon: Calendar,
  },
  {
    name: "Members",
    href: "/admin/members",
    icon: Users,
  },
  {
    name: "Contacts",
    href: "/admin/contacts",
    icon: Mail,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: UserPlus,
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-slate-blue text-white min-h-screen flex flex-col">
      <div className="p-4 border-b border-slate-700">
        <Link href="/admin" className="flex items-center gap-2">
          <Dice className="h-8 w-8 text-golden-amber" />
          <span className="font-serif text-xl font-bold">Admin Panel</span>
        </Link>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-slate-700 text-white"
                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white",
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-slate-700">
        <Button
          variant="ghost"
          className="w-full justify-start text-slate-300 hover:bg-slate-700/50 hover:text-white"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <LogOut className="h-5 w-5 mr-3" />
          <span>Log Out</span>
        </Button>
      </div>
    </div>
  )
}
