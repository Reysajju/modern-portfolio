import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "Vision in Red by Sajjad Rasool — Children of the Olive Book 1",
    description: "The children of Falestinam draw the world as they see it. Now, they are all drawing the same terrifying thing.",
    keywords: ["Vision in Red", "Sajjad Rasool", "Children of the Olive", "supernatural horror", "Palestine", "occupation", "dark fiction", "political horror"],
    alternates: { canonical: "https://sajjad.escritura.site/books/vision-in-red" },
    openGraph: {
        title: "Vision in Red by Sajjad Rasool — Children of the Olive Book 1",
        description: "The children draw the world as they see it. Now, they are all drawing the same terrifying thing.",
        url: "https://sajjad.escritura.site/books/vision-in-red",
        type: "book" as const,
        images: [{ url: "/books/vision-in-red.jpg", width: 600, height: 900, alt: "Vision in Red Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "Vision in Red — Children of the Olive Book 1",
        description: "The children draw the world as they see it. Now, they are all drawing the same terrifying thing.",
        images: ["/books/vision-in-red.jpg"],
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
                        <h4 className="text-red-600 font-medium tracking-[0.2em] uppercase text-sm">Children of the Olive • Book 1 • Free Ebook</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            Vision <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">in Red</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            The children draw the world as they see it. Now, they are all drawing the same terrifying thing.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=Vision+in+Red+Sajjad+Rasool"
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
                            <span>Supernatural Horror</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/vision-in-red.jpg" spineTitle="VISION IN RED" />
                </div>
            </main>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-red-600/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            &quot;In a land where memory is war, forgetting is the fuel for the monster.&quot;
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            Amal is a schoolteacher trying to keep life normal in the occupied city of Falestinam. But when she finds her daughter, Noor, drawing a faceless soldier with eyes of violent, rust-colored red, Amal dismisses it as childhood anxiety — until she discovers that every single child in her class is drawing the exact same figure.
                        </p>
                        <p>
                            The children call them the Hollow Ones — monstrous, unblinking figures that only they can see. They appear at checkpoints, destroyed homes, and forgotten massacre sites. The Hollow Ones are not ghosts. They are an ancient, growing evil born from collective, unmourned silence.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">The Horror Unfolds</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard title="The Hollow Ones" description="Monstrous, unblinking figures with massive circles of red crayon where their eyes should be." />
                        <TopicCard title="The Archive of Dust" description="To stop the entity, they must plunge into the deepest part of the past and confront erasure." />
                        <TopicCard title="Collective Memory" description="When memory is war and forgetting feeds the monster, only the children can see the truth." />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Publication Date</h5>
                        <p className="text-white/90 font-medium">Dec 30, 2025</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Series</h5>
                        <p className="text-white/90 font-medium">Children of the Olive #1</p>
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
