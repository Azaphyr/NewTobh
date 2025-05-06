"use client"

import { useState, useRef } from "react"
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
import { CalendarIcon, MapPinIcon, UsersIcon, CreditCardIcon, UserIcon, InfoIcon, ChevronDownIcon, ImageIcon, XIcon } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

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
  language: "en" | "fr"
  gameType: string
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
    additionalInfo: true,
    image: true
  })
  const allowedTypes = ["one-shot", "workshop", "campaign"];
  const [gameTypes, setGameTypes] = useState<string[]>(["D&D", "Pathfinder", "Call of Cthulhu"]);
  const [newGameType, setNewGameType] = useState("");
  const [formData, setFormData] = useState<EventFormData>({
    slug: "",
    eventDate: "",
    location: "",
    address: "",
    capacity: 0,
    price: 0,
    priceMembers: 0,
    pricePremium: 0,
    eventType: allowedTypes.includes("") ? "" : "workshop",
    language: "en",
    gameType: "",
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
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)
  const [isDragActive, setIsDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [showLibrary, setShowLibrary] = useState(false);
  const [cloudinaryImages, setCloudinaryImages] = useState<{ url: string; public_id: string; }[]>([]);
  const [isLoadingLibrary, setIsLoadingLibrary] = useState(false);

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
    } else if (field === "language" || field === "gameType") {
      setFormData(prev => ({ ...prev, [field]: value }))
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
      setImagePreviewUrl(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setIsDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImageFile(e.dataTransfer.files[0])
      setImagePreviewUrl(URL.createObjectURL(e.dataTransfer.files[0]))
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setIsDragActive(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setIsDragActive(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("slug", formData.slug)
      formDataToSend.append("eventDate", formData.eventDate)
      if (formData.eventEndDate) formDataToSend.append("eventEndDate", formData.eventEndDate)
      formDataToSend.append("location", formData.location)
      formDataToSend.append("address", formData.address)
      formDataToSend.append("capacity", String(formData.capacity))
      formDataToSend.append("price", String(formData.price))
      formDataToSend.append("priceMembers", String(formData.priceMembers))
      formDataToSend.append("pricePremium", String(formData.pricePremium))
      formDataToSend.append("eventType", formData.eventType)
      formDataToSend.append("language", formData.language)
      formDataToSend.append("gameType", formData.gameType)
      formDataToSend.append("translations", JSON.stringify([
        { ...formData.translations.en, languageCode: "en" },
        { ...formData.translations.fr, languageCode: "fr" },
      ]))
      if (imageFile) {
        formDataToSend.append("image", imageFile)
      }

      const response = await fetch("/api/admin/events", {
        method: "POST",
        body: formDataToSend,
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

  const openLibrary = async () => {
    setShowLibrary(true);
    setIsLoadingLibrary(true);
    try {
      const res = await fetch('/api/cloudinary/events');
      const data = await res.json();
      console.log('Cloudinary API response:', data);
      setCloudinaryImages(data.images || []);
    } catch (err) {
      console.error('Error fetching images from Cloudinary:', err);
      setCloudinaryImages([]);
    } finally {
      setIsLoadingLibrary(false);
    }
  };

  const handleSelectCloudinaryImage = (img: { url: string; public_id: string }) => {
    setImagePreviewUrl(img.url);
    setImageFile(null);
    setShowLibrary(false);
  };

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
                  <p className="text-xs text-muted-foreground mt-1">{t("admin.events.new.slugHelper")}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className="text-dark-mahogany">{t("admin.events.new.date")}</Label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-deep-teal z-10" />
                      <DatePicker
                        selected={formData.eventDate ? new Date(formData.eventDate) : null}
                        onChange={(date: Date | null) => date && handleInputChange("eventDate", date.toISOString())}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="yyyy-MM-dd HH:mm"
                        className="w-full pl-10 border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal rounded-md"
                        placeholderText="Select date and time"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventEndDate" className="text-dark-mahogany">{t("admin.events.new.endDate")}</Label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-deep-teal z-10" />
                      <DatePicker
                        selected={formData.eventEndDate ? new Date(formData.eventEndDate) : null}
                        onChange={(date: Date | null) => date && handleInputChange("eventEndDate", date.toISOString())}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="yyyy-MM-dd HH:mm"
                        className="w-full pl-10 border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal rounded-md"
                        placeholderText="Select end date and time"
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
                      <SelectItem value="one-shot">{t("admin.events.types.one-shot")}</SelectItem>
                      <SelectItem value="workshop">{t("admin.events.types.workshop")}</SelectItem>
                      <SelectItem value="campaign">{t("admin.events.types.campaign")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language" className="text-dark-mahogany">{t("admin.events.new.language")}</Label>
                  <Select
                    value={formData.language}
                    onValueChange={(value) => handleInputChange("language", value)}
                  >
                    <SelectTrigger className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal">
                      <SelectValue placeholder={t("admin.events.new.selectLanguage")}/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">{t("admin.events.new.languageTabs.en")}</SelectItem>
                      <SelectItem value="fr">{t("admin.events.new.languageTabs.fr")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gameType" className="text-dark-mahogany">{t("admin.events.new.gameType")}</Label>
                  <Select
                    value={formData.gameType}
                    onValueChange={(value) => handleInputChange("gameType", value)}
                  >
                    <SelectTrigger className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal">
                      <SelectValue placeholder={t("admin.events.new.selectOrAddGameType")}/>
                    </SelectTrigger>
                    <SelectContent>
                      {gameTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="flex gap-2 mt-2">
                    <Input
                      type="text"
                      placeholder={t("admin.events.new.addGameType")}
                      value={newGameType}
                      onChange={(e) => setNewGameType(e.target.value)}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        if (newGameType && !gameTypes.includes(newGameType)) {
                          setGameTypes([...gameTypes, newGameType]);
                          setFormData((prev) => ({ ...prev, gameType: newGameType }));
                          setNewGameType("");
                        }
                      }}
                    >
                      {t("admin.events.new.addGameType")}
                    </Button>
                  </div>
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

        <Collapsible
          open={openSections.image}
          onOpenChange={() => toggleSection('image')}
          className="w-full"
        >
          <Card className="border-2 border-deep-teal/20 shadow-lg hover:shadow-xl transition-shadow">
            <CollapsibleTrigger className="w-full">
              <CardHeader className="bg-gradient-to-r from-dark-mahogany/10 to-brick-red/10 border-b border-deep-teal/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-dark-mahogany">
                    Event Image
                  </CardTitle>
                  <ChevronDownIcon className={`w-5 h-5 text-dark-mahogany transition-transform ${openSections.image ? 'transform rotate-180' : ''}`} />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="space-y-4 pt-6">
                <Label htmlFor="image" className="text-dark-mahogany">Event Image</Label>
                <div className="flex flex-row items-center gap-4 mb-2">
                  <Button type="button" variant="outline" onClick={openLibrary} className="border-deep-teal/20 text-deep-teal">
                    Choose from Library
                  </Button>
                </div>
                <label
                  htmlFor="image"
                  className={`flex flex-col items-center justify-center border-2 border-dashed rounded-md cursor-pointer transition-colors min-h-[180px] relative
                    ${isDragActive ? 'border-brick-red bg-brick-red/10' : 'border-deep-teal/20 bg-white hover:border-brick-red/60'}`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  tabIndex={0}
                  aria-label="Event image upload area"
                >
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    required={!imagePreviewUrl}
                  />
                  {imagePreviewUrl ? (
                    <div className="relative flex flex-col items-center justify-center w-full h-full">
                      <img
                        src={imagePreviewUrl}
                        alt="Preview"
                        className="max-h-40 rounded shadow border object-contain"
                      />
                      <button
                        type="button"
                        onClick={e => { e.stopPropagation(); setImageFile(null); setImagePreviewUrl(null); }}
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1 border border-gray-300 shadow"
                        aria-label="Remove image"
                      >
                        <XIcon className="w-4 h-4 text-brick-red" />
                      </button>
                      <span className="text-xs text-muted-foreground mt-2">{imageFile?.name}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8">
                      <ImageIcon className="w-10 h-10 text-deep-teal mb-2" />
                      <span className="text-deep-teal font-medium">Drag & drop or click to upload</span>
                      <span className="text-xs text-muted-foreground mt-1">PNG, JPG, JPEG, GIF, SVG, WEBP</span>
                    </div>
                  )}
                </label>

                {/* Cloudinary Library Modal */}
                <Dialog open={showLibrary} onOpenChange={setShowLibrary}>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Select an Image from Library</DialogTitle>
                      <DialogClose asChild>
                        <button className="absolute right-4 top-4">✕</button>
                      </DialogClose>
                    </DialogHeader>
                    {isLoadingLibrary ? (
                      <div className="text-center py-8">Loading...</div>
                    ) : (
                      <div className="grid grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                        {cloudinaryImages.length === 0 && <div className="col-span-3 text-center text-muted-foreground">No images found.</div>}
                        {cloudinaryImages.map(img => (
                          <button
                            key={img.public_id}
                            type="button"
                            className="border rounded hover:border-brick-red focus:border-brick-red transition p-1 bg-white"
                            onClick={() => handleSelectCloudinaryImage(img)}
                          >
                            <img src={img.url} alt={img.public_id} className="object-cover w-full h-32 rounded" />
                          </button>
                        ))}
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
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