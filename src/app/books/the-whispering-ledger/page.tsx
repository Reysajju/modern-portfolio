import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "The Whispering Ledger by Sajjad Rasool",
    description: "A haunting cosmic horror novella — The books in Lenore's library don't just contain stories. They contain souls.",
    keywords: ["The Whispering Ledger", "Sajjad Rasool", "cosmic horror", "dark fiction", "Lovecraftian", "library horror", "supernatural"],
    alternates: { canonical: "https://sajjad.escritura.site/books/the-whispering-ledger" },
    openGraph: {
        title: "The Whispering Ledger by Sajjad Rasool",
        description: "A haunting cosmic horror novella — The books in Lenore's library don't just contain stories. They contain souls.",
        url: "https://sajjad.escritura.site/books/the-whispering-ledger",
        type: "book" as const,
        images: [{ url: "/books/the-whispering-ledger.jpg", width: 600, height: 900, alt: "The Whispering Ledger Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "The Whispering Ledger by Sajjad Rasool",
        description: "A haunting cosmic horror novella about a library that contains souls.",
        images: ["/books/the-whispering-ledger.jpg"],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans tracking-tight">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-800 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                    <div className="space-y-4">
                        <h4 className="text-purple-500 font-medium tracking-[0.2em] uppercase text-sm">Fiction • Cosmic Horror • Free Ebook</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            The Whispering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Ledger</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            Every Account is Balanced. Every Soul is Due.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=The+Whispering+Ledger+Sajjad+Rasool"
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart size={18} />
                                Get Free on Lulu
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <div className="text-white/50 text-sm flex flex-col font-light">
                            <span>Ebook / EPUB</span>
                            <span>Cosmic Horror</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/the-whispering-ledger.jpg" spineTitle="THE WHISPERING LEDGER" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-purple-500/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;You cannot close the books on a force that lives in the margins.&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            Arthur Penhaligon is an accountant who only trusts the numbers. His order is his cage, and he is content to be trapped—until he inherits a cryptic, black-bound book with tarnished silver corners. It&apos;s not filled with figures, but with debts. It records not money, but spiritual collateral.
                        </p>
                        <p>
                            As the ink begins to spread, the Ledger promises Arthur relevance—a way to settle the unseen balance of his miserable life. But the price of relevance is a descent into a world where office fluorescent lights flicker over scenes of occult terror, where geometric shapes pulse with forbidden knowledge.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">Descend Into the Ledger</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="Occult Horror" description="Office fluorescent lights flicker over scenes of occult terror as geometric shapes pulse with forbidden knowledge." />
                        <TopicCard title="Corporate Dread" description="A chilling blend of cosmic horror served with a side of corporate dread—nightmares in the workplace." />
                        <TopicCard title="The Haunted Book" description="The Ledger is not just an object; it's a consciousness that needs a host, and it has chosen Arthur." />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Publication Date</h5>
                        <p className="text-white/90 font-medium">Dec 8, 2025</p>
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
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20">
                <BookOpen className="text-purple-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{description}</p>
        </div>
    );
}
