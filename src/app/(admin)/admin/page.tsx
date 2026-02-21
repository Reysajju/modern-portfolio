'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  BookOpen,
  ImageIcon,
  Handshake,
  Mail,
  TrendingUp,
  Eye,
  Download,
  ArrowUpRight,
  Loader2
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Stats {
  blogs: number
  books: number
  media: number
  sponsors: number
  contacts: number
  downloads: number
}

interface RecentActivity {
  type: 'blog' | 'book' | 'contact'
  title: string
  date: string
  href?: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      // Fetch all stats in parallel
      const [blogsRes, booksRes, mediaRes, sponsorsRes, contactsRes] = await Promise.all([
        fetch('/api/blogs'),
        fetch('/api/books'),
        fetch('/api/media'),
        fetch('/api/sponsors'),
        fetch('/api/contacts'),
      ])

      const blogs = await blogsRes.json()
      const books = await booksRes.json()
      const media = await mediaRes.json()
      const sponsors = await sponsorsRes.json()
      const contacts = contactsRes.ok ? await contactsRes.json() : []

      setStats({
        blogs: blogs.length,
        books: books.length,
        media: media.length,
        sponsors: sponsors.length,
        contacts: contacts.length,
        downloads: books.reduce((sum: number, b: { downloadCount: number }) => sum + (b.downloadCount || 0), 0),
      })

      // Create recent activity from blogs and contacts
      const activities: RecentActivity[] = [
        ...blogs.slice(0, 3).map((b: { title: string; createdAt: string }) => ({
          type: 'blog' as const,
          title: b.title,
          date: b.createdAt,
          href: `/admin/blogs`,
        })),
        ...contacts.slice(0, 2).map((c: { name: string; createdAt: string }) => ({
          type: 'contact' as const,
          title: `Message from ${c.name}`,
          date: c.createdAt,
          href: `/admin/contacts`,
        })),
      ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

      setRecentActivity(activities.slice(0, 5))
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const statCards = [
    { title: 'Blog Posts', icon: FileText, value: stats?.blogs || 0, color: '#C5A059', href: '/admin/blogs' },
    { title: 'Books', icon: BookOpen, value: stats?.books || 0, color: '#1B3022', href: '/admin/books' },
    { title: 'Media Files', icon: ImageIcon, value: stats?.media || 0, color: '#C5A059', href: '/admin/media' },
    { title: 'Sponsors', icon: Handshake, value: stats?.sponsors || 0, color: '#1B3022', href: '/admin/sponsors' },
    { title: 'Messages', icon: Mail, value: stats?.contacts || 0, color: '#C5A059', href: '/admin/contacts' },
    { title: 'Downloads', icon: Download, value: stats?.downloads || 0, color: '#1B3022' },
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin" style={{ color: '#C5A059' }} />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#1B3022', fontFamily: 'var(--font-playfair), serif' }}>
          Dashboard
        </h1>
        <p style={{ color: '#1B3022', opacity: 0.7 }}>
          Welcome back! Here&apos;s an overview of your portfolio.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
      >
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <motion.div key={stat.title} variants={fadeInUp}>
              <Card
                className="cursor-pointer transition-all duration-300 hover:shadow-lg"
                style={{ borderColor: `${stat.color}20` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <Icon size={20} style={{ color: stat.color }} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold" style={{ color: '#1B3022' }}>
                        {stat.value}
                      </p>
                      <p className="text-xs" style={{ color: '#1B3022', opacity: 0.6 }}>
                        {stat.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ color: '#1B3022' }}>
                <TrendingUp size={20} style={{ color: '#C5A059' }} />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                className="w-full justify-between"
                style={{ backgroundColor: '#1B3022', color: '#F5F2ED' }}
                onClick={() => window.location.href = '/admin/blogs/new'}
              >
                Create New Blog Post
                <ArrowUpRight size={16} />
              </Button>
              <Button
                className="w-full justify-between"
                style={{ backgroundColor: '#C5A059', color: '#1B3022' }}
                onClick={() => window.location.href = '/admin/books/new'}
              >
                Add New Book
                <ArrowUpRight size={16} />
              </Button>
              <Button
                variant="outline"
                className="w-full justify-between"
                style={{ borderColor: '#1B3022', color: '#1B3022' }}
                onClick={() => window.location.href = '/admin/media'}
              >
                Upload Media Files
                <ArrowUpRight size={16} />
              </Button>
              <Button
                variant="outline"
                className="w-full justify-between"
                style={{ borderColor: '#C5A059', color: '#C5A059' }}
                onClick={() => window.location.href = '/admin/sponsors/new'}
              >
                Add New Sponsor
                <ArrowUpRight size={16} />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ color: '#1B3022' }}>
                <Eye size={20} style={{ color: '#C5A059' }} />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentActivity.length === 0 ? (
                <p className="text-center py-4" style={{ color: '#1B3022', opacity: 0.6 }}>
                  No recent activity
                </p>
              ) : (
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ backgroundColor: 'rgba(27, 48, 34, 0.05)' }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: activity.type === 'blog' ? '#C5A05920' : '#1B302220' }}
                      >
                        {activity.type === 'blog' ? (
                          <FileText size={16} style={{ color: '#C5A059' }} />
                        ) : (
                          <Mail size={16} style={{ color: '#1B3022' }} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate" style={{ color: '#1B3022' }}>
                          {activity.title}
                        </p>
                        <p className="text-xs" style={{ color: '#1B3022', opacity: 0.5 }}>
                          {new Date(activity.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Sponsor Banner */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mt-8"
      >
        <Card style={{ backgroundColor: '#1B3022' }}>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#C5A059' }}
              >
                <Sparkles size={24} style={{ color: '#1B3022' }} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg" style={{ color: '#F5F2ED' }}>
                  Sponsored by Claude AI
                </h3>
                <p className="text-sm" style={{ color: '#F5F2ED', opacity: 0.7 }}>
                  This portfolio is powered by Claude AI for intelligent content management and optimization.
                </p>
              </div>
              <Button
                style={{ backgroundColor: '#C5A059', color: '#1B3022' }}
                onClick={() => window.open('https://claude.ai', '_blank')}
              >
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

// Import Sparkles that was missing
import { Sparkles } from 'lucide-react'
