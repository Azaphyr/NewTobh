import { PrismaClient } from '../src/app/generated/prisma'

const prisma = new PrismaClient()

async function updateStats() {
  try {
    console.log('Starting stats update...')

    // Get or create stats records
    const [blogStats, eventStats, memberStats, messageStats, userStats] = await Promise.all([
      prisma.blogStats.findFirst().then(stats => stats || prisma.blogStats.create({ data: {} })),
      prisma.eventStats.findFirst().then(stats => stats || prisma.eventStats.create({ data: {} })),
      prisma.memberStats.findFirst().then(stats => stats || prisma.memberStats.create({ data: {} })),
      prisma.messageStats.findFirst().then(stats => stats || prisma.messageStats.create({ data: {} })),
      prisma.userStats.findFirst().then(stats => stats || prisma.userStats.create({ data: {} }))
    ])

    console.log('Stats records created/found:', {
      blogStatsId: blogStats.id,
      eventStatsId: eventStats.id,
      memberStatsId: memberStats.id,
      messageStatsId: messageStats.id,
      userStatsId: userStats.id
    })

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
      }).then((regs: { _count: number }[]) => {
        const total = regs.reduce((sum: number, reg: { _count: number }) => sum + reg._count, 0)
        return regs.length ? Math.round(total / regs.length) : 0
      })
    ])

    // Calculate trends and rates
    const postTrend = calculateTrend(postsByMonth)
    const publishingRate = recentPosts / 30
    const completionRate = totalPosts ? (publishedPosts / totalPosts) * 100 : 0
    const participationRate = totalEvents ? (totalParticipants / totalEvents) * 100 : 0

    // Update stats records
    await Promise.all([
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
      })
    ])

    console.log('Stats updated successfully!')
    console.log('Blog Stats:', {
      totalPosts,
      publishedPosts,
      draftPosts,
      archivedPosts,
      recentPosts
    })
    console.log('Event Stats:', {
      totalEvents,
      upcomingEvents,
      ongoingEvents,
      totalParticipants
    })

  } catch (error) {
    console.error('Error updating stats:', error)
  } finally {
    await prisma.$disconnect()
  }
}

function calculateTrend(data: any[]) {
  if (data.length < 2) return 0
  
  const currentMonth = data[data.length - 1]._count
  const previousMonth = data[data.length - 2]._count
  
  if (previousMonth === 0) return 0
  return ((currentMonth - previousMonth) / previousMonth) * 100
}

updateStats() 