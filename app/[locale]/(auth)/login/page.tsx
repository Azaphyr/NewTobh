"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { useTranslation } from "@/lib/i18n/client"

export default function LoginPage() {
  const router = useRouter()
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        toast.error(t("login.errorInvalidCredentials"))
        return
      }

      router.push("/admin")
      router.refresh()
    } catch (error) {
      toast.error(t("login.errorGeneric"))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-4">
      <form onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>{t("login.title")}</CardTitle>
          <CardDescription>{t("login.description")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t("login.labelEmail")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t("login.placeholderEmail")}
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{t("login.labelPassword")}</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder={t("login.placeholderPassword")}
              required
              disabled={isLoading}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? t("login.buttonLoading") : t("login.buttonSubmit")}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
} 