"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n/client"

export default function AccessibilityPage() {
  const { t, locale } = useTranslation()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/70 z-10" />
        <Image
          src="/placeholder.svg?height=300&width=1600"
          alt={t("accessibility.heroAlt")}
          width={1600}
          height={300}
          className="w-full h-[200px] md:h-[300px] object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[200px] md:h-[300px] text-center text-white">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t("accessibility.title")}</h1>
          <p className="text-lg max-w-2xl">{t("accessibility.description")}</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="border-b py-2">
        <div className="container">
          <div className="flex text-sm text-muted-foreground">
            <Link href={`/${locale}`} className="hover:text-purple-800">
              {t("nav.home")}
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-foreground">{t("footer.accessibility")}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="prose prose-stone max-w-none">
            <p className="lead">{t("accessibility.lastUpdated")}</p>

            <p>{t("accessibility.commitment")}</p>

            <h2>{t("accessibility.conformanceStatus.title")}</h2>

            <p>{t("accessibility.conformanceStatus.description")}</p>

            <p>{t("accessibility.conformanceStatus.ongoing")}</p>

            <h2>{t("accessibility.features.title")}</h2>

            <p>{t("accessibility.features.intro")}</p>

            <ul>
              <li>{t("accessibility.features.semantic")}</li>
              <li>{t("accessibility.features.keyboard")}</li>
              <li>{t("accessibility.features.contrast")}</li>
              <li>{t("accessibility.features.textResize")}</li>
              <li>{t("accessibility.features.altText")}</li>
              <li>{t("accessibility.features.aria")}</li>
              <li>{t("accessibility.features.responsive")}</li>
            </ul>

            <h2>{t("accessibility.physical.title")}</h2>

            <p>{t("accessibility.physical.intro")}</p>

            <ul>
              <li>{t("accessibility.physical.venues")}</li>
              <li>{t("accessibility.physical.info")}</li>
              <li>{t("accessibility.physical.serviceAnimals")}</li>
              <li>{t("accessibility.physical.seating")}</li>
              <li>{t("accessibility.physical.accommodations")}</li>
            </ul>

            <h2>{t("accessibility.feedback.title")}</h2>

            <p>{t("accessibility.feedback.intro")}</p>

            <address>
              {t("accessibility.feedback.email")}
              <br />
              {t("accessibility.feedback.phone")}
            </address>

            <p>{t("accessibility.feedback.response")}</p>

            <h2>{t("accessibility.financial.title")}</h2>

            <p>{t("accessibility.financial.intro")}</p>

            <ul>
              <li>{t("accessibility.financial.reducedFees")}</li>
              <li>{t("accessibility.financial.scholarships")}</li>
              <li>{t("accessibility.financial.freeEvents")}</li>
              <li>{t("accessibility.financial.paymentPlans")}</li>
            </ul>

            <p>
              {t("accessibility.financial.contact")}{" "}
              <Link href={`/${locale}/contact`} className="text-brick-red hover:underline">
                info@dndasbl.org
              </Link>
              .
            </p>

            <h2>{t("accessibility.improvement.title")}</h2>

            <p>{t("accessibility.improvement.intro")}</p>

            <ul>
              <li>{t("accessibility.improvement.audits")}</li>
              <li>{t("accessibility.improvement.training")}</li>
              <li>{t("accessibility.improvement.consultation")}</li>
              <li>{t("accessibility.improvement.technology")}</li>
            </ul>

            <p>{t("accessibility.improvement.review")}</p>
          </div>
        </div>
      </section>
    </div>
  )
} 