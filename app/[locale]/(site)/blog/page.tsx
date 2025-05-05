"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, ArrowRight } from "lucide-react"
import { useTranslation } from "@/lib/i18n/client"
import { useEffect, useState } from "react";
import { format } from "date-fns";

interface BlogPostTranslation {
  id: number;
  blogPostId: number;
  languageCode: string;
  title: string;
  description: string;
  content: string;
}

interface BlogPost {
  id: number;
  slug: string;
  imageUrl: string | null;
  publishedAt: string | null;
  isPublished: boolean;
  isFeatured: boolean;
  readTime: number | null;
  category: string;
  authorId: number | null;
  createdAt: string;
  updatedAt: string;
  translations: BlogPostTranslation[];
}

interface BlogResponse {
  posts: BlogPost[];
  total: number;
  hasMore: boolean;
}

export default function BlogPage() {
  const { t, locale } = useTranslation();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isBlogLoading, setIsBlogLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const POSTS_PER_PAGE = 6;
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      setIsBlogLoading(true);
      try {
        const params = new URLSearchParams();
        params.append("locale", locale);
        params.append("isPublished", "true");
        params.append("includeTranslations", "true");
        params.append("languageCode", locale);
        params.append("page", page.toString());
        params.append("limit", POSTS_PER_PAGE.toString());

        const response = await fetch(`/api/blog?${params.toString()}`);
        const data: BlogResponse = await response.json();
        
        if (page === 1) {
          setBlogPosts(data.posts);
        } else {
          setBlogPosts(prev => [...prev, ...data.posts]);
        }
        
        setHasMore(data.hasMore);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsBlogLoading(false);
        setIsLoadingMore(false);
      }
    };

    // Fetch featured post
    const fetchFeaturedPost = async () => {
      try {
        const params = new URLSearchParams();
        params.append("featured", "true");
        params.append("includeTranslations", "true");
        params.append("languageCode", locale);
        params.append("limit", "1");
        const response = await fetch(`/api/blog?${params.toString()}`);
        const data = await response.json();
        setFeaturedPost(data.posts && data.posts.length > 0 ? data.posts[0] : null);
      } catch (error) {
        setFeaturedPost(null);
      }
    };

    fetchBlogPosts();
    fetchFeaturedPost();
  }, [locale, page]);
  
  const loadMore = () => {
    setIsLoadingMore(true);
    setPage(prev => prev + 1);
  };

  const stripHtmlAndTruncate = (html: string, maxLength: number) => {
    // Remove HTML tags
    const plainText: string = html.replace(/<[^>]+>/g, '');
    // Trim and add ellipsis if needed
    return plainText.length > maxLength
      ? plainText.substring(0, maxLength).trim() + "..."
      : plainText;
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-mahogany/90 to-brick-red/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          alt="D&D storytelling"
          width={1600}
          height={400}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[300px] md:h-[400px] text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t("blog.public.title")}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{t("blog.public.description")}</p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder={t("blog.public.searchPlaceholder")} className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                {t("blog.public.categories.all")}
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                {t("blog.public.categories.dungeonMastering")}
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                {t("blog.public.categories.characterBuilding")}
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                {t("blog.public.categories.miniaturePainting")}
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                {t("blog.public.categories.storytelling")}
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                {t("blog.public.categories.community")}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-12">
          <div className="container">
            <h2 className="font-serif text-2xl font-bold mb-6">{t("blog.public.featureArticle.titleFeaturedArticle")}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <Image
                  src={featuredPost.imageUrl || "/placeholder.svg?height=400&width=800"}
                  alt={featuredPost.translations[0]?.title || "Featured Article"}
                  width={800}
                  height={400}
                  className="w-full aspect-[16/9] object-cover rounded-lg"
                />
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center">
                <Badge className="w-fit mb-2 bg-brick-red/10 hover:bg-brick-red/20 text-brick-red border-none">
                  {featuredPost.category}
                </Badge>
                <h3 className="font-serif text-3xl font-bold mb-2">
                  {featuredPost.translations[0]?.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.publishedAt ? format(new Date(featuredPost.publishedAt), "MMMM d, yyyy") : ""}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime} min read</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.translations[0]?.description}
                </p>
                <Button asChild className="w-fit bg-brick-red hover:bg-brick-red/90">
                  <Link href={`/blog/${featuredPost.slug}`}>{t("blog.public.featureArticle.buttonFeaturedArticle")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="py-12 bg-stone-100">
        <div className="container">
          <h2 className="font-serif text-2xl font-bold mb-6">{t("blog.public.titleLatestArticles")}</h2>

          {isBlogLoading && page === 1 ? (
            <div className="text-center py-8">
              <p>Loading...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => {
                  const translation = post.translations[0] || {};
                  const startTime = format(new Date(post.createdAt), "h:mm a");
                  const previewText = stripHtmlAndTruncate(translation.content, 100);

                  return (
                    <Card key={post.id} className="hover:shadow-md transition-all group">
                      <div className="overflow-hidden rounded-t-lg">
                        <Image
                          src={post.imageUrl || "/placeholder.svg"}
                          alt={translation.title || "Blog post image"}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <Badge className="w-fit mb-2 bg-brick-red/10 hover:bg-brick-red/20 text-brick-red border-none">
                          {post.category}
                        </Badge>
                        <CardTitle className="font-serif">
                          {translation.title}
                        </CardTitle>
                        <CardDescription>
                          {startTime} {"- "}
                          {post.readTime} min read
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-3">{previewText}</p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          variant="ghost"
                          className="text-brick-red hover:text-brick-red/80 p-0 h-auto group"
                        >
                          <Link
                            href={`/blog/${post.slug}`}
                            className="flex items-center gap-1"
                          >
                            {t("home.blog.readMore")}{" "}
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>

              {hasMore && (
                <div className="mt-8 text-center">
                  <Button
                    onClick={loadMore}
                    disabled={isLoadingMore}
                    className="bg-brick-red hover:bg-brick-red/90"
                  >
                    {isLoadingMore ? t("blog.public.loadingMore") : t("blog.public.loadMore")}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
} 