import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "Beneath The Willowbridge by Sajjad Rasool",
    description: "A gripping supernatural horror — the roots of the old tree are not searching for water. They are searching for names.",
    keywords: ["Beneath The Willowbridge", "Sajjad Rasool", "supernatural horror", "folk horror", "gothic fiction", "dark fantasy"],
    alternates: { canonical: "https://sajjad.escritura.site/books/beneath-the-willowbridge" },
    openGraph: {
        title: "Beneath The Willowbridge by Sajjad Rasool",
        description: "A gripping supernatural horror — the roots of the old tree are not searching for water. They are searching for names.",
        url: "https://sajjad.escritura.site/books/beneath-the-willowbridge",
        type: "book" as const,
        images: [{ url: "/books/beneath-the-willowbridge.jpg", width: 600, height: 900, alt: "Beneath The Willowbridge Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "Beneath The Willowbridge by Sajjad Rasool",
        description: "A gripping supernatural horror about roots searching for names.",
        images: ["/books/beneath-the-willowbridge.jpg"],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30 font-sans tracking-tight">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-800 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                    <div className="space-y-4">
                        <h4 className="text-emerald-500 font-medium tracking-[0.2em] uppercase text-sm">Fiction • Supernatural Horror • Free Ebook</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            Beneath The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Willowbridge</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            A psychological and supernatural horror novel about guilt, memory, and the strange places where our debts are paid.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=Beneath+The+Willowbridge+Sajjad+Rasool"
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart size={18} />
                                Get Free on Lulu
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <div className="text-white/50 text-sm flex flex-col font-light">
                            <span>Ebook / EPUB</span>
                            <span>Supernatural Horror</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/beneath-the-willowbridge.jpg" spineTitle="BENEATH THE WILLOWBRIDGE" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-emerald-500/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;The island is hungry. It extracts payment from everyone who enters.&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            Forensic accountant Elias Vance knows how to read ledgers. He also knows how to hide. When his mind begins to fracture, he agrees to a wilderness trip with his oldest friend, Silas — and they discover an island that does not follow the rules of the world.
                        </p>
                        <p>
                            Rivers loop in circles, mud erases footprints, and a woman called the Keeper tends a ledger that records more than money: memories, regrets, and the debts people carry. As the old system collapses, they are offered a terrible choice: flee and forget, or stay and become Architects.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">The Island Awaits</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="Slow-Burn Dread" description="A creeping, atmospheric horror that builds through strange landscapes and impossible geography." />
                        <TopicCard title="Guilt & Memory" description="Elias and Silas must face the secrets they have run from: failures, self-destruction, and unprocessed grief." />
                        <TopicCard title="The Keeper's Ledger" description="A supernatural ledger that records not money, but the spiritual debts and memories people carry." />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Publication Date</h5>
                        <p className="text-white/90 font-medium">Dec 10, 2025</p>
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
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                <BookOpen className="text-emerald-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{description}</p>
        </div>
    );
}
