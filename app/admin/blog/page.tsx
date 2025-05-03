"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus, Search, Edit, Trash2, Eye, EyeOff } from "lucide-react"

interface BlogPost {
  id: number
  slug: string
  publishedAt: string | null
  isPublished: boolean
  category: string
  translations: {
    title: string
    description: string
  }[]
  author: {
    name: string
  } | null
}

export default function BlogPostsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState<string | null>(null)
  const [showUnpublished, setShowUnpublished] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPosts()
  }, [category, showUnpublished])

  const fetchPosts = async () => {
    console.log("Fetching posts with params:", { category, showUnpublished })
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams()
      params.append("locale", "en")
      if (category) params.append("category", category)
      params.append("publishedOnly", (!showUnpublished).toString())

      console.log("Making API request to:", `/api/blog?${params.toString()}`)
      const response = await fetch(`/api/blog?${params.toString()}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log("Fetched posts:", data.posts)
      setPosts(data.posts)
    } catch (error) {
      console.error("Error fetching blog posts:", error)
      setError("Failed to fetch blog posts. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const deletePost = async (slug: string) => {
    console.log("Attempting to delete post:", slug)
    if (!confirm("Are you sure you want to delete this blog post?")) return

    try {
      const response = await fetch(`/api/blog/${slug}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to delete blog post")
      }

      console.log("Successfully deleted post:", slug)
      // Optimistically update the UI
      setPosts(posts.filter(post => post.slug !== slug))
    } catch (error) {
      console.error("Error deleting blog post:", error)
      alert(`Failed to delete blog post: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  const togglePublishStatus = async (slug: string, currentStatus: boolean) => {
    console.log("Toggling publish status for post:", slug, "Current status:", currentStatus)
    try {
      const response = await fetch(`/api/blog/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isPublished: !currentStatus,
          publishedAt: !currentStatus ? new Date().toISOString() : null,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to update blog post")
      }

      console.log("Successfully toggled publish status for post:", slug)
      // Optimistically update the UI
      setPosts(posts.map(post => 
        post.slug === slug 
          ? { 
              ...post, 
              isPublished: !currentStatus,
              publishedAt: !currentStatus ? new Date().toISOString() : null
            }
          : post
      ))
    } catch (error) {
      console.error("Error updating blog post:", error)
      alert(`Failed to update blog post: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  const filteredPosts = posts.filter((post) => {
    const title = post.translations[0]?.title || ""
    return title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const categories = [
    "Dungeon Mastering",
    "Character Building",
    "Miniature Painting",
    "Storytelling",
    "Rules & Mechanics",
    "Community",
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <p className="text-muted-foreground">Manage your blog content</p>
        </div>
        <Button asChild className="bg-brick-red hover:bg-brick-red/90">
          <Link href="/admin/blog/new">
            <Plus className="h-4 w-4 mr-2" />
            Add New Post
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={category || "all"} onValueChange={(value) => setCategory(value === "all" ? null : value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="showUnpublished"
                checked={showUnpublished}
                onChange={(e) => setShowUnpublished(e.target.checked)}
                className="rounded border-gray-300"
              />
              <label htmlFor="showUnpublished">Show Unpublished</label>
            </div>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brick-red"></div>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-bold">{post.translations[0]?.title || "Untitled Post"}</h2>
                        <p className="text-muted-foreground">{post.translations[0]?.description || ""}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          className={
                            post.isPublished ? "bg-green-600 hover:bg-green-700" : "bg-amber-500 hover:bg-amber-600"
                          }
                        >
                          {post.isPublished ? "Published" : "Draft"}
                        </Badge>
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {post.publishedAt
                          ? `Published on ${new Date(post.publishedAt).toLocaleDateString()}`
                          : "Not published yet"}
                      </span>
                      {post.author && <span> • By {post.author.name}</span>}
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-2 p-6 bg-slate-50 border-t md:border-t-0 md:border-l">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex items-center gap-1 ${
                        post.isPublished ? "text-amber-600 hover:text-amber-700" : "text-green-600 hover:text-green-700"
                      }`}
                      onClick={() => togglePublishStatus(post.slug, post.isPublished)}
                    >
                      {post.isPublished ? (
                        <>
                          <EyeOff className="h-4 w-4" />
                          Unpublish
                        </>
                      ) : (
                        <>
                          <Eye className="h-4 w-4" />
                          Publish
                        </>
                      )}
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex items-center gap-1">
                      <Link href={`/admin/blog/${post.slug}`}>
                        <Edit className="h-4 w-4" />
                        Edit
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 text-red-600 hover:text-red-700"
                      onClick={() => deletePost(post.slug)}
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center p-8 border rounded-lg bg-slate-50">
              <p className="text-muted-foreground">No blog posts found</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
