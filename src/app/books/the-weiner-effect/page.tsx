import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "The Weiner Effect by Sajjad Rasool",
    description: "A darkly humorous literary fiction about perception, power, and the catastrophic consequences of a single, misidentified image.",
    keywords: ["The Weiner Effect", "Sajjad Rasool", "literary fiction", "dark humor", "satire", "perception", "media"],
    alternates: { canonical: "https://sajjad.escritura.site/books/the-weiner-effect" },
    openGraph: {
        title: "The Weiner Effect by Sajjad Rasool",
        description: "A darkly humorous literary fiction about perception, power, and the catastrophic consequences of a single, misidentified image.",
        url: "https://sajjad.escritura.site/books/the-weiner-effect",
        type: "book" as const,
        images: [{ url: "/books/the-weiner-effect.jpg", width: 600, height: 900, alt: "The Weiner Effect Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "The Weiner Effect by Sajjad Rasool",
        description: "A darkly humorous literary fiction about perception and power.",
        images: ["/books/the-weiner-effect.jpg"],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-yellow-500/30 font-sans tracking-tight">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-800 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                    <div className="space-y-4">
                        <h4 className="text-yellow-500 font-medium tracking-[0.2em] uppercase text-sm">Fiction • Literary Fiction • Free Ebook</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            The Weiner <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">Effect</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            The Bell That Sings Loudest is Always Cracked.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=The+Weiner+Effect+Sajjad+Rasool"
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart size={18} />
                                Get Free on Lulu
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <div className="text-white/50 text-sm flex flex-col font-light">
                            <span>Ebook / EPUB</span>
                            <span>Literary Fiction</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/the-weiner-effect.jpg" spineTitle="THE WEINER EFFECT" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-yellow-500/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;The true measure of a man is not his seamless exterior, but the sound that escapes his deepest flaw.&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            In the ruthless, unmapped territories of the modern male experience, we are taught to hide our vulnerabilities. We are polished into tools, forced to conform, and told to never show a crack. But what if the flawless bell is the one that rings hollow?
                        </p>
                        <p>
                            Henry, a street-hardened observer, has spent his life navigating the cruel expectations of community, fatherhood, and business. When a strange, damaged brass bell enters his life, he begins to uncover a powerful truth about resilience and vulnerability.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">Themes Explored</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="The Psychology of Success" description="How societal pressure (The Winner Effect) can actually crush the spirit, while vulnerability unlocks true power." />
                        <TopicCard title="Masculine Vulnerability" description="A necessary, unforgettable exploration of the hidden cost of masculinity, ambition, and pressure." />
                        <TopicCard title="The Cracked Bell" description="The 'Ding' of easy success is fleeting. The BONG of hard-won resilience is eternal." />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Publication Date</h5>
                        <p className="text-white/90 font-medium">Dec 9, 2025</p>
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
            <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 border border-yellow-500/20">
                <BookOpen className="text-yellow-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{description}</p>
        </div>
    );
}
