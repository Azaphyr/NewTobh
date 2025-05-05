"use client"

import { useState } from "react"
import { useTranslation } from "@/lib/i18n/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { fr, enUS } from "date-fns/locale"
import { useRouter } from "next/navigation"

interface Member {
  id: string
  name: string
  email: string
  role: "admin" | "member" | "guest"
  status: "active" | "inactive"
  joinedDate: string
}

export default function MembersPage() {
  const { t, locale } = useTranslation()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [members, setMembers] = useState<Member[]>([])

  const formatDate = (date: string) => {
    return format(new Date(date), "PPP", { locale: locale === "fr" ? fr : enUS })
  }

  const getRoleBadge = (role: Member["role"]) => {
    const variants = {
      admin: "destructive",
      member: "default",
      guest: "outline"
    } as const

    const labels = {
      admin: t("admin.members.roleAdmin"),
      member: t("admin.members.roleMember"),
      guest: t("admin.members.roleGuest")
    }

    return (
      <Badge variant={variants[role]}>
        {labels[role]}
      </Badge>
    )
  }

  const getStatusBadge = (status: Member["status"]) => {
    const variants = {
      active: "default",
      inactive: "secondary"
    } as const

    const labels = {
      active: t("admin.members.statusActive"),
      inactive: t("admin.members.statusInactive")
    }

    return (
      <Badge variant={variants[status]}>
        {labels[status]}
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{t("admin.members.title")}</h1>
        <Button onClick={() => router.push("/admin/members/new")}>
          {t("admin.members.buttonNew")}
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Input
          placeholder={t("admin.members.searchPlaceholder")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("admin.members.name")}</TableHead>
              <TableHead>{t("admin.members.email")}</TableHead>
              <TableHead>{t("admin.members.role")}</TableHead>
              <TableHead>{t("admin.members.status")}</TableHead>
              <TableHead>{t("admin.members.joinedDate")}</TableHead>
              <TableHead className="text-right">{t("admin.members.actions")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  {t("admin.members.noMembers")}
                </TableCell>
              </TableRow>
            ) : (
              members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{getRoleBadge(member.role)}</TableCell>
                  <TableCell>{getStatusBadge(member.status)}</TableCell>
                  <TableCell>{formatDate(member.joinedDate)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => router.push(`/admin/members/${member.id}`)}
                    >
                      {t("admin.members.buttonEdit")}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 