import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ========================================
         COLOR SYSTEM
         ======================================== */
      colors: {
        // Semantic colors via CSS variables
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        
        // Brand colors
        forest: {
          DEFAULT: 'var(--forest-green)',
          light: 'var(--forest-green-light)',
          dark: 'var(--forest-green-dark)',
        },
        cream: {
          DEFAULT: 'var(--paper-cream)',
          dark: 'var(--paper-cream-dark)',
        },
        gold: {
          DEFAULT: 'var(--burnished-gold)',
          light: 'var(--burnished-gold-light)',
          dark: 'var(--burnished-gold-dark)',
        },
        
        // Component colors
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        
        // Semantic status colors
        success: {
          DEFAULT: 'var(--success)',
          light: 'var(--success-light)',
        },
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        info: 'var(--info)',
        
        // Chart colors
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)',
        },
        
        // Sidebar colors
        sidebar: {
          DEFAULT: 'var(--sidebar)',
          foreground: 'var(--sidebar-foreground)',
          primary: 'var(--sidebar-primary)',
          'primary-foreground': 'var(--sidebar-primary-foreground)',
          accent: 'var(--sidebar-accent)',
          'accent-foreground': 'var(--sidebar-accent-foreground)',
          border: 'var(--sidebar-border)',
          ring: 'var(--sidebar-ring)',
        },
      },
      
      /* ========================================
         BORDER RADIUS
         ======================================== */
      borderRadius: {
        xs: 'var(--radius-sm)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': '1.75rem',
        '4xl': '2rem',
      },
      
      /* ========================================
         BOX SHADOW
         ======================================== */
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        soft: 'var(--shadow-soft)',
        glow: 'var(--shadow-glow)',
        inner: 'inset 0 2px 4px 0 rgba(27, 48, 34, 0.05)',
      },
      
      /* ========================================
         TYPOGRAPHY
         ======================================== */
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        display: ['var(--font-playfair)', 'var(--font-inter)', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        xs: ['var(--text-xs)', { lineHeight: '1rem' }],
        sm: ['var(--text-sm)', { lineHeight: '1.25rem' }],
        base: ['var(--text-base)', { lineHeight: '1.5rem' }],
        lg: ['var(--text-lg)', { lineHeight: '1.75rem' }],
        xl: ['var(--text-xl)', { lineHeight: '1.75rem' }],
        '2xl': ['var(--text-2xl)', { lineHeight: '2rem' }],
        '3xl': ['var(--text-3xl)', { lineHeight: '2.25rem' }],
        '4xl': ['var(--text-4xl)', { lineHeight: '2.5rem' }],
        '5xl': ['var(--text-5xl)', { lineHeight: '1.2' }],
        '6xl': ['var(--text-6xl)', { lineHeight: '1.1' }],
        '7xl': ['var(--text-7xl)', { lineHeight: '1.1' }],
        '8xl': ['var(--text-8xl)', { lineHeight: '1' }],
      },
      
      fontWeight: {
        normal: 'var(--font-normal)',
        medium: 'var(--font-medium)',
        semibold: 'var(--font-semibold)',
        bold: 'var(--font-bold)',
      },
      
      lineHeight: {
        tight: 'var(--leading-tight)',
        snug: 'var(--leading-snug)',
        normal: 'var(--leading-normal)',
        relaxed: 'var(--leading-relaxed)',
        loose: 'var(--leading-loose)',
      },
      
      /* ========================================
         SPACING
         ======================================== */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '70': '17.5rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '82': '20.5rem',
        '86': '21.5rem',
        '90': '22.5rem',
        '94': '23.5rem',
        '98': '24.5rem',
      },
      
      /* ========================================
         ANIMATIONS
         ======================================== */
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        'float-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(197, 160, 89, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(197, 160, 89, 0.6)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        accordion: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-out': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-subtle': 'float-subtle 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.5s var(--ease-out) both',
        'fade-down': 'fade-down 0.5s var(--ease-out) both',
        'fade-in': 'fade-in 0.4s var(--ease-out) both',
        'scale-in': 'scale-in 0.3s var(--ease-out) both',
        'slide-in-right': 'slide-in-right 0.4s var(--ease-out) both',
        'slide-in-left': 'slide-in-left 0.4s var(--ease-out) both',
        'spin-slow': 'spin-slow 20s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
        'bounce-subtle': 'bounce-subtle 1s ease-in-out infinite',
        'accordion-down': 'accordion 0.2s ease-out',
        'accordion-up': 'accordion-out 0.2s ease-out',
      },
      
      /* ========================================
         TRANSITION TIMING
         ======================================== */
      transitionDuration: {
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
        slower: 'var(--duration-slower)',
      },
      
      transitionTimingFunction: {
        default: 'var(--ease-default)',
        in: 'var(--ease-in)',
        out: 'var(--ease-out)',
        'in-out': 'var(--ease-in-out)',
        spring: 'var(--ease-spring)',
      },
      
      /* ========================================
         Z-INDEX SCALE
         ======================================== */
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      /* ========================================
         ASPECT RATIOS
         ======================================== */
      aspectRatio: {
        golden: '1.618 / 1',
        portrait: '3 / 4',
        landscape: '4 / 3',
        ultra: '21 / 9',
      },
      
      /* ========================================
         BACKDROP BLUR
         ======================================== */
      backdropBlur: {
        xs: '2px',
      },
      
      /* ========================================
         CONTAINERS
         ======================================== */
      containers: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
