import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "Yellow Room Number Three by Sajjad Rasool",
    description: "A chilling blend of Gothic Horror and Psychological Suspense — the walls remember what the doctors made them forget.",
    keywords: ["Yellow Room Number Three", "Sajjad Rasool", "gothic horror", "psychological suspense", "sanatorium", "dark fiction", "feminist horror"],
    alternates: { canonical: "https://sajjad.escritura.site/books/yellow-room-number-three" },
    openGraph: {
        title: "Yellow Room Number Three by Sajjad Rasool",
        description: "A chilling blend of Gothic Horror and Psychological Suspense — the walls remember what the doctors made them forget.",
        url: "https://sajjad.escritura.site/books/yellow-room-number-three",
        type: "book" as const,
        images: [{ url: "/books/yellow-room-number-three.jpg", width: 600, height: 900, alt: "Yellow Room Number Three Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "Yellow Room Number Three by Sajjad Rasool",
        description: "Gothic horror meets psychological suspense in a haunting sanatorium.",
        images: ["/books/yellow-room-number-three.jpg"],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-yellow-500/30 font-sans tracking-tight">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-700 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                    <div className="space-y-4">
                        <h4 className="text-yellow-400 font-medium tracking-[0.2em] uppercase text-sm">Fiction • Gothic Horror • Free Ebook</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            Yellow Room <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Number Three</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            The walls remember what the doctors made them forget.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=Yellow+Room+Number+Three+Sajjad+Rasool"
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart size={18} />
                                Get Free on Lulu
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <div className="text-white/50 text-sm flex flex-col font-light">
                            <span>Ebook / EPUB</span>
                            <span>Gothic Psychological Horror</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/yellow-room-number-three.jpg" spineTitle="YELLOW ROOM NUMBER THREE" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-yellow-400/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;What if the quiet room you were confined to wasn&apos;t empty, but an archive of suffering?&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            For Eleanor, the stark, sickly yellow walls of her room at the Blackwood Sanatorium are more than just a surface—they are a witness. Diagnosed and dismissed by the very institution meant to help her, Eleanor is desperate for certainty in a world that has deemed her unreliable.
                        </p>
                        <p>
                            But when she presses her hand to the unsettling paint, she feels a strange pulse. The wall is warm. It is alive. The voices of the forgotten women—Margaret, Alice, Helen—are trapped within the paint, and Eleanor is the only one who can hear their testimony.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">Perfect For Fans Of</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="Gothic Horror" description="A chilling and atmospheric blend of Gothic Horror with psychological suspense set in a haunting sanatorium." />
                        <TopicCard title="Institutional Horror" description="The terror of being unheard and the power of finding a voice — even when that voice whispers from beyond the grave." />
                        <TopicCard title="Feminist Dark Fiction" description="Inspired by The Yellow Wallpaper and the works of Shirley Jackson — a story of silenced women finding their voice." />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Publication Date</h5>
                        <p className="text-white/90 font-medium">Dec 11, 2025</p>
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
            <div className="w-12 h-12 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6 border border-yellow-400/20">
                <BookOpen className="text-yellow-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{description}</p>
        </div>
    );
}
