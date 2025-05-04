"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, DiscIcon as Discord } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useTranslation } from "@/lib/i18n/client"
export default function ContactPage() {
  const searchParams = useSearchParams()
  const subjectParam = searchParams.get("subject")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: subjectParam || "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useTranslation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-mahogany/90 to-brick-red/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          alt="Tales of Bruss'hell community"
          width={1600}
          height={400}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[300px] md:h-[400px] text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{t("contact.description")}</p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">{t("contact.form.title")}</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">{t("contact.form.isSubmittedThanks")}</h3>
                  <p className="text-green-700 mb-4">
                    {t("contact.form.isSubmittedMessage")}
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-green-600 hover:bg-green-700">
                    {t("contact.form.isSubmittedButton")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {t("contact.form.labelName")} <span className="text-red-500">*</span>
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t("contact.form.labelEmail")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      {t("contact.form.labelSubject")} <span className="text-red-500">*</span>
                    </label>
                    <Select value={formData.subject} onValueChange={handleSelectChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder={t("contact.form.selectGeneral")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">{t("contact.form.selectGeneral")}</SelectItem>
                        <SelectItem value="membership">{t("contact.form.selectMembership")}</SelectItem>
                        <SelectItem value="events">{t("contact.form.selectEvents")}</SelectItem>
                        <SelectItem value="volunteer">{t("contact.form.selectVolunteer")}</SelectItem>
                        <SelectItem value="partnership">{t("contact.form.selectPartnership")}</SelectItem>
                        <SelectItem value="other">{t("contact.form.selectOther")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t("contact.form.labelMessage")} <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-brick-red hover:bg-brick-red/90" disabled={isSubmitting}>
                    {isSubmitting ? t("contact.form.buttonIsSubmitting") : t("contact.form.buttonSubmit")}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-deep-teal/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-deep-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground mb-1">{t("contact.contactInfo.labelGeneralInquiries")}</p>
                    <a href="mailto:info@talesofbrusshell.org" className="text-brick-red hover:underline">
                      info@talesofbrusshell.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-deep-teal/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-deep-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-1">{t("contact.contactInfo.labelAvailability")}</p>
                    <a href="tel:+32123456789" className="text-brick-red hover:underline">
                      +32 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-deep-teal/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-deep-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-muted-foreground mb-1">{t("contact.contactInfo.labelLocation")}</p>
                    <address className="not-italic">
                      Community Center
                      <br />
                      123 Main Street
                      <br />
                      Brussels, Belgium
                    </address>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-8 rounded-lg overflow-hidden border shadow-sm h-[300px] w-full">
                  <div className="bg-stone-100 h-full w-full flex items-center justify-center">
                    <p className="text-muted-foreground text-center p-4">
                      Google Maps embed would be displayed here.
                      <br />
                      <span className="text-sm">(Requires Google Maps API key for implementation)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect with us */}
      <section className="py-16 bg-stone-100">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">{t("contact.titleConnectWithUs")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("contact.descriptionConnectWithUs")}
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Facebook"
            >
              <Facebook className="h-8 w-8 text-deep-teal" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Twitter"
            >
              <Twitter className="h-8 w-8 text-deep-teal" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Instagram"
            >
              <Instagram className="h-8 w-8 text-deep-teal" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Discord"
            >
              <Discord className="h-8 w-8 text-deep-teal" />
            </a>
          </div>

          <div className="mt-8">
            <p className="font-medium mb-2">{t("contact.joinDiscord")}</p>
            <Button asChild className="bg-[#5865F2] hover:bg-[#4752C4]">
              <a
                href="https://discord.gg/example"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Discord className="h-5 w-5" />
                {t("contact.joinDiscord2")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-dark-mahogany text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">{t("contact.newsletterTitle.title")}</h2>
          <p className="max-w-2xl mx-auto mb-8">{t("contact.newsletterTitle.description")}</p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <Input type="email" placeholder={t("contact.newsletterTitle.labelEmail")} className="bg-white" aria-label="Email address" />
              <Button type="submit" className="bg-golden-amber hover:bg-golden-amber/90 text-white">
                {t("contact.newsletterTitle.button")}
              </Button>
            </form>
            <p className="text-xs mt-2 text-stone-300">
              {t("contact.newsletterTitle.privacyPolicy")}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
