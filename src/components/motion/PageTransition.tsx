'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

/* ========================================
   PAGE TRANSITION VARIANTS
   ======================================== */

const pageVariants = {
  // Default fade + slide up
  default: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  },
  // Fade only (subtle)
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  // Scale in
  scale: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  },
  // Slide from right
  slideRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  // Slide from left
  slideLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
}

const transitionConfig = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1],
}

/* ========================================
   PAGE TRANSITION WRAPPER
   ======================================== */

export function PageTransition({ 
  children, 
  className = '' 
}: PageTransitionProps) {
  const pathname = usePathname()
  
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants.default}
        transition={transitionConfig}
        className={className}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

/* ========================================
   PAGE TRANSITION WITH CUSTOM VARIANTS
   ======================================== */

interface CustomPageTransitionProps extends PageTransitionProps {
  variant?: keyof typeof pageVariants
  duration?: number
}

export function CustomPageTransition({ 
  children, 
  className = '',
  variant = 'default',
  duration = 0.25,
}: CustomPageTransitionProps) {
  const pathname = usePathname()
  
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants[variant]}
        transition={{ duration, ease: [0.4, 0, 0.2, 1] }}
        className={className}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

/* ========================================
   SECTION TRANSITION (for scroll animations)
   ======================================== */

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function SectionTransition({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up',
}: SectionTransitionProps) {
  const directionOffset = 30
  
  const directionVariants = {
    up: { y: directionOffset },
    down: { y: -directionOffset },
    left: { x: directionOffset },
    right: { x: -directionOffset },
  }
  
  return (
    <motion.section
      initial={{ 
        opacity: 0, 
        ...directionVariants[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.4, 0, 0.2, 1] 
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

/* ========================================
   STAGGER CHILDREN WRAPPER
   ======================================== */

interface StaggerWrapperProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerWrapper({ 
  children, 
  className = '',
  staggerDelay = 0.1,
}: StaggerWrapperProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ========================================
   STAGGER CHILD
   ======================================== */

interface StaggerChildProps {
  children: ReactNode
  className?: string
}

export function StaggerChild({ 
  children, 
  className = '' 
}: StaggerChildProps) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
