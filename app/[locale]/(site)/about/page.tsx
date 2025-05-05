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
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t("about.title")}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{t("about.description")}</p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">{t("about.titleMission")}</h2>
              <p className="text-lg mb-6">
                {t("about.descriptionMission")}
              </p>
              <p className="text-lg mb-6">
                {t("about.descriptionMission2")}
              </p>
              <p className="text-lg">
                {t("about.descriptionMission3")}
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
            <h2 className="font-serif text-3xl font-bold mb-10 text-center">{t("about.titleValues")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 border-deep-teal/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-deep-teal/10 p-3 rounded-full mb-4">
                      <Heart className="h-8 w-8 text-brick-red" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("about.titleInclusivity")}</h3>
                    <p className="text-muted-foreground">
                      {t("about.descriptionInclusivity")}
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
                    <h3 className="text-xl font-bold mb-2">{t("about.titleCreativity")}</h3>
                    <p className="text-muted-foreground">
                      {t("about.descriptionCreativity")}
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
                    <h3 className="text-xl font-bold mb-2">{t("about.titleCommunity")}</h3>
                    <p className="text-muted-foreground">
                      {t("about.descriptionCommunity")}
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
                    <h3 className="text-xl font-bold mb-2">{t("about.titleExcellence")}</h3>
                    <p className="text-muted-foreground">
                      {t("about.descriptionExcellence")}
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
          <h2 className="font-serif text-3xl font-bold mb-4 text-center">{t("about.titleTeam")}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            {t("about.descriptionTeam")}
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
              <h2 className="font-serif text-3xl font-bold mb-6">{t("about.titleHistory")}</h2>
              <p className="mb-4">
                {t("about.descriptionHistory")}
              </p>
              <p className="mb-4">
                {t("about.descriptionHistory2")}
              </p>
              <p>
                {t("about.descriptionHistory3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-dark-mahogany text-white">
        <div className="container text-center">
          <Dice className="h-16 w-16 mx-auto mb-6 text-golden-amber" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t("about.titleJoinUs")}</h2>
          <p className="max-w-2xl mx-auto mb-8 text-stone-200">
            {t("about.descriptionJoinUs")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-golden-amber hover:bg-golden-amber/90 text-white font-medium">
              <Link href="/membership">{t("about.buttonMember")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">{t("about.buttonContact")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 