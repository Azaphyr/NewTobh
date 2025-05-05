import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import LanguageModal from "@/components/language-modal"
import { getDictionary, type Locale } from "@/lib/i18n/dictionaries"
import { TranslationProvider } from "@/lib/i18n/client"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { defaultLocale, isValidLocale } from "@/lib/i18n/locales"

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolvedParams = await params
  const locale = (isValidLocale(resolvedParams.locale) ? resolvedParams.locale : defaultLocale) as Locale
  const dictionary = await getDictionary(locale)

  if (!dictionary?.common) {
    throw new Error(`Dictionary not found for locale: ${locale}`)
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <TranslationProvider initialLocale={locale}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
          <LanguageModal dictionary={dictionary.common} />
          <Toaster />
        </div>
      </TranslationProvider>
    </ThemeProvider>
  )
} 