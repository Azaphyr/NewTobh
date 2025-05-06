import React from 'react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { CalendarDays, MapPin, Clock, Users, DollarSign, X, Info, User, FileText, Building2 } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from "@/lib/i18n/client";

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

interface EventModalProps {
  event: {
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
    translations?: EventTranslation[];
  };
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const { t } = useTranslation();
  
  const startTime = format(new Date(event.eventDate), "h:mm a");
  const endTime = event.eventEndDate
    ? format(new Date(event.eventEndDate), "h:mm a")
    : null;
  const timeRange = endTime ? `${startTime} - ${endTime}` : startTime;

  // Get the first translation with fallback
  const translation = event.translations?.[0] || {
    title: event.slug,
    description: t('events.noDescription'),
    languageCode: "en",
    longDescription: undefined,
    requirements: undefined,
    additionalInfo: undefined,
    instructorName: undefined,
    instructorBio: undefined
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header with close button */}
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            aria-label={t('events.close')}
          >
            <X className="h-5 w-5 text-white" />
          </button>
          
          {/* Event Image */}
          <div className="relative h-48 md:h-64 w-full">
            <Image
              src={event.imageUrl || "/placeholder.svg"}
              alt={`${t('events.imageAlt')} ${translation.title}`}
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <Badge className="bg-golden-amber hover:bg-golden-amber/90 text-white mb-2">
                {t(`events.types.${event.eventType}`)}
              </Badge>
              <h2 className="text-2xl font-serif font-bold text-white">{translation.title}</h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <CalendarDays className="h-5 w-5 text-deep-teal" />
                <span>{format(new Date(event.eventDate), "EEEE, MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-5 w-5 text-deep-teal" />
                <span>{timeRange}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5 text-deep-teal" />
                <div>
                  <p>{event.location}</p>
                  {event.address && (
                    <p className="text-sm text-gray-500">{event.address}</p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-5 w-5 text-deep-teal" />
                <span>{t('events.spotsLeft')} {event.spotsLeft}/{event.capacity}</span>
              </div>
              {event.price && (
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="h-5 w-5 text-deep-teal" />
                  <div>
                    {event.pricePremium ? (
                      <>
                        <p className="line-through text-gray-400">€{event.price}</p>
                        <p className="text-brick-red font-semibold">€{event.pricePremium} {t('events.pricePremium')}</p>
                        {event.priceMembers && (
                          <p className="text-deep-teal font-semibold">€{event.priceMembers} {t('events.priceMembers')}</p>
                        )}
                      </>
                    ) : event.priceMembers ? (
                      <>
                        <p className="line-through text-gray-400">€{event.price}</p>
                        <p className="text-brick-red font-semibold">€{event.priceMembers} {t('events.priceMembers')}</p>
                      </>
                    ) : (
                      <p>€{event.price}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Detailed Information Tabs */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">{t('events.edit.description')}</TabsTrigger>
              <TabsTrigger value="requirements">{t('events.edit.requirements')}</TabsTrigger>
              <TabsTrigger value="instructor">{t('events.edit.instructorName')}</TabsTrigger>
              <TabsTrigger value="additional">{t('events.edit.additionalInfo')}</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-4">
              <div className="prose max-w-none">
                
                  <div className="mt-4">
                    <p className="text-gray-600">{translation.longDescription}</p>
                  </div>
              </div>
            </TabsContent>

            <TabsContent value="requirements" className="mt-4">
              {translation.requirements ? (
                <div className="prose max-w-none">
                  <p className="text-gray-600">{translation.requirements}</p>
                </div>
              ) : (
                <p className="text-gray-500 italic">{t('events.noRequirements')}</p>
              )}
            </TabsContent>

            <TabsContent value="instructor" className="mt-4">
              {translation.instructorName ? (
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold mb-2">{translation.instructorName}</h3>
                  {translation.instructorBio && (
                    <p className="text-gray-600">{translation.instructorBio}</p>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 italic">{t('events.noInstructor')}</p>
              )}
            </TabsContent>

            <TabsContent value="additional" className="mt-4">
              {translation.additionalInfo ? (
                <div className="prose max-w-none">
                  <p className="text-gray-600">{translation.additionalInfo}</p>
                </div>
              ) : (
                <p className="text-gray-500 italic">{t('events.noAdditionalInfo')}</p>
              )}
            </TabsContent>
          </Tabs>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              className="flex-1 bg-brick-red hover:bg-brick-red/90 text-white"
              size="lg"
            >
              {t('events.registerNow')}
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              size="lg"
              onClick={onClose}
            >
              {t('events.close')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal; 