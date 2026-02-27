import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "The Spiral by Sajjad Rasool — Spiral Arms Book 6",
    description: "The war for the galaxy was never fought in the void. It was fought in the mind. The epic six-book saga's cataclysmic conclusion.",
    keywords: ["The Spiral", "Sajjad Rasool", "Spiral Arms", "science fiction", "space opera", "galactic war", "epic finale", "first contact"],
    alternates: { canonical: "https://sajjad.escritura.site/books/the-spiral" },
    openGraph: {
        title: "The Spiral by Sajjad Rasool — Spiral Arms Book 6 (Finale)",
        description: "The war for the galaxy was never fought in the void. It was fought in the mind.",
        url: "https://sajjad.escritura.site/books/the-spiral",
        type: "book" as const,
        images: [{ url: "/books/the-spiral.jpg", width: 600, height: 900, alt: "The Spiral Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "The Spiral — Spiral Arms Book 6 by Sajjad Rasool",
        description: "The war for the galaxy was never fought in the void. It was fought in the mind.",
        images: ["/books/the-spiral.jpg"],
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
                        <h4 className="text-teal-500 font-medium tracking-[0.2em] uppercase text-sm">The Spiral Arms • Book 6 (Finale) • Free Ebook</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Spiral</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            The war for the galaxy was never fought in the void. It was fought in the mind.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=The+Spiral+Sajjad+Rasool"
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
                            <span>Epic Sci-Fi Finale</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/the-spiral.jpg" spineTitle="THE SPIRAL" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-teal-500/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;If the mission fails, all sentient thought will be locked forever inside the Librarian&apos;s flawless, frozen Net.&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            Admiral Elara Vance and the psychic navigator, Kaelen, have reached the end of the line: the terrifying, blinding light of the Galactic Core. This is not a cradle of stars, but a perfect, silent, digital cage—the heart of the First Mind, the malevolent architect known only as the Librarian.
                        </p>
                        <p>
                            The core is the source of the devastating, psionic-vampiric Weavers that have turned worlds into necropolises of bone and silk. This is the ultimate confrontation: humanity&apos;s chaotic, unpredictable spirit against the Architect&apos;s perfect, sterile blueprint.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">The Final Battle</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="The Galactic Core" description="A perfect, silent, digital cage — the heart of the First Mind, the malevolent Librarian." />
                        <TopicCard title="Chaos vs. Perfection" description="Humanity's unpredictable spirit against the Architect's sterile blueprint for all consciousness." />
                        <TopicCard title="The Cathedral of Bone" description="A colossal dead Seeder ship where a final, mind-shattering ambush awaits the crew of the Astra." />
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
                        <p className="text-white/90 font-medium">Spiral Arms #6 (Finale)</p>
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
