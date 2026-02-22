import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/auth-context";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// ==========================================
// SEO METADATA - Sajjad Rasool Branding
// ==========================================
export const metadata: Metadata = {
  metadataBase: new URL("https://sajjad.escritura.site"),

  // Basic SEO
  title: {
    default: "Muhammad Sajjad Rasool | Independent Author & Business Consultant",
    template: "%s | Muhammad Sajjad Rasool"
  },
  description: "Muhammad Sajjad Rasool - Independent Author of 26+ books spanning science fiction, horror, thriller & non-fiction. Also a Freelance Business Development Manager helping tech CEOs drive growth.",
  keywords: [
    "Sajjad Rasool",
    "Muhammad Sajjad Rasool",
    "Independent Author",
    "Science Fiction Author",
    "Horror Author",
    "Spiral Arms Series",
    "Children of the Olive",
    "Business Development Manager",
    "Freelance Business Development",
    "Tech Consultant",
    "B2B Relationships",
    "Book Author Pakistan"
  ],
  authors: [{ name: "Muhammad Sajjad Rasool", url: "https://sajjad.escritura.site" }],
  creator: "Muhammad Sajjad Rasool",
  publisher: "Sajjad Rasool",

  // URL & Canonical
  alternates: {
    canonical: "https://sajjad.escritura.site",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
    other: [{ rel: "mask-icon", url: "/logo.svg", color: "#1B3022" }],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sajjad.escritura.site",
    siteName: "Sajjad Rasool Portfolio",
    title: "Muhammad Sajjad Rasool | Independent Author & Business Consultant",
    description: "Independent Author of 26+ books spanning sci-fi, horror, thriller & non-fiction. Also a Business Development Manager driving growth through strategic partnerships.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Sajjad Rasool - Business & Tech Consultant",
        type: "image/png",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sajjad Rasool | Independent Author",
    description: "Independent Author of 26+ books. Science fiction, horror, thriller & political non-fiction. Business Development Manager.",
    images: ["/og-image.png"],
    creator: "@sajjadr742",
  },

  // Verification
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },

  // Category
  category: "Business Services",

  // Classification
  classification: "Business Consulting, Technology Consulting",

  // Other
  applicationName: "Sajjad Rasool Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Apple Web App
  appleWebApp: {
    capable: true,
    title: "Sajjad Rasool",
    statusBarStyle: "black-translucent",
  },

  // Bookmarks
  bookmarks: [
    "https://sajjad.escritura.site/archive",
    "https://sajjad.escritura.site/library",
    "https://sajjad.escritura.site/contact",
  ],
};

// ==========================================
// VIEWPORT CONFIGURATION
// ==========================================
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F2ED" },
    { media: "(prefers-color-scheme: dark)", color: "#1B3022" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
};

// ==========================================
// ROOT LAYOUT
// ==========================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Script to prevent flash of wrong theme - Auto-detect system preference */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var theme;
                  if (stored) {
                    theme = stored;
                  } else {
                    // Auto-detect system preference
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    localStorage.setItem('theme', theme === 'dark' ? 'dark' : 'light');
                  }
                  var isDark = theme === 'dark' || 
                    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

        {/* JSON-LD Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Sajjad Rasool",
              "alternateName": "Sajjad Rasool",
              "jobTitle": "Independent Author & Business Development Manager",
              "description": "Specializing in crafting powerful B2B partnerships and driving strategic growth for tech-driven companies. Documenting experiences, insights, and philosophical thoughts on business scaling and personal journey through upcoming books and articles.",
              "email": "Sajjadr742@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Global",
                "addressCountry": "Remote"
              },
              "url": "https://sajjad.escritura.site",
              "sameAs": [
                "https://www.linkedin.com/in/sajjadr742",
                "https://twitter.com/sajjadr742"
              ],
              "knowsAbout": [
                "Business Development",
                "B2B Connections",
                "Sales Strategy",
                "Writing & Authorship",
                "GTM Planning",
                "Tech Ecosystems",
                "Client Acquisition"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Self-Employed"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Federal Urdu University"
              }
            })
          }}
        />

        {/* JSON-LD for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Sajjad Rasool Portfolio",
              "alternateName": "Muhammad Sajjad Rasool Portfolio",
              "url": "https://sajjad.escritura.site",
              "description": "Professional portfolio of Muhammad Sajjad Rasool - Business & Tech Consultant for Tech CEOs",
              "publisher": {
                "@type": "Person",
                "name": "Muhammad Sajjad Rasool"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sajjad.escritura.site/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
