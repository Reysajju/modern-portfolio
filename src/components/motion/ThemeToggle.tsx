'use client'

import { useEffect, useState, useCallback, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Monitor } from 'lucide-react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
}

// Helper to apply theme to document
function applyThemeToDocument(newTheme: Theme) {
  if (typeof window === 'undefined') return
  const root = document.documentElement
  const isDark = 
    newTheme === 'dark' || 
    (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  
  if (isDark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

// Get resolved theme
function getResolvedThemeValue(theme: Theme): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return theme
}

// Custom hook for client-side only rendering
function useHydration() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
}

// Get initial theme from localStorage (for lazy initialization)
function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system'
  return (localStorage.getItem('theme') as Theme) || 'system'
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const hydrated = useHydration()
  
  // Use lazy initialization for theme - this runs only once on mount
  const [theme, setThemeState] = useState<Theme>(getStoredTheme)
  
  // Apply theme on mount and when it changes
  useEffect(() => {
    applyThemeToDocument(theme)
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        applyThemeToDocument('system')
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])
  
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    applyThemeToDocument(newTheme)
  }, [])
  
  if (!hydrated) {
    return (
      <div className={`w-10 h-10 rounded-full ${className}`} />
    )
  }
  
  const resolvedTheme = getResolvedThemeValue(theme)
  
  const cycleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system']
    const currentIndex = themes.indexOf(theme)
    const nextTheme = themes[(currentIndex + 1) % themes.length]
    setTheme(nextTheme)
  }
  
  return (
    <motion.button
      onClick={cycleTheme}
      className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-cream-dark dark:hover:bg-forest-light ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait">
        {resolvedTheme === 'light' ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={20} className="text-gold" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={20} className="text-gold" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {showLabel && (
        <span className="ml-2 text-sm font-medium text-forest dark:text-cream">
          {theme === 'system' ? 'Auto' : theme === 'light' ? 'Light' : 'Dark'}
        </span>
      )}
    </motion.button>
  )
}

/* ========================================
   EXPANDED THEME TOGGLE (with all options)
   ======================================== */

interface ExpandedThemeToggleProps {
  className?: string
}

export function ExpandedThemeToggle({ className = '' }: ExpandedThemeToggleProps) {
  const hydrated = useHydration()
  const [theme, setThemeState] = useState<Theme>(getStoredTheme)
  
  useEffect(() => {
    applyThemeToDocument(theme)
  }, [theme])
  
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    applyThemeToDocument(newTheme)
  }, [])
  
  if (!hydrated) return null
  
  const options: { value: Theme; icon: typeof Sun; label: string }[] = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ]
  
  return (
    <div className={`flex items-center gap-1 p-1 rounded-full bg-cream-dark dark:bg-forest-light ${className}`}>
      {options.map(({ value, icon: Icon, label }) => (
        <motion.button
          key={value}
          onClick={() => setTheme(value)}
          className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            theme === value 
              ? 'text-forest dark:text-cream' 
              : 'text-forest/60 dark:text-cream/60 hover:text-forest dark:hover:text-cream'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {theme === value && (
            <motion.div
              layoutId="theme-indicator"
              className="absolute inset-0 bg-white dark:bg-forest rounded-full shadow-sm"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
            />
          )}
          <Icon size={16} className="relative z-10" />
          <span className="relative z-10 hidden sm:inline">{label}</span>
        </motion.button>
      ))}
    </div>
  )
}

export default ThemeToggle
