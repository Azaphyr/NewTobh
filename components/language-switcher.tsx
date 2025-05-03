"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/client"
import type { Locale } from "@/lib/i18n/locales"
import Image from "next/image"

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation()

  const toggleLanguage = () => {
    const newLocale: Locale = locale === "en" ? "fr" : "en"
    setLocale(newLocale)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full overflow-hidden p-0 h-8 w-8 border"
      aria-label={`Switch to ${locale === "en" ? "French" : "English"}`}
    >
      <Image
        src={locale === "en" ? "/french-flag.jpg" : "/english-flag.png"}
        alt={locale === "en" ? "French Flag" : "English Flag"}
        width={32}
        height={32}
        className="object-cover"
      />
    </Button>
  )
}
