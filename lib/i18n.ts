import { prisma } from "@/lib/prisma"
import { cache } from "react"

export type Locale = "en" | "fr"
export const defaultLocale: Locale = "fr" // Changed from "en" to "fr"
export const locales: Locale[] = ["en", "fr"]

export const getLocale = (locale?: string): Locale => {
  if (!locale) return defaultLocale
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale
}

export const getDictionary = cache(async (locale: Locale) => {
  // This would typically load translations from a file or database
  // For now, we'll use a simple object
  const dictionaries = {
    en: {
      common: {
        home: "Home",
        about: "About",
        events: "Events",
        membership: "Membership",
        blog: "Blog",
        contact: "Contact",
        joinUs: "Join Us",
        languageSelection: "Language Selection",
        selectLanguage: "Please select your preferred language",
        continue: "Continue",
      },
      admin: {
        dashboard: "Dashboard",
        events: "Events",
        blog: "Blog Posts",
        members: "Members",
        contacts: "Contact Submissions",
        settings: "Settings",
        logout: "Log Out",
      },
    },
    fr: {
      common: {
        home: "Accueil",
        about: "À propos",
        events: "Événements",
        membership: "Adhésion",
        blog: "Blog",
        contact: "Contact",
        joinUs: "Rejoignez-nous",
        languageSelection: "Sélection de la langue",
        selectLanguage: "Veuillez sélectionner votre langue préférée",
        continue: "Continuer",
      },
      admin: {
        dashboard: "Tableau de bord",
        events: "Événements",
        blog: "Articles de blog",
        members: "Membres",
        contacts: "Soumissions de contact",
        settings: "Paramètres",
        logout: "Déconnexion",
      },
    },
  }

  return dictionaries[locale]
})

export const getTranslatedContent = async (
  table: "event_translations" | "blog_post_translations",
  id: number,
  locale: Locale,
) => {
  const defaultLocale = await prisma.language.findFirst({
    where: { isDefault: true },
    select: { code: true },
  })

  if (table === "event_translations") {
    // First try to get the translation in the requested locale
    const translation = await prisma.eventTranslation.findFirst({
      where: {
        eventId: id,
        languageCode: locale,
      },
    })

    // If not found, fall back to the default locale
    if (!translation && defaultLocale && locale !== defaultLocale.code) {
      return prisma.eventTranslation.findFirst({
        where: {
          eventId: id,
          languageCode: defaultLocale.code,
        },
      })
    }

    return translation
  } else {
    // First try to get the translation in the requested locale
    const translation = await prisma.blogPostTranslation.findFirst({
      where: {
        blogPostId: id,
        languageCode: locale,
      },
    })

    // If not found, fall back to the default locale
    if (!translation && defaultLocale && locale !== defaultLocale.code) {
      return prisma.blogPostTranslation.findFirst({
        where: {
          blogPostId: id,
          languageCode: defaultLocale.code,
        },
      })
    }

    return translation
  }
}
