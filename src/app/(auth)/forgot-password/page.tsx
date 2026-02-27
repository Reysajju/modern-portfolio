'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Loader2, ArrowLeft, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase/client'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        })
        return
      }

      setIsSent(true)
      toast({
        title: 'Email sent!',
        description: 'Check your inbox for password reset instructions.',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSent) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-16" style={{ backgroundColor: '#F5F2ED' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md text-center"
        >
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)' }}>
                <CheckCircle className="h-8 w-8" style={{ color: '#C5A059' }} />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#1B3022', fontFamily: 'var(--font-playfair), serif' }}>
              Check Your Email
            </h2>
            <p className="mb-6" style={{ color: '#1B3022', opacity: 0.7 }}>
              We&apos;ve sent password reset instructions to <strong>{email}</strong>
            </p>
            <Link href="/login">
              <Button
                className="w-full py-6 rounded-full font-medium transition-all duration-300"
                style={{ backgroundColor: '#C5A059', color: '#1B3022' }}
              >
                Back to Login
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16" style={{ backgroundColor: '#F5F2ED' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-3xl font-bold mb-2" style={{ color: '#1B3022', fontFamily: 'var(--font-playfair), serif' }}>
              Muhammad Sajjad Rasool
            </h1>
          </Link>
          <p className="text-sm" style={{ color: '#C5A059' }}>Reset your password</p>
        </div>

        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <p className="mb-6 text-sm" style={{ color: '#1B3022', opacity: 0.7 }}>
            Enter your email address and we&apos;ll send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" style={{ color: '#1B3022' }}>Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#C5A059' }} />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                  style={{ borderColor: '#D4CFC6' }}
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-6 rounded-full font-medium transition-all duration-300"
              style={{ backgroundColor: '#C5A059', color: '#1B3022' }}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Send Reset Link
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-sm hover:underline flex items-center justify-center gap-1" style={{ color: '#1B3022', opacity: 0.7 }}>
              <ArrowLeft className="h-3 w-3" />
              Back to Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
