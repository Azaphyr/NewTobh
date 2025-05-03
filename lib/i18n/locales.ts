export type Locale = "en" | "fr"

export const defaultLocale: Locale = "fr"
export const locales: Locale[] = ["en", "fr"]

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getLocale(locale?: string): Locale {
  if (!locale) return defaultLocale
  return isValidLocale(locale) ? locale : defaultLocale
}

export function getLocaleFromPath(path: string): Locale {
  const segments = path.split("/").filter(Boolean)
  const potentialLocale = segments[0]
  return getLocale(potentialLocale)
}

export function addLocaleToPath(path: string, locale: Locale): string {
  const segments = path.split("/").filter(Boolean)
  if (isValidLocale(segments[0])) {
    return path // Path already has a locale
  }
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`
}
