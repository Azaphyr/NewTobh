import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import { getDictionary, type Locale } from "@/lib/i18n/dictionaries"
import { TranslationProvider } from "@/lib/i18n/client"
import { defaultLocale, isValidLocale } from "@/lib/i18n/locales"
import LanguageModal from "@/components/language-modal"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolvedParams = await params
  const locale = (isValidLocale(resolvedParams.locale) ? resolvedParams.locale : defaultLocale) as Locale
  const dictionary = await getDictionary(locale)

  return (
    <TranslationProvider initialLocale={locale}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <LanguageModal dictionary={dictionary.common} />
      </div>
    </TranslationProvider>
  )
}
