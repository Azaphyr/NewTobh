"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n/locales"
import type { Dictionary } from "@/lib/i18n/dictionaries"
import { locales } from "@/lib/i18n/locales"

interface LanguageModalProps {
  dictionary: Dictionary['common']
}

export default function LanguageModal({ dictionary }: LanguageModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<Locale | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user has already selected a language
    const hasSelectedLanguage = localStorage.getItem("selectedLanguage")
    if (!hasSelectedLanguage) {
      setIsOpen(true)
    }
  }, [])

  useEffect(() => {
    // Set the selected language based on the current path
    const currentLocale = pathname.split('/')[1] as Locale
    if (locales.includes(currentLocale)) {
      setSelectedLanguage(currentLocale)
    }
  }, [pathname])

  const handleLanguageSelect = (language: Locale) => {
    setSelectedLanguage(language)
  }

  const handleContinue = () => {
    if (selectedLanguage) {
      // Save the selection to localStorage
      localStorage.setItem("selectedLanguage", selectedLanguage)

      // Redirect to the selected language path
      router.push(`/${selectedLanguage}`)

      setIsOpen(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center font-serif text-2xl">{dictionary.languageSelection}</DialogTitle>
          <DialogDescription className="text-center">{dictionary.selectLanguage}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-8 py-6">
          <div
            className={`flex flex-col items-center gap-2 cursor-pointer transition-all ${
              selectedLanguage === "fr" ? "scale-110 opacity-100" : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => handleLanguageSelect("fr")}
          >
            <div
              className={`border-2 rounded-md overflow-hidden ${selectedLanguage === "fr" ? "border-brick-red" : "border-transparent"}`}
            >
              <Image
                src="/french-flag.jpg"
                alt="French Flag"
                width={90}
                height={60}
                className="object-cover"
              />
            </div>
            <span className="font-medium">Français</span>
          </div>

          <div
            className={`flex flex-col items-center gap-2 cursor-pointer transition-all ${
              selectedLanguage === "en" ? "scale-110 opacity-100" : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => handleLanguageSelect("en")}
          >
            <div
              className={`border-2 rounded-md overflow-hidden ${selectedLanguage === "en" ? "border-brick-red" : "border-transparent"}`}
            >
              <Image
                src="/english-flag.png"
                alt="English Flag"
                width={90}
                height={60}
                className="object-cover"
              />
            </div>
            <span className="font-medium">English</span>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={handleContinue}
            disabled={!selectedLanguage}
            className="bg-brick-red hover:bg-brick-red/90 px-8"
          >
            {dictionary.continue}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
