"use client"

import { useTranslation } from "@/lib/i18n/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { 
  FileText, 
  Calendar, 
  Users, 
  Mail, 
  UserCog, 
  TrendingUp, 
  TrendingDown, 
  ArrowRight,
  RefreshCw,
  Plus,
  BarChart3
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ReactElement } from 'react'

interface DashboardStats {
  blogStats: {
    totalPosts: number
    publishedPosts: number
    draftPosts: number
    archivedPosts: number
    recentPosts: number
    postsByCategory: string
    postsByMonth: string
    postsByAuthor: string
    averageReadTime: number
    postTrend: number
    publishingRate: number
    completionRate: number
  }
  eventStats: {
    totalEvents: number
    upcomingEvents: number
    ongoingEvents: number
    totalParticipants: number
    eventsByType: string
    eventsByMonth: string
    averageParticipants: number
    participationRate: number
  }
  memberStats: {
    totalMembers: number
    activeMembers: number
    newMembers: number
    membershipTypes: number
    membersByType: string
    membersByMonth: string
    retentionRate: number
    growthRate: number
  }
  messageStats: {
    totalMessages: number
    newMessages: number
    repliedMessages: number
    responseRate: number
    messagesByMonth: string
    responseTrend: number
  }
  userStats: {
    totalUsers: number
    activeUsers: number
    newUsers: number
    userRoles: number
    usersByMonth: string
    activityRate: number
    growthRate: number
  }
}

interface Section {
  title: string
  description: string
  href: string
  icon: React.ComponentType<any>
  stats: any
  key: string
  statsDisplay: (stats: any) => ReactElement
}

const cardGradients = {
  articles: "from-blue-500/10 to-blue-600/10",
  events: "from-green-500/10 to-green-600/10",
  members: "from-purple-500/10 to-purple-600/10",
  messages: "from-orange-500/10 to-orange-600/10",
  users: "from-red-500/10 to-red-600/10",
}

const iconColors = {
  articles: "text-blue-500",
  events: "text-green-500",
  members: "text-purple-500",
  messages: "text-orange-500",
  users: "text-red-500",
}

