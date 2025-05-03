"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Check, X, Eye } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MembershipApplication {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string | null
  membershipType: string
  experienceLevel: string | null
  interests: string[]
  comments: string | null
  status: string
  createdAt: string
}

export default function MembersPage() {
  const [applications, setApplications] = useState<MembershipApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [selectedApplication, setSelectedApplication] = useState<MembershipApplication | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    fetchApplications()
  }, [statusFilter])

  const fetchApplications = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (statusFilter) params.append("status", statusFilter)

      const response = await fetch(`/api/admin/members?${params.toString()}`)
      const data = await response.json()
      setApplications(data.applications)
    } catch (error) {
      console.error("Error fetching membership applications:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateApplicationStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`/api/admin/members/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        setApplications((prev) => prev.map((app) => (app.id === id ? { ...app, status } : app)))
        if (selectedApplication?.id === id) {
          setSelectedApplication({ ...selectedApplication, status })
        }
      }
    } catch (error) {
      console.error("Error updating application status:", error)
    }
  }

  const viewApplication = (application: MembershipApplication) => {
    setSelectedApplication(application)
    setIsDialogOpen(true)
  }

  const filteredApplications = applications.filter((app) => {
    const searchString = `${app.firstName} ${app.lastName} ${app.email}`.toLowerCase()
    return searchString.includes(searchTerm.toLowerCase())
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-amber-500 hover:bg-amber-600">Pending</Badge>
      case "approved":
        return <Badge className="bg-green-600 hover:bg-green-700">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-600 hover:bg-red-700">Rejected</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Membership Applications</h1>
        <p className="text-muted-foreground">Manage membership applications and approvals</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search applications..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-48">
          <Select value={statusFilter || "all"} onValueChange={(value) => setStatusFilter(value || null)}>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brick-red"></div>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredApplications.length > 0 ? (
            filteredApplications.map((application) => (
              <Card key={application.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">
                            {application.firstName} {application.lastName}
                          </h3>
                          <p className="text-sm text-muted-foreground">{application.email}</p>
                          <p className="text-sm font-medium mt-2">{application.membershipType} Membership</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {getStatusBadge(application.status)}
                          <p className="text-xs text-muted-foreground">
                            Applied on {new Date(application.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col gap-2 p-4 bg-slate-50 border-t md:border-t-0 md:border-l">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1"
                        onClick={() => viewApplication(application)}
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                      {application.status === "pending" && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 text-green-600 hover:text-green-700"
                            onClick={() => updateApplicationStatus(application.id, "approved")}
                          >
                            <Check className="h-4 w-4" />
                            Approve
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 text-red-600 hover:text-red-700"
                            onClick={() => updateApplicationStatus(application.id, "rejected")}
                          >
                            <X className="h-4 w-4" />
                            Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center p-8 border rounded-lg bg-slate-50">
              <p className="text-muted-foreground">No membership applications found</p>
            </div>
          )}
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedApplication && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Membership Application</DialogTitle>
              <DialogDescription>
                Submitted on {new Date(selectedApplication.createdAt).toLocaleDateString()}
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Personal Information</h3>
                <p>
                  <strong>Name:</strong> {selectedApplication.firstName} {selectedApplication.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {selectedApplication.email}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedApplication.phone || "Not provided"}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Membership Details</h3>
                <p>
                  <strong>Type:</strong> {selectedApplication.membershipType}
                </p>
                <p>
                  <strong>Experience Level:</strong> {selectedApplication.experienceLevel || "Not specified"}
                </p>
                <p>
                  <strong>Status:</strong> {selectedApplication.status}
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedApplication.interests.map((interest, index) => (
                    <Badge key={index} variant="outline">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
              {selectedApplication.comments && (
                <div className="md:col-span-2">
                  <h3 className="font-medium text-sm text-muted-foreground mb-1">Comments</h3>
                  <p className="whitespace-pre-wrap">{selectedApplication.comments}</p>
                </div>
              )}
            </div>
            <div className="flex justify-end gap-2 mt-4 pt-4 border-t">
              {selectedApplication.status === "pending" && (
                <>
                  <Button
                    variant="outline"
                    className="flex items-center gap-1 text-green-600 hover:text-green-700"
                    onClick={() => {
                      updateApplicationStatus(selectedApplication.id, "approved")
                      setIsDialogOpen(false)
                    }}
                  >
                    <Check className="h-4 w-4" />
                    Approve
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-1 text-red-600 hover:text-red-700"
                    onClick={() => {
                      updateApplicationStatus(selectedApplication.id, "rejected")
                      setIsDialogOpen(false)
                    }}
                  >
                    <X className="h-4 w-4" />
                    Reject
                  </Button>
                </>
              )}
              <Button
                className="bg-brick-red hover:bg-brick-red/90"
                onClick={() => (window.location.href = `mailto:${selectedApplication.email}`)}
              >
                Contact Applicant
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
