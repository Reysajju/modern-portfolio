'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Document, Page, pdfjs } from 'react-pdf'
import { motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  ArrowLeft,
  Loader2,
  FileText,
  Home
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function PDFReaderPage() {
  const params = useParams()
  const router = useRouter()
  const [book, setBook] = useState<{ title: string; fileUrl: string } | null>(null)
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [scale, setScale] = useState<number>(1.0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [pageInput, setPageInput] = useState<string>('1')

  // Load reading progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`book-progress-${params.bookId}`)
    if (savedProgress) {
      setPageNumber(parseInt(savedProgress, 10))
    }
  }, [params.bookId])

  // Save reading progress to localStorage
  useEffect(() => {
    if (pageNumber > 0) {
      localStorage.setItem(`book-progress-${params.bookId}`, pageNumber.toString())
    }
  }, [pageNumber, params.bookId])

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

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setIsLoading(false)
  }

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1))
    setPageInput((Math.max(pageNumber - 1, 1)).toString())
  }

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages))
    setPageInput((Math.min(pageNumber + 1, numPages)).toString())
  }

  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageInput(e.target.value)
  }

  const handlePageSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const page = parseInt(pageInput, 10)
    if (page >= 1 && page <= numPages) {
      setPageNumber(page)
    } else {
      setPageInput(pageNumber.toString())
    }
  }

  const zoomIn = () => setScale(prev => Math.min(prev + 0.25, 3))
  const zoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5))

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#1B3022' }}>
        <Loader2 className="h-8 w-8 animate-spin" style={{ color: '#C5A059' }} />
      </div>
    )
  }

  if (!book?.fileUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#1B3022' }}>
        <div className="text-center">
          <FileText className="h-16 w-16 mx-auto mb-4" style={{ color: '#C5A059', opacity: 0.5 }} />
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#F5F2ED' }}>File Not Available</h2>
          <p className="mb-4" style={{ color: '#F5F2ED', opacity: 0.6 }}>This book doesn&apos;t have a readable file.</p>
          <Button onClick={() => router.back()} className="rounded-full" style={{ backgroundColor: '#C5A059', color: '#1B3022' }}>
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1B3022' }}>
      {/* Toolbar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 py-3 px-4"
        style={{ backgroundColor: 'rgba(27, 48, 34, 0.95)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push('/library')}
              className="rounded-full"
              style={{ color: '#F5F2ED' }}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push('/')}
              className="rounded-full"
              style={{ color: '#F5F2ED' }}
            >
              <Home className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-bold hidden md:block truncate max-w-[200px]" style={{ color: '#F5F2ED' }}>
              {book.title}
            </h1>
          </div>

          {/* Page Navigation */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="rounded-full"
              style={{ color: pageNumber <= 1 ? '#F5F2ED50' : '#F5F2ED' }}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <form onSubmit={handlePageSubmit} className="flex items-center gap-1">
              <Input
                type="number"
                value={pageInput}
                onChange={handlePageInput}
                className="w-16 text-center bg-white/10 border-white/20 text-white"
                min={1}
                max={numPages}
              />
              <span className="text-sm" style={{ color: '#F5F2ED', opacity: 0.7 }}>
                / {numPages}
              </span>
            </form>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="rounded-full"
              style={{ color: pageNumber >= numPages ? '#F5F2ED50' : '#F5F2ED' }}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="rounded-full"
              style={{ color: scale <= 0.5 ? '#F5F2ED50' : '#F5F2ED' }}
            >
              <ZoomOut className="h-5 w-5" />
            </Button>
            <span className="text-sm w-12 text-center" style={{ color: '#C5A059' }}>
              {Math.round(scale * 100)}%
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={zoomIn}
              disabled={scale >= 3}
              className="rounded-full"
              style={{ color: scale >= 3 ? '#F5F2ED50' : '#F5F2ED' }}
            >
              <ZoomIn className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="rounded-full"
              style={{ color: '#F5F2ED' }}
            >
              {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* PDF Viewer */}
      <div className="flex-1 flex flex-col items-center py-8 px-4">
        <Document
          file={book.fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin" style={{ color: '#C5A059' }} />
            </div>
          }
          error={
            <div className="text-center py-20">
              <FileText className="h-16 w-16 mx-auto mb-4" style={{ color: '#C5A059', opacity: 0.5 }} />
              <p style={{ color: '#F5F2ED' }}>Failed to load PDF</p>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            className="shadow-2xl"
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>

      {/* Reading Progress */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky bottom-0 py-2 px-4"
        style={{ backgroundColor: 'rgba(27, 48, 34, 0.95)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(197, 160, 89, 0.2)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: '#C5A059' }}
              initial={{ width: 0 }}
              animate={{ width: `${(pageNumber / numPages) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-xs text-center mt-1" style={{ color: '#F5F2ED', opacity: 0.6 }}>
            {Math.round((pageNumber / numPages) * 100)}% complete
          </p>
        </div>
      </motion.div>
    </div>
  )
}
