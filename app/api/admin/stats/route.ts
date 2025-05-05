import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    // Get or create stats records
    const [blogStats, eventStats, memberStats, messageStats, userStats] = await Promise.all([
      prisma.blogStats.findFirst() || prisma.blogStats.create({ data: {} }),
      prisma.eventStats.findFirst() || prisma.eventStats.create({ data: {} }),
      prisma.memberStats.findFirst() || prisma.memberStats.create({ data: {} }),
      prisma.messageStats.findFirst() || prisma.messageStats.create({ data: {} }),
      prisma.userStats.findFirst() || prisma.userStats.create({ data: {} })
    ])

    if (!blogStats || !eventStats || !memberStats || !messageStats || !userStats) {
      throw new Error("Failed to create stats records")
    }

    // Update blog stats
    const [
      totalPosts,
      publishedPosts,
      draftPosts,
      archivedPosts,
      recentPosts,
      postsByCategory,
      postsByMonth,
      postsByAuthor,
      averageReadTime
    ] = await Promise.all([
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { isPublished: true, isArchived: false } }),
      prisma.blogPost.count({ where: { isPublished: false, isArchived: false } }),
      prisma.blogPost.count({ where: { isArchived: true } }),
      prisma.blogPost.count({
        where: {
          createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
        }
      }),
      prisma.blogPost.groupBy({
        by: ['category'],
        _count: true,
        orderBy: { _count: { category: 'desc' } }
      }),
      prisma.blogPost.groupBy({
        by: ['createdAt'],
        _count: true,
        where: {
          createdAt: { gte: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000) }
        },
        orderBy: { createdAt: 'asc' }
      }),
      prisma.blogPost.groupBy({
        by: ['authorId'],
        _count: true,
        orderBy: { _count: { authorId: 'desc' } }
      }),
      prisma.blogPost.aggregate({
        _avg: { readTime: true }
      })
    ])

    // Update event stats
    const [
      totalEvents,
      upcomingEvents,
      ongoingEvents,
      totalParticipants,
      eventsByType,
      eventsByMonth,
      averageParticipants
    ] = await Promise.all([
      prisma.event.count(),
      prisma.event.count({ where: { eventDate: { gt: new Date() } } }),
      prisma.event.count({
        where: {
          eventDate: { lte: new Date() },
          eventEndDate: { gt: new Date() }
        }
      }),
      prisma.eventRegistration.count(),
      prisma.event.groupBy({
        by: ['eventType'],
        _count: true
      }),
      prisma.event.groupBy({
        by: ['eventDate'],
        _count: true,
        where: {
          eventDate: { gte: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) }
        },
        orderBy: { eventDate: 'asc' }
      }),
      prisma.eventRegistration.groupBy({
        by: ['eventId'],
        _count: true
      }).then(regs => {
        const total = regs.reduce((sum, reg) => sum + reg._count, 0)
        return regs.length ? Math.round(total / regs.length) : 0
      })
    ])

    // Update member stats
    const [
      totalMembers,
      activeMembers,
      newMembers,
      membersByType,
      membersByMonth
    ] = await Promise.all([
      prisma.membershipApplication.count(),
      prisma.membershipApplication.count({ where: { status: "active" } }),
      prisma.membershipApplication.count({
        where: {
          createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
        }
      }),
      prisma.membershipApplication.groupBy({
        by: ['membershipType'],
        _count: true
      }),
      prisma.membershipApplication.groupBy({
        by: ['createdAt'],
        _count: true,
        where: {
          createdAt: { gte: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) }
        },
        orderBy: { createdAt: 'asc' }
      })
    ])

    // Update message stats
    const [
      totalMessages,
      newMessages,
      repliedMessages,
      messagesByMonth
    ] = await Promise.all([
      prisma.contactSubmission.count(),
      prisma.contactSubmission.count({ where: { isRead: false } }),
      prisma.contactSubmission.count({ where: { isRead: true } }),
      prisma.contactSubmission.groupBy({
        by: ['createdAt'],
        _count: true,
        where: {
          createdAt: { gte: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) }
        },
        orderBy: { createdAt: 'asc' }
      })
    ])

    // Update user stats
    const [
      totalUsers,
      activeUsers,
      newUsers,
      usersByMonth
    ] = await Promise.all([
      prisma.adminUser.count(),
      prisma.adminUser.count({
        where: {
          updatedAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
        }
      }),
      prisma.adminUser.count({
        where: {
          createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
        }
      }),
      prisma.adminUser.groupBy({
        by: ['createdAt'],
        _count: true,
        where: {
          createdAt: { gte: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) }
        },
        orderBy: { createdAt: 'asc' }
      })
    ])

    // Calculate trends and rates
    const postTrend = calculateTrend(postsByMonth)
    const publishingRate = recentPosts / 30
    const completionRate = (publishedPosts / totalPosts) * 100
    const participationRate = totalEvents ? (totalParticipants / totalEvents) * 100 : 0
    const retentionRate = totalMembers ? (activeMembers / totalMembers) * 100 : 0
    const growthRate = newMembers / 30
    const responseRate = totalMessages ? (repliedMessages / totalMessages) * 100 : 0
    const activityRate = totalUsers ? (activeUsers / totalUsers) * 100 : 0
    const userGrowthRate = newUsers / 30

    // Update stats records
    const [updatedBlogStats, updatedEventStats, updatedMemberStats, updatedMessageStats, updatedUserStats] = await Promise.all([
      prisma.blogStats.update({
        where: { id: blogStats.id },
        data: {
          totalPosts,
          publishedPosts,
          draftPosts,
          archivedPosts,
          recentPosts,
          postsByCategory: JSON.stringify(postsByCategory),
          postsByMonth: JSON.stringify(postsByMonth),
          postsByAuthor: JSON.stringify(postsByAuthor),
          averageReadTime: Math.round(averageReadTime._avg.readTime || 0),
          postTrend,
          publishingRate,
          completionRate
        }
      }),
      prisma.eventStats.update({
        where: { id: eventStats.id },
        data: {
          totalEvents,
          upcomingEvents,
          ongoingEvents,
          totalParticipants,
          eventsByType: JSON.stringify(eventsByType),
          eventsByMonth: JSON.stringify(eventsByMonth),
          averageParticipants,
          participationRate
        }
      }),
      prisma.memberStats.update({
        where: { id: memberStats.id },
        data: {
          totalMembers,
          activeMembers,
          newMembers,
          membershipTypes: membersByType.length,
          membersByType: JSON.stringify(membersByType),
          membersByMonth: JSON.stringify(membersByMonth),
          retentionRate,
          growthRate
        }
      }),
      prisma.messageStats.update({
        where: { id: messageStats.id },
        data: {
          totalMessages,
          newMessages,
          repliedMessages,
          responseRate,
          messagesByMonth: JSON.stringify(messagesByMonth),
          responseTrend: responseRate
        }
      }),
      prisma.userStats.update({
        where: { id: userStats.id },
        data: {
          totalUsers,
          activeUsers,
          newUsers,
          userRoles: 1,
          usersByMonth: JSON.stringify(usersByMonth),
          activityRate,
          growthRate: userGrowthRate
        }
      })
    ])

    // Return the updated stats
    return NextResponse.json({
      blogStats: updatedBlogStats,
      eventStats: updatedEventStats,
      memberStats: updatedMemberStats,
      messageStats: updatedMessageStats,
      userStats: updatedUserStats
    })
  } catch (error) {
    console.error('Error updating stats:', error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

function calculateTrend(data: any[]) {
  if (data.length < 2) return 0
  
  const currentMonth = data[data.length - 1]._count
  const previousMonth = data[data.length - 2]._count
  
  if (previousMonth === 0) return 0
  return ((currentMonth - previousMonth) / previousMonth) * 100
} 