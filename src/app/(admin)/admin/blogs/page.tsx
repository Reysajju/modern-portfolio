'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Loader2,
  FileText,
  Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useToast } from '@/hooks/use-toast'

interface Blog {
  id: string
  title: string
  slug: string
  excerpt: string | null
  coverImageUrl: string | null
  isPublished: boolean
  publishedAt: string | null
  createdAt: string
  author: {
    fullName: string | null
    email: string
  } | null
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs')
      const data = await response.json()
      setBlogs(data)
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const togglePublish = async (id: string, isPublished: boolean) => {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPublished: !isPublished }),
      })

      if (response.ok) {
        setBlogs(blogs.map(blog =>
          blog.id === id ? { ...blog, isPublished: !isPublished } : blog
        ))
        toast({
          title: isPublished ? 'Blog unpublished' : 'Blog published',
          description: 'The blog status has been updated.',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update blog status.',
        variant: 'destructive',
      })
    }
  }

  const deleteBlog = async (id: string) => {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setBlogs(blogs.filter(blog => blog.id !== id))
        toast({
          title: 'Blog deleted',
          description: 'The blog has been permanently deleted.',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete blog.',
        variant: 'destructive',
      })
    }
  }

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.slug.toLowerCase().includes(search.toLowerCase())
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin" style={{ color: '#C5A059' }} />
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#1B3022', fontFamily: 'var(--font-playfair), serif' }}>
            Blog Posts
          </h1>
          <p style={{ color: '#1B3022', opacity: 0.7 }}>
            Manage your blog articles and publications
          </p>
        </div>
        <Link href="/admin/blogs/new">
          <Button
            className="gap-2"
            style={{ backgroundColor: '#C5A059', color: '#1B3022' }}
          >
            <Plus size={18} />
            New Blog Post
          </Button>
        </Link>
      </motion.div>

      {/* Search */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mb-6"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#C5A059' }} />
          <Input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
            style={{ borderColor: '#D4CFC6' }}
          />
        </div>
      </motion.div>

      {/* Blog List */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {filteredBlogs.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="h-12 w-12 mx-auto mb-4" style={{ color: '#C5A059', opacity: 0.5 }} />
              <h3 className="text-lg font-medium mb-2" style={{ color: '#1B3022' }}>
                {search ? 'No blogs found' : 'No blog posts yet'}
              </h3>
              <p className="mb-4" style={{ color: '#1B3022', opacity: 0.6 }}>
                {search ? 'Try a different search term' : 'Create your first blog post to get started'}
              </p>
              {!search && (
                <Link href="/admin/blogs/new">
                  <Button style={{ backgroundColor: '#1B3022', color: '#F5F2ED' }}>
                    Create Blog Post
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ) : (
          filteredBlogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Cover Image */}
                  {blog.coverImageUrl && (
                    <div className="md:w-48 h-32 md:h-auto flex-shrink-0">
                      <img
                        src={blog.coverImageUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant={blog.isPublished ? 'default' : 'secondary'}
                            style={{
                              backgroundColor: blog.isPublished ? '#C5A059' : '#E8E4DD',
                              color: blog.isPublished ? '#1B3022' : '#1B3022'
                            }}
                          >
                            {blog.isPublished ? 'Published' : 'Draft'}
                          </Badge>
                          <span className="text-xs flex items-center gap-1" style={{ color: '#1B3022', opacity: 0.5 }}>
                            <Calendar size={12} />
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg mb-1 truncate" style={{ color: '#1B3022' }}>
                          {blog.title}
                        </h3>
                        <p className="text-sm truncate" style={{ color: '#1B3022', opacity: 0.6 }}>
                          {blog.excerpt || 'No excerpt'}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => togglePublish(blog.id, blog.isPublished)}
                          title={blog.isPublished ? 'Unpublish' : 'Publish'}
                        >
                          {blog.isPublished ? (
                            <EyeOff size={18} style={{ color: '#C5A059' }} />
                          ) : (
                            <Eye size={18} style={{ color: '#1B3022' }} />
                          )}
                        </Button>
                        <Link href={`/admin/blogs/${blog.id}/edit`}>
                          <Button variant="ghost" size="icon">
                            <Edit size={18} style={{ color: '#1B3022' }} />
                          </Button>
                        </Link>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Trash2 size={18} className="text-red-500" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete &quot;{blog.title}&quot;? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => deleteBlog(blog.id)}
                                className="bg-red-500 hover:bg-red-600"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </motion.div>
    </div>
  )
}
