import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "The Peshawar Protocol by Sajjad Rasool",
    description: "The Da Vinci Code meets The Three-Body Problem — a gritty, high-stakes sci-fi thriller from Peshawar to Mohenjo-Daro.",
    keywords: ["Peshawar Protocol", "Sajjad Rasool", "techno-thriller", "Pakistan", "Mohenjo-Daro", "ancient technology", "military sci-fi", "conspiracy"],
    alternates: { canonical: "https://sajjad.escritura.site/books/the-peshawar-protocol" },
    openGraph: {
        title: "The Peshawar Protocol by Sajjad Rasool",
        description: "The Da Vinci Code meets The Three-Body Problem — a gritty, high-stakes sci-fi thriller.",
        url: "https://sajjad.escritura.site/books/the-peshawar-protocol",
        type: "book" as const,
        images: [{ url: "/books/the-peshawar-protocol.jpg", width: 600, height: 900, alt: "The Peshawar Protocol Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "The Peshawar Protocol by Sajjad Rasool",
        description: "The Da Vinci Code meets The Three-Body Problem.",
        images: ["/books/the-peshawar-protocol.jpg"],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-amber-500/30 font-sans tracking-tight">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-800 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                    <div className="space-y-4">
                        <h4 className="text-amber-500 font-medium tracking-[0.2em] uppercase text-sm">Fiction • Techno-Thriller • Free Ebook</h4>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                            The Peshawar <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">Protocol</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            The dirt beneath your feet is a hard drive. And the formatting has just begun.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=Peshawar+Protocol+Sajjad+Rasool"
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart size={18} />
                                Get Free on Lulu
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <div className="text-white/50 text-sm flex flex-col font-light">
                            <span>Ebook / EPUB</span>
                            <span>Military Sci-Fi / Techno-Thriller</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/the-peshawar-protocol.jpg" spineTitle="THE PESHAWAR PROTOCOL" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-amber-500/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;The Da Vinci Code meets The Three-Body Problem in this gritty, high-stakes sci-fi thriller.&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            Rizwan Ahmed is an overqualified logistics engineer buried in the dust of Peshawar. His quiet existence shatters when he intercepts a &quot;Ghost Packet&quot; — a stream of impossible data originating from a source that shouldn&apos;t exist. The signal isn&apos;t coming from a satellite. It&apos;s coming from the ground.
                        </p>
                        <p>
                            Hunted by elite mercenaries and guided by a twelve-thousand-year-old operating system, Rizwan must race to the ancient ruins of Mohenjo-Daro. There, buried under five millennia of clay, lies the Peshawar Protocol — the master key to a history that humanity has forgotten.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">The Race Begins</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="The Ghost Packet" description="A stream of impossible data in trinary logic — originating from the ground beneath Peshawar." />
                        <TopicCard title="Mohenjo-Daro" description="Buried under five millennia of clay lies the master key to humanity's forgotten history." />
                        <TopicCard title="Upload Humanity" description="To save the future, Rizwan must upload the one thing the machine doesn't understand: human essence." />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Publication Date</h5>
                        <p className="text-white/90 font-medium">Jan 8, 2026</p>
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
            <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20">
                <BookOpen className="text-amber-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{description}</p>
        </div>
    );
}
