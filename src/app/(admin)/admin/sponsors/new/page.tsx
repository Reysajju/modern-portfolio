'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Loader2, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/hooks/use-toast'

export default function NewSponsorPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    logoUrl: '',
    websiteUrl: '',
    description: '',
    isActive: true,
    displayOrder: 0,
  })

  const handleSubmit = async () => {
    if (!formData.name) {
      toast({
        title: 'Error',
        description: 'Sponsor name is required.',
        variant: 'destructive',
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/sponsors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: 'Sponsor added!',
          description: 'The sponsor has been saved successfully.',
        })
        router.push('/admin/sponsors')
      } else {
        const error = await response.json()
        throw new Error(error.error || 'Failed to save sponsor')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to save sponsor',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
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
            Add Sponsor
          </h1>
        </div>
      </motion.div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Sponsor name..."
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="logoUrl">Logo URL</Label>
            <Input
              id="logoUrl"
              value={formData.logoUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, logoUrl: e.target.value }))}
              placeholder="https://example.com/logo.png"
              className="mt-1"
            />
            {formData.logoUrl && (
              <div className="mt-2 p-4 rounded-lg" style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)' }}>
                <img
                  src={formData.logoUrl}
                  alt="Logo preview"
                  className="max-h-20 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            )}
          </div>
          <div>
            <Label htmlFor="websiteUrl">Website URL</Label>
            <Input
              id="websiteUrl"
              value={formData.websiteUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
              placeholder="https://example.com"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Brief description..."
              rows={3}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="displayOrder">Display Order</Label>
            <Input
              id="displayOrder"
              type="number"
              value={formData.displayOrder}
              onChange={(e) => setFormData(prev => ({ ...prev, displayOrder: parseInt(e.target.value) || 0 }))}
              className="mt-1"
            />
            <p className="text-xs mt-1" style={{ color: '#1B3022', opacity: 0.5 }}>
              Lower numbers appear first
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="active">Active</Label>
            <Switch
              id="active"
              checked={formData.isActive}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isActive: checked }))}
            />
          </div>
          <div className="pt-4">
            <Button
              className="w-full gap-2"
              onClick={handleSubmit}
              disabled={isLoading}
              style={{ backgroundColor: '#C5A059', color: '#1B3022' }}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save size={16} />}
              Save Sponsor
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
