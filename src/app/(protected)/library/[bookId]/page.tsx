'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Download, Eye, ArrowLeft, Calendar, User, FileText, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

interface Book {
  id: string
  title: string
  author: string
  description: string | null
  coverUrl: string | null
  fileUrl: string | null
  fileType: string | null
  category: string | null
  downloadCount: number
  createdAt: string
}

export default function BookDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [book, setBook] = useState<Book | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchBook()
  }, [params.bookId])

  const fetchBook = async () => {
    try {
      const response = await fetch(`/api/books/${params.bookId}`)
      if (response.ok) {
        const data = await response.json()
        setBook(data)
      }
    } catch (error) {
      console.error('Error fetching book:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = async () => {
    if (!book?.fileUrl) return

    // Increment download count
    try {
      await fetch(`/api/books/${book.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ downloadCount: book.downloadCount + 1 }),
      })
    } catch (error) {
      console.error('Error updating download count:', error)
    }

    // Download file
    window.open(book.fileUrl, '_blank')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#1B3022' }}>
        <Loader2 className="h-8 w-8 animate-spin" style={{ color: '#C5A059' }} />
      </div>
    )
  }

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#1B3022' }}>
        <div className="text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-4" style={{ color: '#C5A059', opacity: 0.5 }} />
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#F5F2ED' }}>Book Not Found</h2>
          <p className="mb-4" style={{ color: '#F5F2ED', opacity: 0.6 }}>The book you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/library">
            <Button className="rounded-full" style={{ backgroundColor: '#C5A059', color: '#1B3022' }}>
              Back to Library
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1B3022' }}>
      <div className="py-12 px-4">
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
              style={{ color: '#F5F2ED' }}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Library
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Book Cover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="overflow-hidden bg-white/5 border-white/10">
                <div className="aspect-[3/4] relative" style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)' }}>
                  {book.coverUrl ? (
                    <img
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <BookOpen className="h-24 w-24" style={{ color: '#C5A059', opacity: 0.3 }} />
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>

            {/* Book Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#F5F2ED', fontFamily: 'var(--font-playfair), serif' }}>
                {book.title}
              </h1>
              
              <p className="text-xl mb-4" style={{ color: '#C5A059' }}>
                by {book.author}
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                {book.category && (
                  <Badge variant="secondary" className="text-sm bg-[#C5A059]/20 text-[#C5A059]">
                    {book.category}
                  </Badge>
                )}
                {book.fileType && (
                  <Badge variant="outline" className="text-sm border-white/20 text-white/70">
                    <FileText className="h-3 w-3 mr-1" />
                    {book.fileType.toUpperCase()}
                  </Badge>
                )}
              </div>

              {book.description && (
                <Card className="mb-6 bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3" style={{ color: '#C5A059' }}>Description</h3>
                    <p className="leading-relaxed" style={{ color: '#F5F2ED', opacity: 0.8 }}>
                      {book.description}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2" style={{ color: '#F5F2ED', opacity: 0.7 }}>
                  <Calendar className="h-4 w-4" style={{ color: '#C5A059' }} />
                  <span className="text-sm">Added {new Date(book.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: '#F5F2ED', opacity: 0.7 }}>
                  <Download className="h-4 w-4" style={{ color: '#C5A059' }} />
                  <span className="text-sm">{book.downloadCount} downloads</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {book.fileUrl && (
                  <>
                    <Link href={`/read/${book.id}`}>
                      <Button
                        size="lg"
                        className="rounded-full"
                        style={{ backgroundColor: '#C5A059', color: '#1B3022' }}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Read Online
                      </Button>
                    </Link>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={handleDownload}
                      className="rounded-full border-white/30 text-white hover:bg-white/10"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
