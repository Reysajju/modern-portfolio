import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "The Guilt Eater by Sajjad Rasool",
    description: "A profound psychological thriller exploring the darkest corners of the human heart — when silence becomes destruction.",
    keywords: ["The Guilt Eater", "Sajjad Rasool", "psychological thriller", "dark fiction", "mental health", "guilt", "family drama", "horror"],
    alternates: { canonical: "https://sajjad.escritura.site/books/the-guilt-eater" },
    openGraph: {
        title: "The Guilt Eater by Sajjad Rasool",
        description: "A profound psychological thriller exploring the darkest corners of the human heart — when silence becomes destruction.",
        url: "https://sajjad.escritura.site/books/the-guilt-eater",
        type: "book" as const,
        images: [{ url: "/books/the-guilt-eater.jpg", width: 600, height: 900, alt: "The Guilt Eater Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "The Guilt Eater by Sajjad Rasool",
        description: "A psychological thriller about silence becoming destruction.",
        images: ["/books/the-guilt-eater.jpg"],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-zinc-500/30 font-sans tracking-tight">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 to-zinc-600 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                    <div className="space-y-4">
                        <h4 className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-sm">Fiction • Psychological Thriller • Free Ebook</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            The Guilt <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500">Eater</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            The silence is not empty. It&apos;s waiting for you to break.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=The+Guilt+Eater+Sajjad+Rasool"
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(161,161,170,0.2)] hover:shadow-[0_0_30px_rgba(161,161,170,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart size={18} />
                                Get Free on Lulu
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <div className="text-white/50 text-sm flex flex-col font-light">
                            <span>Ebook / PDF</span>
                            <span>Psychological Thriller</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/the-guilt-eater.jpg" spineTitle="THE GUILT EATER" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-zinc-500/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;What happens when the silence you keep to protect yourself becomes the very thing destroying you?&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            For 214 days, Michael Harper has been drowning in a silence so profound it&apos;s become a physical presence. His crushing inner guilt has solidified into a malevolent, breathing entity — a psychological parasite that grows fat and heavy on his unspoken trauma, patiently waiting to consume him whole.
                        </p>
                        <p>
                            As the entity, the Guilt-Eater, begins to twist his reality and corrupt the only living thing he loves, his family makes a desperate attempt to reach him. Now, Michael faces an impossible choice: cling to isolation or risk confession, connection, and the possibility of healing.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">Into the Silence</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="The Weight of Silence" description="214 days of isolation — when silence becomes a physical entity that feeds on unspoken trauma." />
                        <TopicCard title="Psychological Horror" description="A malevolent entity lurks in the metallic gloom, growing fat on guilt and waiting to consume everything." />
                        <TopicCard title="Redemption & Healing" description="Can healing begin when you finally speak? The impossible choice between isolation and confession." />
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
                        <p className="text-white/90 font-medium">PDF</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TopicCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/5 transition-all hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-zinc-500/10 rounded-2xl flex items-center justify-center mb-6 border border-zinc-500/20">
                <BookOpen className="text-zinc-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{description}</p>
        </div>
    );
}
