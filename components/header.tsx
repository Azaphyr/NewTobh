"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Dice1Icon as Dice, Facebook, Twitter, Instagram, DiscIcon as Discord } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { LanguageSwitcher } from "./language-switcher"
import { useTranslation } from "@/lib/i18n/client"

export default function Header() {
  const pathname = usePathname()
  const isMobile = useMobile() || false
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { t, locale } = useTranslation()

  // Define routes with translations
  const routes = [
    { href: `/${locale}`, label: t("nav.home") },
    { href: `/${locale}/about`, label: t("nav.about") },
    { href: `/${locale}/events`, label: t("nav.events") },
    { href: `/${locale}/membership`, label: t("nav.membership") },
    { href: `/${locale}/blog`, label: t("nav.blog") },
    { href: `/${locale}/contact`, label: t("nav.contact") },
  ]

  // Helper function to check if a route is active
  const isActiveRoute = (routeHref: string) => {
    if (routeHref === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }
    return pathname === routeHref || pathname?.startsWith(`${routeHref}/`)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background",
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Dice className="h-8 w-8 text-brick-red" />
          <span className="font-serif text-2xl font-bold tracking-tight">Tales of Bruss'hell</span>
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-brick-red",
                      isActiveRoute(route.href) ? "text-brick-red font-bold" : "text-foreground/70",
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="flex gap-4 mt-4">
                  <Button size="sm" className="bg-brick-red hover:bg-brick-red/90">
                    {t("nav.joinUs")}
                  </Button>
                </div>
                <div className="flex gap-4 mt-4">
                  <LanguageSwitcher />
                </div>
                <div className="flex gap-4 mt-8">
                  <Link href="#" className="text-muted-foreground hover:text-brick-red">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-brick-red">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-brick-red">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-brick-red">
                    <Discord className="h-5 w-5" />
                    <span className="sr-only">Discord</span>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brick-red",
                  isActiveRoute(route.href) ? "text-brick-red font-bold" : "text-foreground/70",
                )}
              >
                {route.label}
              </Link>
            ))}
            <Button size="sm" className="bg-brick-red hover:bg-brick-red/90">
              {t("nav.joinUs")}
            </Button>
            <LanguageSwitcher />
          </nav>
        )}
      </div>
    </header>
  )
}
