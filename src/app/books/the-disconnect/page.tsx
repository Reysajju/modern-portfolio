import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "The Disconnect by Sajjad Rasool",
    description: "A forensic investigation into the machinery that has hijacked American democracy — exposing the architecture of modern betrayal.",
    keywords: ["The Disconnect", "Sajjad Rasool", "political non-fiction", "American democracy", "lobbying", "healthcare", "military spending", "corruption"],
    alternates: { canonical: "https://sajjad.escritura.site/books/the-disconnect" },
    openGraph: {
        title: "The Disconnect by Sajjad Rasool",
        description: "A forensic investigation into the machinery that has hijacked American democracy.",
        url: "https://sajjad.escritura.site/books/the-disconnect",
        type: "book" as const,
        images: [{ url: "/books/the-disconnect.jpg", width: 600, height: 900, alt: "The Disconnect Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "The Disconnect by Sajjad Rasool",
        description: "A forensic investigation into the machinery that has hijacked American democracy.",
        images: ["/books/the-disconnect.jpg"],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans tracking-tight">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                    <div className="space-y-4">
                        <h4 className="text-blue-500 font-medium tracking-[0.2em] uppercase text-sm">History • Political Non-Fiction • Free Ebook</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Disconnect</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            Why does the government ignore you? A forensic investigation into hijacked democracy.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=The+Disconnect+Sajjad+Rasool"
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart size={18} />
                                Get Free on Lulu
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <div className="text-white/50 text-sm flex flex-col font-light">
                            <span>Ebook / EPUB</span>
                            <span>Political Non-Fiction</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/the-disconnect.jpg" spineTitle="THE DISCONNECT" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-blue-500/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;When 90% of Americans support universal background checks, why does nothing happen?&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            This is not a book about &quot;polarization.&quot; This is not another screed blaming the Left or the Right. This is a forensic investigation into the machinery that has hijacked American democracy — a system so sophisticated that it makes the voter feel heard while ensuring their voice never reaches the levers of power.
                        </p>
                        <p>
                            THE DISCONNECT exposes the architecture of modern American betrayal across ten relentless chapters. From rigged healthcare to the Great Decoupling of wages, from 22,000% lobbying ROI to $8 trillion Forever Wars — this book reveals how the system truly works.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">The Uncomfortable Truth</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="The Health of a Nation" description="$4.3 trillion per year on healthcare yet ranked last among developed nations in outcomes." />
                        <TopicCard title="The Rigged Ledger" description="In 1968, a single factory wage bought a house and two cars. Today, two incomes barely cover rent." />
                        <TopicCard title="The Auction House" description="A 22,000% return on lobbying investment — 70 lines of a bill written word-for-word by Citigroup." />
                        <TopicCard title="The False Peacekeepers" description="From the Gulf of Tonkin to WMD lies — $8 trillion siphoned into Forever Wars." />
                        <TopicCard title="The Industry of War" description="The Pentagon has never passed an audit. $35 trillion in accounting entries are 'missing.'" />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Publication Date</h5>
                        <p className="text-white/90 font-medium">Jan 12, 2026</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Category</h5>
                        <p className="text-white/90 font-medium">History</p>
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
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <BookOpen className="text-blue-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{description}</p>
        </div>
    );
}