export default function AdminPage() {
  const { t } = useTranslation()
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/admin/stats')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log('Stats data received:', data)
      if (!data || Object.keys(data).length === 0) {
        throw new Error('No stats data received')
      }
      setStats(data)
    } catch (error) {
      console.error('Error fetching stats:', error)
      setError(error instanceof Error ? error.message : 'Failed to load stats')
    } finally {
      setIsLoading(false)
    }
  }

  const sections: Section[] = [
    {
      title: t("admin.nav.blog"),
      description: t("admin.dashboard.sections.blog.description"),
      href: "/admin/blog",
      icon: FileText,
      stats: stats?.blogStats,
      key: "articles",
      statsDisplay: (stats: any) => (
        <div className="space-y-4">
          {[
            { key: 'totalPosts', label: 'Total Posts' },
            { key: 'publishedPosts', label: 'Published Posts' },
            { key: 'draftPosts', label: 'Draft Posts' },
            { key: 'archivedPosts', label: 'Archived Posts' },
            { key: 'recentPosts', label: 'Recent Posts' }
          ].map(({ key, label }) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  {label}
                </span>
                <div className="flex items-center gap-2">
                  {key === 'totalPosts' && getTrendIcon(stats.postTrend)}
                  <span className="font-semibold">
                    {stats[key]}
                  </span>
                </div>
              </div>
              {key === 'totalPosts' && (
                <Progress 
                  value={stats.completionRate} 
                  className="h-2"
                />
              )}
            </div>
          ))}
        </div>
      )
    },
    {
      title: t("admin.nav.events"),
      description: t("admin.dashboard.sections.events.description"),
      href: "/admin/events",
      icon: Calendar,
      stats: stats?.eventStats,
      key: "events",
      statsDisplay: (stats: any) => (
        <div className="space-y-4">
          {[
            { key: 'totalEvents', label: 'Total Events' },
            { key: 'upcomingEvents', label: 'Upcoming Events' },
            { key: 'ongoingEvents', label: 'Ongoing Events' },
            { key: 'totalParticipants', label: 'Total Participants' }
          ].map(({ key, label }) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  {label}
                </span>
                <div className="flex items-center gap-2">
                  {key === 'totalEvents' && getTrendIcon(stats.participationRate)}
                  <span className="font-semibold">
                    {stats[key]}
                  </span>
                </div>
              </div>
              {key === 'totalEvents' && (
                <Progress 
                  value={stats.participationRate} 
                  className="h-2"
                />
              )}
            </div>
          ))}
        </div>
      )
    },
    {
      title: t("admin.nav.members"),
      description: t("admin.dashboard.sections.members.description"),
      href: "/admin/members",
      icon: Users,
      stats: stats?.memberStats,
      key: "members",
      statsDisplay: (stats: any) => (
        <div className="space-y-4">
          {[
            { key: 'totalMembers', label: 'Total Members' },
            { key: 'activeMembers', label: 'Active Members' },
            { key: 'newMembers', label: 'New Members' },
            { key: 'membershipTypes', label: 'Membership Types' }
          ].map(({ key, label }) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  {label}
                </span>
                <div className="flex items-center gap-2">
                  {key === 'totalMembers' && getTrendIcon(stats.growthRate)}
                  <span className="font-semibold">
                    {stats[key]}
                  </span>
                </div>
              </div>
              {key === 'totalMembers' && (
                <Progress 
                  value={stats.retentionRate} 
                  className="h-2"
                />
              )}
            </div>
          ))}
        </div>
      )
    },
    {
      title: t("admin.nav.contacts"),
      description: t("admin.dashboard.sections.contacts.description"),
      href: "/admin/contacts",
      icon: Mail,
      stats: stats?.messageStats,
      key: "messages",
      statsDisplay: (stats: any) => (
        <div className="space-y-4">
          {[
            { key: 'totalMessages', label: 'Total Messages' },
            { key: 'newMessages', label: 'New Messages' },
            { key: 'repliedMessages', label: 'Replied Messages' }
          ].map(({ key, label }) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  {label}
                </span>
                <div className="flex items-center gap-2">
                  {key === 'totalMessages' && getTrendIcon(stats.responseTrend)}
                  <span className="font-semibold">
                    {stats[key]}
                  </span>
                </div>
              </div>
              {key === 'totalMessages' && (
                <Progress 
                  value={stats.responseRate} 
                  className="h-2"
                />
              )}
            </div>
          ))}
        </div>
      )
    },
    {
      title: t("admin.nav.users"),
      description: t("admin.dashboard.sections.users.description"),
      href: "/admin/users",
      icon: UserCog,
      stats: stats?.userStats,
      key: "users",
      statsDisplay: (stats: any) => (
        <div className="space-y-4">
          {[
            { key: 'totalUsers', label: 'Total Users' },
            { key: 'activeUsers', label: 'Active Users' },
            { key: 'newUsers', label: 'New Users' },
            { key: 'userRoles', label: 'User Roles' }
          ].map(({ key, label }) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  {label}
                </span>
                <div className="flex items-center gap-2">
                  {key === 'totalUsers' && getTrendIcon(stats.growthRate)}
                  <span className="font-semibold">
                    {stats[key]}
                  </span>
                </div>
              </div>
              {key === 'totalUsers' && (
                <Progress 
                  value={stats.activityRate} 
                  className="h-2"
                />
              )}
            </div>
          ))}
        </div>
      )
    }
  ]

  const getProgressValue = (current: number, total: number) => {
    return Math.round((current / total) * 100)
  }

  const getTrendIcon = (value: number) => {
    if (value > 0) return <TrendingUp className="h-4 w-4 text-green-500" />
    if (value < 0) return <TrendingDown className="h-4 w-4 text-red-500" />
    return null
  }

  return (
    <div className="space-y-8 p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-dark-mahogany to-brick-red bg-clip-text text-transparent">
            {t("admin.dashboard.title")}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t("admin.dashboard.description")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {error && (
            <div className="text-sm text-red-500">
              {error}
            </div>
          )}
          {isLoading && (
            <span className="text-sm text-muted-foreground">Loading stats...</span>
          )}
          <Button 
            variant="outline" 
            size="icon"
            onClick={fetchStats}
            className="h-10 w-10"
          >
            <RefreshCw className={cn("h-4 w-4", isLoading && "animate-spin")} />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <Card 
                key={section.href}
                className={cn(
                  "transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
                  "bg-gradient-to-br",
                  cardGradients[section.key as keyof typeof cardGradients]
                )}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-semibold">
                    {section.title}
                  </CardTitle>
                  <section.icon className={cn("h-6 w-6", iconColors[section.key as keyof typeof iconColors])} />
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="space-y-4">
                      <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
                    </div>
                  ) : error ? (
                    <div className="text-sm text-red-500">
                      {error}
                    </div>
                  ) : !stats ? (
                    <div className="text-sm text-muted-foreground">
                      Failed to load stats. Please try again.
                    </div>
                  ) : section.stats ? (
                    section.statsDisplay ? (
                      section.statsDisplay(section.stats)
                    ) : (
                      <div className="space-y-4">
                        {Object.entries(section.stats).map(([key, value]) => {
                          const isPercentage = key.includes('Rate')
                          const isMainMetric = key.includes('total') || key.includes('active')
                          
                          return (
                            <div key={key} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-muted-foreground">
                                  {t(`admin.dashboard.stats.${section.key}.${key}`)}
                                </span>
                                <div className="flex items-center gap-2">
                                  {isMainMetric && getTrendIcon(Math.random() * 20 - 10)}
                                  <span className="font-semibold">
                                    {isPercentage ? `${value}%` : value}
                                  </span>
                                </div>
                              </div>
                              {isMainMetric && (
                                <Progress 
                                  value={getProgressValue(value as number, 100)} 
                                  className="h-2"
                                />
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {section.description}
                    </p>
                  )}
                  <div className="mt-6 flex items-center justify-between">
                    <Button
                      className="group"
                      onClick={() => router.push(section.href)}
                    >
                      {t("admin.dashboard.buttonManage")}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => router.push(`${section.href}/new`)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <Card 
                key={section.href}
                className={cn(
                  "transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
                  "bg-gradient-to-br",
                  cardGradients[section.key as keyof typeof cardGradients]
                )}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {section.title}
                  </CardTitle>
                  <section.icon className={cn("h-4 w-4", iconColors[section.key as keyof typeof iconColors])} />
                </CardHeader>
                <CardContent>
                  {section.stats && (
                    <div className="space-y-4">
                      {section.key === 'articles' && 'postsByCategory' in section.stats && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Posts by Category</h4>
                          {JSON.parse(section.stats.postsByCategory).map((item: any) => (
                            <div key={item.category} className="flex justify-between">
                              <span>{item.category}</span>
                              <span>{item._count}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {section.key === 'events' && 'eventsByType' in section.stats && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Events by Type</h4>
                          {JSON.parse(section.stats.eventsByType).map((item: any) => (
                            <div key={item.eventType} className="flex justify-between">
                              <span>{item.eventType}</span>
                              <span>{item._count}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {section.key === 'members' && 'membersByType' in section.stats && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Members by Type</h4>
                          {JSON.parse(section.stats.membersByType).map((item: any) => (
                            <div key={item.membershipType} className="flex justify-between">
                              <span>{item.membershipType}</span>
                              <span>{item._count}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <Card 
                key={section.href}
                className={cn(
                  "transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
                  "bg-gradient-to-br",
                  cardGradients[section.key as keyof typeof cardGradients]
                )}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {section.title}
                  </CardTitle>
                  <section.icon className={cn("h-4 w-4", iconColors[section.key as keyof typeof iconColors])} />
                </CardHeader>
                <CardContent>
                  {section.stats && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Monthly Trends</h4>
                        {section.key === 'articles' && 'postsByMonth' in section.stats && (
                          <div className="space-y-1">
                            {JSON.parse(section.stats.postsByMonth).map((item: any) => (
                              <div key={item.createdAt} className="flex justify-between text-sm">
                                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                                <span>{item._count}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {section.key === 'events' && 'eventsByMonth' in section.stats && (
                          <div className="space-y-1">
                            {JSON.parse(section.stats.eventsByMonth).map((item: any) => (
                              <div key={item.eventDate} className="flex justify-between text-sm">
                                <span>{new Date(item.eventDate).toLocaleDateString()}</span>
                                <span>{item._count}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {section.key === 'members' && 'membersByMonth' in section.stats && (
                          <div className="space-y-1">
                            {JSON.parse(section.stats.membersByMonth).map((item: any) => (
                              <div key={item.createdAt} className="flex justify-between text-sm">
                                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                                <span>{item._count}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {section.key === 'messages' && 'messagesByMonth' in section.stats && (
                          <div className="space-y-1">
                            {JSON.parse(section.stats.messagesByMonth).map((item: any) => (
                              <div key={item.createdAt} className="flex justify-between text-sm">
                                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                                <span>{item._count}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {section.key === 'users' && 'usersByMonth' in section.stats && (
                          <div className="space-y-1">
                            {JSON.parse(section.stats.usersByMonth).map((item: any) => (
                              <div key={item.createdAt} className="flex justify-between text-sm">
                                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                                <span>{item._count}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 