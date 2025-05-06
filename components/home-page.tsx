"use client";

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
import {
  CalendarDays,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Paintbrush,
  BookOpen,
  Dice1,
} from "lucide-react";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { useTranslation } from "@/lib/i18n/client";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import HeroSection from "./hero-section-main";

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

interface BlogPostTranslation {
  id: number;
  blogPostId: number;
  languageCode: string;
  title: string;
  description: string;
  content: string;
}

interface BlogPost {
  id: number;
  slug: string;
  imageUrl: string | null;
  publishedAt: string | null;
  isPublished: boolean;
  isFeatured: boolean;
  readTime: number | null;
  category: string;
  authorId: number | null;
  createdAt: string;
  updatedAt: string;
  translations: BlogPostTranslation[];
}

export function HomePage() {
  const [eventType, setEventType] = useState<string | null>(null);
  const [showPast, setShowPast] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isEventsLoading, setIsEventsLoading] = useState(true);
  const [isBlogLoading, setIsBlogLoading] = useState(true);
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

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setIsBlogLoading(true);
      try {
        const params = new URLSearchParams();
        params.append("locale", locale);
        params.append("isPublished", "true");
        params.append("includeTranslations", "true");
        params.append("languageCode", locale);

        const response = await fetch(`/api/blog?${params.toString()}`);
        const data = await response.json();
        setBlogPosts(data.posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsBlogLoading(false);
      }
    };

    fetchBlogPosts();
  }, [locale]);

  const stripHtmlAndTruncate = (html: string, maxLength: number) => {
    // Remove HTML tags
    const plainText: string = html.replace(/<[^>]+>/g, "");
    // Trim and add ellipsis if needed
    return plainText.length > maxLength
      ? plainText.substring(0, maxLength).trim() + "..."
      : plainText;
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {/* <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-mahogany/90 to-brick-red/70 z-10" />
        <Image
          src="/mascot.png"
          alt="Tabletop RPG players around a table"
          width={800}
          height={300}
          className=" h-[400px] md:h-[600px] object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[500px] md:h-[600px] text-center text-white">
          <div className="animate-fadeIn">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
              {t("home.hero.title")}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              {t("home.hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-golden-amber hover:bg-golden-amber/90 text-white font-medium transition-transform hover:scale-105"
              >
                <Link href="/events">{t("home.hero.eventsButton")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-brick-red text-white hover:bg-white/10 transition-transform hover:scale-105"
              >
                <Link href="/membership">{t("home.hero.joinButton")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      <HeroSection />

      {/* Quick Links Section */}
      <section className="py-16 bg-stone-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-deep-teal/20 hover:border-deep-teal/40 transition-all hover:shadow-md group">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-deep-teal group-hover:scale-110 transition-transform" />
                  {t("home.quickLinks.events.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("home.quickLinks.events.description")}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="text-brick-red hover:text-brick-red/80 p-0 h-auto group"
                >
                  <Link href="/events" className="flex items-center gap-1">
                    {t("home.quickLinks.events.link")}{" "}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-deep-teal/20 hover:border-deep-teal/40 transition-all hover:shadow-md group">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Paintbrush className="h-5 w-5 text-deep-teal group-hover:scale-110 transition-transform" />
                  {t("home.quickLinks.workshops.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("home.quickLinks.workshops.description")}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="text-brick-red hover:text-brick-red/80 p-0 h-auto group"
                >
                  <Link
                    href="/events?type=workshop"
                    className="flex items-center gap-1"
                  >
                    {t("home.quickLinks.workshops.link")}{" "}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-deep-teal/20 hover:border-deep-teal/40 transition-all hover:shadow-md group">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-deep-teal group-hover:scale-110 transition-transform" />
                  {t("home.quickLinks.storytelling.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("home.quickLinks.storytelling.description")}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="text-brick-red hover:text-brick-red/80 p-0 h-auto group"
                >
                  <Link
                    href="/events?type=storytelling"
                    className="flex items-center gap-1"
                  >
                    {t("home.quickLinks.storytelling.link")}{" "}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-2">
                {t("home.events.title")}
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                {t("home.events.description")}
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-4 md:mt-0 hover:bg-deep-teal/5 transition-colors"
            >
              <Link href="/events">{t("home.events.link")}</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event Card */}
            {events.slice(0, 3).map((event) => {
              const translation = event.translations[0] || {};
              const startTime = format(new Date(event.eventDate), "h:mm a");
              const endTime = event.eventEndDate
                ? format(new Date(event.eventEndDate), "h:mm a")
                : null;
              const timeRange = endTime
                ? `${startTime} - ${endTime}`
                : startTime;
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
                      asChild
                      className="w-full bg-brick-red hover:bg-brick-red/90 transition-transform hover:translate-y-[-2px]"
                    >
                      <Link href={`/events/${event.slug}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-deep-teal/10">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">
            {t("home.testimonials.title")}
          </h2>
          {typeof TestimonialCarousel !== "undefined" && (
            <TestimonialCarousel />
          )}
        </div>
      </section>

      {/* Community Showcase */}
      <section className="py-16 bg-gradient-to-br from-dark-mahogany to-brick-red text-white">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">
            {t("home.community.title")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg group">
              <Image
                src="/placeholder.svg"
                alt="Community event"
                width={300}
                height={300}
                className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <Image
                src="/placeholder.svg"
                alt="Painted miniature"
                width={300}
                height={300}
                className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <Image
                src="/placeholder.svg"
                alt="Game session"
                width={300}
                height={300}
                className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <Image
                src="/placeholder.svg"
                alt="Terrain crafting"
                width={300}
                height={300}
                className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="bg-golden-amber hover:bg-golden-amber/90 transition-transform hover:scale-105"
            >
              <Link href="/gallery">{t("home.community.button")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-2">
                {t("home.blog.title")}
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                {t("home.blog.description")}
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-4 md:mt-0 hover:bg-deep-teal/5 transition-colors"
            >
              <Link href="/blog">{t("home.blog.button")}</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            {blogPosts.map((post) => {
              const translation = post.translations[0] || {};
              const startTime = format(new Date(post.createdAt), "h:mm a");
              const previewText = stripHtmlAndTruncate(
                translation.content,
                100
              );

              return (
                <Card
                  key={post.id}
                  className="hover:shadow-md transition-all group"
                >
                  <div className="overflow-hidden rounded-t-lg">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={translation.title || "Blog post image"}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-serif">
                      {translation.title}
                    </CardTitle>
                    <CardDescription>
                      {startTime} {"- "}
                      {post.readTime} min read
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3">{previewText}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-brick-red hover:text-brick-red/80 p-0 h-auto group"
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1"
                      >
                        {t("home.blog.readMore")}{" "}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-stone-100">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 inline-block">
              <Image
                src="/logoIconBig.png"
                alt="Tales of Bruss' Hell"
                width={122}
                height={148}
                priority
                className="relative z-10"
              />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              {t("home.cta.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("home.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brick-red hover:bg-brick-red/90 transition-transform hover:scale-105"
              >
                <Link href="/membership">{t("home.cta.buttonMember")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hover:bg-deep-teal/5 transition-transform hover:scale-105"
              >
                <Link href="/contact">{t("home.cta.buttonContact")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
