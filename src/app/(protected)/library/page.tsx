'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Search, Filter, Download, Eye, ArrowLeft, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SponsorBanner } from '@/components/SponsorBanner'
import { ThemeToggle } from '@/components/motion/ThemeToggle'

interface Book {
  id: string
  title: string
  author: string
  description: string | null
  coverUrl: string | null
  category: string | null
  downloadCount: number
  createdAt: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

export default function LibraryPage() {
  const [books, setBooks] = useState<Book[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books?published=true')

      if (!response.ok) {
        throw new Error(`Failed to fetch books: ${response.status}`)
      }

      const data = await response.json()

      // Validate that data is an array
      if (!Array.isArray(data)) {
        console.error('Invalid data format received from API:', data)
        setBooks([])
        return
      }

      setBooks(data)

      // Extract unique categories
      const uniqueCategories = [...new Set(data.map((book: Book) => book.category).filter(Boolean))]
      setCategories(uniqueCategories as string[])
    } catch (error) {
      console.error('Error fetching books:', error)
      setBooks([])
    } finally {
      setIsLoading(false)
    }
  }

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                          book.author.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1B3022' }}>
      {/* Top Banner */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-40 py-2 px-4 text-center text-xs md:text-sm"
        style={{ 
          background: "linear-gradient(135deg, #1B3022 0%, #2D4A3A 50%, #1B3022 100%)",
          color: "#F5F2ED"
        }}
      >
        <span className="opacity-70">Sponsored by</span>{" "}
        <span className="font-semibold" style={{ color: "#C5A059" }}>Y Combinator</span>
      </motion.div>

      {/* Header */}
      <div className="pt-12 pb-6 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Nav Row */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-6"
          >
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full text-xs md:text-sm"
                style={{ color: '#F5F2ED' }}
              >
                <ArrowLeft className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </Button>
            </Link>
            <ThemeToggle />
          </motion.div>

          {/* Title */}
          <motion.header
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <BookOpen size={24} className="md:size-8" style={{ color: '#C5A059' }} />
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#F5F2ED', fontFamily: 'var(--font-playfair), serif' }}>
                The Library
              </h1>
            </div>
            <p className="text-sm md:text-base lg:text-lg" style={{ color: '#F5F2ED', opacity: 0.7 }}>
              Explore our collection of ebooks and resources
            </p>
          </motion.header>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#C5A059' }} />
              <Input
                type="text"
                placeholder="Search by title or author..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm md:text-base"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-40 bg-white/10 border-white/20 text-white text-sm">
                <Filter className="h-4 w-4 mr-2" style={{ color: '#C5A059' }} />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        </div>
      </div>

      {/* Inline Sponsor Banner */}
      <div className="px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="my-4 md:my-6 p-4 md:p-5 rounded-xl text-center"
          style={{ 
            background: "linear-gradient(135deg, rgba(197, 160, 89, 0.1) 0%, rgba(197, 160, 89, 0.15) 50%, rgba(197, 160, 89, 0.1) 100%)",
            border: "1px solid rgba(197, 160, 89, 0.25)"
          }}
        >
          <p className="text-xs mb-1" style={{ color: '#F5F2ED', opacity: 0.6 }}>Sponsored by</p>
          <h3 className="text-lg md:text-xl font-bold" style={{ color: '#C5A059', fontFamily: 'var(--font-playfair), serif' }}>
            Y Combinator
          </h3>
          <a
            href="https://www.ycombinator.com"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block mt-2 text-xs font-medium hover:underline"
            style={{ color: '#C5A059' }}
          >
            Learn More →
          </a>
        </motion.div>
      </div>

      {/* Books Grid */}
      <div className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-6 w-6 animate-spin" style={{ color: '#C5A059' }} />
            </div>
          ) : filteredBooks.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <BookOpen className="h-12 w-12 mx-auto mb-3" style={{ color: '#C5A059', opacity: 0.5 }} />
              <h3 className="text-lg font-medium mb-2" style={{ color: '#F5F2ED' }}>
                No books found
              </h3>
              <p className="text-sm" style={{ color: '#F5F2ED', opacity: 0.6 }}>
                {search || selectedCategory !== 'all'
                  ? 'Try adjusting your search or filter'
                  : 'Check back soon for new additions'}
              </p>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5"
            >
              {filteredBooks.map((book) => (
                <motion.div key={book.id} variants={fadeInUp}>
                  <Link href={`/library/${book.id}`}>
                    <Card className="group cursor-pointer overflow-hidden h-full bg-white/5 border-white/10 hover:border-[#C5A059]/40 transition-all duration-300">
                      {/* Book Cover */}
                      <div className="aspect-[3/4] relative overflow-hidden" style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)' }}>
                        {book.coverUrl ? (
                          <img
                            src={book.coverUrl}
                            alt={book.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <BookOpen className="h-10 w-10 md:h-12 md:w-12" style={{ color: '#C5A059', opacity: 0.3 }} />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 rounded-full text-xs" style={{ backgroundColor: '#C5A059', color: '#1B3022' }}>
                              <Eye className="h-3 w-3 mr-1" />
                              Read
                            </Button>
                            <Button size="sm" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 p-2">
                              <Download className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-3 md:p-4">
                        <h3 className="font-bold text-sm md:text-base mb-1 line-clamp-1 group-hover:text-[#C5A059] transition-colors" style={{ color: '#F5F2ED', fontFamily: 'var(--font-playfair), serif' }}>
                          {book.title}
                        </h3>
                        <p className="text-xs md:text-sm mb-2 line-clamp-1" style={{ color: '#F5F2ED', opacity: 0.6 }}>
                          {book.author}
                        </p>
                        {book.category && (
                          <Badge variant="secondary" className="text-[10px] md:text-xs bg-[#C5A059]/20 text-[#C5A059]">
                            {book.category}
                          </Badge>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
