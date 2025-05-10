"use client"

import { useState, useEffect, useRef } from "react"
import { useTranslation } from "@/lib/i18n/client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageIcon, XIcon, Loader2 } from "lucide-react"
import BlogEditor from "@/components/BlogEditor"

interface EventTranslation {
  id: string
  eventId: string
  languageCode: string
  title: string
  description: string
  longDescription?: string
  requirements?: string
  additionalInfo?: string
  instructorName?: string
  instructorBio?: string
}

interface Event {
  id: string
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
  language?: "en" | "fr"
  gameType?: string
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
  const [isUploading, setIsUploading] = useState(false)
  const [formData, setFormData] = useState<Partial<Event>>({})
  const [translations, setTranslations] = useState<Record<string, EventTranslation>>({})
  const [activeLanguage, setActiveLanguage] = useState<string>(locale)
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)
  const [isDragActive, setIsDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [showLibrary, setShowLibrary] = useState(false)
  const [cloudinaryImages, setCloudinaryImages] = useState<{ url: string; public_id: string; }[]>([])
  const [isLoadingLibrary, setIsLoadingLibrary] = useState(false)
  const [gameTypes, setGameTypes] = useState<string[]>(["D&D", "Pathfinder", "Call of Cthulhu"])
  const [newGameType, setNewGameType] = useState("")
  const lastFetchedId = useRef<string | null>(null)

  useEffect(() => {
    if (event && isOpen && event.id !== lastFetchedId.current) {
      lastFetchedId.current = event.id;
      // Fetch the full event with all translations
      fetch(`/api/admin/events/${event.id}`)
        .then((res) => res.json())
        .then((data) => {
          setCurrentEvent(data)
          // Initialize form data with all fields from the fetched event
          const allowedTypes = ["one-shot", "workshop", "campaign"];
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
            eventType: allowedTypes.includes(data.eventType) ? data.eventType : "workshop",
            language: toLanguage(data.language),
            gameType: data.gameType || "",
          }
          setFormData(initialFormData)

          // Initialize translations for both languages
          const translationsMap: Record<string, EventTranslation> = {
            en: {
              id: "",
              eventId: data.id,
              languageCode: "en",
              title: "",
              description: "",
              longDescription: "",
              requirements: "",
              additionalInfo: "",
              instructorName: "",
              instructorBio: "",
            },
            fr: {
              id: "",
              eventId: data.id,
              languageCode: "fr",
              title: "",
              description: "",
              longDescription: "",
              requirements: "",
              additionalInfo: "",
              instructorName: "",
              instructorBio: "",
            }
          }

          // Update with existing translations
          data.translations.forEach((translation: EventTranslation) => {
            translationsMap[translation.languageCode] = {
              id: translation.id,
              eventId: translation.eventId,
              languageCode: translation.languageCode,
              title: translation.title,
              description: translation.description,
              longDescription: translation.longDescription,
              requirements: translation.requirements,
              additionalInfo: translation.additionalInfo,
              instructorName: translation.instructorName,
              instructorBio: translation.instructorBio,
            }
          })
          setTranslations(translationsMap)

          // Set image preview to the event's imageUrl if no new image is selected
          setImageFile(null)
          setImagePreviewUrl(data.imageUrl || null)
        })
        .catch((error) => {
          console.error('Error fetching event:', error)
          toast.error(t("admin.events.errorFetch"))
        })
    }
  }, [event?.id, isOpen, t])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentEvent) return

    setIsLoading(true)
    let currentImageUrl = imagePreviewUrl // Store the current image URL

    try {
      // If there's a new image file or Cloudinary URL, handle it
      if (imageFile instanceof File || imagePreviewUrl) {
        setIsUploading(true)
        const imageFormData = new FormData()
        
        if (imageFile instanceof File) {
          imageFormData.append("image", imageFile)
        } else if (imagePreviewUrl) {
          // If we have a Cloudinary URL, send it directly
          imageFormData.append("cloudinaryUrl", imagePreviewUrl)
        }
        
        try {
          console.log('Sending upload request to:', `/api/admin/events/${currentEvent.id}/upload`);
          const imageResponse = await fetch(`/api/admin/events/${currentEvent.id}/upload`, {
            method: "POST",
            body: imageFormData,
          })

          console.log('Upload response status:', imageResponse.status);
          if (!imageResponse.ok) {
            const errorData = await imageResponse.json();
            console.error('Image upload failed:', {
              status: imageResponse.status,
              statusText: imageResponse.statusText,
              error: errorData
            });
            throw new Error(errorData.error || "Failed to upload image");
          }

          const uploadResult = await imageResponse.json();
          console.log('Image upload successful:', {
            eventId: currentEvent.id,
            result: uploadResult
          });

          // Store the new image URL
          currentImageUrl = uploadResult.imageUrl;
          
          // Update formData with the new image URL
          setFormData(prev => ({
            ...prev,
            imageUrl: currentImageUrl || undefined
          }))
        } catch (error) {
          console.error('Error during image upload:', {
            eventId: currentEvent.id,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
          throw new Error("Failed to upload image");
        } finally {
          setIsUploading(false)
        }
      }

      // Then update the event data
      const response = await fetch(`/api/admin/events/${currentEvent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: formData.slug,
          eventType: formData.eventType,
          eventDate: formData.eventDate,
          eventEndDate: formData.eventEndDate,
          location: formData.location,
          address: formData.address,
          capacity: formData.capacity,
          price: formData.price,
          priceMembers: formData.priceMembers,
          pricePremium: formData.pricePremium,
          language: formData.language,
          gameType: formData.gameType,
          imageUrl: currentImageUrl || undefined, // Use the stored image URL
          translations: Object.values(translations),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update event")
      }

      const updatedEvent = await response.json()
      console.log('Updated event:', updatedEvent)

      // Update the preview URL only after successful update
      setImagePreviewUrl(updatedEvent.imageUrl || null)

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

  const openLibrary = async () => {
    setShowLibrary(true)
    setIsLoadingLibrary(true)
    try {
      const res = await fetch('/api/cloudinary/events')
      const data = await res.json()
      setCloudinaryImages(data.images || [])
    } catch (err) {
      console.error('Error fetching images from Cloudinary:', err)
      setCloudinaryImages([])
    } finally {
      setIsLoadingLibrary(false)
    }
  }

  const handleSelectCloudinaryImage = (img: { url: string; public_id: string }) => {
    setImagePreviewUrl(img.url)
    setImageFile(null)
    setShowLibrary(false)
    // Update formData with the Cloudinary URL
    setFormData(prev => ({
      ...prev,
      imageUrl: img.url
    }))
  }

  const handleRemoveImage = () => {
    setImageFile(null)
    setImagePreviewUrl(currentEvent?.imageUrl || null)
  }

  const renderImageSection = () => (
    <div className="space-y-2">
      <Label htmlFor="image" className="text-dark-mahogany">Event Image</Label>
      <div className="flex flex-row items-center gap-4 mb-2">
        <Button 
          type="button" 
          variant="outline" 
          onClick={openLibrary} 
          className="border-deep-teal/20 text-deep-teal"
          disabled={isUploading}
        >
          Choose from Library
        </Button>
      </div>
      <label
        htmlFor="image"
        className={`flex flex-col items-center justify-center border-2 border-dashed rounded-md cursor-pointer transition-colors min-h-[180px] relative
          ${isDragActive ? 'border-brick-red bg-brick-red/10' : 'border-deep-teal/20 bg-white hover:border-brick-red/60'}
          ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
          disabled={isUploading}
        />
        {imagePreviewUrl ? (
          <div className="relative flex flex-col items-center justify-center w-full h-full">
            <img
              src={imagePreviewUrl}
              alt="Preview"
              className="max-h-40 rounded shadow border object-contain"
            />
            {isUploading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 rounded">
                <Loader2 className="w-12 h-12 text-deep-teal animate-spin mb-2" />
                <span className="text-deep-teal font-medium">Uploading...</span>
              </div>
            )}
            <button
              type="button"
              onClick={e => { e.stopPropagation(); handleRemoveImage(); }}
              className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1 border border-gray-300 shadow"
              aria-label="Remove image"
              disabled={isUploading}
            >
              <XIcon className="w-4 h-4 text-brick-red" />
            </button>
            <span className="text-xs text-muted-foreground mt-2">{imageFile?.name}</span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            {isUploading ? (
              <>
                <Loader2 className="w-12 h-12 text-deep-teal animate-spin mb-4" />
                <span className="text-deep-teal font-medium text-lg">Uploading...</span>
                <div className="w-32 h-1 bg-deep-teal/20 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-deep-teal animate-[loading_2s_ease-in-out_infinite]" />
                </div>
              </>
            ) : (
              <>
                <ImageIcon className="w-10 h-10 text-deep-teal mb-2" />
                <span className="text-deep-teal font-medium">Drag & drop or click to upload</span>
                <span className="text-xs text-muted-foreground mt-1">PNG, JPG, JPEG, GIF, SVG, WEBP</span>
              </>
            )}
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
    </div>
  )

  if (!currentEvent) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("admin.events.edit.title")}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-16 h-16 text-deep-teal animate-spin mb-4" />
              <span className="text-deep-teal font-medium text-lg">Loading event data...</span>
            </div>
          ) : (
            <>
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
                      <SelectItem value="one-shot">One-Shot</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="campaign">Campaign</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language" className="text-dark-mahogany">{t("admin.events.new.language")}</Label>
                  <Select
                    value={formData.language}
                    onValueChange={(value) => setFormData({ ...formData, language: toLanguage(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("admin.events.new.selectLanguage")} />
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
                    onValueChange={(value) => setFormData({ ...formData, gameType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("admin.events.new.selectOrAddGameType")} />
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

              {renderImageSection()}

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
                          <BlogEditor
                            value={translations[lang]?.longDescription || ""}
                            onChange={(content) => handleTranslationChange(lang, "longDescription", content)}
                            language={lang}
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
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}

function toLanguage(val: any): "en" | "fr" {
  return val === "fr" ? "fr" : "en";
} 