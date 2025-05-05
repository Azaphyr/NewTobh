"use client"

import { useState } from "react"
import { useTranslation } from "@/lib/i18n/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, ImageIcon, TagIcon, UserIcon, InfoIcon, ChevronDownIcon } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

type Language = "en" | "fr"

interface BlogFormData {
  slug: string
  imageUrl?: string
  publishDate: string
  author: string
  category: string
  tags: string[]
  translations: {
    [key in Language]: {
      title: string
      description: string
      content: string
      metaDescription?: string
      metaKeywords?: string
    }
  }
}

export default function NewBlogPage() {
  const { t, locale } = useTranslation()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState<Language>(locale as Language)
  const [openSections, setOpenSections] = useState({
    basicInfo: true,
    content: true,
    seo: true,
    media: true
  })
  const [formData, setFormData] = useState<BlogFormData>({
    slug: "",
    publishDate: "",
    author: "",
    category: "",
    tags: [],
    translations: {
      en: {
        title: "",
        description: "",
        content: "",
        metaDescription: "",
        metaKeywords: ""
      },
      fr: {
        title: "",
        description: "",
        content: "",
        metaDescription: "",
        metaKeywords: ""
      }
    }
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
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
      const response = await fetch("/api/admin/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to create blog post")
      }

      toast.success(t("admin.blog.successCreate"))
      router.push("/admin/blog")
    } catch (error) {
      console.error("Failed to create blog post:", error)
      toast.error(t("admin.blog.errorCreate"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6 p-6 bg-stone-100 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-dark-mahogany to-brick-red bg-clip-text text-transparent">
          {t("admin.blog.new.title")}
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
                    {t("admin.blog.new.basicInfo")}
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
                      <Label htmlFor="title-en">{t("admin.blog.new.title")} (English)</Label>
                      <Input 
                        id="title-en" 
                        value={formData.translations.en.title}
                        onChange={(e) => handleTranslationChange("title", e.target.value)}
                        required 
                        className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description-en">{t("admin.blog.new.description")} (English)</Label>
                      <Textarea 
                        id="description-en" 
                        value={formData.translations.en.description}
                        onChange={(e) => handleTranslationChange("description", e.target.value)}
                        required 
                        className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="fr" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title-fr">{t("admin.blog.new.title")} (Français)</Label>
                      <Input 
                        id="title-fr" 
                        value={formData.translations.fr.title}
                        onChange={(e) => handleTranslationChange("title", e.target.value)}
                        required 
                        className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description-fr">{t("admin.blog.new.description")} (Français)</Label>
                      <Textarea 
                        id="description-fr" 
                        value={formData.translations.fr.description}
                        onChange={(e) => handleTranslationChange("description", e.target.value)}
                        required 
                        className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-2">
                  <Label htmlFor="slug" className="text-dark-mahogany">{t("admin.blog.new.slug")}</Label>
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
                    <Label htmlFor="publishDate" className="text-dark-mahogany">{t("admin.blog.new.publishDate")}</Label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-deep-teal" />
                      <Input 
                        id="publishDate" 
                        type="datetime-local" 
                        value={formData.publishDate}
                        onChange={(e) => handleInputChange("publishDate", e.target.value)}
                        required 
                        className="pl-10 border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="author" className="text-dark-mahogany">{t("admin.blog.new.author")}</Label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-deep-teal" />
                      <Input 
                        id="author" 
                        value={formData.author}
                        onChange={(e) => handleInputChange("author", e.target.value)}
                        required 
                        className="pl-10 border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-dark-mahogany">{t("admin.blog.new.category")}</Label>
                  <Select 
                    value={formData.category}
                    onValueChange={(value) => handleInputChange("category", value)}
                  >
                    <SelectTrigger className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal">
                      <SelectValue placeholder={t("admin.blog.new.selectCategory")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="news">{t("admin.blog.new.news")}</SelectItem>
                      <SelectItem value="events">{t("admin.blog.new.events")}</SelectItem>
                      <SelectItem value="tutorials">{t("admin.blog.new.tutorials")}</SelectItem>
                      <SelectItem value="reviews">{t("admin.blog.new.reviews")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <Collapsible
          open={openSections.content}
          onOpenChange={() => toggleSection('content')}
          className="w-full"
        >
          <Card className="border-2 border-deep-teal/20 shadow-lg hover:shadow-xl transition-shadow">
            <CollapsibleTrigger className="w-full">
              <CardHeader className="bg-gradient-to-r from-dark-mahogany/10 to-brick-red/10 border-b border-deep-teal/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-dark-mahogany">
                    <InfoIcon className="w-5 h-5" />
                    {t("admin.blog.new.content")}
                  </CardTitle>
                  <ChevronDownIcon className={`w-5 h-5 text-dark-mahogany transition-transform ${openSections.content ? 'transform rotate-180' : ''}`} />
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
                      <Label htmlFor="content-en">{t("admin.blog.new.content")} (English)</Label>
                      <Textarea 
                        id="content-en" 
                        value={formData.translations.en.content}
                        onChange={(e) => handleTranslationChange("content", e.target.value)}
                        required 
                        className="min-h-[400px] border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="fr" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="content-fr">{t("admin.blog.new.content")} (Français)</Label>
                      <Textarea 
                        id="content-fr" 
                        value={formData.translations.fr.content}
                        onChange={(e) => handleTranslationChange("content", e.target.value)}
                        required 
                        className="min-h-[400px] border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <Collapsible
          open={openSections.seo}
          onOpenChange={() => toggleSection('seo')}
          className="w-full"
        >
          <Card className="border-2 border-deep-teal/20 shadow-lg hover:shadow-xl transition-shadow">
            <CollapsibleTrigger className="w-full">
              <CardHeader className="bg-gradient-to-r from-dark-mahogany/10 to-brick-red/10 border-b border-deep-teal/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-dark-mahogany">
                    <TagIcon className="w-5 h-5" />
                    {t("admin.blog.new.seo")}
                  </CardTitle>
                  <ChevronDownIcon className={`w-5 h-5 text-dark-mahogany transition-transform ${openSections.seo ? 'transform rotate-180' : ''}`} />
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
                      <Label htmlFor="metaDescription-en">{t("admin.blog.new.metaDescription")} (English)</Label>
                      <Textarea 
                        id="metaDescription-en" 
                        value={formData.translations.en.metaDescription}
                        onChange={(e) => handleTranslationChange("metaDescription", e.target.value)}
                        className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="metaKeywords-en">{t("admin.blog.new.metaKeywords")} (English)</Label>
                      <Input 
                        id="metaKeywords-en" 
                        value={formData.translations.en.metaKeywords}
                        onChange={(e) => handleTranslationChange("metaKeywords", e.target.value)}
                        placeholder="keyword1, keyword2, keyword3"
                        className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="fr" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="metaDescription-fr">{t("admin.blog.new.metaDescription")} (Français)</Label>
                      <Textarea 
                        id="metaDescription-fr" 
                        value={formData.translations.fr.metaDescription}
                        onChange={(e) => handleTranslationChange("metaDescription", e.target.value)}
                        className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="metaKeywords-fr">{t("admin.blog.new.metaKeywords")} (Français)</Label>
                      <Input 
                        id="metaKeywords-fr" 
                        value={formData.translations.fr.metaKeywords}
                        onChange={(e) => handleTranslationChange("metaKeywords", e.target.value)}
                        placeholder="mot-clé1, mot-clé2, mot-clé3"
                        className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <Collapsible
          open={openSections.media}
          onOpenChange={() => toggleSection('media')}
          className="w-full"
        >
          <Card className="border-2 border-deep-teal/20 shadow-lg hover:shadow-xl transition-shadow">
            <CollapsibleTrigger className="w-full">
              <CardHeader className="bg-gradient-to-r from-dark-mahogany/10 to-brick-red/10 border-b border-deep-teal/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-dark-mahogany">
                    <ImageIcon className="w-5 h-5" />
                    {t("admin.blog.new.media")}
                  </CardTitle>
                  <ChevronDownIcon className={`w-5 h-5 text-dark-mahogany transition-transform ${openSections.media ? 'transform rotate-180' : ''}`} />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-2">
                  <Label htmlFor="imageUrl" className="text-dark-mahogany">{t("admin.blog.new.featuredImage")}</Label>
                  <Input 
                    id="imageUrl" 
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) => handleInputChange("imageUrl", e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                  />
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/blog")}
            className="border-deep-teal/20 text-dark-mahogany hover:bg-stone-50 hover:text-dark-mahogany"
          >
            {t("admin.blog.new.buttonCancel")}
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-gradient-to-r from-dark-mahogany to-brick-red hover:from-dark-mahogany/90 hover:to-brick-red/90 text-white"
          >
            {isSubmitting ? t("admin.blog.new.buttonCreating") : t("admin.blog.new.buttonCreate")}
          </Button>
        </div>
      </form>
    </div>
  )
} 