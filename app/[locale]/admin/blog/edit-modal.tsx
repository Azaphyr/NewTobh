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

interface BlogPostTranslation {
  id: string
  blogPostId: string
  languageCode: string
  title: string
  description: string
  content: string
  metaDescription?: string | null
  metaKeywords?: string | null
}

interface Category {
  id: string
  slug: string
  nameEn: string
  nameFr: string
}

interface BlogPost {
  id: string
  slug: string
  imageUrl?: string
  publishedAt?: string
  isPublished: boolean
  readTime?: number
  categoryId?: string
  category?: Category
  tags: string[]
  authorId?: string
  createdAt: string
  updatedAt: string
  isFeatured: boolean
  translations: BlogPostTranslation[]
}

interface EditModalProps {
  post: BlogPost | null
  isOpen: boolean
  onClose: () => void
  onSave: () => void
}

export function EditBlogPostModal({ post, isOpen, onClose, onSave }: EditModalProps) {
  const { t, locale } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [formData, setFormData] = useState<Partial<BlogPost>>({})
  const [translations, setTranslations] = useState<Record<string, BlogPostTranslation>>({})
  const [activeLanguage, setActiveLanguage] = useState<string>(locale)
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)
  const [isDragActive, setIsDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [showLibrary, setShowLibrary] = useState(false)
  const [cloudinaryImages, setCloudinaryImages] = useState<{ url: string; public_id: string; }[]>([])
  const [isLoadingLibrary, setIsLoadingLibrary] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    if (post && isOpen) {
      console.log('Opening modal for post:', post)
      // Fetch the full blog post with all translations
      fetch(`/api/admin/blog/${post.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetched blog post data:', data)
          setCurrentPost(data)
          
          // Initialize form data with all fields from the fetched post
          const initialFormData = {
            id: data.id,
            slug: data.slug || "",
            categoryId: data.categoryId,
            isPublished: data.isPublished,
            isFeatured: data.isFeatured,
            readTime: data.readTime,
            tags: data.tags || [],
            imageUrl: data.imageUrl,
            publishedAt: data.publishedAt,
            authorId: data.authorId,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
          }
          console.log('Initializing form data:', initialFormData)
          setFormData(initialFormData)
          setImagePreviewUrl(data.imageUrl || null)

          // Initialize translations for both languages
          const translationsMap: Record<string, BlogPostTranslation> = {
            en: {
              id: "",
              blogPostId: data.id,
              languageCode: "en",
              title: "",
              description: "",
              content: "",
              metaDescription: null,
              metaKeywords: null,
            },
            fr: {
              id: "",
              blogPostId: data.id,
              languageCode: "fr",
              title: "",
              description: "",
              content: "",
              metaDescription: null,
              metaKeywords: null,
            }
          }

          // Update with existing translations
          data.translations.forEach((translation: BlogPostTranslation) => {
            console.log('Processing translation:', translation)
            translationsMap[translation.languageCode] = {
              id: translation.id,
              blogPostId: translation.blogPostId,
              languageCode: translation.languageCode,
              title: translation.title,
              description: translation.description,
              content: translation.content,
              metaDescription: translation.metaDescription,
              metaKeywords: translation.metaKeywords,
            }
          })
          console.log('Final translations map:', translationsMap)
          setTranslations(translationsMap)
        })
        .catch((error) => {
          console.error('Error fetching blog post:', error)
          toast.error(t("admin.blog.errorFetch"))
        })
    }

    // Fetch categories when modal opens
    if (isOpen) {
      fetch('/api/admin/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => {
          console.error('Error fetching categories:', error)
          toast.error(t("admin.blog.errorFetchCategories"))
        })
    }
  }, [post, isOpen, t])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentPost) return

    setIsLoading(true)
    try {
      // If there's a new image file, upload it first
      if (imageFile instanceof File) {
        setIsUploading(true)
        const imageFormData = new FormData()
        imageFormData.append("image", imageFile)
        
        const uploadResponse = await fetch(`/api/admin/blog/${currentPost.id}/upload`, {
          method: "POST",
          body: imageFormData,
        })

        if (!uploadResponse.ok) {
          throw new Error("Failed to upload image")
        }

        const uploadData = await uploadResponse.json()
        // Update formData with the new image URL
        setFormData(prev => ({
          ...prev,
          imageUrl: uploadData.imageUrl
        }))
        setIsUploading(false)
      }

      // Update the blog post with all changes
      const response = await fetch(`/api/admin/blog/${currentPost.id}`, {
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
        throw new Error("Failed to update blog post")
      }

      toast.success(t("admin.blog.successUpdate"))
      onSave()
      onClose()
    } catch (error) {
      console.error("Error updating blog post:", error)
      toast.error(t("admin.blog.errorUpdate"))
    } finally {
      setIsLoading(false)
      setIsUploading(false)
    }
  }

  const handleTranslationChange = (languageCode: string, field: string, value: string) => {
    console.log('Translation change:', { languageCode, field, value })
    setTranslations((prev: Record<string, BlogPostTranslation>) => {
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

  const handleContentChange = (languageCode: string, content: string) => {
    handleTranslationChange(languageCode, "content", content)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImageFile(file)
      setImagePreviewUrl(URL.createObjectURL(file))
      // Clear the imageUrl from formData when a new file is selected
      setFormData(prev => ({
        ...prev,
        imageUrl: undefined
      }))
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setIsDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      setImageFile(file)
      setImagePreviewUrl(URL.createObjectURL(file))
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
      const res = await fetch('/api/cloudinary/blogs')
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
    setFormData(prev => ({
      ...prev,
      imageUrl: img.url
    }))
  }

  const handleRemoveImage = () => {
    setImageFile(null)
    setImagePreviewUrl(null)
    setFormData(prev => ({
      ...prev,
      imageUrl: undefined
    }))
  }

  const renderImageSection = () => (
    <div className="space-y-2">
      <Label htmlFor="image" className="text-dark-mahogany">Blog Post Image</Label>
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
        aria-label="Blog post image upload area"
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
            <div className="flex flex-col items-center justify-center py-8">
              <Loader2 className="w-12 h-12 text-deep-teal animate-spin mb-4" />
              <span className="text-deep-teal font-medium">Loading library...</span>
            </div>
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

  if (!currentPost) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("admin.blog.edit.title")}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-16 h-16 text-deep-teal animate-spin mb-4" />
              <span className="text-deep-teal font-medium text-lg">Saving changes...</span>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="slug">{t("admin.blog.edit.slug")}</Label>
                  <Input
                    id="slug"
                    value={formData.slug || ""}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">{t("admin.blog.edit.category")}</Label>
                  <Select
                    value={formData.categoryId}
                    onValueChange={(value) => setFormData({ ...formData, categoryId: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("admin.blog.edit.selectCategory")} />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {locale === 'en' ? category.nameEn : category.nameFr}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="isPublished">{t("admin.blog.edit.status")}</Label>
                  <Select
                    value={formData.isPublished ? "published" : "draft"}
                    onValueChange={(value) => setFormData({ ...formData, isPublished: value === "published" })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("admin.blog.edit.selectStatus")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="published">{t("admin.blog.status.published")}</SelectItem>
                      <SelectItem value="draft">{t("admin.blog.status.draft")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="isFeatured">{t("admin.blog.edit.featured")}</Label>
                  <Select
                    value={formData.isFeatured ? "yes" : "no"}
                    onValueChange={(value) => setFormData({ ...formData, isFeatured: value === "yes" })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("admin.blog.edit.selectFeatured")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">{t("admin.blog.featured.yes")}</SelectItem>
                      <SelectItem value="no">{t("admin.blog.featured.no")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {renderImageSection()}

              <div className="space-y-2">
                <Label>{t("admin.blog.edit.content")}</Label>
                <Tabs value={activeLanguage} onValueChange={setActiveLanguage}>
                  <TabsList>
                    <TabsTrigger value="en">{t("admin.blog.edit.languageTabs.en")}</TabsTrigger>
                    <TabsTrigger value="fr">{t("admin.blog.edit.languageTabs.fr")}</TabsTrigger>
                  </TabsList>

                  {["en", "fr"].map((lang) => (
                    <TabsContent key={lang} value={lang}>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor={`title-${lang}`}>{t("admin.blog.edit.title")}</Label>
                          <Input
                            id={`title-${lang}`}
                            value={translations[lang]?.title || ""}
                            onChange={(e) => handleTranslationChange(lang, "title", e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`description-${lang}`}>{t("admin.blog.edit.description")}</Label>
                          <Textarea
                            id={`description-${lang}`}
                            value={translations[lang]?.description || ""}
                            onChange={(e) => handleTranslationChange(lang, "description", e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`content-${lang}`}>{t("admin.blog.edit.content")}</Label>
                          <BlogEditor
                            value={translations[lang]?.content || ""}
                            onChange={(content) => handleContentChange(lang, content)}
                            language={lang}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`metaDescription-${lang}`}>{t("admin.blog.edit.metaDescription")}</Label>
                          <Textarea
                            id={`metaDescription-${lang}`}
                            value={translations[lang]?.metaDescription || ""}
                            onChange={(e) => handleTranslationChange(lang, "metaDescription", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`metaKeywords-${lang}`}>{t("admin.blog.edit.metaKeywords")}</Label>
                          <Input
                            id={`metaKeywords-${lang}`}
                            value={translations[lang]?.metaKeywords || ""}
                            onChange={(e) => handleTranslationChange(lang, "metaKeywords", e.target.value)}
                          />
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={onClose}>
                  {t("admin.blog.edit.buttonCancel")}
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? t("admin.blog.edit.buttonSaving") : t("admin.blog.edit.buttonSave")}
                </Button>
              </div>
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
} 