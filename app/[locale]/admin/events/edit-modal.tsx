"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/lib/i18n/client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface EventTranslation {
  id: number
  eventId: number
  languageCode: string
  title: string
  description: string
  shortDescription: string
  longDescription?: string
  requirements?: string
  additionalInfo?: string
  instructorName?: string
  instructorBio?: string
}

interface Event {
  id: number
  slug: string
  imageUrl?: string
  eventDate: string
  eventEndDate?: string
  location: string
  address?: string
  capacity: number
  spotsLeft: number
  price?: number
  priceMembers?: number
  pricePremium?: number
  eventType: string
  translations: EventTranslation[]
}

interface EditModalProps {
  event: Event | null
  isOpen: boolean
  onClose: () => void
  onSave: () => void
}

export function EditEventModal({ event, isOpen, onClose, onSave }: EditModalProps) {
  const { t, locale } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<Partial<Event>>({})
  const [translations, setTranslations] = useState<Record<string, EventTranslation>>({})
  const [activeLanguage, setActiveLanguage] = useState<string>(locale)
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null)

  useEffect(() => {
    if (event && isOpen) {
      console.log('Opening modal for event:', event)
      // Fetch the full event with all translations
      fetch(`/api/admin/events/${event.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetched event data:', data)
          setCurrentEvent(data)
          
          // Initialize form data with all fields from the fetched event
          const initialFormData = {
            id: data.id,
            slug: data.slug || "",
            imageUrl: data.imageUrl,
            eventDate: data.eventDate,
            eventEndDate: data.eventEndDate,
            location: data.location || "",
            address: data.address,
            capacity: data.capacity,
            spotsLeft: data.spotsLeft,
            price: data.price,
            priceMembers: data.priceMembers,
            pricePremium: data.pricePremium,
            eventType: data.eventType || "workshop",
          }
          console.log('Initializing form data:', initialFormData)
          setFormData(initialFormData)

          // Initialize translations for both languages
          const translationsMap: Record<string, EventTranslation> = {
            en: {
              id: 0,
              eventId: data.id,
              languageCode: "en",
              title: "",
              description: "",
              shortDescription: "",
              longDescription: "",
              requirements: "",
              additionalInfo: "",
              instructorName: "",
              instructorBio: "",
            },
            fr: {
              id: 0,
              eventId: data.id,
              languageCode: "fr",
              title: "",
              description: "",
              shortDescription: "",
              longDescription: "",
              requirements: "",
              additionalInfo: "",
              instructorName: "",
              instructorBio: "",
            }
          }

          // Update with existing translations
          data.translations.forEach((translation: EventTranslation) => {
            console.log('Processing translation:', translation)
            translationsMap[translation.languageCode] = {
              id: translation.id,
              eventId: translation.eventId,
              languageCode: translation.languageCode,
              title: translation.title,
              description: translation.description,
              shortDescription: translation.shortDescription,
              longDescription: translation.longDescription,
              requirements: translation.requirements,
              additionalInfo: translation.additionalInfo,
              instructorName: translation.instructorName,
              instructorBio: translation.instructorBio,
            }
          })
          console.log('Final translations map:', translationsMap)
          setTranslations(translationsMap)
        })
        .catch((error) => {
          console.error('Error fetching event:', error)
          toast.error(t("admin.events.errorFetch"))
        })
    }
  }, [event, isOpen, t])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentEvent) return

    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/events/${currentEvent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          translations: Object.values(translations),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update event")
      }

      toast.success(t("admin.events.successUpdate"))
      onSave()
      onClose()
    } catch (error) {
      console.error("Error updating event:", error)
      toast.error(t("admin.events.errorUpdate"))
    } finally {
      setIsLoading(false)
    }
  }

  const handleTranslationChange = (languageCode: string, field: string, value: string) => {
    console.log('Translation change:', { languageCode, field, value })
    setTranslations((prev) => {
      const newTranslations = {
        ...prev,
        [languageCode]: {
          ...prev[languageCode],
          [field]: value,
        },
      }
      console.log('Updated translations:', newTranslations)
      return newTranslations
    })
  }

  if (!currentEvent) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("admin.events.edit.title")}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="slug">{t("admin.events.edit.slug")}</Label>
              <Input
                id="slug"
                value={formData.slug || ""}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventType">{t("admin.events.edit.eventType")}</Label>
              <Select
                value={formData.eventType}
                onValueChange={(value) => setFormData({ ...formData, eventType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("admin.events.edit.selectEventType")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="workshop">{t("admin.events.types.workshop")}</SelectItem>
                  <SelectItem value="conference">{t("admin.events.types.conference")}</SelectItem>
                  <SelectItem value="seminar">{t("admin.events.types.seminar")}</SelectItem>
                  <SelectItem value="meetup">{t("admin.events.types.meetup")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventDate">{t("admin.events.edit.eventDate")}</Label>
              <Input
                id="eventDate"
                type="datetime-local"
                value={formData.eventDate ? new Date(formData.eventDate).toISOString().slice(0, 16) : ""}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventEndDate">{t("admin.events.edit.eventEndDate")}</Label>
              <Input
                id="eventEndDate"
                type="datetime-local"
                value={formData.eventEndDate ? new Date(formData.eventEndDate).toISOString().slice(0, 16) : ""}
                onChange={(e) => setFormData({ ...formData, eventEndDate: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">{t("admin.events.edit.location")}</Label>
              <Input
                id="location"
                value={formData.location || ""}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">{t("admin.events.edit.address")}</Label>
              <Input
                id="address"
                value={formData.address || ""}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="capacity">{t("admin.events.edit.capacity")}</Label>
              <Input
                id="capacity"
                type="number"
                value={formData.capacity || 0}
                onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">{t("admin.events.edit.price")}</Label>
              <Input
                id="price"
                type="number"
                value={formData.price || ""}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priceMembers">{t("admin.events.edit.priceMembers")}</Label>
              <Input
                id="priceMembers"
                type="number"
                value={formData.priceMembers || ""}
                onChange={(e) => setFormData({ ...formData, priceMembers: parseFloat(e.target.value) })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pricePremium">{t("admin.events.edit.pricePremium")}</Label>
              <Input
                id="pricePremium"
                type="number"
                value={formData.pricePremium || ""}
                onChange={(e) => setFormData({ ...formData, pricePremium: parseFloat(e.target.value) })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>{t("admin.events.edit.content")}</Label>
            <Tabs value={activeLanguage} onValueChange={setActiveLanguage}>
              <TabsList>
                <TabsTrigger value="en">{t("admin.events.edit.languageTabs.en")}</TabsTrigger>
                <TabsTrigger value="fr">{t("admin.events.edit.languageTabs.fr")}</TabsTrigger>
              </TabsList>

              {["en", "fr"].map((lang) => (
                <TabsContent key={lang} value={lang}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`title-${lang}`}>{t("admin.events.edit.title")}</Label>
                      <Input
                        id={`title-${lang}`}
                        value={translations[lang]?.title || ""}
                        onChange={(e) => handleTranslationChange(lang, "title", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`shortDescription-${lang}`}>{t("admin.events.edit.shortDescription")}</Label>
                      <Textarea
                        id={`shortDescription-${lang}`}
                        value={translations[lang]?.shortDescription || ""}
                        onChange={(e) => handleTranslationChange(lang, "shortDescription", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`description-${lang}`}>{t("admin.events.edit.description")}</Label>
                      <Textarea
                        id={`description-${lang}`}
                        value={translations[lang]?.description || ""}
                        onChange={(e) => handleTranslationChange(lang, "description", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`longDescription-${lang}`}>{t("admin.events.edit.longDescription")}</Label>
                      <Textarea
                        id={`longDescription-${lang}`}
                        value={translations[lang]?.longDescription || ""}
                        onChange={(e) => handleTranslationChange(lang, "longDescription", e.target.value)}
                        className="min-h-[200px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`requirements-${lang}`}>{t("admin.events.edit.requirements")}</Label>
                      <Textarea
                        id={`requirements-${lang}`}
                        value={translations[lang]?.requirements || ""}
                        onChange={(e) => handleTranslationChange(lang, "requirements", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`additionalInfo-${lang}`}>{t("admin.events.edit.additionalInfo")}</Label>
                      <Textarea
                        id={`additionalInfo-${lang}`}
                        value={translations[lang]?.additionalInfo || ""}
                        onChange={(e) => handleTranslationChange(lang, "additionalInfo", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`instructorName-${lang}`}>{t("admin.events.edit.instructorName")}</Label>
                      <Input
                        id={`instructorName-${lang}`}
                        value={translations[lang]?.instructorName || ""}
                        onChange={(e) => handleTranslationChange(lang, "instructorName", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`instructorBio-${lang}`}>{t("admin.events.edit.instructorBio")}</Label>
                      <Textarea
                        id={`instructorBio-${lang}`}
                        value={translations[lang]?.instructorBio || ""}
                        onChange={(e) => handleTranslationChange(lang, "instructorBio", e.target.value)}
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              {t("admin.events.edit.buttonCancel")}
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? t("admin.events.edit.buttonSaving") : t("admin.events.edit.buttonSave")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 