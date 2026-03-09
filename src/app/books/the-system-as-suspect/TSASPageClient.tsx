"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    ShoppingCart,
    Quote,
    FileText,
    EyeOff,
    ShieldAlert,
    Lock,
    History,
    Building2,
    Palmtree,
    Scale,
    Search,
    Network
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BookMockup } from "@/components/BookMockup";

const CHAPTERS = [
    {
        num: 1,
        title: "THE BROOKLYN FOUNDATION",
        years: "1953–1982",
        description: "The early years and the formation of the operative. Mapping the initial connections that built the infrastructure.",
        icon: Building2,
        image: "/books/tsas/chapter-1.png",
        color: "from-blue-600/20 to-transparent"
    },
    {
        num: 2,
        title: "THE FINANCIAL FACADE",
        years: "1982–1991",
        description: "Decoding 3.5 million pages of financial ledgers. How Wall Street banks laundered reputation and capital.",
        icon: ShieldAlert,
        color: "from-amber-600/20 to-transparent"
    },
    {
        num: 3,
        title: "THE ISLAND ACQUISITION",
        years: "1991–1998",
        description: "The strategic procurement of Little St. James and the establishment of a sovereign-like immunity zone.",
        icon: Palmtree,
        color: "from-emerald-600/20 to-transparent"
    },
    {
        num: 4,
        title: "THE RECRUITMENT PIPELINE",
        years: "1995–2005",
        description: "Unmasking the industrial-scale mechanics of the operation across global borders. Blueprints of the machine.",
        icon: Network,
        color: "from-purple-600/20 to-transparent"
    },
    {
        num: 5,
        title: "THE NON-PROSECUTION AGREEMENT",
        years: "2006–2008",
        description: "The legal apex of impunity. How the highest echelons of the justice system codified protection.",
        icon: Scale,
        color: "from-red-600/20 to-transparent"
    },
    {
        num: 6,
        title: "THE DECADE OF IMPUNITY",
        years: "2009–2018",
        description: "Operating in plain sight. The absolute, functional immunity purchased through deep intelligence connections.",
        icon: EyeOff,
        color: "from-zinc-600/20 to-transparent"
    },
    {
        num: 7,
        title: "THE UNRAVELING",
        years: "2018–2019",
        description: "When the system finally failed to contain the volume of its own leaked blueprints.",
        icon: History,
        color: "from-orange-600/20 to-transparent"
    },
    {
        num: 8,
        title: "THE FINAL MONTH",
        years: "July 2019 – August 2019",
        description: "The administrative erasure in a Manhattan jail cell and the forensic evidence left behind.",
        icon: Lock,
        color: "from-red-900/40 to-transparent"
    },
    {
        num: 9,
        title: "THE INVESTIGATION",
        years: "2019–2023",
        description: "Reconstructing the timeline. Why the architectural vulnerabilities exploited by the network remain intact.",
        icon: Search,
        color: "from-teal-600/20 to-transparent"
    }
];

