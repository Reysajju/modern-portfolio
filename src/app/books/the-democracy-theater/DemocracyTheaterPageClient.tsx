"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ShoppingCart,
    ExternalLink,
    Landmark,
    ShieldAlert,
    Scale,
    Building2,
    BadgeDollarSign,
    Waves,
    BrainCircuit,
    FileText,
    ChevronRight,
} from "lucide-react";
import { BookMockup } from "@/components/BookMockup";

const THESIS_PILLARS = [
    {
        title: "Constitutional Design",
        detail: "How early institutional design filtered popular will and stabilized elite influence.",
        icon: Landmark,
    },
    {
        title: "War & Financial Incentives",
        detail: "A conflict-by-conflict analysis linking policy outcomes with strategic and financial interests.",
        icon: ShieldAlert,
    },
    {
        title: "Judicial & Regulatory Capture",
        detail: "How courts, lobbying, and revolving-door power networks shape policy durability.",
        icon: Scale,
    },
    {
        title: "Corporate-State Alignment",
        detail: "The overlap of private contractors, intelligence ecosystems, and permanent policy actors.",
        icon: Building2,
    },
];

const WORKFLOW = [
    {
        phase: "Phase 01",
        title: "Foundational Blueprint",
        span: "Origins -> Institutional design",
        summary: "Examines the architecture of governance and who benefits from its enduring structural defaults.",
        icon: Landmark,
    },
    {
        phase: "Phase 02",
        title: "Economy of Influence",
        span: "Finance -> Policy conversion",
        summary: "Tracks how donor incentives, lobbying, and financial leverage convert into legislative outcomes.",
        icon: BadgeDollarSign,
    },
    {
        phase: "Phase 03",
        title: "War Machine Logic",
        span: "WWI -> Gaza era",
        summary: "Maps recurring patterns where intervention, security narratives, and strategic economics intersect.",
        icon: Waves,
    },
    {
        phase: "Phase 04",
        title: "Narrative Infrastructure",
        span: "Media -> Perception control",
        summary: "Interrogates how information systems frame public consent and absorb dissent.",
        icon: BrainCircuit,
    },
    {
        phase: "Phase 05",
        title: "Future Trajectory",
        span: "BRICS -> Dollar pressure",
        summary: "Projects how monetary stress and multipolar shifts pressure the current power architecture.",
        icon: FileText,
    },
];

const CHAPTER_GROUPS = [
    "Part One - The Brand (Ch. 1-2): We Hold These Truths, Architecture of Hidden Power",
    "Part Two - The Wars (Ch. 3-12): Petrodollar logic from early oil order to Ukraine and Gaza",
    "Part Three - The Machine (Ch. 13-17): Insider trading, media simulation, voting paradox, deep state patterns",
    "Part Four - The Reckoning (Ch. 18-20): BRICS pressure, people as first victims, real democracy framework",
    "Part Five - Extended Analysis (Ch. 21-30): Consent systems, surveillance, debt, prisons, health, climate, lobbying, education, way forward",
];

const SOLUTION_BLUEPRINT = [
    "Re-anchor policy legitimacy in verified public consent and transparent legislative traceability.",
    "Reduce war and security capture through real auditability, contractor firewalling, and post-office cooling periods.",
    "Rebalance democracy inputs: campaign finance discipline, lobbying exposure, and conflict-of-interest enforcement.",
    "Rebuild social capacity via healthcare, education, and civic literacy that makes democratic participation materially possible.",
];

