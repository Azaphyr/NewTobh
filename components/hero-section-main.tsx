import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/client";
import { CalendarDays, Users } from "lucide-react";



export default function HeroSection() {
    
  const { t, locale } = useTranslation();
  return (
    <section className="relative w-full min-h-screen pt-16 overflow-hidden bg-dark-mahogany">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-mahogany/90 via-slate-900/90 to-dark-mahogany/95 z-10" />
        <Image
          src="/backDnd.jpg?height=1080&width=1920"
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center opacity-40"
        />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            fill="#c75c2e"
            fillOpacity="0.85"
            d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,149.3C672,171,768,181,864,165.3C960,149,1056,107,1152,85.3C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container relative z-20 mx-auto px-4 py-12 flex flex-col h-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-1">
          {/* Left side: Content */}
          <div className="text-white space-y-6 max-w-xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              {t("home.hero.title")}
            </h1>

            <p className="text-xl leading-relaxed text-white/90">{t("home.hero.description")}</p>

            {/* Quote with glassmorphism */}
            <div className="backdrop-blur-md bg-deep-teal/20 rounded-xl border border-deep-teal/30 p-6 my-8 relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 text-golden-amber">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                </svg>
              </div>
              <p className="text-deep-teal-foreground italic text-lg">{t("home.hero.quote")}</p>
              <p className="text-right text-golden-amber mt-2 font-medium">— {t("home.hero.quoteAuthor")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-brick-red hover:bg-brick-red/90 text-white font-semibold shadow-lg transition-transform hover:scale-105 px-8 py-5 text-lg flex items-center gap-2"
              >
                <Link href="/events">
                  <CalendarDays className="h-5 w-5" />
                  {t("home.hero.eventsButton")}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-golden-amber text-golden-amber hover:bg-golden-amber/10 hover:text-dark-mahogany font-semibold transition-transform hover:scale-105 px-8 py-5 text-lg flex items-center gap-2"
              >
                <Link href="/membership">
                  <Users className="h-5 w-5" />
                  {t("home.hero.joinButton")}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side: Mascot with glassmorphism UI elements */}
          <div className="relative flex justify-center lg:justify-end h-full">
            {/* Main mascot container */}
            <div className="relative w-full max-w-md">
              {/* Mascot image with proper framing */}
              <div className="relative z-20">
                <Image
                  src="/mascot.png"
                  alt="RPG Mascot Character"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                  style={{
                    filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.5))",
                  }}
                  priority
                />
              {/* Glassmorphism UI elements */}
              {/* Stats card 1 */}
              <div className="absolute top-10 right-0 backdrop-blur-md bg-title-ground rounded-xl border border-white/20 p-4 shadow-lg z-10 w-48">
                <div className="flex items-center gap-2 mb-2 shadow-lg bg-deep-teal/20 rounded-xl">
                  <div className="w-4 h-4 rounded-full bg-golden-amber"></div>
                  <span className="text-white font-medium">Active Campaigns</span>
                </div>
                <div className="h-16 relative">
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 100 30" className="w-full h-full">
                      <path
                        d="M0,15 Q10,5 20,20 T40,15 T60,20 T80,10 T100,15"
                        fill="none"
                        stroke="#c75c2e"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,15 Q10,5 20,20 T40,15 T60,20 T80,10 T100,15"
                        fill="none"
                        stroke="#c75c2e"
                        strokeWidth="1"
                        strokeOpacity="0.5"
                        strokeDasharray="1,1"
                        transform="translate(0,2)"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 right-0 text-golden-amber font-bold text-xl">42</div>
                </div>
              </div>

              {/* Stats card 2 */}
              <div className="absolute bottom-32 left-0 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-lg z-10 w-48 bg-title-ground">
                <div className="flex items-center gap-2 mb-2 shadow-lg bg-deep-teal/20 rounded-xl ">
                  <div className="w-4 h-4 rounded-full bg-brick-red"></div>
                  <span className="text-white font-medium">Critical Rolls</span>
                </div>
                <div className="flex items-end gap-1 h-12">
                  {[3, 5, 2, 7, 4, 8, 6].map((value, index) => (
                    <div
                      key={index}
                      className="bg-brick-red/70 rounded-sm"
                      style={{ height: `${value * 10}%`, width: "12%" }}
                    ></div>
                  ))}
                </div>
              </div>

              </div>


              

              {/* Connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full z-10 opacity-60"
                viewBox="0 0 400 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M200,250 L300,100" stroke="#c75c2e" strokeWidth="1" strokeDasharray="4,4" />
                <path d="M200,250 L100,350" stroke="#c75c2e" strokeWidth="1" strokeDasharray="4,4" />
                <path d="M200,250 L250,400" stroke="#c75c2e" strokeWidth="1" strokeDasharray="4,4" />
                <circle cx="300" cy="100" r="4" fill="#c75c2e" />
                <circle cx="100" cy="350" r="4" fill="#c75c2e" />
                <circle cx="250" cy="400" r="4" fill="#c75c2e" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
