"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import type { Locale } from "@/lib/i18n/locales"

interface LanguageContextType {
  currentLanguage: Locale
  setLanguage: (language: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, initialLocale }: { children: ReactNode; initialLocale: Locale }) {
  const [currentLanguage, setCurrentLanguage] = useState<Locale>(initialLocale)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Get the stored language preference
    const storedLanguage = localStorage.getItem("selectedLanguage") as Locale | null

    if (storedLanguage && storedLanguage !== currentLanguage) {
      setCurrentLanguage(storedLanguage)
    }
  }, [currentLanguage])

  const setLanguage = (language: Locale) => {
    // Save to localStorage
    localStorage.setItem("selectedLanguage", language)

    // Set a cookie for the server-side middleware
    document.cookie = `selectedLanguage=${language}; path=/; max-age=${60 * 60 * 24 * 365}` // 1 year

    // Update state
    setCurrentLanguage(language)

    // Extract the path without the locale prefix
    let pathWithoutLocale = pathname
    for (const locale of ["en", "fr"]) {
      if (pathname.startsWith(`/${locale}`)) {
        pathWithoutLocale = pathname.substring(locale.length + 1) || "/"
        break
      }
    }

    // Ensure pathWithoutLocale starts with a slash
    if (!pathWithoutLocale.startsWith("/")) {
      pathWithoutLocale = `/${pathWithoutLocale}`
    }

    // Construct the new path with the selected locale
    const newPath = `/${language}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`

    // Navigate to the new path
    router.push(newPath)
  }

  return <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
