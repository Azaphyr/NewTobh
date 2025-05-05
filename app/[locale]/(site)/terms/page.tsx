"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n/client"

export default function TermsPage() {
  const { t, locale } = useTranslation()

  // For list sections, safely get arrays from the dictionary if needed
  const membershipList = (t("terms.membershipList") as unknown) as string[]
  const eventsList = (t("terms.eventsList") as unknown) as string[]
  const codeOfConductList = (t("terms.codeOfConductList") as unknown) as string[]
  const liabilityList = (t("terms.liabilityList") as unknown) as string[]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-mahogany/90 via-slate-900/90 to-dark-mahogany/95 z-10" />
        <Image
          src="/backDnd.jpg?height=300&width=1600"
          alt={t("terms.heroAlt")}
          width={1600}
          height={300}
          className="w-full h-[200px] md:h-[300px] object-cover opacity-40"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[200px] md:h-[300px] text-center text-white">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-golden-amber drop-shadow-lg">{t("terms.title")}</h1>
          <p className="text-lg max-w-2xl text-white/90">{t("terms.description")}</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="border-b border-brick-red/30 py-2 bg-dark-mahogany/80">
        <div className="container">
          <div className="flex text-sm text-muted-foreground">
            <Link href={`/${locale}`} className="hover:text-brick-red text-golden-amber">{t("nav.home")}</Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-foreground">{t("footer.terms")}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-stone-100 dark:bg-dark-mahogany/80">
        <div className="container max-w-4xl">
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p className="lead text-brick-red font-semibold">{t("terms.lastUpdated")}</p>

            <p>{t("terms.intro1")}</p>
            <p>{t("terms.intro2")}</p>
            <p>{t("terms.intro3")}</p>

            <h2 className="text-brick-red">{t("terms.membership")}</h2>
            <p>{t("terms.membershipIntro")}</p>
            <ul>
              {Array.isArray(membershipList) && membershipList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>

            <h2 className="text-brick-red">{t("terms.events")}</h2>
            <p>{t("terms.eventsIntro")}</p>
            <ul>
              {Array.isArray(eventsList) && eventsList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>

            <h2 className="text-brick-red">{t("terms.codeOfConduct")}</h2>
            <p>{t("terms.codeOfConductIntro")}</p>
            <ul>
              {Array.isArray(codeOfConductList) && codeOfConductList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <p>{t("terms.codeOfConductViolation")}</p>

            <h2 className="text-brick-red">{t("terms.intellectualProperty")}</h2>
            <p>{t("terms.intellectualProperty1")}</p>
            <p>{t("terms.intellectualProperty2")}</p>

            <h2 className="text-brick-red">{t("terms.userContent")}</h2>
            <p>{t("terms.userContent1")}</p>
            <p>{t("terms.userContent2")}</p>

            <h2 className="text-brick-red">{t("terms.liability")}</h2>
            <p>{t("terms.liability1")}</p>
            <ul>
              {Array.isArray(liabilityList) && liabilityList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>

            <h2 className="text-brick-red">{t("terms.governingLaw")}</h2>
            <p>{t("terms.governingLaw1")}</p>
            <p>{t("terms.governingLaw2")}</p>

            <h2 className="text-brick-red">{t("terms.changes")}</h2>
            <p>{t("terms.changes1")}</p>
            <p>{t("terms.changes2")}</p>

            <h2 className="text-brick-red">{t("terms.contact")}</h2>

            <div className="mt-8 p-6 rounded-xl bg-white/80 dark:bg-dark-mahogany/80 border border-brick-red/30 shadow-md">
              <p className="font-semibold text-brick-red mb-2">{t("terms.contactInfo.contactText")}</p>
              <address className="not-italic text-base">
                <span className="block font-bold text-golden-amber">{t("terms.contactInfo.org")}</span>
                {t("terms.contactInfo.address")}<br />
                {t("terms.contactInfo.city")}<br />
                <span className="block mt-2">Email: <a href={`mailto:${t("terms.contactInfo.email")}`} className="text-brick-red hover:underline">{t("terms.contactInfo.email")}</a></span>
                <span className="block">Phone: <a href={`tel:${t("terms.contactInfo.phone")}`} className="text-brick-red hover:underline">{t("terms.contactInfo.phone")}</a></span>
              </address>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}