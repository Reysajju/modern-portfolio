'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  ImageIcon,
  Handshake,
  Mail,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/auth-context'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { id: 'blogs', label: 'Blog Posts', icon: FileText, href: '/admin/blogs' },
  { id: 'books', label: 'Books', icon: BookOpen, href: '/admin/books' },
  { id: 'media', label: 'Media Library', icon: ImageIcon, href: '/admin/media' },
  { id: 'sponsors', label: 'Sponsors', icon: Handshake, href: '/admin/sponsors' },
  { id: 'contacts', label: 'Messages', icon: Mail, href: '/admin/contacts' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/admin/settings' },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin'
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg"
        style={{ backgroundColor: '#1B3022', color: '#F5F2ED' }}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isMobileOpen ? 0 : undefined }}
        className={`fixed left-0 top-0 bottom-0 z-50 w-72 flex flex-col lg:translate-x-0 transition-transform duration-300 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
        style={{ backgroundColor: '#1B3022' }}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <Link href="/admin" className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#C5A059' }}
              >
                <Sparkles size={20} style={{ color: '#1B3022' }} />
              </div>
              <div>
                <h1 className="font-bold text-lg" style={{ color: '#F5F2ED', fontFamily: 'var(--font-playfair), serif' }}>
                  Admin Panel
                </h1>
                <p className="text-xs" style={{ color: '#C5A059' }}>Sajjad Rasool</p>
              </div>
            </Link>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-1 rounded"
              style={{ color: '#F5F2ED' }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      active ? 'bg-[#C5A059]/20' : 'hover:bg-white/5'
                    }`}
                  >
                    <Icon
                      size={20}
                      style={{ color: active ? '#C5A059' : '#F5F2ED', opacity: active ? 1 : 0.7 }}
                    />
                    <span
                      className="font-medium"
                      style={{ color: active ? '#C5A059' : '#F5F2ED' }}
                    >
                      {item.label}
                    </span>
                    {active && (
                      <ChevronRight
                        size={16}
                        className="ml-auto"
                        style={{ color: '#C5A059' }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 mb-2 rounded-xl" style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)' }}>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#C5A059' }}
            >
              <span className="font-bold" style={{ color: '#1B3022' }}>
                {user?.fullName?.charAt(0) || user?.email?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate" style={{ color: '#F5F2ED' }}>
                {user?.fullName || 'Admin'}
              </p>
              <p className="text-xs truncate" style={{ color: '#F5F2ED', opacity: 0.6 }}>
                {user?.email}
              </p>
            </div>
          </div>
          <Button
            onClick={signOut}
            variant="ghost"
            className="w-full justify-start gap-3 text-[#F5F2ED] hover:bg-white/5"
          >
            <LogOut size={18} />
            Sign Out
          </Button>
        </div>

        {/* View Site Link */}
        <div className="p-4 border-t border-white/10">
          <Link
            href="/"
            target="_blank"
            className="block text-center py-2 px-4 rounded-xl text-sm transition-colors"
            style={{ color: '#C5A059', backgroundColor: 'rgba(197, 160, 89, 0.1)' }}
          >
            View Live Site →
          </Link>
        </div>
      </motion.aside>
    </>
  )
}
