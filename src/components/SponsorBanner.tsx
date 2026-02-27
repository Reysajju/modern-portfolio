'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface SponsorBannerProps {
  position?: 'top' | 'inline' | 'sidebar'
  className?: string
}

export function SponsorBanner({ position = 'inline', className = '' }: SponsorBannerProps) {
  if (position === 'top') {
    return (
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 py-2 px-4 text-center text-sm tracking-wide ${className}`}
        style={{ 
          background: "linear-gradient(135deg, #1B3022 0%, #2D4A3A 50%, #1B3022 100%)",
          color: "#F5F2ED"
        }}
      >
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="opacity-70">Strategic Partner for Tech CEOs</span>
          <span style={{ color: "#C5A059" }}>•</span>
          <span className="flex items-center gap-1">
            <span className="opacity-70">Sponsored by</span>
            <span className="font-semibold" style={{ color: "#C5A059" }}>Y Combinator</span>
          </span>
        </div>
      </motion.div>
    )
  }
  
  if (position === 'sidebar') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`p-4 rounded-xl text-center ${className}`}
        style={{ 
          background: "linear-gradient(135deg, rgba(27, 48, 34, 0.08) 0%, rgba(197, 160, 89, 0.12) 50%, rgba(27, 48, 34, 0.08) 100%)",
          border: "1px solid rgba(197, 160, 89, 0.2)"
        }}
      >
        <p className="text-xs mb-1 opacity-60">Sponsored by</p>
        <h3 className="text-lg font-bold" style={{ color: "#C5A059", fontFamily: "var(--font-playfair), serif" }}>
          Y Combinator
        </h3>
        <motion.a
          href="https://www.ycombinator.com"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-1 mt-2 text-xs font-medium"
          style={{ color: "#1B3022" }}
          whileHover={{ color: "#C5A059" }}
        >
          Learn More <ExternalLink size={12} />
        </motion.a>
      </motion.div>
    )
  }
  
  // Inline banner (default)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`my-8 md:my-12 p-4 md:p-6 rounded-2xl text-center ${className}`}
      style={{ 
        background: "linear-gradient(135deg, rgba(27, 48, 34, 0.05) 0%, rgba(197, 160, 89, 0.1) 50%, rgba(27, 48, 34, 0.05) 100%)",
        border: "1px solid rgba(197, 160, 89, 0.2)"
      }}
    >
      <p className="text-xs md:text-sm mb-2 opacity-60">Sponsored by</p>
      <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#C5A059", fontFamily: "var(--font-playfair), serif" }}>
        Y Combinator
      </h3>
      <p className="text-xs md:text-sm mt-2 opacity-70">
        Empowering the next generation of startups
      </p>
      <motion.a
        href="https://www.ycombinator.com"
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-flex items-center gap-2 mt-4 px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all"
        style={{ backgroundColor: "#1B3022", color: "#F5F2ED" }}
        whileHover={{ scale: 1.03, backgroundColor: "#C5A059", color: "#1B3022" }}
      >
        Learn More <ExternalLink size={14} />
      </motion.a>
    </motion.div>
  )
}

export default SponsorBanner
