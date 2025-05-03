import { PrismaClient } from '@prisma/client'

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

// Wrapper function to handle errors gracefully when performing Prisma queries
export const safePrismaQuery = async <T>(query: Promise<T>): Promise<T | null> => {
  try {
    return await query
  } catch (error) {
    console.error('Prisma query failed:', error)
    return null
  }
}
