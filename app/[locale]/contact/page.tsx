"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, DiscIcon as Discord } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const subjectParam = searchParams.get("subject")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: subjectParam || "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-mahogany/90 to-brick-red/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          alt="Tales of Bruss'hell community"
          width={1600}
          height={400}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-[300px] md:h-[400px] text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl">Get in touch with our team. We'd love to hear from you!</p>
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
            <span className="font-medium text-foreground">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700 mb-4">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-green-600 hover:bg-green-700">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Select value={formData.subject} onValueChange={handleSelectChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="membership">Membership Question</SelectItem>
                        <SelectItem value="events">Events Information</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                        <SelectItem value="partnership">Partnership Proposal</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-brick-red hover:bg-brick-red/90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-deep-teal/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-deep-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground mb-1">For general inquiries:</p>
                    <a href="mailto:info@talesofbrusshell.org" className="text-brick-red hover:underline">
                      info@talesofbrusshell.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-deep-teal/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-deep-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-1">Available Monday-Friday, 10am-6pm:</p>
                    <a href="tel:+32123456789" className="text-brick-red hover:underline">
                      +32 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-deep-teal/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-deep-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-muted-foreground mb-1">Our events are typically held at:</p>
                    <address className="not-italic">
                      Community Center
                      <br />
                      123 Main Street
                      <br />
                      Brussels, Belgium
                    </address>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-8 rounded-lg overflow-hidden border shadow-sm h-[300px] w-full">
                  <div className="bg-stone-100 h-full w-full flex items-center justify-center">
                    <p className="text-muted-foreground text-center p-4">
                      Google Maps embed would be displayed here.
                      <br />
                      <span className="text-sm">(Requires Google Maps API key for implementation)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect with us */}
      <section className="py-16 bg-stone-100">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Connect With Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Follow us on social media to stay updated on events, community news, and more.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Facebook"
            >
              <Facebook className="h-8 w-8 text-deep-teal" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Twitter"
            >
              <Twitter className="h-8 w-8 text-deep-teal" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Instagram"
            >
              <Instagram className="h-8 w-8 text-deep-teal" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Discord"
            >
              <Discord className="h-8 w-8 text-deep-teal" />
            </a>
          </div>

          <div className="mt-8">
            <p className="font-medium mb-2">Join our Discord community:</p>
            <Button asChild className="bg-[#5865F2] hover:bg-[#4752C4]">
              <a
                href="https://discord.gg/example"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Discord className="h-5 w-5" />
                Join Discord Server
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-dark-mahogany text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="max-w-2xl mx-auto mb-8">Stay updated on upcoming events, workshops, and community news.</p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email address" className="bg-white" aria-label="Email address" />
              <Button type="submit" className="bg-golden-amber hover:bg-golden-amber/90 text-white">
                Subscribe
              </Button>
            </form>
            <p className="text-xs mt-2 text-stone-300">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
