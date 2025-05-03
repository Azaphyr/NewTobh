"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dice1Icon as Dice } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Log session changes only
  useEffect(() => {
    console.log("Login Page - Session changed:", { status, session })
  }, [status, session])

  // Handle authenticated state
  useEffect(() => {
    if (status === "authenticated") {
      console.log("Login Page - User authenticated, redirecting to /admin")
      router.push("/admin")
    }
  }, [status, router])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    console.log("Login Page - Form submitted with email:", email)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      console.log("Login Page - SignIn response:", result)

      if (!result?.ok) {
        console.log("Login Page - Login failed:", result?.error)
        setError(result?.error || "Invalid email or password")
        setIsLoading(false)
        return
      }

      console.log("Login Page - Login successful, redirecting to /admin")
      router.push("/admin")
    } catch (error) {
      console.error("Login Page - Error during login:", error)
      setError("An error occurred. Please try again.")
      setIsLoading(false)
    }
  }, [email, password, router])

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <Dice className="h-12 w-12 text-brick-red mx-auto mb-4 animate-spin" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Dice className="h-12 w-12 text-brick-red" />
          </div>
          <CardTitle className="text-2xl">Admin Login</CardTitle>
          <CardDescription>Tales of Bruss'hell Administration</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <Button type="submit" className="w-full bg-brick-red hover:bg-brick-red/90" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-muted-foreground">
          <p>Forgot your password? Contact the system administrator.</p>
        </CardFooter>
      </Card>
    </div>
  )
} 