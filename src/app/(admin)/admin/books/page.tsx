'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Eye,
  EyeOff,
  Loader2,
  BookOpen,
  Download,
  ExternalLink
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
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
} from '@/components/ui/alert-dialog'
import { useToast } from '@/hooks/use-toast'

interface Book {
  id: string
  title: string
  author: string
  description: string | null
  coverUrl: string | null
  fileUrl: string | null
  category: string | null
  isPublished: boolean
  downloadCount: number
  createdAt: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function AdminBooksPage() {
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books')
      const data = await response.json()
      setBooks(data)
    } catch (error) {
      console.error('Error fetching books:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const togglePublish = async (id: string, isPublished: boolean) => {
    try {
      const response = await fetch(`/api/books/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPublished: !isPublished }),
      })

      if (response.ok) {
        setBooks(books.map(book =>
          book.id === id ? { ...book, isPublished: !isPublished } : book
        ))
        toast({
          title: isPublished ? 'Book unpublished' : 'Book published',
          description: 'The book status has been updated.',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update book status.',
        variant: 'destructive',
      })
    }
  }

  const deleteBook = async (id: string) => {
    try {
      const response = await fetch(`/api/books/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setBooks(books.filter(book => book.id !== id))
        toast({
          title: 'Book deleted',
          description: 'The book has been permanently deleted.',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete book.',
        variant: 'destructive',
      })
    } finally {
      setDeleteId(null)
    }
  }

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
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
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#1B3022', fontFamily: 'var(--font-playfair), serif' }}>
          Books Library
        </h1>
        <p style={{ color: '#1B3022', opacity: 0.7 }}>
          Manage your ebook collection • Upload via Media section
        </p>
      </motion.div>

      {/* Info Card */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mb-6 p-4 rounded-xl"
        style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)', border: '1px solid rgba(197, 160, 89, 0.2)' }}
      >
        <p className="text-sm" style={{ color: '#1B3022' }}>
          <strong>💡 Tip:</strong> Upload PDF files via the <a href="/admin/media" className="underline font-medium" style={{ color: '#C5A059' }}>Media Library</a>, then add books with the file URL. Articles and images can be managed in their respective sections.
        </p>
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
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
            style={{ borderColor: '#D4CFC6' }}
          />
        </div>
      </motion.div>

      {/* Books Grid */}
      {filteredBooks.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <BookOpen className="h-12 w-12 mx-auto mb-4" style={{ color: '#C5A059', opacity: 0.5 }} />
            <h3 className="text-lg font-medium mb-2" style={{ color: '#1B3022' }}>
              {search ? 'No books found' : 'No books yet'}
            </h3>
            <p className="mb-4" style={{ color: '#1B3022', opacity: 0.6 }}>
              {search ? 'Try a different search term' : 'Upload PDFs via Media, then add book entries'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredBooks.map((book) => (
            <Card key={book.id} className="group overflow-hidden">
              {/* Cover */}
              <div className="aspect-[3/4] relative" style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)' }}>
                {book.coverUrl ? (
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <BookOpen className="h-16 w-16" style={{ color: '#C5A059', opacity: 0.3 }} />
                  </div>
                )}
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    {book.fileUrl && (
                      <a href={book.fileUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="rounded-full" style={{ backgroundColor: '#C5A059', color: '#1B3022' }}>
                          <ExternalLink size={16} />
                        </Button>
                      </a>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                      onClick={() => togglePublish(book.id, book.isPublished)}
                    >
                      {book.isPublished ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="rounded-full"
                      onClick={() => setDeleteId(book.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                  <Badge
                    style={{
                      backgroundColor: book.isPublished ? '#C5A059' : '#E8E4DD',
                      color: '#1B3022'
                    }}
                  >
                    {book.isPublished ? 'Published' : 'Draft'}
                  </Badge>
                </div>
              </div>

              {/* Info */}
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1 line-clamp-1" style={{ color: '#1B3022' }}>
                  {book.title}
                </h3>
                <p className="text-sm mb-2" style={{ color: '#1B3022', opacity: 0.6 }}>
                  {book.author}
                </p>
                <div className="flex items-center justify-between text-xs" style={{ color: '#1B3022', opacity: 0.5 }}>
                  {book.category && (
                    <Badge variant="outline" className="text-xs">
                      {book.category}
                    </Badge>
                  )}
                  <span className="flex items-center gap-1">
                    <Download size={12} />
                    {book.downloadCount}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      )}

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Book</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this book? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && deleteBook(deleteId)}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
