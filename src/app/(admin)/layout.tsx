'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { useAuth } from '@/contexts/auth-context'
import { Loader2 } from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, isLoading, isAdmin } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      router.push('/login?redirect=/admin')
    }
  }, [user, isLoading, isAdmin, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F5F2ED' }}>
        <Loader2 className="h-8 w-8 animate-spin" style={{ color: '#C5A059' }} />
      </div>
    )
  }

  if (!user || !isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F2ED' }}>
      <AdminSidebar />
      <main className="lg:ml-72 min-h-screen">
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
