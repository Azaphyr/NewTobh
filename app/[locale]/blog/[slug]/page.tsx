import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowLeft, Share2, ThumbsUp, MessageSquare, Bookmark } from "lucide-react"

// This is a mock function to simulate fetching blog post data
// In a real application, this would fetch data from an API or database
function getBlogPostData(slug: string) {
  // Mock data for demonstration purposes
  const posts = {
    "tips-for-new-dungeon-masters": {
      title: "5 Tips for New Dungeon Masters",
      description:
        "Starting your journey as a Dungeon Master can be intimidating. Here are five essential tips to help you create memorable experiences for your players.",
      date: "April 28, 2025",
      readTime: "5 min read",
      author: "Sarah Johnson",
      authorRole: "President & Senior DM",
      category: "Dungeon Mastering",
      image: "/placeholder.svg?height=500&width=1000",
      content: `
        <p>So you've decided to take the plunge and become a Dungeon Master. Congratulations! Being a DM is one of the most rewarding experiences in tabletop gaming, but it can also feel overwhelming at first. Here are five essential tips to help you get started on the right foot.</p>
        
        <h2>1. Start Small</h2>
        <p>Many new DMs make the mistake of trying to create an entire world with complex political systems, religions, and histories before running their first game. While worldbuilding is fun, it's better to start with a small village or town and a simple adventure. This allows you to focus on mastering the basic rules and developing your storytelling skills without getting overwhelmed.</p>
        <p>Consider running a pre-written adventure for your first few sessions. These adventures are designed by experienced game designers and provide a solid structure to build upon.</p>
        
        <h2>2. Know the Rules, but Don't Be Ruled by Them</h2>
        <p>Understanding the basic rules of the game is important, but don't feel like you need to memorize the entire rulebook before your first session. Focus on the core mechanics: ability checks, combat, and saving throws. Keep a rulebook handy for reference, and don't be afraid to look things up during the game.</p>
        <p>Remember that the rules are guidelines, not strict laws. If a rule is slowing down the game or getting in the way of fun, it's okay to make a ruling on the spot and look up the official rule later.</p>
        
        <h2>3. Embrace Improvisation</h2>
        <p>No matter how much you prepare, your players will inevitably do something unexpected. This is part of the fun of D&D! Instead of trying to force players back onto your planned path, learn to adapt and improvise.</p>
        <p>Keep a list of random names, locations, and encounters that you can pull from when needed. Practice saying "Yes, and..." to player ideas, building upon their creativity rather than shutting it down.</p>
        
        <h2>4. Focus on Fun, Not Perfection</h2>
        <p>Many new DMs put immense pressure on themselves to create the perfect game. Remember that D&D is a collaborative storytelling experience, and everyone at the table contributes to the fun. Your job is to facilitate an enjoyable experience, not to perform flawlessly.</p>
        <p>After each session, ask your players what they enjoyed and what they'd like to see more of. This feedback will help you improve while reminding you that the goal is for everyone to have fun.</p>
        
        <h2>5. Take Care of Yourself</h2>
        <p>Being a DM requires mental and emotional energy. It's important to set boundaries and take care of yourself. Schedule breaks during long sessions, have water and snacks available, and don't be afraid to end a session early if you're feeling drained.</p>
        <p>Remember that it's okay to say no to player requests that would make you uncomfortable or that would disrupt the game. Your enjoyment matters too!</p>
        
        <h2>Conclusion</h2>
        <p>Becoming a skilled Dungeon Master takes time and practice. Be patient with yourself, learn from each session, and remember that the goal is for everyone—including you—to have fun. With these tips in mind, you're well on your way to creating memorable adventures for your players.</p>
        
        <p>Happy gaming!</p>
      `,
      relatedPosts: [
        {
          title: "Building Memorable NPCs",
          slug: "building-memorable-npcs",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          title: "Worldbuilding Basics: Creating Believable Settings",
          slug: "worldbuilding-basics",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          title: "Managing Combat for New DMs",
          slug: "managing-combat-new-dms",
          image: "/placeholder.svg?height=200&width=400",
        },
      ],
    },
    "choosing-first-miniature-painting-set": {
      title: "Miniature Painting: Choosing Your First Set",
      description:
        "With so many options available, selecting your first miniature painting set can be overwhelming. This guide will help you make informed choices.",
      date: "April 15, 2025",
      readTime: "8 min read",
      author: "Elena Rodriguez",
      authorRole: "Workshop Leader & Miniature Artist",
      category: "Miniature Painting",
      image: "/placeholder.svg?height=500&width=1000",
      content: `
        <p>Entering the world of miniature painting can be both exciting and overwhelming. With countless brands, types of paints, brushes, and tools available, it's easy to feel lost when putting together your first painting set. This guide aims to simplify the process and help you make informed choices.</p>
        
        <h2>Understanding Paint Types</h2>
        <p>There are three main types of paints used for miniatures:</p>
        
        <h3>Acrylic Paints</h3>
        <p>These are the most common and beginner-friendly option. They're water-based, dry quickly, and are easy to clean up. Brands like Citadel, Vallejo, Army Painter, and Reaper are popular choices among miniature painters.</p>
        
        <h3>Oil Paints</h3>
        <p>Oil paints have a longer drying time, which allows for more blending and working time. However, they require solvents for cleanup and are generally more advanced.</p>
        
        <h3>Enamel Paints</h3>
        <p>These are solvent-based and create a hard, durable finish. They're less common for miniature painting due to their strong odor and cleanup requirements.</p>
        
        <p>For beginners, we recommend starting with acrylic paints. They're forgiving, versatile, and there are many resources available for learning techniques with acrylics.</p>
        
        <h2>Essential Colors for Beginners</h2>
        <p>You don't need to buy every color under the sun to get started. Here's a basic palette that will allow you to paint most miniatures:</p>
        
        <ul>
          <li>White</li>
          <li>Black</li>
          <li>Red</li>
          <li>Blue</li>
          <li>Yellow</li>
          <li>Green</li>
          <li>Brown</li>
          <li>Metallic Silver</li>
          <li>Metallic Gold</li>
          <li>Flesh tone (if painting humanoid figures)</li>
        </ul>
        
        <p>Many companies offer starter sets that include these basic colors. As you gain experience, you can expand your collection to include more specialized colors.</p>
        
        <h2>Choosing the Right Brushes</h2>
        <p>Quality brushes make a significant difference in your painting experience. For miniature painting, you'll want brushes with good points that hold their shape. Here are the essential brushes for beginners:</p>
        
        <ul>
          <li>Detail brush (size 0 or 00) for fine details</li>
          <li>Standard brush (size 1 or 2) for general painting</li>
          <li>Larger brush (size 4 or 6) for basecoating and drybrushing</li>
        </ul>
        
        <p>Look for brushes made with natural hair (like kolinsky sable) or quality synthetic fibers. While natural hair brushes are typically more expensive, they often provide better performance and longevity if properly cared for.</p>
        
        <h2>Essential Tools and Accessories</h2>
        <p>Beyond paints and brushes, here are some tools that will make your painting experience more enjoyable:</p>
        
        <ul>
          <li>Palette or wet palette for mixing paints</li>
          <li>Primer (white, black, or gray)</li>
          <li>Varnish (matte, satin, or gloss) for protecting your finished work</li>
          <li>Hobby knife for removing mold lines</li>
          <li>Fine grit sandpaper or files</li>
          <li>Good lighting (a desk lamp with a daylight bulb is ideal)</li>
          <li>Magnifying glass or headband magnifier for detailed work</li>
          <li>Brush soap for cleaning and maintaining your brushes</li>
        </ul>
        
        <h2>Recommended Starter Sets</h2>
        <p>If you prefer to buy a complete starter set rather than individual items, here are some excellent options:</p>
        
        <ul>
          <li>Reaper Learn to Paint Kit: Includes paints, brushes, and detailed instructions</li>
          <li>Army Painter Starter Set: Offers a good selection of paints and washes</li>
          <li>Vallejo Basic Colors Set: High-quality paints in dropper bottles</li>
          <li>Citadel Essentials Set: Great if you're painting Games Workshop miniatures</li>
        </ul>
        
        <h2>Where to Buy Your Supplies</h2>
        <p>You can find miniature painting supplies at:</p>
        
        <ul>
          <li>Local hobby and game stores</li>
          <li>Art supply stores (though they may not have miniature-specific products)</li>
          <li>Online retailers specializing in miniature hobbies</li>
          <li>General online marketplaces</li>
        </ul>
        
        <p>Shopping at local stores allows you to see products in person and often provides the opportunity to get advice from experienced staff.</p>
        
        <h2>Conclusion</h2>
        <p>Remember that miniature painting is a hobby meant to be enjoyed. Don't feel pressured to buy the most expensive supplies right away. Start with the basics, learn techniques, and gradually expand your collection as your skills and interests develop.</p>
        
        <p>Happy painting!</p>
      `,
      relatedPosts: [
        {
          title: "Terrain Crafting on a Budget",
          slug: "terrain-crafting-budget",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          title: "Advanced Highlighting Techniques",
          slug: "advanced-highlighting-techniques",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          title: "Painting Realistic Skin Tones",
          slug: "painting-realistic-skin-tones",
          image: "/placeholder.svg?height=200&width=400",
        },
      ],
    },
  }

  // Return the post data for the requested slug, or a default if not found
  return (
    posts[slug as keyof typeof posts] || {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
      date: "",
      readTime: "",
      author: "",
      category: "",
      image: "/placeholder.svg?height=500&width=1000",
      content: "<p>This post does not exist.</p>",
      relatedPosts: [],
    }
  )
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostData(params.slug)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/70 z-10" />
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={1000}
          height={500}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[300px] md:h-[400px] text-center text-white">
          <Badge className="mb-4 bg-purple-100 hover:bg-purple-200 text-purple-800 border-none">{post.category}</Badge>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">{post.title}</h1>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
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
            <Link href="/blog" className="hover:text-purple-800">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-foreground">{post.title}</span>
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
                <Link href="/blog" className="flex items-center gap-1 text-purple-800 hover:text-purple-900">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-purple-100">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt={post.author}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>

              {/* Article Content */}
              <article className="prose prose-stone max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Article Footer */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      Like
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      Comment
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Bookmark className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="border-2 border-purple-200 rounded-lg p-6 sticky top-20">
                <h3 className="font-serif text-xl font-bold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <div key={index} className="flex gap-3">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={80}
                        height={60}
                        className="w-20 h-16 object-cover rounded-md flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">{relatedPost.title}</h4>
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="text-xs text-purple-800 hover:text-purple-900"
                        >
                          Read Article →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="font-serif text-xl font-bold mb-4">Categories</h3>
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
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-serif text-xl font-bold mb-4">Subscribe</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest articles delivered straight to your inbox.
                  </p>
                  <form className="space-y-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border rounded-md text-sm"
                    />
                    <Button type="submit" className="w-full bg-purple-800 hover:bg-purple-900">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-12 bg-stone-100">
        <div className="container">
          <h2 className="font-serif text-2xl font-bold mb-6">More Articles You Might Enjoy</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Worldbuilding Basics"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <Badge className="mb-2 bg-purple-100 hover:bg-purple-100 text-purple-800 border-none">
                  Storytelling
                </Badge>
                <h3 className="font-serif text-lg font-bold mb-1">
                  Worldbuilding Basics: Creating Believable Settings
                </h3>
                <p className="text-sm text-muted-foreground mb-2">March 25, 2025 • 7 min read</p>
                <Link
                  href="/blog/worldbuilding-basics"
                  className="text-purple-800 hover:text-purple-900 text-sm font-medium"
                >
                  Read Article →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Terrain Crafting on a Budget"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <Badge className="mb-2 bg-purple-100 hover:bg-purple-100 text-purple-800 border-none">
                  Miniature Painting
                </Badge>
                <h3 className="font-serif text-lg font-bold mb-1">Terrain Crafting on a Budget</h3>
                <p className="text-sm text-muted-foreground mb-2">March 18, 2025 • 6 min read</p>
                <Link
                  href="/blog/terrain-crafting-budget"
                  className="text-purple-800 hover:text-purple-900 text-sm font-medium"
                >
                  Read Article →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Inclusive Gaming: Creating Safe Spaces"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <Badge className="mb-2 bg-purple-100 hover:bg-purple-100 text-purple-800 border-none">Community</Badge>
                <h3 className="font-serif text-lg font-bold mb-1">Inclusive Gaming: Creating Safe Spaces</h3>
                <p className="text-sm text-muted-foreground mb-2">March 10, 2025 • 5 min read</p>
                <Link
                  href="/blog/inclusive-gaming"
                  className="text-purple-800 hover:text-purple-900 text-sm font-medium"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
