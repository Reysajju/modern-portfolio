"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Home,
  Archive,
  BookOpen,
  Swords,
  PenTool,
  Mail,
  MapPin,
  ChevronUp,
  Award,
  GraduationCap,
  Briefcase,
  Star,
  Zap,
  User,
  Target,
  MessageSquare,
  TrendingUp,
  CircleDot,
  Lock,
  ArrowRight,
  Sparkles,
  Phone,
  ExternalLink,
  Menu,
  X,
  HelpCircle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/contexts/auth-context";
import { ThemeToggle } from "@/components/motion/ThemeToggle";


// ==========================================
// ANIMATED CONTACT INFO COMPONENT
// ==========================================
function AnimatedContactValue({
  value,
  type
}: {
  value: string;
  type: 'email' | 'phone' | 'address';
}) {
  const [displayValue, setDisplayValue] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      setDisplayValue(value);
      setIsRevealed(true);
      return;
    }

    // Animate random characters
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*abcdefghijklmnopqrstuvwxyz";
    let iterations = 0;
    const maxIterations = 30;

    const interval = setInterval(() => {
      if (iterations >= maxIterations) {
        clearInterval(interval);
        // Show masked value
        if (type === 'email') {
          setDisplayValue("s*****@*****.com");
        } else if (type === 'phone') {
          setDisplayValue("+** *** *** ****");
        } else {
          setDisplayValue("******, *******");
        }
        return;
      }

      setDisplayValue(
        value.split('').map((char, i) => {
          if (char === ' ' || char === '@' || char === '.' || char === '+' || char === ',') return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      iterations++;
    }, 50);

    return () => clearInterval(interval);
  }, [value, type, isAuthenticated]);

  if (isAuthenticated) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium"
      >
        {value}
      </motion.span>
    );
  }

  return (
    <motion.span
      className="font-mono tracking-wider"
      style={{ color: "#C5A059" }}
    >
      {displayValue}
    </motion.span>
  );
}

// ==========================================
// SPONSOR BANNER COMPONENT
// ==========================================
function SponsorBanner({ position = "top" }: { position?: "top" | "inline" }) {
  if (position === "top") {
    return (
      <div className="w-full bg-accent text-accent-foreground py-2 text-center text-xs md:text-sm font-medium tracking-wide z-50 relative">
        <span className="opacity-80">Sponsored by </span>
        <strong>Tech Innovators Hub</strong>
        <span className="mx-2 opacity-50">•</span>
        <a href="#" className="underline underline-offset-4 decoration-accent-foreground/30 hover:decoration-accent-foreground transition-all">Discover more</a>
      </div>
    );
  }

  return (
    <div className="w-full my-8 p-6 md:p-8 rounded-2xl bg-card border border-border/50 text-center shadow-md flex flex-col items-center justify-center gap-2 group hover:border-accent/50 transition-colors">
      <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Sponsored Partner</span>
      <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif flex items-center gap-2">
        <Star size={20} className="text-accent fill-accent" />
        Tech Innovators Hub
      </h3>
      <p className="text-sm text-foreground/70 max-w-lg mt-2">Empowering the next generation of B2B leaders with premium networking tools.</p>
      <button className="mt-4 px-6 py-2 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
        Visit Sponsor Dashboard
      </button>
    </div>
  );
}

