'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'

interface User {
  id: string
  email: string
  fullName: string | null
  role: 'user' | 'admin'
  avatarUrl: string | null
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  isAdmin: boolean
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>
  signUp: (email: string, password: string, fullName?: string) => Promise<{ error: Error | null }>
  signOut: () => Promise<void>
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'sajjadr742@gmail.com'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const [supabaseAvailable, setSupabaseAvailable] = useState(true)

  const refreshUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()

      if (session?.user) {
        // Create user object with admin check based on email
        const userProfile: User = {
          id: session.user.id,
          email: session.user.email!,
          fullName: session.user.user_metadata?.full_name || null,
          role: session.user.email === ADMIN_EMAIL ? 'admin' : 'user',
          avatarUrl: session.user.user_metadata?.avatar_url || null,
        }
        setUser(userProfile)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error('Error refreshing user:', error)
      setUser(null)
    }
  }

  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true)
      try {
        await refreshUser()
        setSupabaseAvailable(true)
      } catch (error) {
        console.error('Supabase not configured:', error)
        setSupabaseAvailable(false)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    initAuth()

    let subscription: { unsubscribe: () => void } | null = null

    if (supabaseAvailable) {
      try {
        const { data: { subscription: sub } } = supabase.auth.onAuthStateChange(async (event) => {
          if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
            await refreshUser()
          } else if (event === 'SIGNED_OUT') {
            setUser(null)
          }
        })
        subscription = sub
      } catch (error) {
        console.error('Error setting up auth listener:', error)
      }
    }

    return () => {
      if (subscription) {
        subscription.unsubscribe()
      }
    }
  }, [supabaseAvailable])

  const signIn = async (email: string, password: string) => {
    if (!supabaseAvailable) {
      return { error: new Error('Authentication is not available. Please configure Supabase.') }
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return { error: new Error(error.message) }
      }

      await refreshUser()
      return { error: null }
    } catch (error) {
      return { error: error as Error }
    }
  }

  const signUp = async (email: string, password: string, fullName?: string) => {
    if (!supabaseAvailable) {
      return { error: new Error('Authentication is not available. Please configure Supabase.') }
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) {
        return { error: new Error(error.message) }
      }

      return { error: null }
    } catch (error) {
      return { error: error as Error }
    }
  }

  const signOut = async () => {
    if (supabaseAvailable) {
      await supabase.auth.signOut()
    }
    setUser(null)
    router.push('/login')
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    signIn,
    signUp,
    signOut,
    refreshUser,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
