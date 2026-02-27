'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase/client'


export default function SignupPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

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
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        })
        return
      }

      if (data.user) {
        toast({
          title: 'Account created!',
          description: 'Please check your email to verify your account.',
        })
        router.push('/login')
      }
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
          <p className="text-sm" style={{ color: '#C5A059' }}>Create your account</p>
        </div>

        <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="fullName" style={{ color: '#1B3022' }}>Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#C5A059' }} />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="pl-10"
                  style={{ borderColor: '#D4CFC6' }}
                />
              </div>
            </div>

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

            <div className="space-y-2">
              <Label htmlFor="password" style={{ color: '#1B3022' }}>Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#C5A059' }} />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
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
              <Label htmlFor="confirmPassword" style={{ color: '#1B3022' }}>Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#C5A059' }} />
                <Input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
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
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span style={{ color: '#1B3022', opacity: 0.7 }}>Already have an account?</span>{' '}
            <Link href="/login" className="font-medium hover:underline" style={{ color: '#C5A059' }}>
              Sign in
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm hover:underline" style={{ color: '#1B3022', opacity: 0.7 }}>
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
