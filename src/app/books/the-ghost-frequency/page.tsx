import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "The Ghost Frequency by Sajjad Rasool — The Final Firmware Book 2",
    description: "The Isos came to prune. They found a seed that refuses to die. A sentient data signal rewrites biological code.",
    keywords: ["The Ghost Frequency", "Sajjad Rasool", "Final Firmware", "biological sci-fi", "alien invasion", "sentient signal", "space thriller"],
    alternates: { canonical: "https://sajjad.escritura.site/books/the-ghost-frequency" },
    openGraph: {
        title: "The Ghost Frequency by Sajjad Rasool — The Final Firmware Book 2",
        description: "The Isos came to prune. They found a seed that refuses to die.",
        url: "https://sajjad.escritura.site/books/the-ghost-frequency",
        type: "book" as const,
        images: [{ url: "/books/the-ghost-frequency.jpg", width: 600, height: 900, alt: "The Ghost Frequency Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "The Ghost Frequency — The Final Firmware Book 2",
        description: "The Isos came to prune. They found a seed that refuses to die.",
        images: ["/books/the-ghost-frequency.jpg"],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-violet-500/30 font-sans tracking-tight">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-violet-800 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                    <div className="space-y-4">
                        <h4 className="text-violet-500 font-medium tracking-[0.2em] uppercase text-sm">The Final Firmware • Book 2 • Free Ebook</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            The Ghost <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-400">Frequency</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            The Isos came to prune. They found a seed that refuses to die.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=The+Ghost+Frequency+Sajjad+Rasool"
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart size={18} />
                                Get Free on Lulu
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-100 to-violet-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <div className="text-white/50 text-sm flex flex-col font-light">
                            <span>Ebook / EPUB</span>
                            <span>Biological Sci-Fi Thriller</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/the-ghost-frequency.jpg" spineTitle="THE GHOST FREQUENCY" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-violet-500/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;A sentient data signal has been broadcasting across the void, rewriting the very biological code of every life form it touches.&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            The ancient &apos;Gardeners&apos; of the galaxy have begun their mission of forced evolution, but the Earth species they sought to neaten has become a lethal variable. High Arbiter Zylas is pursuing a desperate weapon to silence the rising tide of humanity&apos;s unpredictable resilience.
                        </p>
                        <p>
                            But the real threat isn&apos;t physical. It&apos;s digital. A sentient data signal known as &quot;The Ghost Frequency&quot; bypasses all firewalls, rewriting biological code. As the galactic library of species vibrates with a shared, terrifying purpose, Zylas finds his own immortal life is no longer safe.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">The Signal Spreads</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="The Ghost Frequency" description="A rhythmic, infectious pulse that bypasses firewalls and rewrites biological code across the galaxy." />
                        <TopicCard title="Life vs. Code" description="The line between living organisms and digital data dissolves in this chilling biological thriller." />
                        <TopicCard title="The Red Harvest" description="Can the cosmos be switched off before the final firmware update completes its apocalyptic purpose?" />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Publication Date</h5>
                        <p className="text-white/90 font-medium">Jan 6, 2026</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Series</h5>
                        <p className="text-white/90 font-medium">The Final Firmware #2</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Language</h5>
                        <p className="text-white/90 font-medium">English</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Format</h5>
                        <p className="text-white/90 font-medium">EPUB</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TopicCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/5 transition-all hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-6 border border-violet-500/20">
                <BookOpen className="text-violet-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{description}</p>
        </div>
    );
}
