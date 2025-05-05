import { type NextRequest, NextResponse } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { locales, defaultLocale, isValidLocale } from "@/lib/i18n/locales"

// Get the preferred locale from the request
function getLocale(request: NextRequest) {
  // Check if there's a selectedLanguage cookie
  const selectedLanguage = request.cookies.get("selectedLanguage")?.value
  if (selectedLanguage && isValidLocale(selectedLanguage)) {
    return selectedLanguage
  }

  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for static assets, API routes, and files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return NextResponse.next()

  // If we're at the root path, don't redirect (let the language selection modal handle it)
  if (pathname === "/") {
    return NextResponse.next()
  }

  // Redirect if there is no locale
  const locale = getLocale(request)
  const newUrl = new URL(`/${locale}${pathname}`, request.url)

  const response = NextResponse.redirect(newUrl)
  
  // Add a custom header to indicate if we're in the admin section
  const isAdminRoute = request.nextUrl.pathname.includes("/admin")
  response.headers.set("x-is-admin", isAdminRoute ? "true" : "false")
  
  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
