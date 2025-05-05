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

interface BlogPostTranslation {
  id: number
  blogPostId: number
  languageCode: string
  title: string
  description: string
  content: string
  metaDescription?: string | null
  metaKeywords?: string | null
}

interface BlogPost {
  id: number
  slug: string
  imageUrl?: string
  publishedAt?: string
  isPublished: boolean
  readTime?: number
  category: string
  tags: string[]
  authorId?: number
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
  const [formData, setFormData] = useState<Partial<BlogPost>>({})
  const [translations, setTranslations] = useState<Record<string, BlogPostTranslation>>({})
  const [activeLanguage, setActiveLanguage] = useState<string>(locale)
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null)

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
            category: data.category || "news",
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

          // Initialize translations for both languages
          const translationsMap: Record<string, BlogPostTranslation> = {
            en: {
              id: 0,
              blogPostId: data.id,
              languageCode: "en",
              title: "",
              description: "",
              content: "",
              metaDescription: null,
              metaKeywords: null,
            },
            fr: {
              id: 0,
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
  }, [post, isOpen, t])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentPost) return

    setIsLoading(true)
    try {
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

  if (!currentPost) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("admin.blog.edit.title")}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("admin.blog.edit.selectCategory")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="news">{t("admin.blog.categories.news")}</SelectItem>
                  <SelectItem value="events">{t("admin.blog.categories.events")}</SelectItem>
                  <SelectItem value="tutorials">{t("admin.blog.categories.tutorials")}</SelectItem>
                  <SelectItem value="reviews">{t("admin.blog.categories.reviews")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

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
                      <Textarea
                        id={`content-${lang}`}
                        value={translations[lang]?.content || ""}
                        onChange={(e) => handleTranslationChange(lang, "content", e.target.value)}
                        required
                        className="min-h-[200px]"
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
        </form>
      </DialogContent>
    </Dialog>
  )
} 