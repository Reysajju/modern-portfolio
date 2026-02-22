import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "The Bitter Well by Sajjad Rasool — Children of the Olive Book 3",
    description: "A weaponized drought. An unblinking enemy. A mother's defiance is the only record left.",
    keywords: ["The Bitter Well", "Sajjad Rasool", "Children of the Olive", "dystopian thriller", "resistance fiction", "water crisis", "political horror"],
    alternates: { canonical: "https://sajjad.escritura.site/books/the-bitter-well" },
    openGraph: {
        title: "The Bitter Well by Sajjad Rasool — Children of the Olive Book 3",
        description: "A weaponized drought. An unblinking enemy. A mother's defiance is the only record left.",
        url: "https://sajjad.escritura.site/books/the-bitter-well",
        type: "book" as const,
        images: [{ url: "/books/the-bitter-well.jpg", width: 600, height: 900, alt: "The Bitter Well Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "The Bitter Well — Children of the Olive Book 3",
        description: "A weaponized drought. A mother's defiance is the only record left.",
        images: ["/books/the-bitter-well.jpg"],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-500/30 font-sans tracking-tight">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                    <div className="space-y-4">
                        <h4 className="text-red-600 font-medium tracking-[0.2em] uppercase text-sm">Children of the Olive • Book 3 • Free Ebook</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            The Bitter <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">Well</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            A weaponized drought. An unblinking enemy. A mother&apos;s defiance is the only record left.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=The+Bitter+Well+Sajjad+Rasool"
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart size={18} />
                                Get Free on Lulu
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <div className="text-white/50 text-sm flex flex-col font-light">
                            <span>Ebook / EPUB</span>
                            <span>Dystopian Thriller</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/the-bitter-well.jpg" spineTitle="THE BITTER WELL" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-red-600/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;Will the raw history of the land save them, or will the silence of the Hollow Ones finally consume the Undeleted?&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            Layla, a mother of two, endures the agony of the water queue, a daily exercise in defiance and despair. But when a soldier&apos;s casual cruelty manifests a terrifying Hollow One — a monster stitched together from the &quot;Discarded Memory&quot; of the land — Layla realizes the water they crave is a lie.
                        </p>
                        <p>
                            The only hope for survival lies in a desperate act: cracking the Archive&apos;s system by injecting a relic from the past — a key from 1948. This unleashes the Red Flood, a tidal wave of raw, unsanitized history that threatens to either reclaim the land or drown them all.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">The Resistance</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="The Water Queue" description="A daily exercise in defiance and despair, where casual cruelty spawns new monsters." />
                        <TopicCard title="The Red Flood" description="A tidal wave of raw, unsanitized history unleashed from the Archive of Dust." />
                        <TopicCard title="The Stone Ledger" description="The Spiral — a secret record of unyielding steadfastness (Sumud) against erasure." />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Publication Date</h5>
                        <p className="text-white/90 font-medium">Jan 2, 2026</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Series</h5>
                        <p className="text-white/90 font-medium">Children of the Olive #3</p>
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
            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 border border-red-600/20">
                <BookOpen className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{description}</p>
        </div>
    );
}
