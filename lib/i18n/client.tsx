"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"
import { type Locale, getLocaleFromPath, defaultLocale } from "./locales"

type TranslationContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  isLoading: boolean
}

// Initialize with empty dictionaries
const clientDictionaries: Record<Locale, Record<string, any>> = {
  en: {},
  fr: {},
}

// Load translations dynamically
const loadTranslations = async (locale: Locale) => {
  try {
    const translations = await import(`../../locales/${locale}.json`)
    clientDictionaries[locale] = translations.default
    return true
  } catch (error) {
    console.error(`Failed to load translations for ${locale}:`, error)
    return false
  }
}

const TranslationContext = createContext<TranslationContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key) => key,
  isLoading: true,
})

export const TranslationProvider = ({
  children,
  initialLocale = defaultLocale,
}: { children: ReactNode; initialLocale?: Locale }) => {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Load initial translations
  useEffect(() => {
    const loadInitialTranslations = async () => {
      const localeFromPath = getLocaleFromPath(pathname)
      const success = await loadTranslations(localeFromPath)
      if (success) {
        setLocaleState(localeFromPath)
        setIsLoading(false)
      }
    }
    loadInitialTranslations()
  }, [pathname])

  const setLocale = async (newLocale: Locale) => {
    if (newLocale === locale) return

    setIsLoading(true)
    const success = await loadTranslations(newLocale)
    
    if (success) {
      // Save to localStorage and cookie
      localStorage.setItem("selectedLanguage", newLocale)
      document.cookie = `selectedLanguage=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`

      // Update state
      setLocaleState(newLocale)

      // Navigate to the same page but with new locale
      const newPath = pathname.split("/").slice(2).join("/")
      router.push(`/${newLocale}/${newPath}`)
    }
    
    setIsLoading(false)
  }

  // Translation function
  const t = (key: string) => {
    if (isLoading) return key // Return key while loading

    const keys = key.split(".")
    let result = clientDictionaries[locale]

    for (const k of keys) {
      if (result && result[k]) {
        result = result[k]
      } else {
        return key // Fallback to key if translation not found
      }
    }

    return typeof result === 'string' ? result : key
  }

  return <TranslationContext.Provider value={{ locale, setLocale, t, isLoading }}>{children}</TranslationContext.Provider>
}

export const useTranslation = () => useContext(TranslationContext)
