import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, MapPin, Clock, Filter } from "lucide-react";
import { format } from "date-fns";
import { useTranslation } from "@/lib/i18n/client";
import EventModal from "@/components/EventModal";

interface EventTranslation {
  languageCode: string;
  title: string;
  description: string;
  longDescription?: string;
  requirements?: string;
  additionalInfo?: string;
  instructorName?: string;
  instructorBio?: string;
}

interface Event {
  id: string;
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
  pricePremium?: number;
  eventType: string;
  translations: EventTranslation[];
}

interface EventsListProps {
  events: Event[];
}

export function EventsList({ events }: EventsListProps) {
  const [activeTab, setActiveTab] = useState("upcoming");
  const { t } = useTranslation();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedDateRanges, setSelectedDateRanges] = useState<string[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatEventTime = (
    dateString: string,
    endDateString: string | null
  ) => {
    const date = new Date(dateString);
    const timeStr = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (endDateString) {
      const endDate = new Date(endDateString);
      const endTimeStr = endDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return `${timeStr} - ${endTimeStr}`;
    }

    return timeStr;
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };
  const handleExperienceChange = (level: string) => {
    setSelectedExperience((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };
  const handleDateRangeChange = (range: string) => {
    setSelectedDateRanges((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };
  const handleApplyFilters = () => {
    // No-op, filters are applied reactively
  };

  const filteredEvents = events.filter((event) => {
    if (selectedTypes.length > 0 && !selectedTypes.includes(event.eventType)) {
      return false;
    }
    return true;
  });

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
      {/* Filters Sidebar */}
      <div className="w-full md:w-64 space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Filter className="h-4 w-4" /> {t("eventList.filters")}
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">{t("eventList.eventType")}</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="one-shot"
                    className="mr-2"
                    checked={selectedTypes.includes("one-shot")}
                    onChange={() => handleTypeChange("one-shot")}
                  />
                  <label htmlFor="one-shot" className="text-sm">
                    {t("eventList.labelOneShot")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="campaign"
                    className="mr-2"
                    checked={selectedTypes.includes("campaign")}
                    onChange={() => handleTypeChange("campaign")}
                  />
                  <label htmlFor="campaign" className="text-sm">
                    {t("eventList.labelCampaign")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="workshop"
                    className="mr-2"
                    checked={selectedTypes.includes("workshop")}
                    onChange={() => handleTypeChange("workshop")}
                  />
                  <label htmlFor="workshop" className="text-sm">
                    {t("eventList.labelWorkshop")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="social"
                    className="mr-2"
                    checked={selectedTypes.includes("social")}
                    onChange={() => handleTypeChange("social")}
                  />
                  <label htmlFor="social" className="text-sm">
                    {t("eventList.labelSocial")}
                  </label>
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-brick-red hover:bg-brick-red/90"
              onClick={handleApplyFilters}
            >
              {t("eventList.labelApplyFilters")}
            </Button>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="flex-1">
        <div className="flex justify-end items-end mb-6">
          <select className="px-3 py-2 border rounded-md text-sm">
            <option>{t("eventList.labelSortByDate")}</option>
            <option>{t("eventList.labelSortByName")}</option>
            <option>{t("eventList.labelSortByEventType")}</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const translation = event.translations[0] || {};
            const startTime = format(new Date(event.eventDate), "h:mm a");
            const endTime = event.eventEndDate
              ? format(new Date(event.eventEndDate), "h:mm a")
              : null;
            const timeRange = endTime ? `${startTime} - ${endTime}` : startTime;
            return (
              <Card
                key={event.id}
                className="hover:shadow-md transition-all group"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={event.imageUrl || "/placeholder.svg"}
                    alt={translation.title || "Event image"}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 bg-golden-amber hover:bg-golden-amber/90 text-white">
                    {event.eventType}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-serif">
                    {translation.title}
                  </CardTitle>
                  <CardDescription>{translation.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarDays className="h-4 w-4 text-deep-teal" />
                    <span>
                      {format(new Date(event.eventDate), "MMMM d, yyyy")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-deep-teal" />
                    <span>{timeRange}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-deep-teal" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-brick-red hover:bg-brick-red/90 transition-transform hover:translate-y-[-2px]"
                    onClick={() => setSelectedEvent(event)}
                  >
                    {t("eventList.buttonViewDetails")}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
          {selectedEvent && (
            <EventModal
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
