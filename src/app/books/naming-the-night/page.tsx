import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "Naming the Night by Sajjad Rasool — Children of the Olive Book 4",
    description: "The shattering conclusion to the Children of the Olive saga — the battle for survival fought with words, memory, and will.",
    keywords: ["Naming the Night", "Sajjad Rasool", "Children of the Olive", "dark political fiction", "resistance", "memory", "defiance", "finale"],
    alternates: { canonical: "https://sajjad.escritura.site/books/naming-the-night" },
    openGraph: {
        title: "Naming the Night by Sajjad Rasool — Children of the Olive Book 4",
        description: "The shattering conclusion — the battle for survival fought with words, memory, and will.",
        url: "https://sajjad.escritura.site/books/naming-the-night",
        type: "book" as const,
        images: [{ url: "/books/naming-the-night.jpg", width: 600, height: 900, alt: "Naming the Night Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "Naming the Night — Children of the Olive Book 4",
        description: "The battle for survival fought with words, memory, and will.",
        images: ["/books/naming-the-night.jpg"],
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
                        <h4 className="text-red-600 font-medium tracking-[0.2em] uppercase text-sm">Children of the Olive • Book 4 (Finale) • Free Ebook</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            Naming <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">the Night</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            The silence is their weapon. The night is their domain. But Layla remembers.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=Naming+the+Night+Sajjad+Rasool"
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
                            <span>Dark Political Fiction</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/naming-the-night.jpg" spineTitle="NAMING THE NIGHT" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-red-600/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;Layla must find the courage to name the night before the night claims their minds forever.&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            For forty years, Layla and her people have lived under the suffocating grip of the Hollow Ones. In the Plaza, the Occupation has solidified into pure dread, monitored by thousands of unblinking red eyes that demand compliance and forgetfulness.
                        </p>
                        <p>
                            But Layla remembers. She carries the most dangerous weapon of all: a Red Crayon. As the final, absolute silence — the &apos;Sleep-Audit&apos; — threatens to extinguish the very concept of self, Layla must risk everything for one simple, defiant act: to draw a line in the sand.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">The Final Stand</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="The Red Crayon" description="The most dangerous weapon against forgetting — a simple tool that defies systemic erasure." />
                        <TopicCard title="The Sleep-Audit" description="The final, absolute silence that threatens to extinguish the very concept of self." />
                        <TopicCard title="Words Over Guns" description="The battle for survival fought not with weapons, but with words, memory, and unbreakable will." />
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
                        <p className="text-white/90 font-medium">Children of the Olive #4</p>
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
