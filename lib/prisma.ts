import { PrismaClient } from '../src/app/generated/prisma'

declare global {
  var prisma: PrismaClient | undefined
}

// Ensure the Prisma client is instantiated only once
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

// In development mode, we assign the Prisma client to the global object to avoid multiple instances
if (process.env.NODE_ENV !== 'production') global.prisma = prisma

// Add middleware to update stats
prisma.$use(async (params, next) => {
  const result = await next(params)

  // Only update stats for write operations
  if (['create', 'update', 'delete'].includes(params.action)) {
    try {
      // Update stats based on the model that changed
      switch (params.model) {
        case 'BlogPost':
          await updateBlogStats()
          break
        case 'Event':
        case 'EventRegistration':
          await updateEventStats()
          break
        case 'MembershipApplication':
          await updateMemberStats()
          break
        case 'ContactSubmission':
          await updateMessageStats()
          break
        case 'AdminUser':
          await updateUserStats()
          break
      }
    } catch (error) {
      console.error('Error updating stats:', error)
    }
  }

  return result
})

async function updateBlogStats() {
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

  const postTrend = calculateTrend(postsByMonth)
  const publishingRate = recentPosts / 30
  const completionRate = totalPosts ? (publishedPosts / totalPosts) * 100 : 0

  const blogStats = await prisma.blogStats.findFirst() || await prisma.blogStats.create({ data: {} })
  await prisma.blogStats.update({
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
  })
}

async function updateEventStats() {
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
    }).then((regs: { _count: number }[]) => {
      const total = regs.reduce((sum: number, reg: { _count: number }) => sum + reg._count, 0)
      return regs.length ? Math.round(total / regs.length) : 0
    })
  ])

  const participationRate = totalEvents ? (totalParticipants / totalEvents) * 100 : 0

  const eventStats = await prisma.eventStats.findFirst() || await prisma.eventStats.create({ data: {} })
  await prisma.eventStats.update({
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
  })
}

async function updateMemberStats() {
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

  const retentionRate = totalMembers ? (activeMembers / totalMembers) * 100 : 0
  const growthRate = newMembers / 30

  const memberStats = await prisma.memberStats.findFirst() || await prisma.memberStats.create({ data: {} })
  await prisma.memberStats.update({
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
  })
}

async function updateMessageStats() {
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

  const responseRate = totalMessages ? (repliedMessages / totalMessages) * 100 : 0

  const messageStats = await prisma.messageStats.findFirst() || await prisma.messageStats.create({ data: {} })
  await prisma.messageStats.update({
    where: { id: messageStats.id },
    data: {
      totalMessages,
      newMessages,
      repliedMessages,
      responseRate,
      messagesByMonth: JSON.stringify(messagesByMonth),
      responseTrend: responseRate
    }
  })
}

async function updateUserStats() {
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

  const activityRate = totalUsers ? (activeUsers / totalUsers) * 100 : 0
  const growthRate = newUsers / 30

  const userStats = await prisma.userStats.findFirst() || await prisma.userStats.create({ data: {} })
  await prisma.userStats.update({
    where: { id: userStats.id },
    data: {
      totalUsers,
      activeUsers,
      newUsers,
      userRoles: 1,
      usersByMonth: JSON.stringify(usersByMonth),
      activityRate,
      growthRate
    }
  })
}

function calculateTrend(data: any[]) {
  if (data.length < 2) return 0
  
  const currentMonth = data[data.length - 1]._count
  const previousMonth = data[data.length - 2]._count
  
  if (previousMonth === 0) return 0
  return ((currentMonth - previousMonth) / previousMonth) * 100
}

// Wrapper function to handle errors gracefully when performing Prisma queries
export const safePrismaQuery = async <T>(query: Promise<T>): Promise<T | null> => {
  try {
    return await query
  } catch (error) {
    console.error('Prisma query failed:', error)
    return null
  }
}
