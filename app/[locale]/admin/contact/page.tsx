"use client"

import { useState } from "react"
import { useTranslation } from "@/lib/i18n/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { fr, enUS } from "date-fns/locale"
import { useRouter } from "next/navigation"

interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: "new" | "in-progress" | "resolved"
  createdAt: string
}

export default function ContactsPage() {
  const { t, locale } = useTranslation()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [contacts, setContacts] = useState<Contact[]>([])

  const formatDate = (date: string) => {
    return format(new Date(date), "PPP", { locale: locale === "fr" ? fr : enUS })
  }

  const getStatusBadge = (status: Contact["status"]) => {
    const variants = {
      new: "default",
      "in-progress": "secondary",
      resolved: "outline"
    } as const

    const labels = {
      new: t("admin.contacts.statusNew"),
      "in-progress": t("admin.contacts.statusInProgress"),
      resolved: t("admin.contacts.statusResolved")
    }

    return (
      <Badge variant={variants[status]}>
        {labels[status]}
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{t("admin.contacts.title")}</h1>
      </div>

      <div className="flex items-center space-x-2">
        <Input
          placeholder={t("admin.contacts.searchPlaceholder")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("admin.contacts.name")}</TableHead>
              <TableHead>{t("admin.contacts.email")}</TableHead>
              <TableHead>{t("admin.contacts.subject")}</TableHead>
              <TableHead>{t("admin.contacts.status")}</TableHead>
              <TableHead>{t("admin.contacts.date")}</TableHead>
              <TableHead className="text-right">{t("admin.contacts.actions")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  {t("admin.contacts.noContacts")}
                </TableCell>
              </TableRow>
            ) : (
              contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.subject}</TableCell>
                  <TableCell>{getStatusBadge(contact.status)}</TableCell>
                  <TableCell>{formatDate(contact.createdAt)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => router.push(`/admin/contacts/${contact.id}`)}
                    >
                      {t("admin.contacts.buttonView")}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 