export default function DemocracyTheaterPageClient() {
    return (
        <div className="min-h-screen bg-[#03040a] text-slate-100 selection:bg-amber-500/30">
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.08]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 10%, rgba(180,83,9,0.18), transparent 35%), radial-gradient(circle at 80% 20%, rgba(234,179,8,0.10), transparent 30%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "auto, auto, 30px 30px, 30px 30px",
                }}
            />

            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-amber-200/10 bg-[#05060d]/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
                    <Link href="/books" className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 transition hover:text-amber-200">
                        <ArrowLeft size={14} className="transition group-hover:-translate-x-1" />
                        Back to Library
                    </Link>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-400/80">Democracy Theater Dossier</span>
                </div>
            </nav>

            <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10">
                <section className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-300">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-300" />
                            Investigative Non-Fiction
                        </div>
                        <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                            The Democracy
                            <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                                Theater
                            </span>
                        </h1>
                        <p className="max-w-2xl border-l-2 border-amber-300/40 pl-5 text-base leading-relaxed text-slate-300 md:text-lg">
                            An investigative report on how institutions can perform freedom while concentrating durable power. Built from primary documents, policy records, and historical cross-analysis.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <a
                                href="https://www.lulu.com/shop/sajjad-rasool/the-democracytheater/ebook/product-dyeqp47.html?page=1&pageSize=4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-md bg-amber-500 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:bg-amber-400"
                            >
                                <ShoppingCart size={16} />
                                Buy on Lulu
                                <ExternalLink size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                            <a
                                href="https://amazon.com/the-democracy-theater"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md border border-amber-200/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-amber-100 transition hover:border-amber-200/60 hover:bg-amber-100/10"
                            >
                                Amazon Placeholder
                                <ChevronRight size={15} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95, rotate: -1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute -inset-6 -z-10 rounded-full bg-amber-500/20 blur-3xl" />
                            <BookMockup coverSrc="/books/the-democracy-theater.jpg" spineTitle="THE DEMOCRACY THEATER" />
                        </div>
                    </motion.div>
                </section>

                <section className="mt-24 grid gap-4 md:grid-cols-2">
                    {THESIS_PILLARS.map((pillar, i) => (
                        <motion.article
                            key={pillar.title}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                            className="group rounded-xl border border-white/10 bg-white/[0.02] p-6"
                        >
                            <div className="mb-4 inline-flex rounded-md border border-amber-300/25 bg-amber-300/10 p-2 text-amber-300">
                                <pillar.icon size={18} />
                            </div>
                            <h3 className="mb-2 text-xl font-bold uppercase tracking-wide text-white">{pillar.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-400">{pillar.detail}</p>
                        </motion.article>
                    ))}
                </section>

                <section className="mt-24">
                    <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">Workflow Outline</h2>
                        <p className="max-w-xl text-sm leading-relaxed text-slate-400">
                            Structured for readers who want both historical continuity and system-level pattern recognition before policy conclusions.
                        </p>
                    </div>

                    <div className="space-y-3">
                        {WORKFLOW.map((item, index) => (
                            <motion.div
                                key={item.phase}
                                initial={{ opacity: 0, x: -14 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.45, delay: index * 0.06 }}
                                className="group grid gap-5 rounded-lg border border-white/10 bg-gradient-to-r from-white/[0.03] to-transparent p-5 md:grid-cols-[120px_1fr_auto]"
                            >
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300/80">{item.phase}</span>
                                <div>
                                    <h3 className="text-lg font-bold uppercase tracking-wide text-white">{item.title}</h3>
                                    <p className="mt-1 text-sm text-slate-500">{item.span}</p>
                                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">{item.summary}</p>
                                </div>
                                <div className="hidden items-center justify-end md:flex">
                                    <item.icon className="text-amber-200/60 transition group-hover:scale-110 group-hover:text-amber-200" size={22} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="mt-24 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.05] p-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Chapter Arc</p>
                        <ul className="mt-6 space-y-3">
                            {CHAPTER_GROUPS.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Who Should Read</p>
                        <p className="mt-5 text-sm leading-relaxed text-slate-400">
                            Policy researchers, history readers, civic skeptics, and professionals who want document-grounded argumentation rather than ideological slogans.
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-slate-500">
                            The page is designed to help prospective readers understand scope, method, and stakes before purchase.
                        </p>
                    </div>
                </section>

                <section className="mt-24 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Author Position</p>
                        <blockquote className="mt-4 border-l-2 border-amber-300/40 pl-4 text-sm italic leading-relaxed text-slate-300">
                            This book is not anti-American. It is pro-truth. It argues that questioning government action is not hostility to country, but a requirement of citizenship.
                        </blockquote>
                        <p className="mt-4 text-xs leading-relaxed text-slate-500">
                            Drawn from the author note and opening framing of the manuscript in your uploaded Lulu-ready edition.
                        </p>
                    </div>
                    <div className="rounded-xl border border-amber-400/20 bg-amber-500/[0.04] p-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Reform / Solution Blueprint</p>
                        <ul className="mt-5 space-y-3">
                            {SOLUTION_BLUEPRINT.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}
