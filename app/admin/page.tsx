import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText, Users, Mail } from "lucide-react"

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)

  // Get counts for dashboard
  const eventsCount = await prisma.event.count()
  const upcomingEventsCount = await prisma.event.count({
    where: {
      eventDate: {
        gte: new Date(),
      },
    },
  })
  const blogPostsCount = await prisma.blogPost.count()
  const publishedBlogPostsCount = await prisma.blogPost.count({
    where: {
      isPublished: true,
    },
  })
  const membersCount = await prisma.membershipApplication.count()
  const pendingMembersCount = await prisma.membershipApplication.count({
    where: {
      status: "pending",
    },
  })
  const unreadContactsCount = await prisma.contactSubmission.count({
    where: {
      isRead: false,
    },
  })

  // Get recent contact submissions
  const recentContacts = await prisma.contactSubmission.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  })

  // Get upcoming events
  const upcomingEvents = await prisma.event.findMany({
    where: {
      eventDate: {
        gte: new Date(),
      },
    },
    include: {
      translations: {
        where: {
          language: {
            isDefault: true,
          },
        },
      },
    },
    orderBy: {
      eventDate: "asc",
    },
    take: 5,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {session?.user?.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{eventsCount}</div>
            <p className="text-xs text-muted-foreground">{upcomingEventsCount} upcoming</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{blogPostsCount}</div>
            <p className="text-xs text-muted-foreground">{publishedBlogPostsCount} published</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{membersCount}</div>
            <p className="text-xs text-muted-foreground">{pendingMembersCount} pending applications</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unreadContactsCount}</div>
            <p className="text-xs text-muted-foreground">unread messages</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingEvents.length > 0 ? (
              <ul className="space-y-4">
                {upcomingEvents.map((event) => (
                  <li key={event.id} className="border-b pb-2 last:border-0">
                    <div className="font-medium">{event.translations[0]?.title || "Untitled Event"}</div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(event.eventDate).toLocaleDateString()} at{" "}
                      {new Date(event.eventDate).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No upcoming events</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Contact Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            {recentContacts.length > 0 ? (
              <ul className="space-y-4">
                {recentContacts.map((contact) => (
                  <li key={contact.id} className="border-b pb-2 last:border-0">
                    <div className="font-medium">{contact.subject}</div>
                    <div className="text-sm text-muted-foreground">
                      From: {contact.name} ({contact.email})
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No recent contact submissions</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