// ==========================================
// MOBILE NAVIGATION
// ==========================================
function MobileNav({
  activeSection,
  scrollToSection,
  isOpen,
  setIsOpen
}: {
  activeSection: string;
  scrollToSection: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "archive", label: "Archive", icon: Archive },
    { id: "library", label: "Library", icon: BookOpen },
    { id: "arsenal", label: "Arsenal", icon: Swords },
    { id: "engine", label: "Engine", icon: PenTool },
    { id: "contact", label: "Contact", icon: Mail },
    { id: "faq", label: "FAQ", icon: HelpCircle },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-14 right-4 z-50 p-3 rounded-full md:hidden"
        style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 pt-20 px-6 md:hidden"
            style={{ backgroundColor: "var(--background)" }}
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all ${isActive ? "text-white" : ""
                      }`}
                    style={{
                      backgroundColor: isActive ? "var(--primary)" : "transparent",
                      color: isActive ? "var(--primary-foreground)" : "var(--foreground)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon size={24} style={{ color: isActive ? "var(--accent)" : "var(--foreground)" }} />
                    <span className="text-lg font-medium">{item.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Theme Toggle in Mobile Menu */}
            <div className="mt-8 flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: "rgba(27, 48, 34, 0.05)" }}>
              <span className="font-medium" style={{ color: "var(--foreground)" }}>Theme</span>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ==========================================
// DESKTOP NAVIGATION
// ==========================================
function DesktopNav({
  activeSection,
  scrollToSection
}: {
  activeSection: string;
  scrollToSection: (id: string) => void;
}) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "archive", label: "Archive", icon: Archive },
    { id: "library", label: "Library", icon: BookOpen },
    { id: "arsenal", label: "Arsenal", icon: Swords },
    { id: "engine", label: "Engine", icon: PenTool },
    { id: "contact", label: "Contact", icon: Mail },
    { id: "faq", label: "FAQ", icon: HelpCircle },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
    >
      <div
        className="flex items-center gap-1 px-2 py-2 rounded-full"
        style={{
          backgroundColor: "rgba(27, 48, 34, 0.95)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative px-3 py-2 rounded-full transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={item.label}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "#C5A059" }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon
                size={18}
                className="relative z-10"
                style={{ color: isActive ? "var(--primary)" : "var(--primary-foreground)" }}
              />
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="relative z-10 text-xs font-medium whitespace-nowrap"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}

        {/* Theme Toggle in Nav */}
        <div className="ml-2 pl-2 border-l" style={{ borderColor: "rgba(197, 160, 89, 0.3)" }}>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}

// ==========================================
// DATA
// ==========================================
const experiences = [
  {
    date: "Jan 2025 - Present",
    role: "Freelance Business Development Manager & Author",
    company: "Self-Employed",
    location: "Global / Remote",
    description: "Specializing in crafting powerful B2B partnerships and driving strategic growth for tech-driven companies. Concurrently documenting my experiences, insights, and philosophical thoughts on business scaling and personal journey through my upcoming books and articles.",
    tags: ["Business Development", "B2B Sales", "Authoring", "Growth Strategy"],
    type: "work",
    image: "/images/Sajjad/sajjad (2).jpeg"
  },
  {
    date: "Nov 2023 - Jan 2025",
    role: "Senior Executive — Quality Assurance & Landing Page Developer",
    company: "INTERSYS LTD",
    location: "Karachi, Pakistan",
    description: "Led comprehensive quality monitoring, defining robust QA frameworks. Seamlessly blended technical execution with creative design by engineering high-converting landing pages tailored for aggressive marketing and B2B lead generation.",
    tags: ["Quality Assurance", "Landing Pages", "Analytics", "Process Improvement"],
    type: "work",
    image: "/images/Sajjad/sajjad (3).jpeg"
  },
  {
    date: "2018 - 2022",
    role: "BS Chemistry",
    company: "Federal Urdu University",
    location: "Karachi, Pakistan",
    description: "Graduated with a sharp analytical mindset. Transitioned the meticulous, detail-oriented nature of chemistry laboratory environments into business logic, scalable structure planning, and systems thinking.",
    tags: ["Systems Thinking", "Analytical", "Research"],
    type: "education",
    image: "/images/Sajjad/sajjad (4).jpeg"
  },
];

const skills = [
  {
    title: "Business Development",
    icon: Target,
    description: "Driving Revenue & Partnerships, Client Acquisition",
    items: ["B2B Linking", "Strategic Partnerships", "Lead Gen Strategies"]
  },
  {
    title: "The Author's Mind",
    icon: PenTool,
    description: "Storytelling, Deep Industry Insights, Content",
    items: ["Business Writing", "Journey Documentation", "Thought Leadership"]
  },
  {
    title: "Tech Executions",
    icon: Zap,
    description: "Landing Pages, Front-End Operations",
    items: ["Webflow/Tailwind", "CRO Optimization", "Performance Analytics"]
  },
  {
    title: "Communication",
    icon: MessageSquare,
    description: "Client Handling, Negotiation, Speaking",
    items: ["Stakeholder Management", "Deal Closures", "Multilingual"]
  },
];

const articles = [
  { title: "The Art of B2B Connections", excerpt: "Discovering the underlying chemistry behind profitable, long-lasting business partnerships and how to engineer them.", date: "Recent", readTime: "7 min", image: "/images/Sajjad/sajjad (5).jpeg" },
  { title: "From Chemistry Labs to Boardrooms", excerpt: "A vulnerable look into transitioning from a rigid science background to the dynamic chaos of tech business development.", date: "Featured", readTime: "5 min", image: "/images/Sajjad/sajjad (6).jpeg" },
  { title: "Drafting The Journey", excerpt: "Why every business professional should document their growth, failures, and the philosophical aspects of building a career.", date: "New", readTime: "6 min", image: "/images/Sajjad/sajjad (7).jpeg" },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isNavigating, setIsNavigating] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const { isAuthenticated } = useAuth();

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating) return;
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections = ["home", "archive", "library", "arsenal", "engine", "contact", "faq"];

      for (const section of sections) {
        const element = sectionRefs.current[section];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavigating]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "faq") {
      window.location.href = "/faq";
      return;
    }
    const element = sectionRefs.current[sectionId];
    if (element) {
      setIsNavigating(true);
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setIsNavigating(false), 800);
    }
  };

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background dark:bg-forest">
      {/* Sponsor Banner */}
      <SponsorBanner position="top" />

      {/* Navigation */}
      <MobileNav
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />
      <DesktopNav activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-10 left-0 right-0 h-1 z-40 origin-left"
        style={{ backgroundColor: "rgba(197, 160, 89, 0.3)" }}
      >
        <motion.div
          style={{
            scaleX: scrollYProgress,
            backgroundColor: "#C5A059",
            height: "100%"
          }}
        />
      </motion.div>

      {/* ===== SECTION 1: HOME ===== */}
      <section
        ref={(el) => { sectionRefs.current.home = el; }}
        id="home"
        itemScope
        itemType="https://schema.org/Person"
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16 px-4"
      >
        {/* Background Elements - Reduced for Mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${150 + i * 80}px`,
                height: `${150 + i * 80}px`,
                border: `1px solid rgba(197, 160, 89, ${0.1 + i * 0.03})`,
                left: `${15 + i * 12}%`,
                top: `${10 + i * 8}%`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 md:mb-8 flex justify-center"
          >
            <motion.div
              className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1B3022 0%, #2a4a36 50%, #1B3022 100%)",
                boxShadow: "0 0 0 3px #C5A059, 0 8px 24px rgba(27, 48, 34, 0.3)"
              }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src="/images/Sajjad/sajjad (1).jpeg"
                alt="Muhammad Sajjad Rasool — Freelance Business Development Manager and Author based in Karachi, Pakistan"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 112px, (max-width: 1024px) 144px, 176px"
              />
            </motion.div>
          </motion.figure>

          {/* Name - Muhammad Sajjad Rasool */}
          <motion.header
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-4"
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl mb-3"
              style={{ color: "#C5A059", fontWeight: 500 }}
            >
              Freelance Business Development Manager & Author
            </motion.p>
            <h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none"
              style={{ color: "#1B3022", fontFamily: "var(--font-playfair), serif" }}
              itemProp="name"
            >
              <span className="block">Muhammad</span>
              <span className="block" style={{ color: "var(--foreground)" }}>Sajjad</span>
              <span className="block" style={{ color: "#C5A059" }}>Rasool</span>
            </h1>
          </motion.header>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-4"
            style={{ color: "var(--foreground)", opacity: 0.85 }}
            itemProp="description"
          >
            A passionate Freelance Business Development Manager and Author. Focused on driving growth, building strategic B2B partnerships, and sharing the journey through compelling storytelling.
            <span style={{ color: "#C5A059", fontWeight: 600, display: "block", marginTop: "1rem" }}>
              Crafting systems for business success while penning the journey.
            </span>
          </motion.p>

          {/* Status Badges */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 md:mb-8"
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
            >
              <MapPin size={14} style={{ color: "#C5A059" }} />
              <span className="text-sm">Karachi, Pakistan</span>
            </div>

            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: "rgba(27, 48, 34, 0.08)" }}
              animate={{
                boxShadow: ["0 0 0px rgba(197, 160, 89, 0)", "0 0 12px rgba(197, 160, 89, 0.4)", "0 0 0px rgba(197, 160, 89, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CircleDot size={14} style={{ color: "#22c55e" }} />
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Available for Projects</span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-base md:text-lg shadow-lg"
              style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(197,160,89,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Work With Me
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("archive")}
              className="w-full sm:w-auto px-6 py-3 rounded-full font-medium border-2 text-base md:text-lg transition-colors duration-300"
              style={{ borderColor: "var(--primary)", color: "var(--foreground)", backgroundColor: "transparent" }}
              whileHover={{ scale: 1.05, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Experience
            </motion.button>
          </motion.div>

          {/* What I Do Pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-10 max-w-3xl mx-auto"
          >
            {[
              { icon: Target, title: "Strategic Growth", desc: "Architecting B2B pipelines that drive sustainable revenue and forge lasting partnerships." },
              { icon: PenTool, title: "Author & Storyteller", desc: "Documenting the journey of business building through compelling articles and books." },
              { icon: Zap, title: "Tech Execution", desc: "Engineering high-converting landing pages and optimizing digital funnels for maximum impact." },
            ].map((pillar, i) => {
              const PIcon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="p-4 rounded-xl text-center"
                  style={{ backgroundColor: "rgba(27, 48, 34, 0.05)" }}
                >
                  <PIcon size={22} className="mx-auto mb-2" style={{ color: "#C5A059" }} />
                  <h3 className="text-sm font-bold mb-1" style={{ color: "var(--foreground)" }}>{pillar.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.7 }}>{pillar.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{ color: "#C5A059" }}
          >
            <ChevronUp size={20} className="rotate-180" />
          </motion.div>
        </motion.div>
      </section>

      {/* Inline Sponsor Banner */}
      <div className="max-w-5xl mx-auto px-4">
        <SponsorBanner position="inline" />
      </div>

      {/* ===== SECTION 2: ARCHIVE ===== */}
      <section
        ref={(el) => { sectionRefs.current.archive = el; }}
        id="archive"
        itemScope
        itemType="https://schema.org/ItemList"
        className="min-h-screen py-16 md:py-24 px-4 bg-background dark:bg-forest"
      >
        <div className="max-w-5xl mx-auto">
          <motion.header
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10 md:mb-16"
          >
            <meta itemProp="name" content="Professional Experience - Sajjad Rasool" />
            <span className="text-xs md:text-sm uppercase tracking-widest" style={{ color: "#C5A059" }}>
              Experience & History
            </span>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-playfair), serif" }}
            >
              The Archive
            </h2>
            <p className="text-sm md:text-base mt-3 leading-relaxed max-w-2xl" style={{ color: "var(--foreground)", opacity: 0.7 }}>
              A timeline of the professional experiences, education, and key milestones that shaped my approach to business development and strategic growth.
            </p>
          </motion.header>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-6 md:space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  itemProp="itemListElement"
                  itemScope
                  itemType={exp.type === "work" ? "https://schema.org/WorkExperience" : "https://schema.org/EducationalOrganization"}
                  className="relative pl-6 md:pl-20"
                >
                  <motion.div
                    className="absolute left-0 md:left-8 top-5 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full"
                    style={{ backgroundColor: exp.type === "work" ? "var(--primary)" : "var(--accent)" }}
                    whileHover={{ scale: 1.4 }}
                  />

                  <motion.div
                    className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card"
                    whileHover={{ y: -3 }}
                    style={{ boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)" }}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      {exp.type === "work" ? (
                        <Briefcase size={14} style={{ color: "#C5A059" }} />
                      ) : (
                        <GraduationCap size={14} style={{ color: "#C5A059" }} />
                      )}
                      <time className="text-xs md:text-sm" style={{ color: "#C5A059" }} itemProp="startDate">
                        {exp.date}
                      </time>
                    </div>
                    <h3
                      className="text-lg md:text-xl font-bold mb-1"
                      style={{ color: "var(--foreground)", fontFamily: "var(--font-playfair), serif" }}
                      itemProp="jobTitle"
                    >
                      {exp.role}
                    </h3>
                    <p className="text-xs md:text-sm mb-3" style={{ color: "var(--foreground)", opacity: 0.7 }} itemProp="hiringOrganization">
                      {exp.company} • {exp.location}
                    </p>
                    <p className="text-sm md:text-base mb-4 leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.8 }} itemProp="description">
                      {exp.description}
                    </p>
                    {exp.image && (
                      <div className="relative w-full mb-4 rounded-xl overflow-hidden shadow-md group border border-border/50">
                        <Image src={exp.image} alt={exp.role} width={800} height={600} className="w-full h-auto object-contain transition-transform duration-700 ease-in-out group-hover:scale-105" sizes="(max-width: 768px) 100vw, 800px" loading="lazy" />
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 md:px-3 py-1 text-xs rounded-full"
                          style={{ backgroundColor: "rgba(197, 160, 89, 0.15)", color: "#1B3022" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: LIBRARY ===== */}
      <section
        ref={(el) => { sectionRefs.current.library = el; }}
        id="library"
        className="min-h-screen py-16 md:py-24 px-4 relative overflow-hidden"
        style={{ backgroundColor: "#1B3022" }}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.header
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10 md:mb-16"
          >
            <span className="text-xs md:text-sm uppercase tracking-widest" style={{ color: "#C5A059" }}>
              Books & Projects
            </span>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2"
              style={{ color: "#F5F2ED", fontFamily: "var(--font-playfair), serif" }}
            >
              The Library
            </h2>
          </motion.header>

          {/* Featured Project */}
          <motion.article
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 md:mb-16"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2" style={{ color: "#C5A059" }}>
              <Star size={18} />
              Featured Project
            </h3>
            <motion.div
              className="p-5 md:p-8 rounded-xl md:rounded-2xl"
              style={{ backgroundColor: "rgba(197, 160, 89, 0.1)", border: "1px solid rgba(197, 160, 89, 0.2)" }}
              whileHover={{ boxShadow: "0 0 30px rgba(197, 160, 89, 0.15)" }}
            >
              <h4 className="text-xl md:text-2xl font-bold mb-2" style={{ color: "var(--background)" }}>
                The Business Development Manual
              </h4>
              <p className="text-xs md:text-sm mb-4" style={{ color: "#C5A059" }}>
                Upcoming Publication
              </p>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative w-full md:w-1/3 rounded-xl overflow-hidden shadow-2xl group border border-border/20 flex items-center">
                  <Image src="/images/Sajjad/sajjad (8).jpeg" alt="The Business Development Manual — Upcoming Publication by Muhammad Sajjad Rasool" width={400} height={533} className="w-full h-auto object-contain transition-transform duration-700 ease-in-out group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: "var(--background)", opacity: 0.8 }}>
                    A comprehensive, tactical guide specifically meant for technical founders and CEOs on how to build, scale, and maintain a high-performing business development pipeline. Synthesizes deep industry insights with actionable processes.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--background)", opacity: 0.8 }}>
                    This masterclass in written format chronicles firsthand strategies on breaking into Fortune 500 networks and fostering relationships that yield million-dollar contracts.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.article>

          {/* E-Book Library */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2" style={{ color: "#C5A059" }}>
              <BookOpen size={18} />
              E-Book Library
            </h3>
            <Link href="/books">
              <motion.div
                className="p-4 md:p-6 rounded-xl cursor-pointer"
                style={{ backgroundColor: "rgba(245, 242, 237, 0.05)", border: "1px solid rgba(197, 160, 89, 0.1)" }}
                whileHover={{ backgroundColor: "rgba(245, 242, 237, 0.1)", x: 4 }}
              >
                <h4 className="font-bold mb-1" style={{ color: "var(--background)" }}>Browse All 26 Books</h4>
                <p className="text-sm" style={{ color: "var(--background)", opacity: 0.6 }}>Free ebooks and paperbacks — science fiction, horror, thrillers, and more</p>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 4: ARSENAL ===== */}
      <section
        ref={(el) => { sectionRefs.current.arsenal = el; }}
        id="arsenal"
        className="min-h-screen py-16 md:py-24 px-4 bg-background dark:bg-forest"
      >
        <div className="max-w-5xl mx-auto">
          <motion.header
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10 md:mb-16"
          >
            <span className="text-xs md:text-sm uppercase tracking-widest" style={{ color: "#C5A059" }}>
              Skills & Capabilities
            </span>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2"
              style={{ color: "#1B3022", fontFamily: "var(--font-playfair), serif" }}
            >
              The Arsenal
            </h2>
          </motion.header>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.article
                  key={index}
                  variants={scaleIn}
                  className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card"
                  whileHover={{ y: -5 }}
                  style={{ boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)" }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 md:p-3 rounded-xl" style={{ backgroundColor: "rgba(197, 160, 89, 0.15)" }}>
                      <Icon size={18} className="md:size-6" style={{ color: "#C5A059" }} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold" style={{ color: "var(--foreground)" }}>{skill.title}</h3>
                      <p className="text-xs md:text-sm" style={{ color: "var(--foreground)", opacity: 0.6 }}>{skill.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-2 md:px-3 py-1 text-xs rounded-full" style={{ backgroundColor: "rgba(27, 48, 34, 0.05)", color: "#1B3022" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* Recognition */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 md:mt-16"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2" style={{ color: "#C5A059" }}>
              <Award size={18} />
              Recognition
            </h3>
            <motion.div
              className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card"
              whileHover={{ y: -3 }}
              style={{ boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)" }}
            >
              <p className="font-medium" style={{ color: "var(--foreground)" }}>
                <strong>Co-organizer & Speaker</strong> — Food and Lifestyle Seminar 2022
              </p>
              <p className="text-sm mt-2" style={{ color: "var(--foreground)", opacity: 0.7 }}>
                Led organization and delivered keynote on sustainable food practices.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 5: ENGINE ===== */}
      <section
        ref={(el) => { sectionRefs.current.engine = el; }}
        id="engine"
        className="min-h-screen py-16 md:py-24 px-4 bg-background dark:bg-forest"
      >
        <div className="max-w-4xl mx-auto">
          <motion.header
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10 md:mb-16 text-center"
          >
            <span className="text-xs md:text-sm uppercase tracking-widest" style={{ color: "#C5A059" }}>
              Thoughts & Writings
            </span>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2"
              style={{ color: "#1B3022", fontFamily: "var(--font-playfair), serif" }}
            >
              The Engine
            </h2>
          </motion.header>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="space-y-4 md:space-y-6"
          >
            {articles.map((article, index) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                className={`flex flex-col md:flex-row gap-6 p-5 md:p-8 rounded-xl md:rounded-2xl overflow-hidden group ${index === 0 ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground border border-border/50"
                  }`}
                style={{
                  boxShadow: index !== 0 ? "0 4px 16px rgba(0, 0, 0, 0.03)" : undefined
                }}
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Article Image */}
                <div className="relative w-full md:w-2/5 rounded-lg overflow-hidden shrink-0 flex items-center">
                  <Image src={article.image} alt={article.title} width={600} height={400} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 40vw" loading="lazy" />
                </div>

                {/* Article Content */}
                <div className="flex flex-col justify-center w-full md:w-3/5 py-2">
                  {index === 0 && (
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded pl-0 mb-3 block w-fit" style={{ color: "var(--accent)" }}>
                      ★ Featured Post
                    </span>
                  )}
                  <h3
                    className="text-xl md:text-2xl lg:text-3xl font-bold mb-3"
                    style={{ color: index === 0 ? "var(--primary-foreground)" : "var(--card-foreground)" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm md:text-base mb-6 leading-relaxed opacity-80" style={{ color: index === 0 ? "var(--primary-foreground)" : "var(--card-foreground)" }}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs md:text-sm font-medium mt-auto" style={{ color: "var(--accent)" }}>
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                    <span className="opacity-80">
                      {article.readTime} read
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 6: CONTACT ===== */}
      <section
        ref={(el) => { sectionRefs.current.contact = el; }}
        id="contact"
        itemScope
        itemType="https://schema.org/ContactPage"
        className="min-h-screen py-16 md:py-24 px-4 bg-background dark:bg-forest"
      >
        <div className="max-w-5xl mx-auto">
          <motion.header
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10 md:mb-16"
          >
            <span className="text-xs md:text-sm uppercase tracking-widest" style={{ color: "#C5A059" }}>
              Let&apos;s Connect
            </span>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2"
              style={{ color: "#1B3022", fontFamily: "var(--font-playfair), serif" }}
            >
              Get In Touch
            </h2>
          </motion.header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: "var(--foreground)" }}>
                Let&apos;s Build Something Together
              </h3>
              <p className="mb-3 leading-relaxed text-sm md:text-base" style={{ color: "var(--foreground)", opacity: 0.8 }}>
                Whether you&apos;re a startup founder seeking your first strategic partnership or an established company looking to accelerate B2B growth, I bring a unique blend of analytical thinking and creative storytelling to every engagement.
              </p>
              <p className="mb-6 md:mb-8 leading-relaxed text-sm md:text-base" style={{ color: "var(--foreground)", opacity: 0.8 }}>
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-3 md:space-y-4">
                {/* Email - Animated for non-auth users */}
                <motion.div
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-card"
                  whileHover={{ y: -2 }}
                  style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)" }}
                  itemProp="email"
                >
                  <div className="p-2 md:p-3 rounded-full" style={{ backgroundColor: "rgba(197, 160, 89, 0.15)" }}>
                    <Mail size={16} className="md:size-5" style={{ color: "#C5A059" }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "var(--foreground)", opacity: 0.6 }}>Email</p>
                    <div className="flex items-center gap-2">
                      <AnimatedContactValue value="Sajjadr742@gmail.com" type="email" />
                      {!isAuthenticated && <Lock size={12} style={{ color: "#C5A059", opacity: 0.5 }} />}
                    </div>
                  </div>
                </motion.div>

                {/* Phone - Animated for non-auth users */}
                <motion.div
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-card"
                  whileHover={{ y: -2 }}
                  style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)" }}
                >
                  <div className="p-2 md:p-3 rounded-full" style={{ backgroundColor: "rgba(197, 160, 89, 0.15)" }}>
                    <Phone size={16} className="md:size-5" style={{ color: "#C5A059" }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "var(--foreground)", opacity: 0.6 }}>Phone</p>
                    <div className="flex items-center gap-2">
                      <AnimatedContactValue value="+92 300 123 4567" type="phone" />
                      {!isAuthenticated && <Lock size={12} style={{ color: "#C5A059", opacity: 0.5 }} />}
                    </div>
                  </div>
                </motion.div>

                {/* Address - Animated for non-auth users */}
                <motion.div
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-card"
                  whileHover={{ y: -2 }}
                  style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)" }}
                  itemProp="address"
                >
                  <div className="p-2 md:p-3 rounded-full" style={{ backgroundColor: "rgba(197, 160, 89, 0.15)" }}>
                    <MapPin size={16} className="md:size-5" style={{ color: "#C5A059" }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "var(--foreground)", opacity: 0.6 }}>Location</p>
                    <div className="flex items-center gap-2">
                      <AnimatedContactValue value="Karachi, Pakistan" type="address" />
                      {!isAuthenticated && <Lock size={12} style={{ color: "#C5A059", opacity: 0.5 }} />}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sign in prompt for non-auth users */}
              {!isAuthenticated && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="mt-6 p-4 rounded-xl text-center"
                  style={{ backgroundColor: "rgba(197, 160, 89, 0.1)", border: "1px solid rgba(197, 160, 89, 0.2)" }}
                >
                  <p className="text-sm mb-3" style={{ color: "var(--foreground)" }}>
                    <Lock size={14} className="inline mr-1" style={{ color: "#C5A059" }} />
                    Sign in to unlock contact details
                  </p>
                  <Link href="/login">
                    <motion.span
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                      style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                      whileHover={{ scale: 1.03, backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
                    >
                      Sign In <ArrowRight size={14} />
                    </motion.span>
                  </Link>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 md:mb-2" style={{ color: "var(--foreground)" }}>Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-border bg-card text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm md:text-base shadow-sm"
                    aria-label="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 md:mb-2" style={{ color: "var(--foreground)" }}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-border bg-card text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm md:text-base shadow-sm"
                    aria-label="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 md:mb-2" style={{ color: "var(--foreground)" }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-border resize-none bg-card text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm md:text-base shadow-sm"
                    aria-label="Your message"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-base md:text-lg"
                  style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                  whileHover={{ scale: 1.02, backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 md:py-16 px-4 border-t box-border"
        style={{ backgroundColor: "#1B3022", borderColor: "rgba(197, 160, 89, 0.1)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 text-left">
            {/* Brand */}
            <div>
              <h4 className="text-lg font-bold mb-3" style={{ color: "#F5F2ED", fontFamily: "var(--font-playfair), serif" }}>Muhammad Sajjad Rasool</h4>
              <p className="text-xs leading-relaxed" style={{ color: "#F5F2ED", opacity: 0.6 }}>Freelance Business Development Manager & Author. Crafting strategic B2B partnerships and sharing the journey through compelling storytelling.</p>
            </div>
            {/* Quick Links */}
            <div>
              <h5 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: "#C5A059" }}>Quick Links</h5>
              <ul className="space-y-2">
                {[{ l: "Experience", h: "#archive" }, { l: "Books & Projects", h: "#library" }, { l: "Skills", h: "#arsenal" }, { l: "Articles", h: "#engine" }, { l: "FAQ", h: "/faq" }].map(link => (
                  <li key={link.l}><Link href={link.h} className="text-xs hover:opacity-100 transition-opacity" style={{ color: "#F5F2ED", opacity: 0.6 }}>{link.l}</Link></li>
                ))}
              </ul>
            </div>
            {/* Connect */}
            <div>
              <h5 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: "#C5A059" }}>Connect</h5>
              <ul className="space-y-2">
                <li><Link href="#contact" className="text-xs hover:opacity-100 transition-opacity" style={{ color: "#F5F2ED", opacity: 0.6 }}>Get In Touch</Link></li>
                <li><Link href="/blog" className="text-xs hover:opacity-100 transition-opacity" style={{ color: "#F5F2ED", opacity: 0.6 }}>Blog</Link></li>
                <li><Link href="/faq" className="text-xs hover:opacity-100 transition-opacity" style={{ color: "#F5F2ED", opacity: 0.6 }}>FAQ ({'>'}200 Answers)</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 text-center" style={{ borderColor: "rgba(197, 160, 89, 0.15)" }}>
            <p className="text-xs" style={{ color: "#F5F2ED", opacity: 0.5 }}>© {new Date().getFullYear()} Muhammad Sajjad Rasool. All rights reserved.</p>
            <p className="text-xs mt-2" style={{ color: "#C5A059", opacity: 0.7 }}>Freelance Business Development Manager | Author | B2B Growth Strategist</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
