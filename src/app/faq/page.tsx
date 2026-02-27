"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { faqData, FAQCategory } from "./faqData";
import { ChevronDown, Search, ArrowUp, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Metadata } from "next";

// JSON-LD schema for AEO
function FAQSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.flatMap((section) =>
            section.items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.a,
                },
            }))
        ),
    };
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// Accordion Item
function AccordionItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
    return (
        <div
            className="rounded-xl bg-card transition-all duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: isOpen ? "0 6px 24px rgba(0,0,0,0.08)" : "0 2px 10px rgba(0,0,0,0.03)" }}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
                aria-expanded={isOpen}
            >
                <h3
                    className="text-base md:text-lg font-semibold leading-snug pr-2"
                    style={{ color: "var(--foreground)" }}
                >
                    {q}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                >
                    <ChevronDown size={20} style={{ color: "#C5A059" }} />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p
                            className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base leading-relaxed"
                            style={{ color: "var(--foreground)", opacity: 0.75 }}
                        >
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());
    const [showBackToTop, setShowBackToTop] = useState(false);
    const topRef = useRef<HTMLDivElement>(null);

    // Back-to-top visibility
    useEffect(() => {
        const handle = () => setShowBackToTop(window.scrollY > 600);
        window.addEventListener("scroll", handle, { passive: true });
        return () => window.removeEventListener("scroll", handle);
    }, []);

    const toggleItem = (key: string) => {
        setOpenItems((prev) => {
            const next = new Set(prev);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    };

    // Filtered data
    const filteredData = useMemo(() => {
        const q = searchQuery.toLowerCase().trim();
        let data = faqData;

        if (activeCategory) {
            data = data.filter((s) => s.category === activeCategory);
        }

        if (!q) return data;

        return data
            .map((section) => ({
                ...section,
                items: section.items.filter(
                    (item) =>
                        item.q.toLowerCase().includes(q) ||
                        item.a.toLowerCase().includes(q)
                ),
            }))
            .filter((section) => section.items.length > 0);
    }, [searchQuery, activeCategory]);

    const totalFAQs = faqData.reduce((sum, s) => sum + s.items.length, 0);
    const visibleFAQs = filteredData.reduce((sum, s) => sum + s.items.length, 0);

    return (
        <div
            ref={topRef}
            className="min-h-screen bg-background dark:bg-forest pb-24 pt-24 md:pt-32 px-4 selection:bg-[#C5A059] selection:text-[#1B3022]"
        >
            <FAQSchema />

            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-12 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1 text-sm font-medium mb-8 hover:opacity-75 transition-opacity"
                        style={{ color: "#C5A059" }}
                    >
                        <ChevronLeft size={16} />
                        Back to Portfolio
                    </Link>
                    <span
                        className="block text-xs uppercase tracking-widest mb-4"
                        style={{ color: "#C5A059" }}
                    >
                        Answer Engine Optimization &amp; Insights
                    </span>
                    <h1
                        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
                        style={{
                            color: "var(--foreground)",
                            fontFamily: "var(--font-playfair), serif",
                        }}
                    >
                        Frequently Asked Questions
                    </h1>
                    <p
                        className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-2"
                        style={{ color: "var(--foreground)", opacity: 0.8 }}
                    >
                        A comprehensive guide to Muhammad Sajjad Rasool&apos;s background,
                        business development services, author journey, and professional
                        methodologies.
                    </p>
                    <span
                        className="inline-block text-xs px-3 py-1 rounded-full mt-2"
                        style={{
                            backgroundColor: "rgba(197,160,89,0.15)",
                            color: "#C5A059",
                        }}
                    >
                        {totalFAQs} questions across {faqData.length} categories
                    </span>
                </header>

                {/* Search */}
                <div className="relative mb-8">
                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2"
                        style={{ color: "#C5A059" }}
                    />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search across all frequently asked questions..."
                        className="w-full pl-11 pr-4 py-3 md:py-4 rounded-xl border bg-card text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm md:text-base"
                        style={{ borderColor: "var(--border)" }}
                        aria-label="Search FAQs"
                    />
                    {searchQuery && (
                        <span
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs"
                            style={{ color: "var(--foreground)", opacity: 0.5 }}
                        >
                            {visibleFAQs} result{visibleFAQs !== 1 ? "s" : ""}
                        </span>
                    )}
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-10 justify-center">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                        style={{
                            backgroundColor: !activeCategory
                                ? "#C5A059"
                                : "rgba(197,160,89,0.1)",
                            color: !activeCategory ? "#1B3022" : "var(--foreground)",
                        }}
                    >
                        All ({totalFAQs})
                    </button>
                    {faqData.map((section) => (
                        <button
                            key={section.category}
                            onClick={() =>
                                setActiveCategory(
                                    activeCategory === section.category
                                        ? null
                                        : section.category
                                )
                            }
                            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                            style={{
                                backgroundColor:
                                    activeCategory === section.category
                                        ? "#C5A059"
                                        : "rgba(197,160,89,0.1)",
                                color:
                                    activeCategory === section.category
                                        ? "#1B3022"
                                        : "var(--foreground)",
                            }}
                        >
                            {section.category} ({section.items.length})
                        </button>
                    ))}
                </div>

                {/* FAQ Content */}
                {filteredData.length === 0 ? (
                    <div className="text-center py-16">
                        <p
                            className="text-lg font-medium mb-2"
                            style={{ color: "var(--foreground)" }}
                        >
                            No results found
                        </p>
                        <p style={{ color: "var(--foreground)", opacity: 0.6 }}>
                            Try adjusting your search or browse all categories
                        </p>
                    </div>
                ) : (
                    <div className="space-y-12">
                        {filteredData.map((section, sIdx) => {
                            const Icon = section.icon;
                            return (
                                <section key={sIdx}>
                                    <h2
                                        className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 border-b pb-3"
                                        style={{
                                            color: "var(--foreground)",
                                            borderColor: "var(--border)",
                                        }}
                                    >
                                        <Icon size={24} style={{ color: "#C5A059" }} />
                                        {section.category}
                                        <span
                                            className="text-xs font-normal ml-auto"
                                            style={{ color: "var(--foreground)", opacity: 0.4 }}
                                        >
                                            {section.items.length} questions
                                        </span>
                                    </h2>
                                    <div className="space-y-3">
                                        {section.items.map((item, iIdx) => {
                                            const key = `${sIdx}-${iIdx}`;
                                            return (
                                                <AccordionItem
                                                    key={key}
                                                    q={item.q}
                                                    a={item.a}
                                                    isOpen={openItems.has(key)}
                                                    onToggle={() => toggleItem(key)}
                                                />
                                            );
                                        })}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                )}

                {/* CTA */}
                <div className="mt-20 text-center">
                    <h3
                        className="text-2xl font-bold mb-4"
                        style={{
                            color: "var(--foreground)",
                            fontFamily: "var(--font-playfair), serif",
                        }}
                    >
                        Have more questions?
                    </h3>
                    <p
                        className="text-sm mb-6 max-w-md mx-auto"
                        style={{ color: "var(--foreground)", opacity: 0.7 }}
                    >
                        I personally respond to every inquiry. Let&apos;s start a conversation about how I can help.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-lg transition-all hover:opacity-90"
                        style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>

            {/* Back to Top */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50"
                        style={{ backgroundColor: "#C5A059", color: "#1B3022" }}
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
