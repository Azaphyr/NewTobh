"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, Shield, Users, Gift, CalendarDays } from "lucide-react"
import { useTranslation } from "@/lib/i18n/client"

export default function MembershipPage() {
  const { t, locale } = useTranslation();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-mahogany/90 to-brick-red/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          alt="Tales of Bruss'hell community members"
          width={1600}
          height={400}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[300px] md:h-[400px] text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t("membership.title")}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{t("membership.description")}</p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">{t("membership.titleWhyBecomeMember")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("membership.descriptionWhyBecomeMember")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-deep-teal/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-deep-teal" />
                  {t("membership.titlePriorityEventAccess")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("membership.descriptionPriorityEventAccess")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-deep-teal/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-deep-teal" />
                  {t("membership.titleExclusiveDiscounts")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("membership.descriptionExclusiveDiscounts")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-deep-teal/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-deep-teal" />
                  {t("membership.titleCommunityResources")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("membership.descriptionCommunityResources")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-deep-teal/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-deep-teal" />
                  {t("membership.titleSupportOurMission")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("membership.descriptionSupportOurMission")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 bg-stone-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">{t("membership.titleMembershipOptions")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("membership.descriptionMembershipOptions")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Tier */}
            <Card className="border-2 border-deep-teal/20 flex flex-col">
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-serif text-2xl">{t("membership.titleBasicMembership")}</CardTitle>
                <p className="text-3xl font-bold mt-2">
                  €25<span className="text-sm font-normal text-muted-foreground">{t("membership.year")}</span>
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t("membership.descriptionPriorityRegistration")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t("membership.descriptionMemberOnlyDiscord")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t("membership.descriptionVotingRights")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t("membership.descriptionDiscounts")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t("membership.descriptionLendingLibrary")}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-brick-red hover:bg-brick-red/90">
                  <Link href="/membership/join?tier=basic">{t("membership.buttonJoinNow")}</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Standard Tier */}
            <Card className="border-2 border-brick-red flex flex-col relative">
              <div className="absolute top-0 inset-x-0 bg-brick-red text-white py-1 text-center text-sm font-medium rounded-t-lg">
                {t("membership.titleMostPopular")}
              </div>
              <CardHeader className="text-center pb-2 pt-8">
                <CardTitle className="font-serif text-2xl">{t("membership.titleStandardMembership")}</CardTitle>
                <p className="text-3xl font-bold mt-2">
                  €50<span className="text-sm font-normal text-muted-foreground">{t("membership.year")}</span>
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t("membership.descriptionPriorityRegistration")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t("membership.descriptionMemberOnlyDiscord")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t("membership.descriptionVotingRights")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>10% {t("membership.descriptionDiscounts")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t("membership.descriptionLendingLibrary")}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-brick-red hover:bg-brick-red/90">
                  <Link href="/membership/join?tier=standard">{t("membership.buttonJoinNow")}</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Tier */}
            <Card className="border-2 border-golden-amber flex flex-col">
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-serif text-2xl">{t("membership.titlePremiumMembership")}</CardTitle>
                <p className="text-3xl font-bold mt-2">
                  €100<span className="text-sm font-normal text-muted-foreground">{t("membership.year")}</span>
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t("membership.descriptionPriorityRegistration")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t("membership.descriptionMemberOnlyDiscord")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t("membership.descriptionVotingRights")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>25% {t("membership.descriptionDiscounts")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t("membership.descriptionLendingLibrary")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t("membership.descriptionExclusiveEvents")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t("membership.descriptionAnnualGiftPackage")}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-golden-amber hover:bg-golden-amber/90 text-white">
                  <Link href="/membership/join?tier=premium">{t("membership.buttonJoinNow")}</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>{t("membership.membershipValidation")}</p>
            <p className="mt-2">
              {t("membership.membershipAssistance")}{" "}
              <Link href="/membership/assistance" className="text-brick-red hover:underline">
                {t("membership.membershipAssistanceLink")}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">{t("membership.titleFAQ")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("membership.descriptionFAQ")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{t("membership.faq.titleHowToJoin")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("membership.faq.descriptionHowToJoin")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("membership.faq.titleMembershipDuration")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("membership.faq.descriptionMembershipDuration")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("membership.faq.titleCancelMembership")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("membership.faq.descriptionCancelMembership")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("membership.faq.titleUpgradeMembership")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("membership.faq.descriptionUpgradeMembership")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-16 bg-stone-100">
        <div className="container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold mb-4">{t("membership.membershipForm.title")}</h2>
            <p className="text-muted-foreground">
              {t("membership.membershipForm.description")}
            </p>
          </div>

          <form className="space-y-6 border-2 border-deep-teal/20 rounded-lg p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  {t("membership.membershipForm.firstName")} <span className="text-red-500">*</span>
                </label>
                <input id="firstName" type="text" className="w-full px-3 py-2 border rounded-md" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  {t("membership.membershipForm.lastName")} <span className="text-red-500">*</span>
                </label>
                <input id="lastName" type="text" className="w-full px-3 py-2 border rounded-md" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {t("membership.membershipForm.email")} <span className="text-red-500">*</span>
              </label>
              <input id="email" type="email" className="w-full px-3 py-2 border rounded-md" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                {t("membership.membershipForm.phone")}
              </label>
              <input id="phone" type="tel" className="w-full px-3 py-2 border rounded-md" />
            </div>

            <div className="space-y-2">
              <label htmlFor="membershipType" className="text-sm font-medium">
                {t("membership.membershipForm.membershipType")} <span className="text-red-500">*</span>
              </label>
              <select id="membershipType" className="w-full px-3 py-2 border rounded-md" required>
                <option value="">{t("membership.membershipForm.membershipTypeLabel")}</option>
                <option value="basic">{t("membership.membershipForm.membershipTypeBasic")}</option>
                <option value="standard">{t("membership.membershipForm.membershipTypeStandard")}</option>
                <option value="premium">{t("membership.membershipForm.membershipTypePremium")}</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="experience" className="text-sm font-medium">
                {t("membership.membershipForm.experience")}
              </label>
              <select id="experience" className="w-full px-3 py-2 border rounded-md">
                <option value="">{t("membership.membershipForm.experienceLabel")}</option>
                <option value="new">{t("membership.membershipForm.experienceNew")}</option>
                <option value="beginner">{t("membership.membershipForm.experienceBeginner")}</option>
                <option value="intermediate">{t("membership.membershipForm.experienceIntermediate")}</option>
                <option value="experienced">{t("membership.membershipForm.experienceExperienced")}</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="interests" className="text-sm font-medium">
                {t("membership.membershipForm.interests")}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                <div className="flex items-center">
                  <input type="checkbox" id="playing" className="mr-2" />
                  <label htmlFor="playing" className="text-sm">
                    {t("membership.membershipForm.interestsPlaying")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="gm" className="mr-2" />
                  <label htmlFor="gm" className="text-sm">
                    {t("membership.membershipForm.interestsGm")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="painting" className="mr-2" />
                  <label htmlFor="painting" className="text-sm">
                    {t("membership.membershipForm.interestsPainting")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="terrain" className="mr-2" />
                  <label htmlFor="terrain" className="text-sm">
                    {t("membership.membershipForm.interestsTerrain")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="writing" className="mr-2" />
                  <label htmlFor="writing" className="text-sm">
                    {t("membership.membershipForm.interestsWriting")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="social" className="mr-2" />
                  <label htmlFor="social" className="text-sm">
                    {t("membership.membershipForm.interestsSocial")}
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="comments" className="text-sm font-medium">
                {t("membership.membershipForm.comments")}
              </label>
              <textarea id="comments" rows={4} className="w-full px-3 py-2 border rounded-md"></textarea>
            </div>

            <div className="flex items-start">
              <input type="checkbox" id="terms" className="mt-1 mr-2" required />
              <label htmlFor="terms" className="text-sm">
                {t("membership.membershipForm.terms")}{" "}
                <Link href="/terms" className="text-brick-red hover:underline">
                  {t("membership.membershipForm.termsLink")}
                </Link>{" "}
                {t("membership.membershipForm.termsLink2")}{" "}
                <Link href="/privacy" className="text-brick-red hover:underline">
                  {t("membership.membershipForm.termsLink3")}
                </Link>{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>

            <Button type="submit" className="w-full bg-brick-red hover:bg-brick-red/90">
              {t("membership.membershipForm.buttonSubmit")}
            </Button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-dark-mahogany text-white">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">{t("membership.testimonialsTitle")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-mahogany/50 p-6 rounded-lg">
              <p className="italic mb-4">
                "Joining Tales of Bruss'hell was one of the best decisions I've made. I've found a welcoming community
                of like-minded people and improved my GM skills tremendously."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-deep-teal/30">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Member"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Marc Dupont</p>
                  <p className="text-sm text-stone-300">Verified Member</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-mahogany/50 p-6 rounded-lg">
              <p className="italic mb-4">
                "The miniature painting workshops have transformed my hobby. The instructors are patient and
                knowledgeable, and I've made great friends along the way."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-deep-teal/30">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Member"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Sophie Laurent</p>
                  <p className="text-sm text-stone-300">Verified Member</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-mahogany/50 p-6 rounded-lg">
              <p className="italic mb-4">
                "As someone who was nervous about playing tabletop RPGs for the first time, I couldn't have asked for a
                more supportive environment. Everyone is so welcoming!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-deep-teal/30">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Member"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Jan Peeters</p>
                  <p className="text-sm text-stone-300">Verified Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}