export default function TSASPageClient() {
    const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-red-900/40 font-sans">
            {/* Investigative HUD Overlay */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-xl bg-black/80 border-b border-white/5">
                <Link href="/books" className="group text-zinc-400 hover:text-white transition flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Files
                </Link>
                <div className="flex flex-col items-end">
                    <span className="font-bold text-sm tracking-[0.3em] uppercase text-red-600">
                        Top Secret Analysis
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono tracking-tighter">REF: 3.5M_LEAK_DISTILLATION</span>
                </div>
            </nav>

            <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1 space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-900/30 bg-red-950/20 text-red-500 text-[10px] font-bold uppercase tracking-widest"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                Forensic investigative report
                            </motion.div>
                            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                                The System <br />
                                <span className="text-red-700">As Suspect</span>
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-xl leading-relaxed border-l-2 border-red-900/50 pl-6 py-2 italic font-serif">
                                &quot;Jeffrey Epstein was not an aberration; he was an operational output.&quot;
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <Link
                                href="https://www.lulu.com/search?page=1&q=The+System+As+Suspect+Sajjad+Rasool"
                                target="_blank"
                                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-red-700 text-white font-black rounded-sm overflow-hidden transition-all hover:bg-red-600 active:scale-95 shadow-[0_0_40px_rgba(185,28,28,0.2)]"
                            >
                                <span className="relative z-10 flex items-center gap-2 uppercase tracking-tighter">
                                    <ShoppingCart size={18} />
                                    Access Full Report
                                </span>
                            </Link>
                            <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
                                <div>Status: Declassified</div>
                                <div>Format: 3.5M Page Distillation</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 flex justify-center lg:justify-end"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-red-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <BookMockup coverSrc="/books/the-system-as-suspect.png" spineTitle="THE SYSTEM AS SUSPECT" />
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Evidence Section */}
            <section className="relative z-10 py-32 bg-[#080808] border-y border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <span className="text-xs font-bold text-red-600 uppercase tracking-[0.4em] block mb-2">Evidence Map</span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Timeline of Impunity</h2>
                        </div>
                        <div className="max-w-md text-right">
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                Mapping the blueprints of the machine across nine distinct phases of operational growth, acquisition, and institutional protection.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900/50 border border-zinc-900">
                        {CHAPTERS.map((chapter) => (
                            <motion.div
                                key={chapter.num}
                                onMouseEnter={() => setSelectedChapter(chapter.num)}
                                onMouseLeave={() => setSelectedChapter(null)}
                                className={`group relative p-8 bg-zinc-950 hover:bg-zinc-900 transition-colors duration-500 cursor-help overflow-hidden`}
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${chapter.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-12">
                                        <span className="text-[10px] font-mono text-zinc-600 font-bold tracking-widest">CHAPTER_0{chapter.num}</span>
                                        <div className="w-8 h-8 rounded border border-zinc-800 flex items-center justify-center group-hover:border-red-900/50 transition-colors">
                                            <chapter.icon size={14} className="text-zinc-500 group-hover:text-red-600 transition-colors" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-xs font-bold text-zinc-500 font-mono tracking-tighter">{chapter.years}</span>
                                        <h3 className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-red-500 transition-colors">
                                            {chapter.title}
                                        </h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            {chapter.description}
                                        </p>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {selectedChapter === chapter.num && chapter.image && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="absolute inset-0 z-0"
                                        >
                                            <Image
                                                src={chapter.image}
                                                alt={chapter.title}
                                                fill
                                                className="object-cover opacity-20 filter grayscale contrast-125"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Narrative Section */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="p-12 border border-zinc-900 bg-zinc-950/50 relative">
                        <div className="absolute top-0 left-0 w-12 h-1 bg-red-700" />
                        <Quote className="text-zinc-800 mb-8" size={32} />
                        <blockquote className="text-3xl md:text-4xl font-serif italic text-white/90 leading-snug">
                            &quot;The strategy was simple: if everything is public, no one will read it all. If no one reads it all, the system survives.&quot;
                        </blockquote>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="w-8 h-px bg-zinc-800" />
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">Sajjad Rasool</span>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none space-y-12 text-zinc-400 font-light leading-relaxed">
                        <div className="grid md:grid-cols-2 gap-12">
                            <p>
                                Over the course of thousands of hours, my research team and I processed, verified, and cross-referenced the entirety of the Epstein files. Our objective was not to recount the lurid, sensationalized crimes that the mainstream media had already commodified. Our objective was to map the blueprints of the machine.
                            </p>
                            <p>
                                Jeffrey Epstein recognized that in the modern American republic, extreme wealth combined with deep intelligence connections generates absolute, functional immunity. This book exists to explain exactly <strong>how</strong> that immunity was purchased from Wall Street banks, laundered through Ivy League universities, and legally codified by the highest echelons of the justice system.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-24 px-6 bg-[#050505] border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-zinc-600 font-bold uppercase text-[10px] tracking-[0.4em]">
                    <div className="flex gap-12">
                        <span>Status: Published</span>
                        <span>Analysis: Complete</span>
                    </div>
                    <div>© {new Date().getFullYear()} Sajjad Rasool • All Rights Reserved</div>
                    <Link href="/books" className="hover:text-red-700 transition">Return to Library</Link>
                </div>
            </footer>
        </div>
    );
}
