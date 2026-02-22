import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "The Seed by Sajjad Rasool — Spiral Arms Book 5",
    description: "The penultimate chapter of the Spiral Arms saga — the stakes shift from discovery to survival.",
    keywords: ["The Seed", "Sajjad Rasool", "Spiral Arms", "science fiction", "space opera", "evolution", "alien biology", "Children of Time"],
    alternates: { canonical: "https://sajjad.escritura.site/books/the-seed" },
    openGraph: {
        title: "The Seed by Sajjad Rasool — Spiral Arms Book 5",
        description: "The penultimate chapter of the Spiral Arms saga — the stakes shift from discovery to survival.",
        url: "https://sajjad.escritura.site/books/the-seed",
        type: "book" as const,
        images: [{ url: "/books/the-seed.jpg", width: 600, height: 900, alt: "The Seed Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "The Seed — Spiral Arms Book 5 by Sajjad Rasool",
        description: "The penultimate chapter — stakes shift from discovery to survival.",
        images: ["/books/the-seed.jpg"],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-teal-500/30 font-sans tracking-tight">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-800 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                    <div className="space-y-4">
                        <h4 className="text-teal-500 font-medium tracking-[0.2em] uppercase text-sm">The Spiral Arms • Book 5 • Free Ebook</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Seed</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            The penultimate chapter of the epic Spiral Arms saga has arrived.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=The+Seed+Sajjad+Rasool"
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart size={18} />
                                Get Free on Lulu
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-teal-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <div className="text-white/50 text-sm flex flex-col font-light">
                            <span>Ebook / EPUB</span>
                            <span>Space Opera</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/the-seed.jpg" spineTitle="THE SEED" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-teal-500/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;Can humanity coexist with a power that views entire worlds as gardens to be pruned?&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            As Captain Elara prepares the Astra for a journey that defies the known laws of physics, the crew must confront the true nature of the alien consciousness they have spent years tracking. It is a voyage not just across the stars, but into the very heart of biological evolution.
                        </p>
                        <p>
                            Meanwhile, Vren assumes the role of the &quot;Pruner,&quot; guarding the Sleeper and tending to new growth left behind by the Seeders. He quickly learns that ancient signals don&apos;t just call out — they wake things up.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">Perfect For Fans Of</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="Children of Time" description="Adrian Tchaikovsky's masterful exploration of evolutionary biology meets this space opera saga." />
                        <TopicCard title="The Expanse" description="James S.A. Corey's gritty, realistic space adventure echoes through every page." />
                        <TopicCard title="Foundation" description="The grand scale of Isaac Asimov's vision — high-concept space opera with philosophical depth." />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Publication Date</h5>
                        <p className="text-white/90 font-medium">Dec 26, 2025</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Series</h5>
                        <p className="text-white/90 font-medium">Spiral Arms #5</p>
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
            <div className="w-12 h-12 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6 border border-teal-500/20">
                <BookOpen className="text-teal-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{description}</p>
        </div>
    );
}
