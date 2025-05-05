import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { defaultLocale, isValidLocale } from "@/lib/i18n/locales"
import { TranslationProvider } from "@/lib/i18n/client"

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolvedParams = await params
  const locale = isValidLocale(resolvedParams.locale) ? resolvedParams.locale : defaultLocale

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TranslationProvider initialLocale={locale}>
            {children}
          </TranslationProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
