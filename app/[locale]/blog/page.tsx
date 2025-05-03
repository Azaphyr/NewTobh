import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          alt="D&D storytelling"
          width={1600}
          height={400}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[300px] md:h-[400px] text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-lg md:text-xl max-w-2xl">Tips, stories, and insights from our community.</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="border-b py-2">
        <div className="container">
          <div className="flex text-sm text-muted-foreground">
            <Link href="/" className="hover:text-purple-800">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-foreground">Blog</span>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                All
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                Dungeon Mastering
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                Character Building
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                Miniature Painting
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                Storytelling
              </Badge>
              <Badge variant="outline" className="hover:bg-purple-100 cursor-pointer">
                Community
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container">
          <h2 className="font-serif text-2xl font-bold mb-6">Featured Article</h2>

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
                <Link href="/blog/creating-memorable-npcs">Read Article</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 bg-stone-100">
        <div className="container">
          <h2 className="font-serif text-2xl font-bold mb-6">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Article 1 */}
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="5 Tips for New Dungeon Masters"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-purple-100 hover:bg-purple-200 text-purple-800 border-none">
                    Dungeon Mastering
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>April 28, 2025</span>
                  </div>
                </div>
                <CardTitle className="font-serif">5 Tips for New Dungeon Masters</CardTitle>
                <CardDescription>Starting your journey as a Dungeon Master can be intimidating</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-muted-foreground">
                  Starting your journey as a Dungeon Master can be intimidating. Here are five essential tips to help
                  you create memorable experiences for your players without getting overwhelmed in the process.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-purple-800 hover:text-purple-900 p-0 h-auto">
                  <Link href="/blog/tips-for-new-dungeon-masters" className="flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Article 2 */}
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Miniature Painting: Choosing Your First Set"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-purple-100 hover:bg-purple-200 text-purple-800 border-none">
                    Miniature Painting
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>April 15, 2025</span>
                  </div>
                </div>
                <CardTitle className="font-serif">Miniature Painting: Choosing Your First Set</CardTitle>
                <CardDescription>A beginner's guide to selecting the right supplies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-muted-foreground">
                  With so many options available, selecting your first miniature painting set can be overwhelming. This
                  guide will help you make informed choices about paints, brushes, and other essential supplies.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-purple-800 hover:text-purple-900 p-0 h-auto">
                  <Link href="/blog/choosing-first-miniature-painting-set" className="flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Article 3 */}
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Building Memorable NPCs"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-purple-100 hover:bg-purple-200 text-purple-800 border-none">
                    Character Building
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>April 5, 2025</span>
                  </div>
                </div>
                <CardTitle className="font-serif">Creating Characters with Depth</CardTitle>
                <CardDescription>Beyond stats and abilities: crafting memorable heroes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-muted-foreground">
                  A great character is more than just a collection of stats and abilities. Learn how to create a
                  backstory, personality traits, and motivations that will make your character come alive at the table.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-purple-800 hover:text-purple-900 p-0 h-auto">
                  <Link href="/blog/creating-characters-with-depth" className="flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Article 4 */}
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Worldbuilding Basics"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-purple-100 hover:bg-purple-200 text-purple-800 border-none">Storytelling</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>March 25, 2025</span>
                  </div>
                </div>
                <CardTitle className="font-serif">Worldbuilding Basics: Creating Believable Settings</CardTitle>
                <CardDescription>Craft immersive worlds for your campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-muted-foreground">
                  Effective worldbuilding creates a foundation for memorable adventures. This guide covers the
                  essentials of creating geography, cultures, and history that feel authentic and engaging.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-purple-800 hover:text-purple-900 p-0 h-auto">
                  <Link href="/blog/worldbuilding-basics" className="flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Article 5 */}
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Terrain Crafting on a Budget"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-purple-100 hover:bg-purple-200 text-purple-800 border-none">
                    Miniature Painting
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>March 18, 2025</span>
                  </div>
                </div>
                <CardTitle className="font-serif">Terrain Crafting on a Budget</CardTitle>
                <CardDescription>Create impressive game environments without breaking the bank</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-muted-foreground">
                  You don't need expensive materials to create stunning terrain for your games. Learn how to use
                  everyday items and affordable crafting supplies to build immersive environments.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-purple-800 hover:text-purple-900 p-0 h-auto">
                  <Link href="/blog/terrain-crafting-budget" className="flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Article 6 */}
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Inclusive Gaming: Creating Safe Spaces"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-purple-100 hover:bg-purple-200 text-purple-800 border-none">Community</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>March 10, 2025</span>
                  </div>
                </div>
                <CardTitle className="font-serif">Inclusive Gaming: Creating Safe Spaces</CardTitle>
                <CardDescription>Building welcoming communities for all players</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-muted-foreground">
                  Learn practical strategies for creating gaming environments where everyone feels welcome, respected,
                  and able to participate fully in the shared storytelling experience.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-purple-800 hover:text-purple-900 p-0 h-auto">
                  <Link href="/blog/inclusive-gaming" className="flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
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
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Get the latest articles, tips, and community news delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-md text-black"
                aria-label="Email address"
              />
              <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-stone-900">
                Subscribe
              </Button>
            </form>
            <p className="text-xs mt-2 text-purple-200">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Share Your Knowledge</h2>
              <p className="mb-4">
                Are you passionate about D&D, miniature painting, or storytelling? We welcome guest contributors to our
                blog!
              </p>
              <p className="mb-6">
                Whether you're a seasoned Dungeon Master with tips to share, an artist with painting tutorials, or a
                storyteller with insights on character development, we'd love to feature your expertise.
              </p>
              <Button asChild className="bg-purple-800 hover:bg-purple-900">
                <Link href="/contact?subject=Blog%20Contribution">Submit an Article Idea</Link>
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
