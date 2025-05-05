"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { useTranslation } from "@/lib/i18n/client"

interface EventTranslation {
  title: string
  description: string
  locale: string
}

interface Event {
  id: string
  slug: string
  type: "one-shot" | "workshop" | "campaign"
  imageUrl: string
  startDate: string
  endDate: string | null
  location: string
  capacity: number
  price: number
  pricePremium: number
  translations: EventTranslation[]
  createdAt: string
  updatedAt: string
}

export default function AdminEventsPage() {
  const router = useRouter()
  const { t } = useTranslation()
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [eventType, setEventType] = useState<string>("all")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchEvents()
  }, [])

  async function fetchEvents() {
    try {
      const response = await fetch("/api/events")
      if (!response.ok) {
        throw new Error("Failed to fetch events")
      }
      const data = await response.json()
      setEvents(data)
      setError(null)
    } catch (error) {
      setError("Failed to fetch events")
      toast.error(t("admin.events.errorFetch"))
    } finally {
      setIsLoading(false)
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm(t("admin.events.confirmDelete"))) {
      return
    }

    try {
      const response = await fetch(`/api/events/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete event")
      }

      setEvents(events.filter((event) => event.id !== id))
      toast.success(t("admin.events.successDelete"))
    } catch (error) {
      toast.error(t("admin.events.errorDelete"))
    }
  }

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.translations.some(
      (translation) =>
        translation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        translation.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const matchesType = eventType === "all" || event.type === eventType
    return matchesSearch && matchesType
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p>{t("admin.events.loading")}</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{t("admin.events.title")}</h1>
        <Button onClick={() => router.push("/admin/events/new")}>
          {t("admin.events.buttonNew")}
        </Button>
      </div>

      <div className="flex gap-4">
        <Input
          placeholder={t("admin.events.searchPlaceholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={eventType} onValueChange={setEventType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t("admin.events.filterType")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("admin.events.filterAll")}</SelectItem>
            <SelectItem value="one-shot">{t("admin.events.filterOneShot")}</SelectItem>
            <SelectItem value="workshop">{t("admin.events.filterWorkshop")}</SelectItem>
            <SelectItem value="campaign">{t("admin.events.filterCampaign")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {filteredEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                {event.translations[0]?.title || t("admin.events.untitled")}
              </CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push(`/admin/events/${event.id}/edit`)}
                >
                  {t("admin.events.buttonEdit")}
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(event.id)}
                >
                  {t("admin.events.buttonDelete")}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {t("admin.events.labelType")}
                  </p>
                  <p className="capitalize">{event.type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {t("admin.events.labelDate")}
                  </p>
                  <p>
                    {new Date(event.startDate).toLocaleDateString()}
                    {event.endDate &&
                      ` - ${new Date(event.endDate).toLocaleDateString()}`}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {t("admin.events.labelLocation")}
                  </p>
                  <p>{event.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {t("admin.events.labelCapacity")}
                  </p>
                  <p>{event.capacity}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {t("admin.events.labelPrice")}
                  </p>
                  <p>€{event.price}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {t("admin.events.labelPricePremium")}
                  </p>
                  <p>€{event.pricePremium}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 