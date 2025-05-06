"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/lib/i18n/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { fr, enUS } from "date-fns/locale"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
  isRead: boolean
  createdAt: string
}

export default function ContactsPage() {
  const { t, locale } = useTranslation()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/admin/contacts')
        if (!response.ok) {
          throw new Error('Failed to fetch contacts')
        }
        const data = await response.json()
        setContacts(data.submissions)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching contacts:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchContacts()
  }, [])

  const formatDate = (date: string | undefined | null) => {
    if (!date) return '-'
    try {
      const parsedDate = new Date(date)
      if (isNaN(parsedDate.getTime())) return '-'
      return format(parsedDate, "PPP", { locale: locale === "fr" ? fr : enUS })
    } catch (error) {
      console.error('Error formatting date:', error)
      return '-'
    }
  }

  const getStatusBadge = (isRead: boolean) => {
    return (
      <Badge variant={isRead ? "outline" : "default"}>
        {isRead ? t("admin.contacts.statusRead") : t("admin.contacts.statusUnread")}
      </Badge>
    )
  }

  const handleViewContact = async (contact: Contact) => {
    setSelectedContact(contact)
    setIsModalOpen(true)
    
    // Mark as read if not already read
    if (!contact.isRead) {
      try {
        const response = await fetch(`/api/admin/contacts/${contact.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ isRead: true }),
        })

        if (response.ok) {
          // Update the contact in the local state
          setContacts(prevContacts =>
            prevContacts.map(c =>
              c.id === contact.id ? { ...c, isRead: true } : c
            )
          )
        }
      } catch (error) {
        console.error('Error marking contact as read:', error)
      }
    }
  }

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.subject.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (error) {
    return (
      <div className="p-4 text-red-500">
        {error}
      </div>
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
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  {t("admin.contacts.loading")}
                </TableCell>
              </TableRow>
            ) : filteredContacts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  {t("admin.contacts.noContacts")}
                </TableCell>
              </TableRow>
            ) : (
              filteredContacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.subject}</TableCell>
                  <TableCell>{getStatusBadge(contact.isRead)}</TableCell>
                  <TableCell>{formatDate(contact.createdAt)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewContact(contact)}
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

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedContact?.subject}</DialogTitle>
            <DialogDescription>
              {formatDate(selectedContact?.createdAt || '')}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">{t("admin.contacts.name")}</h3>
                <p>{selectedContact?.name}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">{t("admin.contacts.email")}</h3>
                <p>{selectedContact?.email}</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-2">{t("admin.contacts.message")}</h3>
              <div className="bg-muted p-4 rounded-lg whitespace-pre-wrap">
                {selectedContact?.message}
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                {t("admin.contacts.buttonClose")}
              </Button>
              <Button
                onClick={() => {
                  window.location.href = `mailto:${selectedContact?.email}`
                }}
              >
                {t("admin.contacts.buttonReply")}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
} 