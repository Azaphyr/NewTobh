"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, Shield, Users, Gift, CalendarDays } from "lucide-react"

export default function MembershipPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Join Our Community</h1>
          <p className="text-lg md:text-xl max-w-2xl">Become a member and unlock exclusive benefits.</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="border-b py-2">
        <div className="container">
          <div className="flex text-sm text-muted-foreground">
            <Link href="/" className="hover:text-brick-red">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-foreground">Membership</span>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Why Become a Member?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Joining Tales of Bruss'hell gives you access to exclusive benefits while supporting our mission to create
              an inclusive tabletop gaming community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-deep-teal/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-deep-teal" />
                  Priority Event Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get early registration for popular events and workshops before they open to the general public.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-deep-teal/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-deep-teal" />
                  Exclusive Discounts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enjoy reduced fees for workshops and special events, plus discounts with our partner game stores.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-deep-teal/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-deep-teal" />
                  Community Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access our lending library of rulebooks, miniatures, and terrain for your home games.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-deep-teal/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-deep-teal" />
                  Support Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your membership fees directly support our community initiatives and help us create more inclusive
                  gaming spaces.
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
            <h2 className="font-serif text-3xl font-bold mb-4">Membership Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the membership tier that best fits your needs and level of involvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Tier */}
            <Card className="border-2 border-deep-teal/20 flex flex-col">
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-serif text-2xl">Basic Membership</CardTitle>
                <p className="text-3xl font-bold mt-2">
                  €25<span className="text-sm font-normal text-muted-foreground">/year</span>
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Priority registration for events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Member-only Discord channel access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Voting rights at annual general meeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Discounts on workshops and events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Access to lending library</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-brick-red hover:bg-brick-red/90">
                  <Link href="/membership/join?tier=basic">Join Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Standard Tier */}
            <Card className="border-2 border-brick-red flex flex-col relative">
              <div className="absolute top-0 inset-x-0 bg-brick-red text-white py-1 text-center text-sm font-medium rounded-t-lg">
                Most Popular
              </div>
              <CardHeader className="text-center pb-2 pt-8">
                <CardTitle className="font-serif text-2xl">Standard Membership</CardTitle>
                <p className="text-3xl font-bold mt-2">
                  €50<span className="text-sm font-normal text-muted-foreground">/year</span>
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Priority registration for events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Member-only Discord channel access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Voting rights at annual general meeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>10% discount on workshops and events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Access to lending library</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-brick-red hover:bg-brick-red/90">
                  <Link href="/membership/join?tier=standard">Join Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Tier */}
            <Card className="border-2 border-golden-amber flex flex-col">
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-serif text-2xl">Premium Membership</CardTitle>
                <p className="text-3xl font-bold mt-2">
                  €100<span className="text-sm font-normal text-muted-foreground">/year</span>
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Priority registration for events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Member-only Discord channel access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Voting rights at annual general meeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>25% discount on workshops and events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Access to lending library</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Exclusive premium member events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Annual gift package with Tales of Bruss'hell merchandise</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-golden-amber hover:bg-golden-amber/90 text-white">
                  <Link href="/membership/join?tier=premium">Join Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>All memberships are valid for one year from the date of registration.</p>
            <p className="mt-2">
              Need financial assistance?{" "}
              <Link href="/membership/assistance" className="text-brick-red hover:underline">
                Learn about our accessibility program
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold mb-4">Become a Member</h2>
            <p className="text-muted-foreground">
              Fill out the form below to join our community. You'll receive a confirmation email with payment
              instructions.
            </p>
          </div>

          <form className="space-y-6 border-2 border-deep-teal/20 rounded-lg p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input id="firstName" type="text" className="w-full px-3 py-2 border rounded-md" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input id="lastName" type="text" className="w-full px-3 py-2 border rounded-md" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input id="email" type="email" className="w-full px-3 py-2 border rounded-md" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <input id="phone" type="tel" className="w-full px-3 py-2 border rounded-md" />
            </div>

            <div className="space-y-2">
              <label htmlFor="membershipType" className="text-sm font-medium">
                Membership Type <span className="text-red-500">*</span>
              </label>
              <select id="membershipType" className="w-full px-3 py-2 border rounded-md" required>
                <option value="">Select a membership tier</option>
                <option value="basic">Basic Membership (€25/year)</option>
                <option value="standard">Standard Membership (€50/year)</option>
                <option value="premium">Premium Membership (€100/year)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="experience" className="text-sm font-medium">
                Your Experience with Tabletop RPGs
              </label>
              <select id="experience" className="w-full px-3 py-2 border rounded-md">
                <option value="">Select your experience level</option>
                <option value="new">New to tabletop RPGs</option>
                <option value="beginner">Beginner (0-1 year)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="experienced">Experienced (3+ years)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="interests" className="text-sm font-medium">
                Areas of Interest (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                <div className="flex items-center">
                  <input type="checkbox" id="playing" className="mr-2" />
                  <label htmlFor="playing" className="text-sm">
                    Playing RPGs
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="gm" className="mr-2" />
                  <label htmlFor="gm" className="text-sm">
                    Game Mastering
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="painting" className="mr-2" />
                  <label htmlFor="painting" className="text-sm">
                    Miniature Painting
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="terrain" className="mr-2" />
                  <label htmlFor="terrain" className="text-sm">
                    Terrain Crafting
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="writing" className="mr-2" />
                  <label htmlFor="writing" className="text-sm">
                    Storytelling/Writing
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="social" className="mr-2" />
                  <label htmlFor="social" className="text-sm">
                    Social Events
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="comments" className="text-sm font-medium">
                Additional Comments or Questions
              </label>
              <textarea id="comments" rows={4} className="w-full px-3 py-2 border rounded-md"></textarea>
            </div>

            <div className="flex items-start">
              <input type="checkbox" id="terms" className="mt-1 mr-2" required />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link href="/terms" className="text-brick-red hover:underline">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-brick-red hover:underline">
                  Privacy Policy
                </Link>{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>

            <Button type="submit" className="w-full bg-brick-red hover:bg-brick-red/90">
              Submit Application
            </Button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-dark-mahogany text-white">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">What Our Members Say</h2>

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
