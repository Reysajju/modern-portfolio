'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PenTool, Calendar, Clock, ArrowRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Blog {
  id: string
  title: string
  slug: string
  excerpt: string | null
  coverImageUrl: string | null
  author: {
    fullName: string | null
    email: string
  } | null
  publishedAt: string | null
  createdAt: string
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

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs?published=true')
      const data = await response.json()
      setBlogs(data)
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const calculateReadingTime = (content: string | null) => {
    if (!content) return '1 min read'
    const wordsPerMinute = 200
    const words = content.trim().split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} min read`
  }

  return (
    <div className="min-h-screen py-24 px-4" style={{ backgroundColor: '#F5F2ED' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <PenTool size={32} style={{ color: '#C5A059' }} />
            <h1 className="text-5xl md:text-6xl font-bold" style={{ color: '#1B3022', fontFamily: 'var(--font-playfair), serif' }}>
              The Engine
            </h1>
          </div>
          <p className="text-lg" style={{ color: '#1B3022', opacity: 0.7 }}>
            Thoughts, writings, and insights on business, technology, and growth
          </p>
        </motion.div>

        {/* Blog List */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin" style={{ color: '#C5A059' }} />
          </div>
        ) : blogs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <PenTool className="h-16 w-16 mx-auto mb-4" style={{ color: '#C5A059', opacity: 0.5 }} />
            <h3 className="text-xl font-medium mb-2" style={{ color: '#1B3022' }}>
              No articles yet
            </h3>
            <p style={{ color: '#1B3022', opacity: 0.6 }}>
              Check back soon for new content
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {blogs.map((blog, index) => (
              <motion.div key={blog.id} variants={fadeInUp}>
                <Link href={`/blog/${blog.slug}`}>
                  <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <div className="md:flex">
                      {/* Cover Image */}
                      {blog.coverImageUrl && (
                        <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                          <img
                            src={blog.coverImageUrl}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      <CardContent className={`p-6 ${blog.coverImageUrl ? 'md:w-2/3' : 'w-full'}`}>
                        <div className="flex flex-wrap items-center gap-4 mb-3">
                          {index === 0 && (
                            <Badge variant="secondary" className="text-xs" style={{ backgroundColor: '#C5A059', color: '#1B3022' }}>
                              Latest
                            </Badge>
                          )}
                          <div className="flex items-center gap-1 text-sm" style={{ color: '#1B3022', opacity: 0.6 }}>
                            <Calendar className="h-3 w-3" />
                            {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center gap-1 text-sm" style={{ color: '#1B3022', opacity: 0.6 }}>
                            <Clock className="h-3 w-3" />
                            {calculateReadingTime(blog.excerpt)}
                          </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-2 group-hover:text-[#C5A059] transition-colors" style={{ color: '#1B3022', fontFamily: 'var(--font-playfair), serif' }}>
                          {blog.title}
                        </h2>

                        {blog.excerpt && (
                          <p className="mb-4 line-clamp-2" style={{ color: '#1B3022', opacity: 0.7 }}>
                            {blog.excerpt}
                          </p>
                        )}

                        <div className="flex items-center justify-between">
                          {blog.author && (
                            <span className="text-sm" style={{ color: '#C5A059' }}>
                              By {blog.author.fullName || blog.author.email}
                            </span>
                          )}
                          <Button
                            variant="ghost"
                            className="group-hover:translate-x-1 transition-transform"
                            style={{ color: '#1B3022' }}
                          >
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
