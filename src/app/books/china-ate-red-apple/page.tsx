import Link from "next/link";
import { BookMockup } from "@/components/BookMockup";
import { ArrowLeft, ShoppingCart, BookOpen, Quote } from "lucide-react";

export const metadata = {
    title: "China Ate Red Apple by Sajjad Rasool",
    description: "The True Cost of the iPhone and How a Capitalist Titan Became an Unwitting Architect of Its Rival’s Rise.",
    keywords: ["China Ate Red Apple", "Sajjad Rasool", "Apple iPhone", "business book", "economics", "technology", "capitalism", "Tim Cook", "supply chain"],
    alternates: { canonical: "https://sajjad.escritura.site/books/china-ate-red-apple" },
    openGraph: {
        title: "China Ate Red Apple by Sajjad Rasool",
        description: "The True Cost of the iPhone and How a Capitalist Titan Became an Unwitting Architect of Its Rival's Rise.",
        url: "https://sajjad.escritura.site/books/china-ate-red-apple",
        type: "book" as const,
        images: [{ url: "/books/china-ate-red-apple.jpg", width: 600, height: 900, alt: "China Ate Red Apple Book Cover" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "China Ate Red Apple by Sajjad Rasool",
        description: "The True Cost of the iPhone and How a Capitalist Titan Became an Unwitting Architect of Its Rival's Rise.",
        images: ["/books/china-ate-red-apple.jpg"],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-500/30 font-sans tracking-tight">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            {/* Hero Section */}
            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                    <div className="space-y-4">
                        <h4 className="text-red-500 font-medium tracking-[0.2em] uppercase text-sm">Business & Economics • $13.74</h4>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                            China Ate <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Red Apple</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                            The True Cost of the iPhone and How a Capitalist Titan Became an Unwitting Architect of Its Rival’s Rise.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://www.lulu.com/search?page=1&q=China+Ate+Red+Apple+Sajjad+Rasool"
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart size={18} />
                                Buy Now on Lulu
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <div className="text-white/50 text-sm flex flex-col font-light">
                            <span>Paperback / 155 Pages</span>
                            <span>Usually printed in 3-5 days</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
                    <BookMockup coverSrc="/books/china-ate-red-apple.jpg" spineTitle="CHINA ATE RED APPLE" />
                </div>
            </main>

            {/* Summary Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Quote className="mx-auto text-red-500/50" size={48} />
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            "The iPhone in your pocket is more than a device—it is a $55 billion geopolitical entanglement."
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg md:prose-xl mx-auto space-y-6 text-white/70 font-light leading-loose">
                        <p>
                            Beneath the sleek, "Designed in California" facade lies a complex and unsettling reality: Apple Inc., a beacon of American ingenuity, has become inextricably linked to the Chinese Communist Party (CCP). In a desperate pivot from near-bankruptcy, Apple built its multi-trillion-dollar empire on the back of China's unparalleled manufacturing might, unwittingly becoming a critical pillar of its biggest rival’s economic and technological power.
                        </p>
                        <p>
                            This isn't just a business story. It's a geopolitical thriller, a cautionary tale of compromise, and a vital investigation into how the pursuit of profit has placed one of the world's most powerful companies in a precarious bind.
                        </p>
                        <p>
                            <strong>"China Ate Red Apple"</strong> by Sajjad Rasool peels back the layers of this codependent relationship, revealing how Apple has been definitively "captured," making it complicit in—and vulnerable to—Beijing’s ambitions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Topics Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white/90">Uncover the Uncomfortable Truths</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TopicCard
                            title="The Faustian Bargain"
                            description="How the strategic rise of Foxconn and massive American investment inadvertently built the manufacturing infrastructure that now fuels China's global dominance."
                        />
                        <TopicCard
                            title="The Ethical Quagmire"
                            description="The devastating human cost of the Made in China label, including the Foxconn suicides, notorious factory labor practices, and credible reports of Uyghur forced labor."
                        />
                        <TopicCard
                            title="Compliance Over Principle"
                            description="How Apple systematically complied with Chinese censorship, removing apps like VPNs and storing Chinese user data on state-owned servers to protect market access."
                        />
                        <TopicCard
                            title="Geopolitical Hostage"
                            description="The immense risk of a conflict over Taiwan and how China can, at any moment, weaponize its control by revoking export licenses, crippling Apple’s global sales."
                        />
                        <TopicCard
                            title="The Great Escape?"
                            description="The complex, costly, and arduous challenges facing Apple as it attempts to de-risk its operations and diversify manufacturing to countries like India and Vietnam."
                        />
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Publication Date</h5>
                        <p className="text-white/90 font-medium">Oct 29, 2025</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">ISBN</h5>
                        <p className="text-white/90 font-medium">9781257078882</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Language</h5>
                        <p className="text-white/90 font-medium">English</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-white/40 uppercase tracking-widest text-xs">Dimensions</h5>
                        <p className="text-white/90 font-medium whitespace-nowrap">6 x 9 in (US Trade)</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TopicCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/5 transition-all hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
                <BookOpen className="text-red-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{description}</p>
        </div>
    );
}
