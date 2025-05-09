"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Clock,
  ArrowLeft,
  Share2,
  ThumbsUp,
  MessageSquare,
  Bookmark,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/client";
import { useEffect, useState } from "react";
import { use } from "react";
import '@/styles/editor.css';
import { format } from "date-fns";

interface Category {
  id: string;
  slug: string;
  nameEn: string;
  nameFr: string;
  createdAt: string;
  updatedAt: string;
}

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
  mainCategoryId?: string;
  subCategoryIds: string[];
  mainCategory?: Category;
  subCategories?: Category[];
  authorId: number | null;
  createdAt: string;
  updatedAt: string;
  translations: BlogPostTranslation[];
}

interface PageParams {
  slug: string;
}

export default function BlogPostPage({ params }: { params: Promise<PageParams> }) {
  const { t, locale } = useTranslation();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isBlogLoading, setIsBlogLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const { slug } = use(params);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isRelatedLoading, setIsRelatedLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/admin/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        
        // Separate main categories and subcategories
        const mainCats = data.filter((cat: Category) => !cat.slug.includes('/'));
        const subCats = data.filter((cat: Category) => cat.slug.includes('/'));
        
        setCategories([...mainCats, ...subCats]); // Keep all categories for the sidebar
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setIsCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      if (!slug || !locale) return;
      
      setIsBlogLoading(true);
      try {
        const params = new URLSearchParams({
          locale,
          includeTranslations: "true",
          languageCode: locale,
          includeCategory: "true"
        });

        const response = await fetch(`/api/blog/${slug}?${params.toString()}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data) {
          throw new Error('Invalid response format: data is missing');
        }
        
        setBlogPosts([data]);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setBlogPosts([]);
      } finally {
        setIsBlogLoading(false);
      }
    };

    fetchBlogPosts();
  }, [locale, slug]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      if (!blogPosts[0]?.mainCategoryId || !locale) return;
      
      setIsRelatedLoading(true);
      try {
        const params = new URLSearchParams({
          locale,
          publishedOnly: "true",
          includeTranslations: "true",
          languageCode: locale,
          category: blogPosts[0].mainCategoryId,
          limit: "3"
        });

        const response = await fetch(`/api/blog?${params.toString()}`);
        if (!response.ok) throw new Error('Failed to fetch related posts');
        const data = await response.json();
        
        // Filter out the current post from related posts
        const filteredPosts = data.posts.filter((post: BlogPost) => post.id !== blogPosts[0].id);
        setRelatedPosts(filteredPosts);
      } catch (error) {
        console.error("Error fetching related posts:", error);
        setRelatedPosts([]);
      } finally {
        setIsRelatedLoading(false);
      }
    };

    fetchRelatedPosts();
  }, [blogPosts, locale]);

  const getCategoryName = (category: Category) => {
    return locale === 'fr' ? category.nameFr : category.nameEn;
  };

  return (
    <div className="flex flex-col">
      {isBlogLoading ? (
        <div className="container py-12 text-center">
          <p>Loading...</p>
        </div>
      ) : blogPosts.length === 0 ? (
        <div className="container py-12 text-center">
          <p>No blog post found</p>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-dark-mahogany/90 to-brick-red/70 z-10" />
            <Image
              src={blogPosts[0].imageUrl || "/placeholder.svg"}
              alt={blogPosts[0].translations[0].title}
              width={1000}
              height={500}
              className="w-full h-[300px] md:h-[400px] object-cover"
              priority
            />
            <div className="container relative z-20 flex flex-col items-center justify-center h-[300px] md:h-[400px] text-center text-white">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">
                {blogPosts[0].translations[0].title}
              </h1>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{blogPosts[0].publishedAt ? format(new Date(blogPosts[0].publishedAt), "MMMM d, yyyy") : ""}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{blogPosts[0].readTime} min read</span>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Post Content */}
          <section className="py-12">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div className="flex justify-between items-center mb-6">
                    <Link
                      href="/blog"
                      className="flex items-center gap-1 text-brick-red hover:text-brick-red/80"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      {t("blog.public.backToBlog")}
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Share2 className="h-4 w-4" />
                      {t("blog.public.share")}
                    </Button>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-100">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Author"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Author Name</p>
                      <p className="text-sm text-muted-foreground">Author Title</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: blogPosts[0].translations[0].content }} />
                  </div>

                  {/* Engagement */}
                  {/* <div className="flex items-center gap-4 mt-8 pt-8 border-t">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      {t("blog.public.like")}
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {t("blog.public.comment")}
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <Bookmark className="h-4 w-4" />
                      {t("blog.public.bookmark")}
                    </Button>
                  </div> */}
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Related Posts */}
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-4">{t("blog.public.relatedPosts")}</h3>
                    <div className="space-y-4">
                      {isRelatedLoading ? (
                        <div className="space-y-4">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-4 animate-pulse">
                              <div className="w-20 h-20 rounded-lg bg-stone-200" />
                              <div className="flex-1 space-y-2">
                                <div className="h-4 bg-stone-200 rounded w-3/4" />
                                <div className="h-3 bg-stone-200 rounded w-1/2" />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : relatedPosts.length > 0 ? (
                        relatedPosts.map((post) => (
                          <div key={post.id} className="flex gap-4">
                            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={post.imageUrl || "/placeholder.svg?height=80&width=80"}
                                alt={post.translations[0]?.title || "Related post"}
                                width={80}
                                height={80}
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <Link href={`/blog/${post.slug}`}>
                                <h4 className="font-medium line-clamp-2 hover:text-brick-red transition-colors">
                                  {post.translations[0]?.title}
                                </h4>
                              </Link>
                              <p className="text-sm text-muted-foreground">
                                {post.publishedAt ? format(new Date(post.publishedAt), "MMM d, yyyy") : ""}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-muted-foreground">{t("blog.public.noRelatedPosts")}</p>
                      )}
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-4">{t("blog.public.categoriesTitle")}</h3>
                    <div className="space-y-4">
                      {/* Main Category */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">
                          {t("blog.public.categories.mainCategory")}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {isBlogLoading ? (
                            <Badge variant="outline" className="animate-pulse">
                              {t("blog.public.categories.loading")}
                            </Badge>
                          ) : blogPosts[0]?.mainCategory ? (
                            <Link 
                              href={`/blog?mainCategory=${blogPosts[0].mainCategory.id}`}
                            >
                              <Badge 
                                variant="outline" 
                                className="hover:bg-brick-red/10 hover:text-brick-red cursor-pointer"
                              >
                                {getCategoryName(blogPosts[0].mainCategory)}
                              </Badge>
                            </Link>
                          ) : (
                            <Badge variant="outline" className="text-muted-foreground">
                              {t("blog.public.categories.noCategory")}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Sub Categories */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">
                          {t("blog.public.categories.subCategories")}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {isBlogLoading ? (
                            <Badge variant="outline" className="animate-pulse">
                              {t("blog.public.categories.loading")}
                            </Badge>
                          ) : blogPosts[0]?.subCategories && blogPosts[0].subCategories.length > 0 ? (
                            blogPosts[0].subCategories.map((category) => (
                              <Link 
                                key={category.id}
                                href={`/blog?subCategory=${category.id}`}
                              >
                                <Badge 
                                  variant="outline" 
                                  className="hover:bg-deep-teal/10 hover:text-deep-teal cursor-pointer"
                                >
                                  {getCategoryName(category)}
                                </Badge>
                              </Link>
                            ))
                          ) : (
                            <Badge variant="outline" className="text-muted-foreground">
                              {t("blog.public.categories.noSubCategories")}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
} 