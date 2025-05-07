"use client"

import { useState, useRef, useEffect } from "react"
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
import { CalendarIcon, ImageIcon, TagIcon, UserIcon, InfoIcon, ChevronDownIcon, XIcon } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog'
import { useSession } from 'next-auth/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Heading from '@tiptap/extension-heading'
import TextAlign from '@tiptap/extension-text-align'
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Link as LinkIcon,
  Undo,
  Redo,
  Heading1,
  Heading2,
  Heading3,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from 'lucide-react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import BlogEditor from '@/components/BlogEditor'


type Language = "en" | "fr"

interface Category {
  id: string
  slug: string
  nameEn: string
  nameFr: string
}

interface BlogFormData {
  slug: string
  imageUrl?: string
  publishDate: string
  author: string
  categoryId: string
  tags: string[]
  isPublished: boolean
  isFeatured: boolean
  readTime: number
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
  const { data: session } = useSession()
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
    categoryId: "",
    tags: [],
    isPublished: false,
    isFeatured: false,
    readTime: 0,
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
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)
  const [isDragActive, setIsDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [showLibrary, setShowLibrary] = useState(false)
  const [cloudinaryImages, setCloudinaryImages] = useState<{ url: string; public_id: string; }[]>([])
  const [isLoadingLibrary, setIsLoadingLibrary] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    // Fetch categories when component mounts
    fetch('/api/admin/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => {
        console.error('Error fetching categories:', error)
        toast.error(t("admin.blog.errorFetchCategories"))
      })
  }, [t])

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleInputChange = (field: string, value: string | number | boolean | string[]) => {
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
    e.preventDefault();
    if (!session) return;

    setIsSubmitting(true);
    const formDataToSend = new FormData();

    // Add basic fields from state
    formDataToSend.append('slug', formData.slug);
    formDataToSend.append('publishDate', formData.publishDate);
    formDataToSend.append('categoryId', formData.categoryId);
    formDataToSend.append('tags', JSON.stringify(formData.tags));
    formDataToSend.append('isPublished', formData.isPublished.toString());
    formDataToSend.append('isFeatured', formData.isFeatured.toString());
    formDataToSend.append('readTime', formData.readTime.toString());

    // Add translations from state
    const translations = [
      {
        languageCode: 'en',
        ...formData.translations.en,
      },
      {
        languageCode: 'fr',
        ...formData.translations.fr,
      },
    ];
    formDataToSend.append('translations', JSON.stringify(translations));

    // Add image if selected
    if (imageFile) {
      formDataToSend.append('image', imageFile);
    }

    try {
      const response = await fetch('/api/admin/blog', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to create blog post');
      }

      toast.success(t('admin.blog.successCreate'));
      router.push('/admin/blog');
    } catch (error) {
      console.error('Error creating blog post:', error);
      toast.error(t('admin.blog.errorCreate'));
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <p className="text-sm text-muted-foreground">
                    {t("admin.blog.new.slugDescription")}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="publishDate" className="text-dark-mahogany">{t("admin.blog.new.publishDate")}</Label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-deep-teal z-10" />
                      <DatePicker
                        selected={formData.publishDate ? new Date(formData.publishDate) : null}
                        onChange={(date: Date | null) => date && handleInputChange("publishDate", date.toISOString())}
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
                    <Label htmlFor="readTime" className="text-dark-mahogany">{t("admin.blog.new.readTime")}</Label>
                    <Input 
                      id="readTime" 
                      type="number"
                      min="1"
                      value={formData.readTime}
                      onChange={(e) => handleInputChange("readTime", parseInt(e.target.value))}
                      required 
                      className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-dark-mahogany">{t("admin.blog.new.category")}</Label>
                  <Select 
                    value={formData.categoryId}
                    onValueChange={(value) => handleInputChange("categoryId", value)}
                  >
                    <SelectTrigger className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal">
                      <SelectValue placeholder={t("admin.blog.new.selectCategory")} />
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

                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="isPublished"
                      checked={formData.isPublished}
                      onChange={(e) => handleInputChange("isPublished", e.target.checked)}
                      className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                    />
                    <Label htmlFor="isPublished">{t("admin.blog.new.isPublished")}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="isFeatured"
                      checked={formData.isFeatured}
                      onChange={(e) => handleInputChange("isFeatured", e.target.checked)}
                      className="border-deep-teal/20 focus:border-deep-teal focus:ring-deep-teal"
                    />
                    <Label htmlFor="isFeatured">{t("admin.blog.new.isFeatured")}</Label>
                  </div>
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
                      <BlogEditor
                        value={formData.translations.en.content}
                        onChange={content => handleTranslationChange('content', content)}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="fr" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="content-fr">{t("admin.blog.new.content")} (Français)</Label>
                      <BlogEditor
                        value={formData.translations.fr.content}
                        onChange={content => handleTranslationChange('content', content)}
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
                  aria-label="Blog post image upload area"
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

        <Button type="submit" disabled={isSubmitting} className="w-full bg-deep-teal hover:bg-deep-teal/90 text-white">
          {isSubmitting ? 'Submitting...' : t("admin.blog.new.submit")}
        </Button>
      </form>
    </div>
  );
}