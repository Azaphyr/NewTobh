"use client"

import { useTranslation } from "@/lib/i18n/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState, useEffect } from "react"

interface AdminUser {
  id: number
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

export default function UsersPage() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState("")
  const [users, setUsers] = useState<AdminUser[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/admin/users")
        if (!response.ok) throw new Error("Failed to fetch users")
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error("Error fetching users:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{t("admin.users.title")}</h1>
        <Button>{t("admin.users.buttonNew")}</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("admin.users.searchTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder={t("admin.users.searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("admin.users.listTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-4">Loading...</div>
          ) : filteredUsers.length === 0 ? (
            <div className="text-center py-4">{t("admin.users.noUsers")}</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("admin.users.tableName")}</TableHead>
                  <TableHead>{t("admin.users.tableEmail")}</TableHead>
                  <TableHead>{t("admin.users.tableJoined")}</TableHead>
                  <TableHead>{t("admin.users.tableActions")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          {t("admin.users.buttonEdit")}
                        </Button>
                        <Button variant="destructive" size="sm">
                          {t("admin.users.buttonDelete")}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 