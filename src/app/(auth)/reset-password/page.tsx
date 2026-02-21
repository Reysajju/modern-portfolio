'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, ArrowRight, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase/client'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Check if we have a valid session from the reset link
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        toast({
          title: 'Invalid Link',
          description: 'This password reset link is invalid or has expired.',
          variant: 'destructive',
        })
        router.push('/forgot-password')
      }
    }
    checkSession()
  }, [router, toast])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match.',
        variant: 'destructive',
      })
      return
    }

    if (password.length < 6) {
      toast({
        title: 'Error',
        description: 'Password must be at least 6 characters long.',
        variant: 'destructive',
      })
      return
    }

    setIsLoading(true)

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      })

      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        })
        return
      }

      setIsSuccess(true)
      toast({
        title: 'Password updated!',
        description: 'Your password has been successfully reset.',
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

  if (isSuccess) {
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
              Password Reset Complete
            </h2>
            <p className="mb-6" style={{ color: '#1B3022', opacity: 0.7 }}>
              Your password has been successfully updated. You can now sign in with your new password.
            </p>
            <Link href="/login">
              <Button
                className="w-full py-6 rounded-full font-medium transition-all duration-300"
                style={{ backgroundColor: '#C5A059', color: '#1B3022' }}
              >
                Sign In
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
          <p className="text-sm" style={{ color: '#C5A059' }}>Set your new password</p>
        </div>

        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="password" style={{ color: '#1B3022' }}>New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#C5A059' }} />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 pr-10"
                  style={{ borderColor: '#D4CFC6' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" style={{ color: '#1B3022', opacity: 0.5 }} />
                  ) : (
                    <Eye className="h-4 w-4" style={{ color: '#1B3022', opacity: 0.5 }} />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" style={{ color: '#1B3022' }}>Confirm New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#C5A059' }} />
                <Input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                  Reset Password
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
