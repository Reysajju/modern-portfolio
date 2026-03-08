import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, Quote, FileText, Users, EyeOff } from "lucide-react";

export const metadata = {
    title: "The System As Suspect: Jeffery Epstain’s Leaked Files by Sajjad Rasool",
    description: "The terrifying distillation of 3.5 million pages and the administrative erasure of Jeffrey Epstein.",
    keywords: ["The System As Suspect", "Sajjad Rasool", "Jeffrey Epstein", "investigative", "leaked files"],
    alternates: { canonical: "https://sajjad.escritura.site/books/the-system-as-suspect" },
    openGraph: {
        title: "The System As Suspect by Sajjad Rasool",
        description: "The terrifying distillation of 3.5 million pages and the administrative erasure of Jeffrey Epstein.",
        url: "https://sajjad.escritura.site/books/the-system-as-suspect",
        type: "book" as const,
        images: [{ url: "/books/the-system-as-suspect.png", width: 600, height: 900, alt: "The System As Suspect Book Cover" }],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-500/30 font-sans tracking-tight">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/books" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Library
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                    <div className="space-y-4">
                        <h4 className="text-red-500 font-medium tracking-[0.2em] uppercase text-sm">Investigative Non-Fiction • Free PDF</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            The System <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">As Suspect</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            Jeffery Epstain’s Leaked Files
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=The+System+As+Suspect+Sajjad+Rasool"
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart size={18} />
                                Get Free on Lulu
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <div className="text-white/50 text-sm flex flex-col font-light">
                            <span>Ebook / PDF</span>
                            <span>Investigative Non-Fiction</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/the-system-as-suspect.png" spineTitle="THE SYSTEM AS SUSPECT" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-red-500/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;The architecture of control was built to erase you, but the documents remain.&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose text-center">
                        <p>
                            When a system is entirely dependent upon the silence of its participants, the sudden introduction of transparency is not recognized as journalism. It is recognized as an act of war.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">The Evidence Exposed</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard
                            icon={FileText}
                            title="3.5 Million Pages"
                            description="Documenting the terrifying distillation of the avalanche of leaked files, from financial ledgers to flight logs."
                        />
                        <TopicCard
                            icon={EyeOff}
                            title="The Missing 15"
                            description="Highlighting the administrative erasure and the powerful figures shielded by decades of institutional silence."
                        />
                        <TopicCard
                            icon={Users}
                            title="The Network Exposed"
                            description="Detailing comprehensive unredacted FBI 302s, non-prosecution agreements, and internal DOJ documents."
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Publication</h5>
                        <p className="text-white/90 font-medium">Recent Release</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Category</h5>
                        <p className="text-white/90 font-medium">Investigative Report</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Language</h5>
                        <p className="text-white/90 font-medium">English</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Format</h5>
                        <p className="text-white/90 font-medium">PDF</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TopicCard({ title, description, icon: Icon }: { title: string, description: string, icon: any }) {
    return (
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/5 transition-all hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
                <Icon className="text-red-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{description}</p>
        </div>
    );
}
