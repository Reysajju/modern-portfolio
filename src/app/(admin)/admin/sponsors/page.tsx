'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Plus,
  Edit,
  Trash2,
  Handshake,
  ExternalLink,
  Loader2,
  GripVertical,
  Eye,
  EyeOff,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/hooks/use-toast'
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

interface Sponsor {
  id: string
  name: string
  logoUrl: string | null
  websiteUrl: string | null
  description: string | null
  isActive: boolean
  displayOrder: number
  clickCount: number
  createdAt: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function AdminSponsorsPage() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchSponsors()
  }, [])

  const fetchSponsors = async () => {
    try {
      const response = await fetch('/api/sponsors')
      const data = await response.json()
      setSponsors(data.sort((a: Sponsor, b: Sponsor) => a.displayOrder - b.displayOrder))
    } catch (error) {
      console.error('Error fetching sponsors:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const toggleActive = async (id: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/sponsors/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !isActive }),
      })

      if (response.ok) {
        setSponsors(sponsors.map(s =>
          s.id === id ? { ...s, isActive: !isActive } : s
        ))
        toast({
          title: isActive ? 'Sponsor deactivated' : 'Sponsor activated',
          description: 'The sponsor status has been updated.',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update sponsor status.',
        variant: 'destructive',
      })
    }
  }

  const deleteSponsor = async (id: string) => {
    try {
      const response = await fetch(`/api/sponsors/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setSponsors(sponsors.filter(s => s.id !== id))
        toast({
          title: 'Sponsor deleted',
          description: 'The sponsor has been removed.',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete sponsor.',
        variant: 'destructive',
      })
    }
  }

  // Ensure Claude AI sponsor exists
  const ensureClaudeAISponsor = async () => {
    const claudeSponsor = sponsors.find(s => s.name.toLowerCase().includes('claude'))
    if (!claudeSponsor) {
      const response = await fetch('/api/sponsors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Claude AI',
          logoUrl: null,
          websiteUrl: 'https://claude.ai',
          description: 'AI-powered by Anthropic',
          isActive: true,
          displayOrder: 0,
        }),
      })
      if (response.ok) {
        fetchSponsors()
        toast({
          title: 'Claude AI sponsor added',
          description: 'Default sponsor has been created.',
        })
      }
    }
  }

  useEffect(() => {
    if (!isLoading && sponsors.length === 0) {
      ensureClaudeAISponsor()
    }
  }, [isLoading, sponsors])

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
            Sponsors
          </h1>
          <p style={{ color: '#1B3022', opacity: 0.7 }}>
            Manage your site sponsors and ad placements
          </p>
        </div>
        <Link href="/admin/sponsors/new">
          <Button
            className="gap-2"
            style={{ backgroundColor: '#C5A059', color: '#1B3022' }}
          >
            <Plus size={18} />
            Add Sponsor
          </Button>
        </Link>
      </motion.div>

      {/* Claude AI Banner */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mb-6"
      >
        <Card style={{ backgroundColor: '#1B3022' }}>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#C5A059' }}
              >
                <Sparkles size={24} style={{ color: '#1B3022' }} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg" style={{ color: '#F5F2ED' }}>
                  Sponsored by Claude AI
                </h3>
                <p className="text-sm" style={{ color: '#F5F2ED', opacity: 0.7 }}>
                  This portfolio is proudly sponsored by Claude AI. Click below to manage the sponsor settings.
                </p>
              </div>
              <Button
                style={{ backgroundColor: '#C5A059', color: '#1B3022' }}
                onClick={() => window.open('https://claude.ai', '_blank')}
              >
                <ExternalLink size={16} className="mr-2" />
                Visit Claude
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Sponsors List */}
      {sponsors.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Handshake className="h-12 w-12 mx-auto mb-4" style={{ color: '#C5A059', opacity: 0.5 }} />
            <h3 className="text-lg font-medium mb-2" style={{ color: '#1B3022' }}>
              No sponsors yet
            </h3>
            <p className="mb-4" style={{ color: '#1B3022', opacity: 0.6 }}>
              Add sponsors to display on your portfolio
            </p>
            <Link href="/admin/sponsors/new">
              <Button style={{ backgroundColor: '#1B3022', color: '#F5F2ED' }}>
                Add Sponsor
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {sponsors.map((sponsor) => (
            <Card key={sponsor.id}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  {/* Logo or Placeholder */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)' }}
                  >
                    {sponsor.logoUrl ? (
                      <img
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        className="w-12 h-12 object-contain"
                      />
                    ) : (
                      <Handshake size={24} style={{ color: '#C5A059' }} />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg" style={{ color: '#1B3022' }}>
                        {sponsor.name}
                      </h3>
                      {sponsor.name.toLowerCase().includes('claude') && (
                        <Badge style={{ backgroundColor: '#C5A059', color: '#1B3022' }}>
                          Featured
                        </Badge>
                      )}
                    </div>
                    {sponsor.description && (
                      <p className="text-sm truncate" style={{ color: '#1B3022', opacity: 0.6 }}>
                        {sponsor.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4 mt-2 text-xs" style={{ color: '#1B3022', opacity: 0.5 }}>
                      {sponsor.websiteUrl && (
                        <a
                          href={sponsor.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:underline"
                        >
                          <ExternalLink size={12} />
                          {sponsor.websiteUrl}
                        </a>
                      )}
                      <span>{sponsor.clickCount} clicks</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={sponsor.isActive}
                        onCheckedChange={() => toggleActive(sponsor.id, sponsor.isActive)}
                      />
                      <Badge
                        style={{
                          backgroundColor: sponsor.isActive ? '#C5A059' : '#E8E4DD',
                          color: '#1B3022'
                        }}
                      >
                        {sponsor.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                    <Link href={`/admin/sponsors/${sponsor.id}/edit`}>
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
                          <AlertDialogTitle>Delete Sponsor</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete &quot;{sponsor.name}&quot;? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteSponsor(sponsor.id)}
                            className="bg-red-500 hover:bg-red-600"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      )}
    </div>
  )
}
