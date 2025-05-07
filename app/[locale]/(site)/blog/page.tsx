"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, ArrowRight, ChevronsUpDown } from "lucide-react"
import { useTranslation } from "@/lib/i18n/client"
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";

interface BlogPostTranslation {
  id: number;
  blogPostId: number;
  languageCode: string;
  title: string;
  description: string;
  content: string;
}

interface Category {
  id: string;
  slug: string;
  nameEn: string;
  nameFr: string;
  createdAt: string;
  updatedAt: string;
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [subCategorySearch, setSubCategorySearch] = useState("");
  const [subCategoryPopoverOpen, setSubCategoryPopoverOpen] = useState(false);
  const [mainCategoryPopoverOpen, setMainCategoryPopoverOpen] = useState(false);
  const POSTS_PER_PAGE = 6;
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/admin/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        
        // Use all categories for both main and subcategories
        setMainCategories(data);
        setSubCategories(data);
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
      setIsBlogLoading(true);
      try {
        const params = new URLSearchParams();
        params.append("locale", locale);
        params.append("publishedOnly", "true");
        params.append("includeTranslations", "true");
        params.append("languageCode", locale);
        params.append("page", page.toString());
        params.append("pageSize", POSTS_PER_PAGE.toString());
        
        if (searchQuery) {
          params.append("search", searchQuery);
        }
        
        if (selectedMainCategory) {
          params.append("category", selectedMainCategory);
        }
        
        if (selectedSubCategories.length > 0) {
          selectedSubCategories.forEach(subCatId => params.append("subCategory", subCatId));
        }

        const response = await fetch(`/api/blog?${params.toString()}`);
        const data = await response.json();
        
        if (!response.ok) {
          console.error('Failed to fetch blog posts:', data);
          setBlogPosts([]);
          setHasMore(false);
          return;
        }
        
        if (page === 1) {
          setBlogPosts(data.posts || []);
        } else {
          setBlogPosts(prev => [...prev, ...(data.posts || [])]);
        }
        
        setHasMore(data.totalPages > page);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setBlogPosts([]);
        setHasMore(false);
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
        
        if (!response.ok) {
          console.error('Failed to fetch featured post:', data);
          setFeaturedPost(null);
          return;
        }
        
        setFeaturedPost(data.posts && data.posts.length > 0 ? data.posts[0] : null);
      } catch (error) {
        console.error("Error fetching featured post:", error);
        setFeaturedPost(null);
      }
    };

    fetchBlogPosts();
    fetchFeaturedPost();
  }, [locale, page, searchQuery, selectedMainCategory, selectedSubCategories]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setBlogPosts([]);
  };

  const handleMainCategorySelect = (categoryId: string | null) => {
    setSelectedMainCategory(categoryId);
    setSelectedSubCategories([]); // Reset subcategories when main category changes
    setPage(1);
    setBlogPosts([]);
  };

  const handleSubCategorySelect = (categoryId: string | null) => {
    if (!categoryId) return;
    setSelectedSubCategories(prev => prev.includes(categoryId) ? prev : [...prev, categoryId]);
    setPage(1);
    setBlogPosts([]);
  };

  const handleRemoveSubCategory = (categoryId: string) => {
    setSelectedSubCategories(prev => prev.filter(id => id !== categoryId));
    setPage(1);
    setBlogPosts([]);
  };
  
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

  const getCategoryName = (category: Category) => {
    return locale === 'fr' ? category.nameFr : category.nameEn;
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
          <form onSubmit={handleSearch} className="flex flex-col gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder={t("blog.public.searchPlaceholder")} 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Main & Sub Categories Popover Filters Side by Side */}
            <div className="flex flex-col md:flex-row gap-4 items-start w-full">
              {/* Main Categories Popover Dropdown */}
              <div className="w-full md:w-1/2">
                <h3 className="text-sm font-medium text-muted-foreground">{t("blog.public.categories.mainCategories")}</h3>
                <Popover open={mainCategoryPopoverOpen} onOpenChange={setMainCategoryPopoverOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between"
                    >
                      {selectedMainCategory
                        ? getCategoryName(mainCategories.find(cat => cat.id === selectedMainCategory) || { id: '', slug: '', nameEn: '', nameFr: '', createdAt: '', updatedAt: '' })
                        : t("blog.public.categories.selectMainCategory")}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder={t("blog.public.categories.searchMainCategory") || "Search..."} />
                      <CommandEmpty>{t("blog.public.categories.noCategoryFound")}</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          key="all"
                          value={t("blog.public.categories.all")}
                          onSelect={() => {
                            setSelectedMainCategory(null);
                            setSelectedSubCategories([]);
                            setMainCategoryPopoverOpen(false);
                            setPage(1);
                            setBlogPosts([]);
                          }}
                        >
                          {t("blog.public.categories.all")}
                        </CommandItem>
                        {mainCategories.map(category => (
                          <CommandItem
                            key={category.id}
                            value={getCategoryName(category)}
                            onSelect={() => {
                              setSelectedMainCategory(category.id);
                              setSelectedSubCategories([]);
                              setMainCategoryPopoverOpen(false);
                              setPage(1);
                              setBlogPosts([]);
                            }}
                          >
                            {getCategoryName(category)}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Sub Categories Popover Dropdown */}
              {selectedMainCategory && (
                <div className="w-full md:w-1/2">
                  <h3 className="text-sm font-medium text-muted-foreground">{t("blog.public.categories.subCategories")}</h3>
                  <Popover open={subCategoryPopoverOpen} onOpenChange={setSubCategoryPopoverOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between"
                      >
                        {t("blog.public.categories.selectSubCategories")}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder={t("blog.public.categories.searchSubCategory") || "Search..."} />
                        <CommandEmpty>{t("blog.public.categories.noCategoryFound")}</CommandEmpty>
                        <CommandGroup>
                          {subCategories
                            .filter(subCat => subCat.id !== selectedMainCategory && !selectedSubCategories.includes(subCat.id))
                            .map(category => (
                              <CommandItem
                                key={category.id}
                                value={getCategoryName(category)}
                                onSelect={() => {
                                  setSelectedSubCategories(prev => prev.includes(category.id) ? prev : [...prev, category.id]);
                                  setSubCategoryPopoverOpen(false);
                                  setPage(1);
                                  setBlogPosts([]);
                                }}
                              >
                                {getCategoryName(category)}
                              </CommandItem>
                            ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  {/* Show selected subcategories as badges */}
                  {selectedSubCategories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedSubCategories.map(id => {
                        const category = subCategories.find(c => c.id === id);
                        return category ? (
                          <div key={id} className="flex items-center gap-1 bg-deep-teal/10 text-deep-teal px-2 py-1 rounded">
                            <span>{getCategoryName(category)}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveSubCategory(id)}
                              className="hover:text-brick-red"
                            >
                              ×
                            </button>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Category Stats */}
            <div className="mt-4 text-sm text-muted-foreground">
              <p>
                {selectedMainCategory 
                  ? `${t("blog.public.categories.showing")} ${getCategoryName(mainCategories.find(cat => cat.id === selectedMainCategory) || { id: '', slug: '', nameEn: '', nameFr: '', createdAt: '', updatedAt: '' })}`
                  : t("blog.public.categories.showingAll")}
              </p>
              <p className="mt-1">
                {blogPosts.length} {t("blog.public.categories.postsFound")}
              </p>
            </div>
          </form>
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
                <div className="flex flex-wrap gap-2 mb-2">
                  {featuredPost.mainCategory && (
                    <Badge className="bg-brick-red/10 hover:bg-brick-red/20 text-brick-red border-none">
                      {getCategoryName(featuredPost.mainCategory)}
                    </Badge>
                  )}
                  {featuredPost.subCategories?.map(category => (
                    <Badge key={category.id} className="bg-deep-teal/10 hover:bg-deep-teal/20 text-deep-teal border-none">
                      {getCategoryName(category)}
                    </Badge>
                  ))}
                </div>
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
          ) : blogPosts && blogPosts.length > 0 ? (
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
                        <div className="flex flex-wrap gap-2 mb-2">
                          {post.mainCategory && (
                            <Badge className="bg-brick-red/10 hover:bg-brick-red/20 text-brick-red border-none">
                              {getCategoryName(post.mainCategory)}
                            </Badge>
                          )}
                          {post.subCategories?.map(category => (
                            <Badge key={category.id} className="bg-deep-teal/10 hover:bg-deep-teal/20 text-deep-teal border-none">
                              {getCategoryName(category)}
                            </Badge>
                          ))}
                        </div>
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
          ) : (
            <div className="text-center py-8">
              <p>{t("blog.public.noPosts")}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
} 