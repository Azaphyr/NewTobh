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

export default function BlogPage() {
  const { t, locale } = useTranslation();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isBlogLoading, setIsBlogLoading] = useState(true);
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      setIsBlogLoading(true);
      try {
        const params = new URLSearchParams();
        params.append("locale", locale);
        params.append("isPublished", "true");
        params.append("includeTranslations", "true");
        params.append("languageCode", locale);

        const response = await fetch(`/api/blog?${params.toString()}`);
        const data = await response.json();
        setBlogPosts(data.posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsBlogLoading(false);
      }
    };

    fetchBlogPosts();
  }, [locale]);
  
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
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t("blog.title")}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{t("blog.description")}</p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder={t("blog.searchPlaceholder")} className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                {t("blog.categories.all")}
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                {t("blog.categories.dungeonMastering")}
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                {t("blog.categories.characterBuilding")}
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                {t("blog.categories.miniaturePainting")}
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                {t("blog.categories.storytelling")}
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                {t("blog.categories.community")}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container">
          <h2 className="font-serif text-2xl font-bold mb-6">{t("blog.featureArticle.titleFeaturedArticle")}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Creating Memorable NPCs"
                width={800}
                height={400}
                className="w-full aspect-[16/9] object-cover rounded-lg"
              />
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center">
              <Badge className="w-fit mb-2 bg-purple-100 hover:bg-purple-200 text-purple-800 border-none">
                Dungeon Mastering
              </Badge>
              <h3 className="font-serif text-3xl font-bold mb-2">
                Creating Memorable NPCs That Your Players Will Love
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                <span>April 28, 2025</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Non-player characters bring your world to life. Learn how to create distinctive personalities that your
                players will remember long after the session ends. This comprehensive guide covers voice acting,
                character motivations, and how to make NPCs that drive your story forward.
              </p>
              <Button asChild className="w-fit bg-purple-800 hover:bg-purple-900">
                <Link href="/blog/creating-memorable-npcs">{t("blog.featureArticle.buttonFeaturedArticle")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 bg-stone-100">
        <div className="container">
          <h2 className="font-serif text-2xl font-bold mb-6">{t("blog.titleLatestArticles")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Article 1 */}
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
                        href="/blog/tips-for-new-game-masters"
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

          <div className="mt-8 flex justify-center">
            <Button variant="outline">{t("blog.buttonLoadMore")}</Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {/* <section className="py-12">
        <div className="container">
          <h2 className="font-serif text-2xl font-bold mb-6">Browse by Category</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/blog/category/dungeon-mastering" className="group">
              <div className="border-2 border-purple-200 rounded-lg p-4 text-center hover:border-purple-800 hover:bg-purple-50 transition-colors">
                <h3 className="font-medium group-hover:text-purple-800">Dungeon Mastering</h3>
                <p className="text-sm text-muted-foreground mt-1">23 articles</p>
              </div>
            </Link>

            <Link href="/blog/category/character-building" className="group">
              <div className="border-2 border-purple-200 rounded-lg p-4 text-center hover:border-purple-800 hover:bg-purple-50 transition-colors">
                <h3 className="font-medium group-hover:text-purple-800">Character Building</h3>
                <p className="text-sm text-muted-foreground mt-1">18 articles</p>
              </div>
            </Link>

            <Link href="/blog/category/miniature-painting" className="group">
              <div className="border-2 border-purple-200 rounded-lg p-4 text-center hover:border-purple-800 hover:bg-purple-50 transition-colors">
                <h3 className="font-medium group-hover:text-purple-800">Miniature Painting</h3>
                <p className="text-sm text-muted-foreground mt-1">15 articles</p>
              </div>
            </Link>

            <Link href="/blog/category/storytelling" className="group">
              <div className="border-2 border-purple-200 rounded-lg p-4 text-center hover:border-purple-800 hover:bg-purple-50 transition-colors">
                <h3 className="font-medium group-hover:text-purple-800">Storytelling</h3>
                <p className="text-sm text-muted-foreground mt-1">12 articles</p>
              </div>
            </Link>

            <Link href="/blog/category/rules-mechanics" className="group">
              <div className="border-2 border-purple-200 rounded-lg p-4 text-center hover:border-purple-800 hover:bg-purple-50 transition-colors">
                <h3 className="font-medium group-hover:text-purple-800">Rules & Mechanics</h3>
                <p className="text-sm text-muted-foreground mt-1">9 articles</p>
              </div>
            </Link>

            <Link href="/blog/category/community" className="group">
              <div className="border-2 border-purple-200 rounded-lg p-4 text-center hover:border-purple-800 hover:bg-purple-50 transition-colors">
                <h3 className="font-medium group-hover:text-purple-800">Community</h3>
                <p className="text-sm text-muted-foreground mt-1">7 articles</p>
              </div>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Newsletter */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">{t("blog.newsletter.title")}</h2>
          <p className="max-w-2xl mx-auto mb-8">
            {t("blog.newsletter.description")}
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t("blog.newsletter.labelEmail")}
                className="flex-1 px-4 py-2 rounded-md text-black"
                aria-label="Email address"
              />
              <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-stone-900">
                {t("blog.newsletter.button")}
              </Button>
            </form>
            <p className="text-xs mt-2 text-purple-200">
              {t("blog.newsletter.privacyPolicy")}
            </p>
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">{t("blog.contribute.title")}</h2>
              <p className="mb-4">
                {t("blog.contribute.description")}
              </p>
              <p className="mb-6">
                {t("blog.contribute.description2")}
              </p>
              <Button asChild className="bg-purple-800 hover:bg-purple-900">
                <Link href="/contact?subject=Blog%20Contribution">{t("blog.contribute.button")}</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Person writing"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
