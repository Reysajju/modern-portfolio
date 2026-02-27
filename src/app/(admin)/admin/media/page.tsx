'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  Upload,
  Search,
  Trash2,
  Copy,
  Loader2,
  ImageIcon,
  File,
  Check
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { useDropzone } from 'react-dropzone'

interface Media {
  id: string
  filename: string
  originalName: string | null
  mimeType: string | null
  size: number | null
  url: string
  altText: string | null
  createdAt: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function AdminMediaPage() {
  const [media, setMedia] = useState<Media[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [uploading, setUploading] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchMedia()
  }, [])

  const fetchMedia = async () => {
    try {
      const response = await fetch('/api/media')
      const data = await response.json()
      setMedia(data)
    } catch (error) {
      console.error('Error fetching media:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setUploading(true)
    try {
      // For now, we'll simulate upload by using the file URL
      // In production, you'd upload to Supabase Storage or similar
      for (const file of acceptedFiles) {
        const reader = new FileReader()
        reader.onload = async (e) => {
          const dataUrl = e.target?.result as string
          
          // Create media record
          const response = await fetch('/api/media', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              filename: file.name.replace(/\.[^/.]+$/, '') + '_' + Date.now(),
              originalName: file.name,
              mimeType: file.type,
              size: file.size,
              url: dataUrl, // In production, this would be the storage URL
              altText: file.name,
            }),
          })

          if (response.ok) {
            const newMedia = await response.json()
            setMedia(prev => [newMedia, ...prev])
            toast({
              title: 'File uploaded',
              description: `${file.name} has been uploaded successfully.`,
            })
          }
        }
        reader.readAsDataURL(file)
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to upload file.',
        variant: 'destructive',
      })
    } finally {
      setUploading(false)
    }
  }, [toast])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
      'application/pdf': ['.pdf'],
    },
  })

  const copyToClipboard = async (url: string, id: string) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
      toast({
        title: 'Copied!',
        description: 'URL copied to clipboard.',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to copy URL.',
        variant: 'destructive',
      })
    }
  }

  const deleteMedia = async (id: string) => {
    try {
      const response = await fetch(`/api/media/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setMedia(media.filter(m => m.id !== id))
        toast({
          title: 'Media deleted',
          description: 'The file has been removed.',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete media.',
        variant: 'destructive',
      })
    }
  }

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return 'Unknown'
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const isImage = (mimeType: string | null) => {
    return mimeType?.startsWith('image/')
  }

  const filteredMedia = media.filter(m =>
    m.filename.toLowerCase().includes(search.toLowerCase()) ||
    m.originalName?.toLowerCase().includes(search.toLowerCase())
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
            Media Library
          </h1>
          <p style={{ color: '#1B3022', opacity: 0.7 }}>
            Upload and manage your media files
          </p>
        </div>
      </motion.div>

      {/* Upload Area */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mb-6"
      >
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
            isDragActive ? 'border-[#C5A059] bg-[#C5A059]/10' : 'border-[#D4CFC6]'
          }`}
        >
          <input {...getInputProps()} />
          {uploading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin" style={{ color: '#C5A059' }} />
              <span style={{ color: '#1B3022' }}>Uploading...</span>
            </div>
          ) : (
            <>
              <Upload className="h-10 w-10 mx-auto mb-3" style={{ color: '#C5A059' }} />
              <p className="font-medium" style={{ color: '#1B3022' }}>
                {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
              </p>
              <p className="text-sm mt-1" style={{ color: '#1B3022', opacity: 0.6 }}>
                or click to browse (images & PDFs)
              </p>
            </>
          )}
        </div>
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
            placeholder="Search files..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
            style={{ borderColor: '#D4CFC6' }}
          />
        </div>
      </motion.div>

      {/* Media Grid */}
      {filteredMedia.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <ImageIcon className="h-12 w-12 mx-auto mb-4" style={{ color: '#C5A059', opacity: 0.5 }} />
            <h3 className="text-lg font-medium mb-2" style={{ color: '#1B3022' }}>
              {search ? 'No files found' : 'No media files yet'}
            </h3>
            <p style={{ color: '#1B3022', opacity: 0.6 }}>
              Upload files using the area above
            </p>
          </CardContent>
        </Card>
      ) : (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {filteredMedia.map((item) => (
            <Card key={item.id} className="group overflow-hidden">
              <div className="aspect-square relative" style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)' }}>
                {isImage(item.mimeType) ? (
                  <img
                    src={item.url}
                    alt={item.altText || item.filename}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <File className="h-12 w-12" style={{ color: '#C5A059', opacity: 0.5 }} />
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: '#C5A059', color: '#1B3022' }}
                    onClick={() => copyToClipboard(item.url, item.id)}
                  >
                    {copiedId === item.id ? <Check size={16} /> : <Copy size={16} />}
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="rounded-full"
                    onClick={() => deleteMedia(item.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
              <CardContent className="p-3">
                <p className="text-sm font-medium truncate" style={{ color: '#1B3022' }}>
                  {item.originalName || item.filename}
                </p>
                <p className="text-xs" style={{ color: '#1B3022', opacity: 0.5 }}>
                  {formatFileSize(item.size)}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      )}
    </div>
  )
}
