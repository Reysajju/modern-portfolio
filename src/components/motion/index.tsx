'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

/* ========================================
   ANIMATION VARIANTS
   ======================================== */

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

export const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
}

export const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
}

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}

export const smoothTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1],
}

/* ========================================
   PRIMARY BUTTON COMPONENT
   ======================================== */

interface PrimaryButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ children, variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const baseStyles = 'rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
    
    const variants = {
      primary: 'bg-forest text-cream hover:bg-gold hover:text-forest focus:ring-gold',
      secondary: 'bg-cream-dark text-forest hover:bg-forest hover:text-cream focus:ring-forest',
      accent: 'bg-gold text-forest hover:bg-forest hover:text-cream focus:ring-gold',
      ghost: 'bg-transparent text-forest hover:bg-cream-dark focus:ring-forest',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }
    
    return (
      <motion.button
        ref={ref}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.18 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

PrimaryButton.displayName = 'PrimaryButton'

/* ========================================
   MOTION CARD COMPONENT
   ======================================== */

interface MotionCardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: React.ReactNode
  hover?: 'lift' | 'scale' | 'glow' | 'none'
  delay?: number
}

export const MotionCard = forwardRef<HTMLDivElement, MotionCardProps>(
  ({ children, hover = 'lift', delay = 0, className = '', ...props }, ref) => {
    const hoverVariants = {
      lift: { y: -5, boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)' },
      scale: { scale: 1.02 },
      glow: { boxShadow: '0 0 30px rgba(197, 160, 89, 0.3)' },
      none: {},
    }
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, delay }}
        whileHover={hoverVariants[hover]}
        whileTap={hover !== 'none' ? { scale: 0.98 } : undefined}
        className={`rounded-2xl bg-card transition-colors ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

MotionCard.displayName = 'MotionCard'

/* ========================================
   FADE IN SECTION COMPONENT
   ======================================== */

interface FadeInSectionProps extends Omit<HTMLMotionProps<'section'>, 'ref'> {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

export const FadeInSection = forwardRef<HTMLElement, FadeInSectionProps>(
  ({ children, direction = 'up', delay = 0, className = '', ...props }, ref) => {
    const directions = {
      up: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
      down: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
      left: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
      right: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    }
    
    return (
      <motion.section
        ref={ref}
        {...directions[direction]}
        transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, margin: '-50px' }}
        className={className}
        {...props}
      >
        {children}
      </motion.section>
    )
  }
)

FadeInSection.displayName = 'FadeInSection'

/* ========================================
   STAGGER LIST COMPONENT
   ======================================== */

interface StaggerListProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}

export const StaggerList = forwardRef<HTMLDivElement, StaggerListProps>(
  ({ children, staggerDelay = 0.1, className = '', ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: 0.1,
            },
          },
          exit: { opacity: 0 },
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

StaggerList.displayName = 'StaggerList'

/* ========================================
   STAGGER ITEM COMPONENT
   ======================================== */

interface StaggerItemProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: React.ReactNode
  className?: string
}

export const StaggerItem = forwardRef<HTMLDivElement, StaggerItemProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={fadeInUp}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

StaggerItem.displayName = 'StaggerItem'

/* ========================================
   FLOATING ELEMENT COMPONENT
   ======================================== */

interface FloatingElementProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: React.ReactNode
  duration?: number
  distance?: number
  className?: string
}

export const FloatingElement = forwardRef<HTMLDivElement, FloatingElementProps>(
  ({ children, duration = 6, distance = 20, className = '', ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        animate={{
          y: [0, -distance, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

FloatingElement.displayName = 'FloatingElement'

/* ========================================
   ROTATING ELEMENT COMPONENT
   ======================================== */

interface RotatingElementProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: React.ReactNode
  duration?: number
  direction?: 'clockwise' | 'counterclockwise'
  className?: string
}

export const RotatingElement = forwardRef<HTMLDivElement, RotatingElementProps>(
  ({ children, duration = 20, direction = 'clockwise', className = '', ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        animate={{
          rotate: direction === 'clockwise' ? 360 : -360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

RotatingElement.displayName = 'RotatingElement'

/* ========================================
   PULSE GLOW COMPONENT
   ======================================== */

interface PulseGlowProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: React.ReactNode
  color?: string
  className?: string
}

export const PulseGlow = forwardRef<HTMLDivElement, PulseGlowProps>(
  ({ children, color = 'rgba(197, 160, 89, 0.5)', className = '', ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        animate={{
          boxShadow: [
            `0 0 0px ${color}`,
            `0 0 20px ${color}`,
            `0 0 0px ${color}`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

PulseGlow.displayName = 'PulseGlow'

/* ========================================
   NUMBER COUNTER COMPONENT
   ======================================== */

interface NumberCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export const NumberCounter: React.FC<NumberCounterProps> = ({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration }}
      >
        {value.toLocaleString()}
      </motion.span>
      {suffix}
    </motion.span>
  )
}
