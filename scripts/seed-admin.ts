import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  const password = process.env.ADMIN_PASSWORD || "admin123"
  const hashedPassword = await hash(password, 10)

  const admin = await prisma.adminUser.upsert({
    where: { email: "admin@talesofbrusshell.org" },
    update: {},
    create: {
      email: "admin@talesofbrusshell.org",
      name: "Admin User",
      passwordHash: hashedPassword,
    },
  })

  console.log({ admin })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
