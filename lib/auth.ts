import type { NextAuthOptions } from "next-auth"
import type { JWT } from "next-auth/jwt"
import type { Session } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import { prisma } from "@/lib/prisma"
import { defaultLocale } from "@/lib/i18n/locales"
import { locales } from "@/lib/i18n/locales"

interface ExtendedUser {
  id: string
  email: string
  name: string
}

interface ExtendedSession extends Session {
  user: ExtendedUser
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: `/${defaultLocale}/login`,
    error: `/${defaultLocale}/login`,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<ExtendedUser | null> {
        console.log("Auth - Authorize called with credentials:", { email: credentials?.email })
        
        if (!credentials?.email || !credentials?.password) {
          console.log("Auth - Missing credentials")
          throw new Error("Please enter both email and password")
        }

        const user = await prisma.adminUser.findUnique({
          where: {
            email: credentials.email,
          },
        })

        console.log("Auth - User found:", user ? "Yes" : "No")

        if (!user) {
          console.log("Auth - User not found")
          throw new Error("Invalid email or password")
        }

        const isPasswordValid = await compare(credentials.password, user.passwordHash)
        console.log("Auth - Password valid:", isPasswordValid)

        if (!isPasswordValid) {
          console.log("Auth - Invalid password")
          throw new Error("Invalid email or password")
        }

        console.log("Auth - Authentication successful")
        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("Auth - JWT Callback - Token:", token)
      console.log("Auth - JWT Callback - User:", user)
      
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      console.log("Auth - Session Callback - Session:", session)
      console.log("Auth - Session Callback - Token:", token)
      
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          email: token.email as string,
        } as ExtendedUser,
      }
    },
    async redirect({ url, baseUrl }) {
      console.log("Auth - Redirect Callback - URL:", url)
      console.log("Auth - Redirect Callback - Base URL:", baseUrl)
      
      // If URL is relative, prepend the locale
      if (url.startsWith("/")) {
        // Check if URL already has a locale
        const hasLocale = locales.some(locale => url.startsWith(`/${locale}/`))
        if (!hasLocale) {
          // Ensure the URL is properly formatted
          const cleanUrl = url.startsWith("/") ? url : `/${url}`
          return `${baseUrl}/${defaultLocale}${cleanUrl}`
        }
        return `${baseUrl}${url}`
      }
      // If URL is absolute and same origin, return as is
      else if (new URL(url).origin === baseUrl) {
        return url
      }
      // Otherwise return base URL with locale
      return `${baseUrl}/${defaultLocale}`
    },
  },
}
