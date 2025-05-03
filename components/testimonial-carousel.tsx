"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from "@/lib/i18n/client"

// Define testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sophie Laurent",
    role: "Dungeon Master",
    content:
      "Tales of Bruss'hell has been my gaming home for over 2 years. The community is welcoming and the events are always well-organized.",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Miniature Painter",
    content:
      "The painting workshops helped me improve my skills tremendously. The instructors are patient and knowledgeable.",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Emma Janssens",
    role: "New Player",
    content:
      "As someone completely new to tabletop RPGs, I was nervous to join. But everyone was so helpful and friendly. Now I'm hooked!",
    avatar: "/placeholder.svg",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const { t, locale } = useTranslation()

  const next = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((current + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 8000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? "opacity-80" : "opacity-100"}`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-2 border-deep-teal/20">
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="h-16 w-16 border-2 border-deep-teal/20">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg italic mb-4">"{testimonial.content}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-deep-teal/20 z-10"
        onClick={prev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-deep-teal/20 z-10"
        onClick={next}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full transition-colors ${i === current ? "bg-deep-teal" : "bg-deep-teal/20"}`}
            onClick={() => {
              setIsAnimating(true)
              setCurrent(i)
              setTimeout(() => setIsAnimating(false), 500)
            }}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
