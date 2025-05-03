"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dice1Icon as Dice, Heart, Users, Trophy, Sparkles } from "lucide-react"
import { useTranslation } from "@/lib/i18n/client"

export default function AboutPage() {
  const { t, locale } = useTranslation()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-mahogany/90 to-brick-red/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          alt="Tales of Bruss'hell team"
          width={1600}
          height={400}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[300px] md:h-[400px] text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t("about.hero.title")}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{t("about.hero.description")}</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="border-b py-2">
        <div className="container">
          <div className="flex text-sm text-muted-foreground">
            <Link href={`/${locale}`} className="hover:text-brick-red">
              {t("nav.home")}
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-foreground">{t("nav.about")}</span>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                Tales of Bruss'hell is dedicated to fostering a welcoming community for tabletop role-playing
                enthusiasts, miniature painters, and storytellers of all experience levels.
              </p>
              <p className="text-lg mb-6">
                We believe in the power of collaborative storytelling to build connections, develop creativity, and
                provide a space where everyone can feel welcome to express themselves.
              </p>
              <p className="text-lg">
                Through regular events, workshops, and community initiatives, we aim to make the world of tabletop
                gaming accessible to all while promoting the values of inclusivity, creativity, and camaraderie.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-6 bg-deep-teal/10 rounded-lg -z-10 transform rotate-3"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="RPG players at a table"
                width={600}
                height={500}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-serif text-3xl font-bold mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 border-deep-teal/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-deep-teal/10 p-3 rounded-full mb-4">
                      <Heart className="h-8 w-8 text-brick-red" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
                    <p className="text-muted-foreground">
                      We create a welcoming environment where everyone feels valued and respected, regardless of
                      background or experience level.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-deep-teal/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-deep-teal/10 p-3 rounded-full mb-4">
                      <Sparkles className="h-8 w-8 text-brick-red" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Creativity</h3>
                    <p className="text-muted-foreground">
                      We encourage imagination, artistic expression, and innovative problem-solving through our games
                      and activities.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-deep-teal/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-deep-teal/10 p-3 rounded-full mb-4">
                      <Users className="h-8 w-8 text-brick-red" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      We foster meaningful connections and friendships through shared experiences and collaborative
                      storytelling.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-deep-teal/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-deep-teal/10 p-3 rounded-full mb-4">
                      <Trophy className="h-8 w-8 text-brick-red" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Excellence</h3>
                    <p className="text-muted-foreground">
                      We strive for quality in our events, workshops, and community initiatives, continuously improving
                      our offerings.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-stone-100">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Our dedicated volunteers who make the magic happen.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Sarah Johnson"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-brick-red mb-2">President</p>
              <p className="text-sm text-muted-foreground mb-4">
                Game Master extraordinaire with 15 years of experience creating immersive worlds.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Michael Chen"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-brick-red mb-2">Event Coordinator</p>
              <p className="text-sm text-muted-foreground mb-4">
                Passionate about creating memorable gaming experiences for players of all levels.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Elena Rodriguez"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Elena Rodriguez</h3>
              <p className="text-brick-red mb-2">Workshop Leader</p>
              <p className="text-sm text-muted-foreground mb-4">
                Award-winning miniature painter who loves teaching others the joy of the craft.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Thomas Dubois"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Thomas Dubois</h3>
              <p className="text-brick-red mb-2">Community Manager</p>
              <p className="text-sm text-muted-foreground mb-4">
                Dedicated to ensuring everyone feels welcome and included in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Tales of Bruss'hell history"
                width={600}
                height={500}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl font-bold mb-6">Our History</h2>
              <p className="mb-4">
                Tales of Bruss'hell was founded in 2018 by a group of passionate tabletop gaming enthusiasts who wanted
                to create a more inclusive and welcoming space for players in Brussels.
              </p>
              <p className="mb-4">
                What started as informal gatherings in local cafés quickly grew into a thriving community. By 2020, we
                had officially registered as a non-profit organization to better serve our growing membership.
              </p>
              <p className="mb-4">
                Despite the challenges of the pandemic, we adapted by hosting virtual game nights and workshops, keeping
                our community connected during difficult times.
              </p>
              <p>
                Today, we're proud to host regular in-person events, workshops, and campaigns while continuing to expand
                our offerings to reach more people who share our passion for tabletop gaming and storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-dark-mahogany text-white">
        <div className="container text-center">
          <Dice className="h-16 w-16 mx-auto mb-6 text-golden-amber" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Join Our Adventure</h2>
          <p className="max-w-2xl mx-auto mb-8 text-stone-200">
            Become part of our community and help us create unforgettable stories together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-golden-amber hover:bg-golden-amber/90 text-white font-medium">
              <Link href="/membership">Become a Member</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
