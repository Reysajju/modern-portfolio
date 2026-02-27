'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, User, Loader2, PenTool, Share2, Twitter, Linkedin, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Blog {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  coverImageUrl: string | null
  metaTitle: string | null
  metaDescription: string | null
  metaKeywords: string | null
  author: {
    fullName: string | null
    email: string
    avatarUrl: string | null
  } | null
  publishedAt: string | null
  createdAt: string
}

export default function BlogDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [blog, setBlog] = useState<Blog | null>(null)
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchBlog()
  }, [params.slug])

  const fetchBlog = async () => {
    try {
      const response = await fetch(`/api/blogs/slug/${params.slug}`)
      if (response.ok) {
        const data = await response.json()
        setBlog(data)

        // Fetch related blogs (just get a few random ones for now)
        const relatedResponse = await fetch('/api/blogs?published=true')
        if (relatedResponse.ok) {
          const relatedData = await relatedResponse.json()
          setRelatedBlogs(relatedData.filter((b: Blog) => b.id !== data.id).slice(0, 3))
        }
      }
    } catch (error) {
      console.error('Error fetching blog:', error)
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

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = blog?.title || ''

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F5F2ED' }}>
        <Loader2 className="h-8 w-8 animate-spin" style={{ color: '#C5A059' }} />
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F5F2ED' }}>
        <div className="text-center">
          <PenTool className="h-16 w-16 mx-auto mb-4" style={{ color: '#C5A059', opacity: 0.5 }} />
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#1B3022' }}>Article Not Found</h2>
          <p className="mb-4" style={{ color: '#1B3022', opacity: 0.6 }}>The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog">
            <Button className="rounded-full" style={{ backgroundColor: '#C5A059', color: '#1B3022' }}>
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-24 px-4" style={{ backgroundColor: '#F5F2ED' }}>
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="rounded-full"
            style={{ color: '#1B3022' }}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </motion.div>

        {/* Cover Image */}
        {blog.coverImageUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 rounded-2xl overflow-hidden"
          >
            <img
              src={blog.coverImageUrl}
              alt={blog.title}
              className="w-full aspect-video object-cover"
            />
          </motion.div>
        )}

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1B3022', fontFamily: 'var(--font-playfair), serif' }}>
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="text-xl mb-6" style={{ color: '#1B3022', opacity: 0.7 }}>
              {blog.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6">
            {blog.author && (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1B3022' }}>
                  <User className="h-5 w-5" style={{ color: '#C5A059' }} />
                </div>
                <div>
                  <p className="font-medium" style={{ color: '#1B3022' }}>
                    {blog.author.fullName || blog.author.email}
                  </p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-1" style={{ color: '#1B3022', opacity: 0.6 }}>
              <Calendar className="h-4 w-4" />
              <span>{new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-1" style={{ color: '#1B3022', opacity: 0.6 }}>
              <Clock className="h-4 w-4" />
              <span>{calculateReadingTime(blog.content)}</span>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="mb-8">
            <CardContent className="p-8">
              <article
                className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#1B3022] prose-p:text-[#1B3022]/80 prose-a:text-[#C5A059] prose-strong:text-[#1B3022]"
                dangerouslySetInnerHTML={{ __html: blog.content || '' }}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Share2 className="h-5 w-5" style={{ color: '#C5A059' }} />
                <span className="font-medium" style={{ color: '#1B3022' }}>Share this article</span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, '_blank')}
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`, '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1B3022', fontFamily: 'var(--font-playfair), serif' }}>
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link key={relatedBlog.id} href={`/blog/${relatedBlog.slug}`}>
                  <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow">
                    {relatedBlog.coverImageUrl && (
                      <img
                        src={relatedBlog.coverImageUrl}
                        alt={relatedBlog.title}
                        className="w-full aspect-video object-cover rounded-t-lg"
                      />
                    )}
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2 line-clamp-2 hover:text-[#C5A059] transition-colors" style={{ color: '#1B3022', fontFamily: 'var(--font-playfair), serif' }}>
                        {relatedBlog.title}
                      </h3>
                      <span className="text-sm" style={{ color: '#1B3022', opacity: 0.6 }}>
                        {new Date(relatedBlog.publishedAt || relatedBlog.createdAt).toLocaleDateString()}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
