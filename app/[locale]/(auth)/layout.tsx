import type React from "react"
import { getDictionary, type Locale } from "@/lib/i18n/dictionaries"
import { TranslationProvider } from "@/lib/i18n/client"

export default async function AuthLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = params.locale as Locale
  const dictionary = await getDictionary(locale)

  return (
    <TranslationProvider initialLocale={locale}>
      <div className="flex min-h-screen items-center justify-center bg-stone-100">
        {children}
      </div>
    </TranslationProvider>
  )
} 