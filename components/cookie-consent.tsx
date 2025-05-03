"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n/client"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, locale } = useTranslation()

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t p-4 shadow-lg">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p>
            {t("cookies.message")}{" "}
            <Link href={`/${locale}/privacy`} className="text-brick-red hover:underline">
              {t("cookies.learnMore")}
            </Link>
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            {t("cookies.decline")}
          </Button>
          <Button className="bg-brick-red hover:bg-brick-red/90" size="sm" onClick={handleAccept}>
            {t("cookies.accept")}
          </Button>
        </div>
      </div>
    </div>
  )
}
