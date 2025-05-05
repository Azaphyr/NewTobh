"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { useTranslation } from "@/lib/i18n/client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { fr, enUS } from "date-fns/locale"
import { EditIcon, TrashIcon, Pencil, Trash2, Archive, ArchiveRestore, Send, XCircle, Star } from "lucide-react"
import { EditBlogPostModal } from "./edit-modal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface BlogPostTranslation {
  id: number
  blogPostId: number
  languageCode: string
  title: string
  description: string
  content: string
  metaDescription?: string
  metaKeywords?: string
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
  isArchived: boolean
  translations: BlogPostTranslation[]
}

interface ApiResponse {
  posts: BlogPost[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export default function AdminBlogPage() {
  const router = useRouter()
  const { t, locale } = useTranslation()
  const { data: session, status } = useSession()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("active")

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
      return
    }
    if (status === "authenticated") {
      fetchPosts()
    }
  }, [status, router, activeTab])

  async function fetchPosts() {
    try {
      setIsLoading(true)
      const params = new URLSearchParams({
        includeTranslations: "true",
        languageCode: locale,
      })
      
      const endpoint = activeTab === "archived" 
        ? "/api/admin/blog/archived"
        : "/api/admin/blog"

      const response = await fetch(`${endpoint}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch blog posts")
      }

      const data = await response.json()
      setPosts(data)
      setError(null)
    } catch (error) {
      console.error('Error fetching posts:', error)
      setError(error instanceof Error ? error.message : "Failed to fetch blog posts")
      toast.error(t("admin.blog.errorFetch"))
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (post: BlogPost) => {
    if (!confirm(post.isArchived ? t("admin.blog.confirmUnarchive") : t("admin.blog.confirmArchive"))) {
      return
    }

    try {
      const response = await fetch(`/api/admin/blog/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isArchived: !post.isArchived
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update blog post")
      }

      toast.success(post.isArchived ? t("admin.blog.successUnarchive") : t("admin.blog.successArchive"))
      fetchPosts()
    } catch (error) {
      console.error("Error updating blog post:", error)
      toast.error(t("admin.blog.errorUpdate"))
    }
  }

  const formatDate = (date: string) => {
    return format(new Date(date), "PPP", { locale: locale === "fr" ? fr : enUS })
  }

  const getCategoryBadge = (category: string) => {
    const variants = {
      news: "default",
      events: "secondary",
      tutorials: "outline",
      reviews: "destructive"
    } as const

    const labels = {
      news: t("admin.blog.categories.news"),
      events: t("admin.blog.categories.events"),
      tutorials: t("admin.blog.categories.tutorials"),
      reviews: t("admin.blog.categories.reviews")
    }

    if (!category || !variants[category as keyof typeof variants]) {
      return <Badge variant="outline">{category || 'Uncategorized'}</Badge>
    }

    return (
      <Badge variant={variants[category as keyof typeof variants]}>
        {labels[category as keyof typeof labels]}
      </Badge>
    )
  }

  const getPostStatus = (post: BlogPost) => {
    if (!post.isPublished) return "draft"
    if (!post.publishedAt) return "draft"
    
    const now = new Date()
    const publishedAt = new Date(post.publishedAt)
    return now >= publishedAt ? "published" : "scheduled"
  }

  const getStatusBadge = (status: "draft" | "published" | "scheduled") => {
    const variants = {
      draft: "outline",
      published: "default",
      scheduled: "secondary"
    } as const

    const labels = {
      draft: t("admin.blog.statusDraft"),
      published: t("admin.blog.statusPublished"),
      scheduled: t("admin.blog.statusScheduled")
    }

    return (
      <Badge variant={variants[status]}>
        {labels[status]}
      </Badge>
    )
  }

  const filteredPosts = posts.filter(post => {
    const translation = post.translations.find(t => t.languageCode === locale)
    if (!translation) return false

    const searchLower = searchQuery.toLowerCase()
    const matchesSearch = (
      translation.title.toLowerCase().includes(searchLower) ||
      translation.description.toLowerCase().includes(searchLower)
    )

    // Filter based on archive status
    const matchesArchiveStatus = activeTab === "archived" ? post.isArchived : !post.isArchived

    return matchesSearch && matchesArchiveStatus
  })

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post)
    setIsEditModalOpen(true)
  }

  const handleEditSave = () => {
    fetchPosts()
  }

  const handlePublish = async (post: BlogPost) => {
    if (!confirm(t("admin.blog.confirmPublish"))) {
      return
    }

    try {
      const response = await fetch(`/api/admin/blog/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isPublished: true
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to publish blog post")
      }

      toast.success(t("admin.blog.successPublish"))
      fetchPosts()
    } catch (error) {
      console.error("Error publishing blog post:", error)
      toast.error(t("admin.blog.errorPublish"))
    }
  }

  const handleUnpublish = async (post: BlogPost) => {
    if (!confirm(t("admin.blog.confirmUnpublish"))) {
      return
    }

    try {
      const response = await fetch(`/api/admin/blog/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isPublished: false
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to unpublish blog post")
      }

      toast.success(t("admin.blog.successUnpublish"))
      fetchPosts()
    } catch (error) {
      console.error("Error unpublishing blog post:", error)
      toast.error(t("admin.blog.errorUnpublish"))
    }
  }

  const handleSetFeatured = async (post: BlogPost) => {
    if (!confirm(t("admin.blog.confirmSetFeatured"))) return

    try {
      const response = await fetch(`/api/admin/blog/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isFeatured: true
        }),
      })

      if (!response.ok) throw new Error("Failed to set as featured")

      toast.success(t("admin.blog.successSetFeatured"))
      fetchPosts()
    } catch (error) {
      console.error("Error setting as featured:", error)
      toast.error(t("admin.blog.errorSetFeatured"))
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p>{t("admin.blog.loading")}</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{t("admin.blog.title")}</h1>
        <Button onClick={() => router.push("/admin/blog/new")}>
          {t("admin.blog.buttonNew")}
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Input
          placeholder={t("admin.blog.searchPlaceholder")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList>
          <TabsTrigger value="active">{t("admin.blog.statusActive")}</TabsTrigger>
          <TabsTrigger value="archived">{t("admin.blog.statusArchived")}</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-4">
          {/* Featured Blog Post Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {t("admin.blog.featured.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {posts.find(post => post.isFeatured) ? (
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex-1">
                    {(() => {
                      const featuredPost = posts.find(post => post.isFeatured)
                      const translation = featuredPost?.translations.find(
                        (t) => t.languageCode === locale
                      ) || featuredPost?.translations[0]
                      return (
                        <>
                          <h3 className="text-lg font-medium mb-2">
                            {translation?.title || t("admin.blog.untitled")}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{getCategoryBadge(featuredPost?.category || '')}</span>
                            {featuredPost?.publishedAt && (
                              <span>{formatDate(featuredPost.publishedAt)}</span>
                            )}
                          </div>
                        </>
                      )
                    })()}
                  </div>
                  <div className="flex gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(posts.find(post => post.isFeatured)!)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t("admin.blog.list.edit")}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(posts.find(post => post.isFeatured)!)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t("admin.blog.list.delete")}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground italic">
                  {t("admin.blog.featured.noFeatured")}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Blog Posts Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("admin.blog.list.title")}</TableHead>
                  <TableHead>{t("admin.blog.list.category")}</TableHead>
                  <TableHead>{t("admin.blog.list.status")}</TableHead>
                  <TableHead>{t("admin.blog.list.publishDate")}</TableHead>
                  <TableHead className="text-right">{t("admin.blog.list.actions")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      {t("admin.blog.noPosts")}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredPosts.map((post) => {
                    const translation = post.translations.find((t) => t.languageCode === locale) || post.translations[0]
                    return (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">
                          {translation.title || t("admin.blog.untitled")}
                        </TableCell>
                        <TableCell>{getCategoryBadge(post.category)}</TableCell>
                        <TableCell>{getStatusBadge(getPostStatus(post))}</TableCell>
                        <TableCell>{post.publishedAt ? formatDate(post.publishedAt) : "-"}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleEdit(post)}
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{t("admin.blog.list.edit")}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            {!post.isPublished && !post.isArchived && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handlePublish(post)}
                                      className="h-8 w-8"
                                    >
                                      <Send className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{t("admin.blog.buttonPublishTooltip")}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                            {post.isPublished && !post.isArchived && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleUnpublish(post)}
                                      className="h-8 w-8"
                                    >
                                      <XCircle className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{t("admin.blog.buttonUnpublishTooltip")}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                            {!post.isFeatured && !post.isArchived && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleSetFeatured(post)}
                                      className="h-8 w-8"
                                    >
                                      <Star className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{t("admin.blog.buttonSetFeaturedTooltip")}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDelete(post)}
                                    className="h-8 w-8"
                                  >
                                    <Archive className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>
                                    {post.isArchived
                                      ? t("admin.blog.buttonUnarchiveTooltip")
                                      : t("admin.blog.buttonArchiveTooltip")}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="archived" className="mt-4">
          {/* Archived Blog Posts Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("admin.blog.list.title")}</TableHead>
                  <TableHead>{t("admin.blog.list.category")}</TableHead>
                  <TableHead>{t("admin.blog.list.status")}</TableHead>
                  <TableHead>{t("admin.blog.list.publishDate")}</TableHead>
                  <TableHead className="text-right">{t("admin.blog.list.actions")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      {t("admin.blog.noPosts")}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredPosts.map((post) => {
                    const translation = post.translations.find((t) => t.languageCode === locale) || post.translations[0]
                    return (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">
                          {translation.title || t("admin.blog.untitled")}
                        </TableCell>
                        <TableCell>{getCategoryBadge(post.category)}</TableCell>
                        <TableCell>{getStatusBadge(getPostStatus(post))}</TableCell>
                        <TableCell>{post.publishedAt ? formatDate(post.publishedAt) : "-"}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleEdit(post)}
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{t("admin.blog.list.edit")}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            {!post.isPublished && !post.isArchived && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handlePublish(post)}
                                      className="h-8 w-8"
                                    >
                                      <Send className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{t("admin.blog.buttonPublishTooltip")}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                            {post.isPublished && !post.isArchived && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleUnpublish(post)}
                                      className="h-8 w-8"
                                    >
                                      <XCircle className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{t("admin.blog.buttonUnpublishTooltip")}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                            {!post.isFeatured && !post.isArchived && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleSetFeatured(post)}
                                      className="h-8 w-8"
                                    >
                                      <Star className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{t("admin.blog.buttonSetFeaturedTooltip")}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDelete(post)}
                                    className="h-8 w-8"
                                  >
                                    <Archive className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>
                                    {post.isArchived
                                      ? t("admin.blog.buttonUnarchiveTooltip")
                                      : t("admin.blog.buttonArchiveTooltip")}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      <EditBlogPostModal
        post={selectedPost}
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false)
          setSelectedPost(null)
        }}
        onSave={handleEditSave}
      />
    </div>
  )
} 