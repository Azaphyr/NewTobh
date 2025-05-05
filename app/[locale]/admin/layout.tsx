"use client"

import { useTranslation } from "@/lib/i18n/client"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSession } from "next-auth/react"
import { LogOut, User, Settings, Globe, LayoutDashboard, FileText, Calendar, Users, Mail, UserCog } from "lucide-react"
import { signOut } from "next-auth/react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { t, locale } = useTranslation()
  const router = useRouter()
  const pathname = usePathname()
  const { data: session } = useSession()

  const handleLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" })
  }

  const navItems = [
    {
      label: t("admin.nav.dashboard"),
      href: "/admin",
      icon: LayoutDashboard
    },
    {
      label: t("admin.nav.blog"),
      href: "/admin/blog",
      icon: FileText
    },
    {
      label: t("admin.nav.events"),
      href: "/admin/events",
      icon: Calendar
    },
    {
      label: t("admin.nav.members"),
      href: "/admin/members",
      icon: Users
    },
    {
      label: t("admin.nav.contacts"),
      href: "/admin/contact",
      icon: Mail
    },
    {
      label: t("admin.nav.users"),
      href: "/admin/users",
      icon: UserCog
    }
  ]

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-dark-mahogany to-brick-red border-b border-brick-red/20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end h-16">
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <Select value={locale} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-[100px] bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                </SelectContent>
              </Select>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-white/20">
                    <Avatar className="h-8 w-8 border-2 border-white/20">
                      <AvatarImage src={session?.user?.image || ""} alt={session?.user?.name || ""} />
                      <AvatarFallback className="bg-white/10 text-white">
                        {session?.user?.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{session?.user?.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {session?.user?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push("/admin/profile")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/admin/settings")}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar and Main Content */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-gradient-to-b from-dark-mahogany to-brick-red">
          <div className="flex h-16 items-center border-b border-brick-red/20 px-4">
            <h2 className="text-lg font-semibold text-white">{t("admin.nav.title")}</h2>
          </div>
          <nav className="space-y-1 p-4">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Button
                  key={item.href}
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start ${
                    isActive 
                      ? "bg-deep-teal text-white hover:bg-deep-teal/90" 
                      : "text-white/80 hover:bg-brick-red/50 hover:text-white"
                  }`}
                  onClick={() => router.push(item.href)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              )
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 pl-64">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 