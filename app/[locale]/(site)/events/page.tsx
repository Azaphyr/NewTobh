"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, MapPin, Clock, Filter } from "lucide-react"
import { EventsList } from "@/components/events-list"
import { useTranslation } from "@/lib/i18n/client"
import { useEffect, useState } from "react"

interface EventTranslation {
  title: string;
  description: string;
  longDescription?: string;
  requirements?: string;
  additionalInfo?: string;
  instructorName?: string;
  instructorBio?: string;
}

interface Event {
  id: number;
  slug: string;
  imageUrl?: string;
  eventDate: string;
  eventEndDate?: string;
  location: string;
  address?: string;
  capacity: number;
  spotsLeft: number;
  price?: number;
  priceMembers?: number;
  eventType: string;
  translations: EventTranslation[];
}

export default function EventsPage() {
  const [eventType, setEventType] = useState<string | null>(null);
  const [showPast, setShowPast] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [isEventsLoading, setIsEventsLoading] = useState(true);
  const { t, locale } = useTranslation();

  useEffect(() => {
    const fetchEvents = async () => {
      setIsEventsLoading(true);
      try {
        const params = new URLSearchParams();
        params.append("locale", locale);
        if (eventType) params.append("type", eventType);
        params.append("past", showPast.toString());
  
        const response = await fetch(`/api/events?${params.toString()}`);
        const data = await response.json();
        setEvents(data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsEventsLoading(false);
      }
    };
  
    fetchEvents();
  }, [eventType, showPast, locale]);
  
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
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t("events.title")}</h1>
          <p className="text-lg md:text-xl max-w-2xl"></p>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-16">
        <div className="container">
          <EventsList events={events} />
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-stone-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">{t("events.titleHostEvent")}</h2>
              <p className="mb-4">
                {t("events.descriptionHostEvent")}
              </p>
              <p className="mb-6">
                {t("events.descriptionHostEvent2")}
              </p>
              <Button asChild className="bg-brick-red hover:bg-brick-red/90">
                <Link href="/contact?subject=Event%20Proposal">{t("events.buttonHostEvent")}</Link>
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
          <h2 className="font-serif text-3xl font-bold mb-4">{t("events.newsletterTitle")}</h2>
          <p className="max-w-2xl mx-auto mb-8">
            {t("events.newsletterDescription")}
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t("events.emailPlaceholder")}
                className="flex-1 px-4 py-2 rounded-md text-black"
                aria-label="Email address"
              />
              <Button type="submit" className="bg-golden-amber hover:bg-golden-amber/90 text-white">
                {t("events.buttonNewsletter")}
              </Button>
            </form>
            <p className="text-xs mt-2 text-stone-300">
              {t("events.privacyPolicy")}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 