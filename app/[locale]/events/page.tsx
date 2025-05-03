import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, MapPin, Clock, Filter } from "lucide-react"
import { EventsList } from "@/components/events-list"

export const dynamic = 'force-dynamic'

interface Event {
  id: number
  slug: string
  imageUrl: string | null
  eventDate: string
  eventEndDate: string | null
  location: string
  address: string
  eventType: string
  translations: {
    title: string
    description: string
  }[]
}

async function getEvents(past = false): Promise<Event[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || ""}/api/events?past=${past}&locale=en`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })

    if (!res.ok) {
      throw new Error("Failed to fetch events")
    }

    const data = await res.json()
    return data.events
  } catch (error) {
    console.error("Error fetching events:", error)
    return []
  }
}

export default async function EventsPage() {
  const upcomingEvents = await getEvents(false)
  const pastEvents = await getEvents(true)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-mahogany/90 to-brick-red/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          alt="RPG event"
          width={1600}
          height={400}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[300px] md:h-[400px] text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Events & Activities</h1>
          <p className="text-lg md:text-xl max-w-2xl">Join us for adventures, workshops, and community gatherings.</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="border-b py-2">
        <div className="container">
          <div className="flex text-sm text-muted-foreground">
            <Link href="/" className="hover:text-brick-red">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-foreground">Events</span>
          </div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-16">
        <div className="container">
          <EventsList upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-stone-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Want to Host an Event?</h2>
              <p className="mb-4">
                Are you a Game Master looking to run a game? An artist wanting to share your miniature painting skills?
                Or perhaps you have an idea for a unique tabletop RPG-related workshop?
              </p>
              <p className="mb-6">
                We welcome community members to propose and host events. Our team can help with logistics, promotion,
                and resources to make your event a success.
              </p>
              <Button asChild className="bg-brick-red hover:bg-brick-red/90">
                <Link href="/contact?subject=Event%20Proposal">Submit an Event Proposal</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Game Master with players"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-dark-mahogany text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Never Miss an Event</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to stay updated on upcoming events, workshops, and community news.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-md text-black"
                aria-label="Email address"
              />
              <Button type="submit" className="bg-golden-amber hover:bg-golden-amber/90 text-white">
                Subscribe
              </Button>
            </form>
            <p className="text-xs mt-2 text-stone-300">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
