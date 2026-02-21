'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Loader2, Save, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/hooks/use-toast'
import dynamic from 'next/dynamic'

// Dynamically import MDXEditor to avoid SSR issues
const MDXEditor = dynamic(
  () => import('@mdxeditor/editor').then((mod) => mod.MDXEditor),
  { ssr: false }
)

import '@mdxeditor/editor/style.css'

export default function NewBlogPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    coverImageUrl: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    isPublished: false,
  })

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title),
      metaTitle: title.slice(0, 60),
    }))
  }

  const handleSubmit = async (publish: boolean = false) => {
    if (!formData.title || !formData.slug) {
      toast({
        title: 'Error',
        description: 'Title is required.',
        variant: 'destructive',
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          isPublished: publish,
          publishedAt: publish ? new Date().toISOString() : null,
        }),
      })

      if (response.ok) {
        toast({
          title: publish ? 'Blog published!' : 'Blog saved as draft',
          description: 'Your blog post has been saved successfully.',
        })
        router.push('/admin/blogs')
      } else {
        const error = await response.json()
        throw new Error(error.error || 'Failed to save blog')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to save blog',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="gap-2"
        >
          <ArrowLeft size={18} />
          Back
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold" style={{ color: '#1B3022', fontFamily: 'var(--font-playfair), serif' }}>
            New Blog Post
          </h1>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title & Slug */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter blog title..."
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="url-friendly-slug"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief description for previews..."
                  rows={3}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Content Editor */}
          <Card>
            <CardHeader>
              <CardTitle style={{ color: '#1B3022' }}>Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="min-h-[400px] border rounded-lg overflow-hidden" style={{ borderColor: '#D4CFC6' }}>
                <MDXEditor
                  markdown={formData.content}
                  onChange={(markdown) => setFormData(prev => ({ ...prev, content: markdown }))}
                  placeholder="Write your blog content here..."
                  contentEditableClassName="prose prose-sm max-w-none p-4 min-h-[350px] focus:outline-none"
                  className="min-h-[400px]"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish Options */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base" style={{ color: '#1B3022' }}>Publish Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="published">Published</Label>
                <Switch
                  id="published"
                  checked={formData.isPublished}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isPublished: checked }))}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  className="flex-1 gap-2"
                  onClick={() => handleSubmit(false)}
                  disabled={isLoading}
                  style={{ backgroundColor: '#1B3022', color: '#F5F2ED' }}
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save size={16} />}
                  Save Draft
                </Button>
                <Button
                  className="flex-1 gap-2"
                  onClick={() => handleSubmit(true)}
                  disabled={isLoading}
                  style={{ backgroundColor: '#C5A059', color: '#1B3022' }}
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Eye size={16} />}
                  Publish
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Cover Image */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base" style={{ color: '#1B3022' }}>Cover Image</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="Image URL..."
                value={formData.coverImageUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, coverImageUrl: e.target.value }))}
              />
              {formData.coverImageUrl && (
                <div className="mt-3 aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={formData.coverImageUrl}
                    alt="Cover preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* SEO Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base" style={{ color: '#1B3022' }}>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={formData.metaTitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                  placeholder="SEO title..."
                  className="mt-1"
                />
                <p className="text-xs mt-1" style={{ color: '#1B3022', opacity: 0.5 }}>
                  {formData.metaTitle.length}/60 characters
                </p>
              </div>
              <div>
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={formData.metaDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                  placeholder="SEO description..."
                  rows={3}
                  className="mt-1"
                />
                <p className="text-xs mt-1" style={{ color: '#1B3022', opacity: 0.5 }}>
                  {formData.metaDescription.length}/160 characters
                </p>
              </div>
              <div>
                <Label htmlFor="metaKeywords">Meta Keywords</Label>
                <Input
                  id="metaKeywords"
                  value={formData.metaKeywords}
                  onChange={(e) => setFormData(prev => ({ ...prev, metaKeywords: e.target.value }))}
                  placeholder="keyword1, keyword2, ..."
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
