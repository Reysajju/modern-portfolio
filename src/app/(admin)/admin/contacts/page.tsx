'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Loader2, Check, X, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

interface Contact {
  id: string
  name: string
  email: string
  subject: string | null
  message: string
  isRead: boolean
  createdAt: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contacts')
      if (response.ok) {
        const data = await response.json()
        setContacts(data.sort((a: Contact, b: Contact) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ))
      }
    } catch (error) {
      console.error('Error fetching contacts:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const markAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isRead: true }),
      })

      if (response.ok) {
        setContacts(contacts.map(c =>
          c.id === id ? { ...c, isRead: true } : c
        ))
        toast({
          title: 'Marked as read',
          description: 'The message has been marked as read.',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update message.',
        variant: 'destructive',
      })
    }
  }

  const deleteContact = async (id: string) => {
    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setContacts(contacts.filter(c => c.id !== id))
        setSelectedContact(null)
        toast({
          title: 'Message deleted',
          description: 'The message has been removed.',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete message.',
        variant: 'destructive',
      })
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin" style={{ color: '#C5A059' }} />
      </div>
    )
  }

  const unreadCount = contacts.filter(c => !c.isRead).length

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
          Messages
        </h1>
        <p style={{ color: '#1B3022', opacity: 0.7 }}>
          {unreadCount > 0 ? `${unreadCount} unread message${unreadCount > 1 ? 's' : ''}` : 'All messages read'}
        </p>
      </motion.div>

      {contacts.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Mail className="h-12 w-12 mx-auto mb-4" style={{ color: '#C5A059', opacity: 0.5 }} />
            <h3 className="text-lg font-medium mb-2" style={{ color: '#1B3022' }}>
              No messages yet
            </h3>
            <p style={{ color: '#1B3022', opacity: 0.6 }}>
              Messages from the contact form will appear here
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 space-y-2"
          >
            {contacts.map((contact) => (
              <Card
                key={contact.id}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedContact?.id === contact.id ? 'ring-2 ring-[#C5A059]' : ''
                }`}
                onClick={() => {
                  setSelectedContact(contact)
                  if (!contact.isRead) markAsRead(contact.id)
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: contact.isRead ? '#E8E4DD' : '#C5A059' }}
                    >
                      <span className="font-bold" style={{ color: contact.isRead ? '#1B3022' : '#1B3022' }}>
                        {contact.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium truncate" style={{ color: '#1B3022' }}>
                          {contact.name}
                        </h3>
                        {!contact.isRead && (
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C5A059' }} />
                        )}
                      </div>
                      <p className="text-sm truncate" style={{ color: '#1B3022', opacity: 0.6 }}>
                        {contact.subject || 'No subject'}
                      </p>
                      <p className="text-xs" style={{ color: '#1B3022', opacity: 0.5 }}>
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Message Detail */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            {selectedContact ? (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-bold" style={{ color: '#1B3022' }}>
                        {selectedContact.subject || 'No Subject'}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span style={{ color: '#1B3022', opacity: 0.7 }}>
                          From: {selectedContact.name}
                        </span>
                        <span style={{ color: '#C5A059' }}>•</span>
                        <a
                          href={`mailto:${selectedContact.email}`}
                          className="hover:underline"
                          style={{ color: '#C5A059' }}
                        >
                          {selectedContact.email}
                        </a>
                      </div>
                      <p className="text-xs mt-1" style={{ color: '#1B3022', opacity: 0.5 }}>
                        {new Date(selectedContact.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        style={{
                          backgroundColor: selectedContact.isRead ? '#E8E4DD' : '#C5A059',
                          color: '#1B3022'
                        }}
                      >
                        {selectedContact.isRead ? 'Read' : 'New'}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteContact(selectedContact.id)}
                        className="text-red-500 hover:bg-red-50"
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  </div>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: 'rgba(27, 48, 34, 0.05)' }}
                  >
                    <p className="whitespace-pre-wrap" style={{ color: '#1B3022' }}>
                      {selectedContact.message}
                    </p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button
                      asChild
                      style={{ backgroundColor: '#1B3022', color: '#F5F2ED' }}
                    >
                      <a href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject || 'Your Message'}`}>
                        <Mail size={16} className="mr-2" />
                        Reply via Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <Mail className="h-12 w-12 mx-auto mb-4" style={{ color: '#C5A059', opacity: 0.5 }} />
                  <p style={{ color: '#1B3022', opacity: 0.6 }}>
                    Select a message to view details
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      )}
    </div>
  )
}
