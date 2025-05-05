"use client"

import { useState } from "react"
import { useTranslation } from "@/lib/i18n/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { fr, enUS } from "date-fns/locale"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, MapPinIcon, UsersIcon, CreditCardIcon, UserIcon, InfoIcon, ChevronDownIcon } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

type Language = "en" | "fr"

interface EventFormData {
  slug: string
  imageUrl?: string
  eventDate: string
  eventEndDate?: string
  location: string
  address: string
  capacity: number
  price: number
  priceMembers: number
  pricePremium: number
  eventType: string
  translations: {
    [key in Language]: {
      title: string
      description: string
      longDescription?: string
      requirements?: string
      additionalInfo?: string
      instructorName?: string
      instructorBio?: string
    }
  }
}

export default function NewEventPage() {
  const { t, locale } = useTranslation()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState<Language>(locale as Language)
  const [openSections, setOpenSections] = useState({
    basicInfo: true,
    location: true,
    pricing: true,
    instructor: true,
    additionalInfo: true
  })
  const [formData, setFormData] = useState<EventFormData>({
    slug: "",
    eventDate: "",
    location: "",
    address: "",
    capacity: 0,
    price: 0,
    priceMembers: 0,
    pricePremium: 0,
    eventType: "",
    translations: {
      en: {
        title: "",
        description: "",
      },
      fr: {
        title: "",
        description: "",
      }
    }
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleInputChange = (field: string, value: string | number) => {
    if (field === "price") {
      const regularPrice = parseFloat(value as string)
      const memberPrice = regularPrice * 0.9 // 10% discount
      const premiumPrice = regularPrice * 0.75 // 25% discount
      
      setFormData(prev => ({
        ...prev,
        price: regularPrice,
        priceMembers: memberPrice,
        pricePremium: premiumPrice
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }))
    }
  }

  const handleTranslationChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      translations: {
        ...prev.translations,
        [activeLanguage]: {
          ...prev.translations[activeLanguage],
          [field]: value
        }
      }
    }))
  }

  const handleLanguageChange = (value: string) => {
    setActiveLanguage(value as Language)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/admin/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to create event")
      }

      toast.success(t("admin.events.successCreate"))
      router.push("/admin/events")
    } catch (error) {
      console.error("Failed to create event:", error)
      toast.error(t("admin.events.errorCreate"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6 p-6 bg-stone-100 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-dark-mahogany to-brick-red bg-clip-text text-transparent">
          {t("admin.events.new.title")}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Collapsible
          open={openSections.basicInfo}
          onOpenChange={() => toggleSection('basicInfo')}
          className="w-full"
        >
          <Card className="border-2 border-deep-teal/20 shadow-lg hover:shadow-xl transition-shadow">
            <CollapsibleTrigger className="w-full">
              <CardHeader className="bg-gradient-to-r from-dark-mahogany/10 to-brick-red/10 border-b border-deep-teal/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-dark-mahogany">
                    <InfoIcon className="w-5 h-5" />
                    {t("admin.events.new.basicInfo")}
                  </CardTitle>
                  <ChevronDownIcon className={`w-5 h-5 text-dark-mahogany transition-transform ${openSections.basicInfo ? 'transform rotate-180' : ''}`} />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="space-y-4 pt-6">
                <Tabs value={activeLanguage} onValueChange={handleLanguageChange} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4 bg-stone-50">
                    <TabsTrigger value="en" className="data-[state=active]:bg-deep-teal data-[state=active]:text-white">
                      English
                    </TabsTrigger>
                    <TabsTrigger value="fr" className="data-[state=active]:bg-deep-teal data-[state=active]:text-white">
                      Français
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="en" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title-en">{t("admin.events.new.title")} (English)</Label>
                      <Input 
                        id="title-en" 
                        value={formData.translations.en.title}
                        onChange={(e) => handleTranslationChange("title", e.target.value)}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description-en">{t("admin.events.new.description")} (English)</Label>
                      <Textarea 
                        id="description-en" 
                        value={formData.translations.en.description}
                        onChange={(e) => handleTranslationChange("description", e.target.value)}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="longDescription-en">{t("admin.events.new.longDescription")} (English)</Label>
                      <Textarea 
                        id="longDescription-en" 
                        value={formData.translations.en.longDescription}
                        onChange={(e) => handleTranslationChange("longDescription", e.target.value)}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="fr" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title-fr">{t("admin.events.new.title")} (Français)</Label>
                      <Input 
                        id="title-fr" 
                        value={formData.translations.fr.title}
                        onChange={(e) => handleTranslationChange("title", e.target.value)}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description-fr">{t("admin.events.new.description")} (Français)</Label>
                      <Textarea 
                        id="description-fr" 
                        value={formData.translations.fr.description}
                        onChange={(e) => handleTranslationChange("description", e.target.value)}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="longDescription-fr">{t("admin.events.new.longDescription")} (Français)</Label>
                      <Textarea 
                        id="longDescription-fr" 
                        value={formData.translations.fr.longDescription}
                        onChange={(e) => handleTranslationChange("longDescription", e.target.value)}
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-2">
                  <Label htmlFor="slug" className="text-dark-mahogany">{t("admin.events.new.slug")}</Label>
                  <Input 
                    id="slug" 
                    value={formData.slug}
                    onChange={(e) => handleInputChange("slug", e.target.value)}
                    required 
                    className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className="text-dark-mahogany">{t("admin.events.new.date")}</Label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-deep-teal" />
                      <Input 
                        id="eventDate" 
                        type="datetime-local" 
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange("eventDate", e.target.value)}
                        required 
                        className="pl-10 border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventEndDate" className="text-dark-mahogany">{t("admin.events.new.endDate")}</Label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-deep-teal" />
                      <Input 
                        id="eventEndDate" 
                        type="datetime-local" 
                        value={formData.eventEndDate}
                        onChange={(e) => handleInputChange("eventEndDate", e.target.value)}
                        className="pl-10 border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-dark-mahogany">{t("admin.events.new.eventType")}</Label>
                  <Select 
                    value={formData.eventType}
                    onValueChange={(value) => handleInputChange("eventType", value)}
                  >
                    <SelectTrigger className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal">
                      <SelectValue placeholder={t("admin.events.new.selectEventType")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="workshop">{t("admin.events.new.workshop")}</SelectItem>
                      <SelectItem value="game">{t("admin.events.new.game")}</SelectItem>
                      <SelectItem value="tournament">{t("admin.events.new.tournament")}</SelectItem>
                      <SelectItem value="social">{t("admin.events.new.social")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <Collapsible
          open={openSections.location}
          onOpenChange={() => toggleSection('location')}
          className="w-full"
        >
          <Card className="border-2 border-deep-teal/20 shadow-lg hover:shadow-xl transition-shadow">
            <CollapsibleTrigger className="w-full">
              <CardHeader className="bg-gradient-to-r from-dark-mahogany/10 to-brick-red/10 border-b border-deep-teal/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-dark-mahogany">
                    <MapPinIcon className="w-5 h-5" />
                    {t("admin.events.new.location")}
                  </CardTitle>
                  <ChevronDownIcon className={`w-5 h-5 text-dark-mahogany transition-transform ${openSections.location ? 'transform rotate-180' : ''}`} />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-dark-mahogany">{t("admin.events.new.location")}</Label>
                  <Input 
                    id="location" 
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    required 
                    className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-dark-mahogany">{t("admin.events.new.address")}</Label>
                  <Input 
                    id="address" 
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required 
                    className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                  />
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <Collapsible
          open={openSections.pricing}
          onOpenChange={() => toggleSection('pricing')}
          className="w-full"
        >
          <Card className="border-2 border-deep-teal/20 shadow-lg hover:shadow-xl transition-shadow">
            <CollapsibleTrigger className="w-full">
              <CardHeader className="bg-gradient-to-r from-dark-mahogany/10 to-brick-red/10 border-b border-deep-teal/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-dark-mahogany">
                    <CreditCardIcon className="w-5 h-5" />
                    {t("admin.events.new.pricing")}
                  </CardTitle>
                  <ChevronDownIcon className={`w-5 h-5 text-dark-mahogany transition-transform ${openSections.pricing ? 'transform rotate-180' : ''}`} />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="space-y-4 pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="capacity" className="text-dark-mahogany">{t("admin.events.new.capacity")}</Label>
                    <div className="relative">
                      <UsersIcon className="absolute left-3 top-2.5 h-5 w-5 text-deep-teal" />
                      <Input 
                        id="capacity" 
                        type="number" 
                        min="1" 
                        value={formData.capacity}
                        onChange={(e) => handleInputChange("capacity", parseInt(e.target.value))}
                        required 
                        className="pl-10 border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-dark-mahogany">{t("admin.events.new.price")}</Label>
                    <Input 
                      id="price" 
                      type="number" 
                      min="0" 
                      step="0.01" 
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      required 
                      className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="priceMembers" className="text-dark-mahogany">{t("admin.events.new.priceMembers")}</Label>
                    <Input 
                      id="priceMembers" 
                      type="number" 
                      min="0" 
                      step="0.01" 
                      value={formData.priceMembers}
                      disabled
                      className="bg-stone-50 border-deep-teal/20"
                    />
                    <p className="text-sm text-deep-teal">10% discount applied automatically</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pricePremium" className="text-dark-mahogany">{t("admin.events.new.pricePremium")}</Label>
                    <Input 
                      id="pricePremium" 
                      type="number" 
                      min="0" 
                      step="0.01" 
                      value={formData.pricePremium}
                      disabled
                      className="bg-stone-50 border-deep-teal/20"
                    />
                    <p className="text-sm text-deep-teal">25% discount applied automatically</p>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <Collapsible
          open={openSections.instructor}
          onOpenChange={() => toggleSection('instructor')}
          className="w-full"
        >
          <Card className="border-2 border-deep-teal/20 shadow-lg hover:shadow-xl transition-shadow">
            <CollapsibleTrigger className="w-full">
              <CardHeader className="bg-gradient-to-r from-dark-mahogany/10 to-brick-red/10 border-b border-deep-teal/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-dark-mahogany">
                    <UserIcon className="w-5 h-5" />
                    {t("admin.events.new.instructor")}
                  </CardTitle>
                  <ChevronDownIcon className={`w-5 h-5 text-dark-mahogany transition-transform ${openSections.instructor ? 'transform rotate-180' : ''}`} />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="space-y-4 pt-6">
                <Tabs value={activeLanguage} onValueChange={handleLanguageChange} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4 bg-stone-50">
                    <TabsTrigger value="en" className="data-[state=active]:bg-deep-teal data-[state=active]:text-white">
                      English
                    </TabsTrigger>
                    <TabsTrigger value="fr" className="data-[state=active]:bg-deep-teal data-[state=active]:text-white">
                      Français
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="en" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="instructorName-en">{t("admin.events.new.instructorName")} (English)</Label>
                      <Input 
                        id="instructorName-en" 
                        value={formData.translations.en.instructorName}
                        onChange={(e) => handleTranslationChange("instructorName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instructorBio-en">{t("admin.events.new.instructorBio")} (English)</Label>
                      <Textarea 
                        id="instructorBio-en" 
                        value={formData.translations.en.instructorBio}
                        onChange={(e) => handleTranslationChange("instructorBio", e.target.value)}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="fr" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="instructorName-fr">{t("admin.events.new.instructorName")} (Français)</Label>
                      <Input 
                        id="instructorName-fr" 
                        value={formData.translations.fr.instructorName}
                        onChange={(e) => handleTranslationChange("instructorName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instructorBio-fr">{t("admin.events.new.instructorBio")} (Français)</Label>
                      <Textarea 
                        id="instructorBio-fr" 
                        value={formData.translations.fr.instructorBio}
                        onChange={(e) => handleTranslationChange("instructorBio", e.target.value)}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <Collapsible
          open={openSections.additionalInfo}
          onOpenChange={() => toggleSection('additionalInfo')}
          className="w-full"
        >
          <Card className="border-2 border-deep-teal/20 shadow-lg hover:shadow-xl transition-shadow">
            <CollapsibleTrigger className="w-full">
              <CardHeader className="bg-gradient-to-r from-dark-mahogany/10 to-brick-red/10 border-b border-deep-teal/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-dark-mahogany">
                    <InfoIcon className="w-5 h-5" />
                    {t("admin.events.new.additionalInfo")}
                  </CardTitle>
                  <ChevronDownIcon className={`w-5 h-5 text-dark-mahogany transition-transform ${openSections.additionalInfo ? 'transform rotate-180' : ''}`} />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="space-y-4 pt-6">
                <Tabs value={activeLanguage} onValueChange={handleLanguageChange} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4 bg-stone-50">
                    <TabsTrigger value="en" className="data-[state=active]:bg-deep-teal data-[state=active]:text-white">
                      English
                    </TabsTrigger>
                    <TabsTrigger value="fr" className="data-[state=active]:bg-deep-teal data-[state=active]:text-white">
                      Français
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="en" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="requirements-en">{t("admin.events.new.requirements")} (English)</Label>
                      <Textarea 
                        id="requirements-en" 
                        value={formData.translations.en.requirements}
                        onChange={(e) => handleTranslationChange("requirements", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo-en">{t("admin.events.new.additionalInfo")} (English)</Label>
                      <Textarea 
                        id="additionalInfo-en" 
                        value={formData.translations.en.additionalInfo}
                        onChange={(e) => handleTranslationChange("additionalInfo", e.target.value)}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="fr" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="requirements-fr">{t("admin.events.new.requirements")} (Français)</Label>
                      <Textarea 
                        id="requirements-fr" 
                        value={formData.translations.fr.requirements}
                        onChange={(e) => handleTranslationChange("requirements", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo-fr">{t("admin.events.new.additionalInfo")} (Français)</Label>
                      <Textarea 
                        id="additionalInfo-fr" 
                        value={formData.translations.fr.additionalInfo}
                        onChange={(e) => handleTranslationChange("additionalInfo", e.target.value)}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/events")}
            className="border-deep-teal/20 text-dark-mahogany hover:bg-stone-50 hover:text-dark-mahogany"
          >
            {t("admin.events.new.buttonCancel")}
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-gradient-to-r from-dark-mahogany to-brick-red hover:from-dark-mahogany/90 hover:to-brick-red/90 text-white"
          >
            {isSubmitting ? t("admin.events.new.buttonCreating") : t("admin.events.new.buttonCreate")}
          </Button>
        </div>
      </form>
    </div>
  )
} 