import { prisma } from "@/lib/prisma"
import type { Locale } from "./locales"

export const getTranslatedContent = async (
  table: "event_translations" | "blog_post_translations",
  id: number,
  locale: Locale,
) => {
  const defaultLang = await prisma.language.findFirst({
    where: { isDefault: true },
    select: { code: true },
  })

  const fallbackLocale = defaultLang?.code as Locale | undefined

  const fetchTranslation = async (lang: Locale) => {
    if (table === "event_translations") {
      return prisma.eventTranslation.findFirst({
        where: {
          eventId: id.toString(),
          languageCode: lang,
        },
      })
    } else {
      return prisma.blogPostTranslation.findFirst({
        where: {
          blogPostId: id.toString(),
          languageCode: lang,
        },
      })
    }
  }

  const translation = await fetchTranslation(locale)

  if (!translation && fallbackLocale && locale !== fallbackLocale) {
    return fetchTranslation(fallbackLocale)
  }

  return translation
}
