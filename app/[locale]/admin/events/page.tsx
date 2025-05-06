"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/lib/i18n/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { fr, enUS } from "date-fns/locale"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { EditEventModal } from "./edit-modal"
import { Pencil, Trash2, Archive, ArchiveRestore } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface EventTranslation {
  id: string
  eventId: string
  languageCode: string
  title: string
  description: string
  shortDescription: string
}

interface Event {
  id: string
  slug: string
  imageUrl?: string
  eventDate: string
  eventEndDate?: string
  location: string
  address?: string
  capacity: number
  spotsLeft: number
  price?: number
  priceMembers?: number
  pricePremium?: number
  eventType: string
  isArchived: boolean
  translations: EventTranslation[]
}

export default function AdminEventsPage() {
  const { t, locale } = useTranslation()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("active")
  const [refreshFlag, setRefreshFlag] = useState(false)

  const fetchEvents = async (showArchived: boolean) => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/admin/events?showArchived=${showArchived}`)
      if (!response.ok) {
        throw new Error("Failed to fetch events")
      }
      const data = await response.json()
      setEvents(data.events)
    } catch (error) {
      console.error("Error fetching events:", error)
      toast.error(t("admin.events.errorFetching"))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents(activeTab === "archived")
  }, [activeTab, refreshFlag])

  const formatDate = (date: string) => {
    return format(new Date(date), "PPP", { locale: locale === "fr" ? fr : enUS })
  }

  const getEventStatus = (event: Event) => {
    const now = new Date()
    const eventDate = new Date(event.eventDate)
    const eventEndDate = event.eventEndDate ? new Date(event.eventEndDate) : null

    if (eventEndDate && now > eventEndDate) {
      return "completed"
    }
    if (now >= eventDate && (!eventEndDate || now <= eventEndDate)) {
      return "ongoing"
    }
    return "upcoming"
  }

  const getStatusBadge = (status: "upcoming" | "ongoing" | "completed") => {
    const variants = {
      upcoming: "default",
      ongoing: "secondary",
      completed: "outline"
    } as const

    const labels = {
      upcoming: t("admin.events.statusUpcoming"),
      ongoing: t("admin.events.statusOngoing"),
      completed: t("admin.events.statusCompleted")
    }

    return (
      <Badge variant={variants[status]}>
        {labels[status]}
      </Badge>
    )
  }

  const filteredEvents = events.filter(event => {
    const translation = event.translations.find(t => t.languageCode === locale)
    if (!translation) return false

    const searchLower = searchQuery.toLowerCase()
    const matchesSearch = (
      translation.title.toLowerCase().includes(searchLower) ||
      event.location.toLowerCase().includes(searchLower)
    )

    // Filter based on archive status
    const matchesArchiveStatus = activeTab === "archived" ? event.isArchived : !event.isArchived

    return matchesSearch && matchesArchiveStatus
  })

  const handleEdit = (event: Event) => {
    setSelectedEvent(event)
    setIsEditModalOpen(true)
  }

  const handleSave = () => {
    fetchEvents(activeTab === "archived")
  }

  const handleDelete = async (event: Event) => {
    if (!confirm(event.isArchived ? t("admin.events.confirmUnarchive") : t("admin.events.confirmArchive"))) {
      return
    }

    try {
      const response = await fetch(`/api/admin/events/${event.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isArchived: !event.isArchived
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update event")
      }

      toast.success(event.isArchived ? t("admin.events.successUnarchive") : t("admin.events.successArchive"))
      setRefreshFlag(flag => !flag)
    } catch (error) {
      console.error("Error updating event:", error)
      toast.error(t("admin.events.errorUpdate"))
    }
  }

  const handlePermanentDelete = async (event: Event) => {
    if (!confirm(t("admin.events.confirmDelete"))) {
      return
    }
    try {
      const response = await fetch(`/api/admin/events/${event.id}`, {
        method: "DELETE",
      })
      if (!response.ok) {
        throw new Error("Failed to delete event")
      }
      toast.success(t("admin.events.successDelete"))
      setRefreshFlag(flag => !flag)
    } catch (error) {
      console.error("Error deleting event:", error)
      toast.error(t("admin.events.errorDelete"))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{t("admin.events.title")}</h1>
        <Button onClick={() => router.push("/admin/events/new")}>
          {t("admin.events.buttonNew")}
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Input
          placeholder={t("admin.events.searchPlaceholder")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList>
          <TabsTrigger value="active">{t("admin.events.statusUpcoming")}</TabsTrigger>
          <TabsTrigger value="archived">{t("admin.events.statusArchived")}</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-4">
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("admin.events.title")}</TableHead>
                  <TableHead>{t("admin.events.date")}</TableHead>
                  <TableHead>{t("admin.events.location")}</TableHead>
                  <TableHead>{t("admin.events.status")}</TableHead>
                  <TableHead>{t("admin.events.participants")}</TableHead>
                  <TableHead className="text-right">{t("admin.events.actions")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      {t("admin.events.loading")}
                    </TableCell>
                  </TableRow>
                ) : filteredEvents.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      {t("admin.events.noEvents")}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredEvents.map((event) => {
                    const translation = event.translations.find(t => t.languageCode === locale)
                    if (!translation) return null

                    return (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{translation.title}</TableCell>
                        <TableCell>{formatDate(event.eventDate)}</TableCell>
                        <TableCell>{event.location}</TableCell>
                        <TableCell>{getStatusBadge(getEventStatus(event))}</TableCell>
                        <TableCell>
                          {event.capacity - event.spotsLeft}/{event.capacity}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleEdit(event)}
                                    className="h-8 w-8"
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{t("admin.events.buttonEdit")}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDelete(event)}
                                    className="h-8 w-8"
                                  >
                                    {event.isArchived ? (
                                      <ArchiveRestore className="h-4 w-4" />
                                    ) : (
                                      <Archive className="h-4 w-4" />
                                    )}
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>
                                    {event.isArchived
                                      ? t("admin.events.buttonUnarchiveTooltip")
                                      : t("admin.events.buttonArchiveTooltip")}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="archived" className="mt-4">
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("admin.events.title")}</TableHead>
                  <TableHead>{t("admin.events.date")}</TableHead>
                  <TableHead>{t("admin.events.location")}</TableHead>
                  <TableHead>{t("admin.events.status")}</TableHead>
                  <TableHead>{t("admin.events.participants")}</TableHead>
                  <TableHead className="text-right">{t("admin.events.actions")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      {t("admin.events.loading")}
                    </TableCell>
                  </TableRow>
                ) : filteredEvents.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      {t("admin.events.noEvents")}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredEvents.map((event) => {
                    const translation = event.translations.find(t => t.languageCode === locale)
                    if (!translation) return null

                    return (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{translation.title}</TableCell>
                        <TableCell>{formatDate(event.eventDate)}</TableCell>
                        <TableCell>{event.location}</TableCell>
                        <TableCell>{getStatusBadge(getEventStatus(event))}</TableCell>
                        <TableCell>
                          {event.capacity - event.spotsLeft}/{event.capacity}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleEdit(event)}
                                    className="h-8 w-8"
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{t("admin.events.buttonEdit")}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDelete(event)}
                                    className="h-8 w-8"
                                  >
                                    {event.isArchived ? (
                                      <ArchiveRestore className="h-4 w-4" />
                                    ) : (
                                      <Archive className="h-4 w-4" />
                                    )}
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>
                                    {event.isArchived
                                      ? t("admin.events.buttonUnarchiveTooltip")
                                      : t("admin.events.buttonArchiveTooltip")}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            {event.isArchived && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handlePermanentDelete(event)}
                                      className="h-8 w-8"
                                    >
                                      <Trash2 className="h-4 w-4 text-brick-red" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{t("admin.events.buttonDelete")}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      <EditEventModal
        event={selectedEvent}
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false)
          setSelectedEvent(null)
        }}
        onSave={handleSave}
      />
    </div>
  )
} 