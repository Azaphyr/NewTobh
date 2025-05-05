"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n/locales"
import LoadingAnimation from "@/components/LoadingAnimation"

export default function RootPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<Locale | null>(null)
  const [showLoading, setShowLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Always show loading animation for 8 seconds
    const timer = setTimeout(() => {
      setShowLoading(false)
      const storedLanguage = localStorage.getItem("selectedLanguage") as Locale | null
      if (storedLanguage) {
        router.push(`/${storedLanguage}`)
      } else {
        setIsOpen(true)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [router])

  const handleLanguageSelect = (language: Locale) => {
    setSelectedLanguage(language)
  }

  const handleContinue = () => {
    if (selectedLanguage) {
      // Save the selection to localStorage
      localStorage.setItem("selectedLanguage", selectedLanguage)

      // Set a cookie for the server-side middleware
      document.cookie = `selectedLanguage=${selectedLanguage}; path=/; max-age=${60 * 60 * 24 * 365}` // 1 year

      // Redirect to the home page with the selected language
      router.push(`/${selectedLanguage}`)
    }
  }

  if (showLoading) {
    return <LoadingAnimation />
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-100">
      <div className="text-center">
        <h1 className="font-serif text-4xl mb-4 text-brick-red">Tales of Bruss'hell</h1>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-serif text-2xl">
              Language Selection / Sélection de la langue
            </DialogTitle>
            <DialogDescription className="text-center">
              Please select your preferred language / Veuillez sélectionner votre langue préférée
            </DialogDescription>
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
                <Image src="/french-flag.jpg" alt="French Flag" width={90} height={60} className="object-cover" />
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
                <Image src="/english-flag.png" alt="English Flag" width={90} height={60} className="object-cover" />
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
              {selectedLanguage === "fr" ? "Continuer" : "Continue"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
