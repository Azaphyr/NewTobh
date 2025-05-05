import type React from "react"
import { Mona_Sans as FontSans, Young_Serif as FontSerif } from "next/font/google"
import { cn } from "@/lib/utils"
import "@/app/globals.css"
import { Providers } from "./providers"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
})

export const metadata = {
  title: "Tales of Bruss'hell - Tabletop RPG Community",
  description: "A community organization dedicated to tabletop RPGs, miniatures, and storytelling."
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <body 
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
