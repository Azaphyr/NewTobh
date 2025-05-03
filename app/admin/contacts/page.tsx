"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Mail, Eye, MailOpen } from "lucide-react"

interface ContactSubmission {
  id: number
  name: string
  email: string
  subject: string
  message: string
  isRead: boolean
  createdAt: string
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/contacts")
      const data = await response.json()
      setContacts(data.contacts)
    } catch (error) {
      console.error("Error fetching contacts:", error)
    } finally {
      setLoading(false)
    }
  }

  const markAsRead = async (id: number) => {
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isRead: true }),
      })

      if (response.ok) {
        setContacts((prev) => prev.map((contact) => (contact.id === id ? { ...contact, isRead: true } : contact)))
        if (selectedContact?.id === id) {
          setSelectedContact({ ...selectedContact, isRead: true })
        }
      }
    } catch (error) {
      console.error("Error marking contact as read:", error)
    }
  }

  const viewContact = (contact: ContactSubmission) => {
    setSelectedContact(contact)
    if (!contact.isRead) {
      markAsRead(contact.id)
    }
  }

  const filteredContacts = contacts.filter((contact) => {
    const searchString = `${contact.name} ${contact.email} ${contact.subject}`.toLowerCase()
    return searchString.includes(searchTerm.toLowerCase())
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Contact Submissions</h1>
        <p className="text-muted-foreground">Manage messages from your contact form</p>
      </div>

      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search contacts..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brick-red"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <Card
                  key={contact.id}
                  className={`cursor-pointer hover:shadow-md transition-shadow ${
                    selectedContact?.id === contact.id ? "border-brick-red" : ""
                  } ${!contact.isRead ? "bg-slate-50" : ""}`}
                  onClick={() => viewContact(contact)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{contact.subject}</h3>
                        <p className="text-sm text-muted-foreground">
                          From: {contact.name} ({contact.email})
                        </p>
                      </div>
                      <div className="flex items-center">
                        {!contact.isRead && <Badge className="bg-brick-red hover:bg-brick-red/90">New</Badge>}
                        <div className="ml-2">
                          {contact.isRead ? (
                            <MailOpen className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Mail className="h-4 w-4 text-brick-red" />
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {new Date(contact.createdAt).toLocaleDateString()} at{" "}
                      {new Date(contact.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center p-8 border rounded-lg bg-slate-50">
                <p className="text-muted-foreground">No contact submissions found</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            {selectedContact ? (
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold">{selectedContact.subject}</h2>
                      <p className="text-muted-foreground">
                        From: {selectedContact.name} ({selectedContact.email})
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Received on {new Date(selectedContact.createdAt).toLocaleDateString()} at{" "}
                        {new Date(selectedContact.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    {!selectedContact.isRead && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1"
                        onClick={() => markAsRead(selectedContact.id)}
                      >
                        <Eye className="h-4 w-4" />
                        Mark as Read
                      </Button>
                    )}
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="whitespace-pre-wrap">{selectedContact.message}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t flex justify-end">
                    <Button
                      asChild
                      className="bg-brick-red hover:bg-brick-red/90"
                      onClick={() =>
                        (window.location.href = `mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`)
                      }
                    >
                      <a href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Reply via Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-8 border rounded-lg bg-slate-50">
                <Mail className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Select a message to view its contents</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
