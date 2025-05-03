"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, MapPin, Clock, Filter } from "lucide-react"

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

interface EventsListProps {
  upcomingEvents: Event[]
  pastEvents: Event[]
}

export function EventsList({ upcomingEvents, pastEvents }: EventsListProps) {
  const [activeTab, setActiveTab] = useState("upcoming")

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatEventTime = (dateString: string, endDateString: string | null) => {
    const date = new Date(dateString)
    const timeStr = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })

    if (endDateString) {
      const endDate = new Date(endDateString)
      const endTimeStr = endDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
      return `${timeStr} - ${endTimeStr}`
    }

    return timeStr
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
      {/* Filters Sidebar */}
      <div className="w-full md:w-64 space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filters
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Event Type</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="one-shot" className="mr-2" />
                  <label htmlFor="one-shot" className="text-sm">
                    One-Shot Games
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="campaign" className="mr-2" />
                  <label htmlFor="campaign" className="text-sm">
                    Campaigns
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="workshop" className="mr-2" />
                  <label htmlFor="workshop" className="text-sm">
                    Workshops
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="social" className="mr-2" />
                  <label htmlFor="social" className="text-sm">
                    Social Gatherings
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Experience Level</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="beginner" className="mr-2" />
                  <label htmlFor="beginner" className="text-sm">
                    Beginner Friendly
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="intermediate" className="mr-2" />
                  <label htmlFor="intermediate" className="text-sm">
                    Intermediate
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="advanced" className="mr-2" />
                  <label htmlFor="advanced" className="text-sm">
                    Advanced
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Date Range</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="this-week" className="mr-2" />
                  <label htmlFor="this-week" className="text-sm">
                    This Week
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="this-month" className="mr-2" />
                  <label htmlFor="this-month" className="text-sm">
                    This Month
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="next-month" className="mr-2" />
                  <label htmlFor="next-month" className="text-sm">
                    Next Month
                  </label>
                </div>
              </div>
            </div>

            <Button className="w-full bg-brick-red hover:bg-brick-red/90">Apply Filters</Button>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="flex-1">
        <Tabs defaultValue="upcoming" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <select className="px-3 py-2 border rounded-md text-sm">
              <option>Sort by Date (Newest)</option>
              <option>Sort by Date (Oldest)</option>
              <option>Sort by Name (A-Z)</option>
            </select>
          </div>

          <TabsContent value="upcoming" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <Card key={event.id}>
                    <div className="relative">
                      <Image
                        src={event.imageUrl || "/placeholder.svg?height=200&width=400"}
                        alt={event.translations[0]?.title || "Event"}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-3 right-3 bg-golden-amber hover:bg-golden-amber text-white">
                        {event.eventType}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-serif">{event.translations[0]?.title}</CardTitle>
                      <CardDescription>{event.translations[0]?.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarDays className="h-4 w-4 text-deep-teal" />
                        <span>{formatEventDate(event.eventDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-deep-teal" />
                        <span>{formatEventTime(event.eventDate, event.eventEndDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-deep-teal" />
                        <span>{event.location}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-brick-red hover:bg-brick-red/90">
                        <Link href={`/events/${event.slug}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-muted-foreground">No upcoming events found.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.length > 0 ? (
                pastEvents.map((event) => (
                  <Card key={event.id} className="opacity-80">
                    <div className="relative">
                      <Image
                        src={event.imageUrl || "/placeholder.svg?height=200&width=400"}
                        alt={event.translations[0]?.title || "Event"}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg grayscale"
                      />
                      <Badge className="absolute top-3 right-3 bg-stone-500 hover:bg-stone-500 text-white">
                        {event.eventType}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-serif">{event.translations[0]?.title}</CardTitle>
                      <CardDescription>{event.translations[0]?.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarDays className="h-4 w-4 text-deep-teal" />
                        <span>{formatEventDate(event.eventDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-deep-teal" />
                        <span>{event.location}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/events/${event.slug}`}>View Recap</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-muted-foreground">No past events found.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 