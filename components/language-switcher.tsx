"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/client"
import type { Locale } from "@/lib/i18n/locales"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation()

  const languages = [
    {
      code: "en",
      label: "English",
      flag: "/english-flag.png",
    },
    {
      code: "fr",
      label: "Français",
      flag: "/french-flag.jpg",
    },
  ]

  const current = languages.find((l) => l.code === locale) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full overflow-hidden p-0 h-8 w-8 border"
          aria-label="Select language"
        >
          <Image
            src={current.flag}
            alt={current.label + " Flag"}
            width={32}
            height={32}
            className="object-cover"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLocale(lang.code as any)}
            className={
              locale === lang.code ? "font-bold bg-accent" : ""
            }
          >
            <Image
              src={lang.flag}
              alt={lang.label + " Flag"}
              width={24}
              height={24}
              className="object-cover rounded mr-2"
            />
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
