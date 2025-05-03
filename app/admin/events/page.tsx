"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus, Search, Edit, Trash2 } from "lucide-react"

interface Event {
  id: number
  slug: string
  eventDate: string
  eventType: string
  translations: {
    title: string
    description: string
  }[]
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [eventType, setEventType] = useState<string | null>(null)
  const [showPast, setShowPast] = useState(false)

  useEffect(() => {
    fetchEvents()
  }, [eventType, showPast])

  const fetchEvents = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      params.append("locale", "en")
      if (eventType) params.append("type", eventType)
      params.append("past", showPast.toString())

      const response = await fetch(`/api/events?${params.toString()}`)
      const data = await response.json()
      setEvents(data.events)
    } catch (error) {
      console.error("Error fetching events:", error)
    } finally {
      setLoading(false)
    }
  }

  const deleteEvent = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return

    try {
      const response = await fetch(`/api/events/${slug}`, {
        method: "DELETE",
      })

      if (response.ok) {
        fetchEvents()
      } else {
        const error = await response.json()
        alert(`Failed to delete event: ${error.error}`)
      }
    } catch (error) {
      console.error("Error deleting event:", error)
      alert("An error occurred while deleting the event")
    }
  }

  const filteredEvents = events.filter((event) => {
    const title = event.translations[0]?.title || ""
    return title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Events</h1>
          <p className="text-muted-foreground">Manage your events and activities</p>
        </div>
        <Button asChild className="bg-brick-red hover:bg-brick-red/90">
          <Link href="/admin/events/new">
            <Plus className="h-4 w-4 mr-2" />
            Add New Event
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
                placeholder="Search events..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={eventType || ""} onValueChange={(value) => setEventType(value || null)}>
                <SelectTrigger>
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="one-shot">One-Shot</SelectItem>
                  <SelectItem value="campaign">Campaign</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="showPast"
                checked={showPast}
                onChange={(e) => setShowPast(e.target.checked)}
                className="rounded border-gray-300"
              />
              <label htmlFor="showPast">Show Past Events</label>
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
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-bold">{event.translations[0]?.title || "Untitled Event"}</h2>
                        <p className="text-muted-foreground">{event.translations[0]?.description || ""}</p>
                      </div>
                      <Badge className="bg-golden-amber hover:bg-golden-amber text-white">{event.eventType}</Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(event.eventDate).toLocaleDateString()} at{" "}
                        {new Date(event.eventDate).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-2 p-6 bg-slate-50 border-t md:border-t-0 md:border-l">
                    <Button asChild variant="outline" size="sm" className="flex items-center gap-1">
                      <Link href={`/admin/events/${event.slug}`}>
                        <Edit className="h-4 w-4" />
                        Edit
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 text-red-600 hover:text-red-700"
                      onClick={() => deleteEvent(event.slug)}
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
              <p className="text-muted-foreground">No events found</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
