import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "The Vault of Amontillado Lane by Sajjad Rasool",
    description: "A masterful work of Gothic horror — the tunnels and vaults are a physical manifestation of memory, trauma, and sins that refuse to stay buried.",
    keywords: ["The Vault of Amontillado Lane", "Sajjad Rasool", "gothic horror", "Poe", "catacombs", "revenge", "dark fiction", "psychological horror"],
    alternates: { canonical: "https://sajjad.escritura.site/books/the-vault-of-amontillado-lane" },
    openGraph: {
        title: "The Vault of Amontillado Lane by Sajjad Rasool",
        description: "A masterful work of Gothic horror — the tunnels and vaults are a physical manifestation of memory, trauma, and sins that refuse to stay buried.",
        url: "https://sajjad.escritura.site/books/the-vault-of-amontillado-lane",
        type: "book" as const,
        images: [{ url: "/books/the-vault-of-amontillado-lane.jpg", width: 600, height: 900, alt: "The Vault of Amontillado Lane Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "The Vault of Amontillado Lane by Sajjad Rasool",
        description: "Gothic horror about memory, trauma, and sins buried deep in the catacombs.",
        images: ["/books/the-vault-of-amontillado-lane.jpg"],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-stone-500/30 font-sans tracking-tight">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-stone-400 to-stone-700 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                    <div className="space-y-4">
                        <h4 className="text-stone-400 font-medium tracking-[0.2em] uppercase text-sm">Fiction • Gothic Horror • Free Ebook</h4>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                            The Vault of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-400 to-stone-300">Amontillado Lane</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            The Past is not buried. It is merely waiting, deep beneath the stone, to be found.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=Vault+Amontillado+Lane+Sajjad+Rasool"
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,162,158,0.2)] hover:shadow-[0_0_30px_rgba(168,162,158,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart size={18} />
                                Get Free on Lulu
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-stone-100 to-stone-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <div className="text-white/50 text-sm flex flex-col font-light">
                            <span>Ebook / EPUB</span>
                            <span>Gothic Horror</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/the-vault-of-amontillado-lane.jpg" spineTitle="THE VAULT OF AMONTILLADO LANE" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-stone-500/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;Dare to descend. But remember: once you enter the vault, the way back is never the same.&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            Five years ago, Dr. Julian Vane was a star—the most respected scholar in his field. Now, driven by a ghost he cannot name and a tragedy he cannot forget, Julian embarks on a descent, both physical and psychological, into the forgotten catacombs beneath the city.
                        </p>
                        <p>
                            The tunnels and vaults are more than just a setting; they are a physical manifestation of memory, trauma, and the sins that refuse to stay buried. Julian&apos;s pursuit of truth and vengeance echoes the darkest tales of the genre&apos;s masters, leading him down a path of madness and calculated revenge.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">Descend Into the Depths</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="The Weight of Memory" description="The catacombs hold secrets of the city's forgotten history and deeply personal trauma that has consumed Julian's life." />
                        <TopicCard title="The Price of Obsession" description="A pursuit of truth and vengeance that blurs the line between a devoted scholar and a desperate monster." />
                        <TopicCard title="The Final Truth" description="The vault promises an ending, but freedom comes at a cost — leaving him forever changed by what he has entombed." />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Publication Date</h5>
                        <p className="text-white/90 font-medium">Dec 16, 2025</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Category</h5>
                        <p className="text-white/90 font-medium">Fiction</p>
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
            <div className="w-12 h-12 bg-stone-500/10 rounded-2xl flex items-center justify-center mb-6 border border-stone-500/20">
                <BookOpen className="text-stone-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{description}</p>
        </div>
    );
}
