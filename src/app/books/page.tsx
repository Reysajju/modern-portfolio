import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, ExternalLink, ShoppingCart } from "lucide-react";

export const metadata = {
    title: "Books by Sajjad Rasool — Complete Library",
    description: "Browse all 26 books by Sajjad Rasool. Free ebooks spanning science fiction, horror, thriller, and more. Available on Lulu.",
    keywords: ["Sajjad Rasool", "books", "ebooks", "science fiction", "horror", "thriller", "Spiral Arms", "Children of the Olive", "Lulu"],
    alternates: { canonical: "https://sajjad.escritura.site/books" },
    openGraph: {
        title: "Books by Sajjad Rasool — Complete Library",
        description: "Browse all 26 books by Sajjad Rasool. Free ebooks spanning science fiction, horror, thriller, and more.",
        url: "https://sajjad.escritura.site/books",
        type: "website" as const,
    },
};

// ==========================================
// BOOK DATA
// ==========================================

interface Book {
    slug: string;
    title: string;
    description: string;
    genre: string;
    series?: string;
    seriesNum?: number;
    price: string;
    format: string;
    coverColor: string; // tailwind accent color class
    luluUrl: string;
}

const books: Book[] = [
    // === THE SPIRAL ARMS SERIES (6 books) ===
    {
        slug: "the-shell",
        title: "The Shell",
        description: "The planet isn't dead. It's holding its breath.",
        genre: "Science Fiction",
        series: "The Spiral Arms",
        seriesNum: 1,
        price: "Free",
        format: "EPUB",
        coverColor: "cyan",
        luluUrl: "https://www.lulu.com/search?page=1&q=The+Shell+Sajjad+Rasool",
    },
    {
        slug: "the-memory",
        title: "The Memory",
        description: "What if the only way to save humanity was to surrender your individual soul?",
        genre: "Philosophical Sci-Fi",
        series: "The Spiral Arms",
        seriesNum: 2,
        price: "Free",
        format: "EPUB",
        coverColor: "cyan",
        luluUrl: "https://www.lulu.com/search?page=1&q=The+Memory+Sajjad+Rasool",
    },
    {
        slug: "the-choice",
        title: "The Choice",
        description: "The hardest war is against the self you could have been.",
        genre: "Philosophical Sci-Fi",
        series: "The Spiral Arms",
        seriesNum: 3,
        price: "Free",
        format: "EPUB",
        coverColor: "cyan",
        luluUrl: "https://www.lulu.com/search?page=1&q=The+Choice+Sajjad+Rasool",
    },
    {
        slug: "the-bridge",
        title: "The Bridge",
        description: "The golden web was a gift. It has become a cage.",
        genre: "Space Opera",
        series: "The Spiral Arms",
        seriesNum: 4,
        price: "Free",
        format: "EPUB",
        coverColor: "cyan",
        luluUrl: "https://www.lulu.com/shop/sajjad-rasool/the-bridge/ebook/product-m25jkkk.html",
    },
    {
        slug: "the-seed",
        title: "The Seed",
        description: "The penultimate chapter — stakes shift from discovery to survival.",
        genre: "Space Opera",
        series: "The Spiral Arms",
        seriesNum: 5,
        price: "Free",
        format: "EPUB",
        coverColor: "teal",
        luluUrl: "https://www.lulu.com/search?page=1&q=The+Seed+Sajjad+Rasool",
    },
    {
        slug: "the-spiral",
        title: "The Spiral",
        description: "The war for the galaxy was never fought in the void. It was fought in the mind.",
        genre: "Epic Sci-Fi Finale",
        series: "The Spiral Arms",
        seriesNum: 6,
        price: "Free",
        format: "EPUB",
        coverColor: "teal",
        luluUrl: "https://www.lulu.com/search?page=1&q=The+Spiral+Sajjad+Rasool",
    },

    // === CHILDREN OF THE OLIVE (5 books) ===
    {
        slug: "vision-in-red",
        title: "Vision in Red",
        description: "The children draw the world as they see it. Now, they are all drawing the same terrifying thing.",
        genre: "Supernatural Horror",
        series: "Children of the Olive",
        seriesNum: 1,
        price: "Free",
        format: "EPUB",
        coverColor: "red",
        luluUrl: "https://www.lulu.com/shop/sajjad-rasool/vision-in-red/ebook/product-gjpng6k.html",
    },
    {
        slug: "unblinking",
        title: "Unblinking",
        description: "You can't forget what was never real. But what if the reality you knew is being systematically erased?",
        genre: "Psychological Horror",
        series: "Children of the Olive",
        seriesNum: 2,
        price: "Free",
        format: "EPUB",
        coverColor: "red",
        luluUrl: "https://www.lulu.com/search?page=1&q=Unblinking+Sajjad+Rasool",
    },
    {
        slug: "the-bitter-well",
        title: "The Bitter Well",
        description: "The water remembers what the land was forced to forget.",
        genre: "Dystopian Thriller",
        series: "Children of the Olive",
        seriesNum: 3,
        price: "Free",
        format: "EPUB",
        coverColor: "red",
        luluUrl: "https://www.lulu.com/search?page=1&q=The+Bitter+Well+Sajjad+Rasool",
    },
    {
        slug: "naming-the-night",
        title: "Naming the Night",
        description: "To name the night is to refuse its silence.",
        genre: "Dark Political Fiction",
        series: "Children of the Olive",
        seriesNum: 4,
        price: "Free",
        format: "EPUB",
        coverColor: "red",
        luluUrl: "https://www.lulu.com/search?page=1&q=Naming+the+Night+Sajjad+Rasool",
    },
    {
        slug: "hollow-ground",
        title: "Hollow Ground",
        description: "The earth is hollow. The memory is not.",
        genre: "Literary Gothic Fiction",
        series: "Children of the Olive",
        seriesNum: 5,
        price: "Free",
        format: "EPUB",
        coverColor: "red",
        luluUrl: "https://www.lulu.com/search?page=1&q=Hollow+Ground+Sajjad+Rasool",
    },

    // === THE FINAL FIRMWARE (3 books) ===
    {
        slug: "the-gardeners-of-aethelgard",
        title: "The Gardeners of Aethelgard",
        description: "They didn't come to conquer. They came to cultivate. And humanity was never asked to consent.",
        genre: "Bio-Sci-Fi",
        series: "The Final Firmware",
        seriesNum: 1,
        price: "Free",
        format: "EPUB",
        coverColor: "lime",
        luluUrl: "https://www.lulu.com/search?page=1&q=Gardeners+Aethelgard+Sajjad+Rasool",
    },
    {
        slug: "the-ghost-frequency",
        title: "The Ghost Frequency",
        description: "The Isos came to prune. They found a seed that refuses to die.",
        genre: "Biological Sci-Fi Thriller",
        series: "The Final Firmware",
        seriesNum: 2,
        price: "Free",
        format: "EPUB",
        coverColor: "violet",
        luluUrl: "https://www.lulu.com/search?page=1&q=The+Ghost+Frequency+Sajjad+Rasool",
    },
    {
        slug: "the-correction-protocol",
        title: "The Correction Protocol",
        description: "The Gardeners have arrived. And Earth is the weed.",
        genre: "Biological Sci-Fi Thriller",
        series: "The Final Firmware",
        seriesNum: 3,
        price: "Free",
        format: "EPUB",
        coverColor: "violet",
        luluUrl: "https://www.lulu.com/search?page=1&q=The+Correction+Protocol+Sajjad+Rasool",
    },

    // === STANDALONE BOOKS ===
    {
        slug: "the-peshawar-protocol",
        title: "The Peshawar Protocol",
        description: "The Da Vinci Code meets The Three-Body Problem — a gritty, high-stakes sci-fi thriller.",
        genre: "Military Sci-Fi / Techno-Thriller",
        price: "Free",
        format: "EPUB",
        coverColor: "amber",
        luluUrl: "https://www.lulu.com/search?page=1&q=Peshawar+Protocol+Sajjad+Rasool",
    },
    {
        slug: "the-disconnect",
        title: "The Disconnect",
        description: "A forensic investigation into the machinery that has hijacked American democracy.",
        genre: "Political Non-Fiction",
        price: "Free",
        format: "EPUB",
        coverColor: "blue",
        luluUrl: "https://www.lulu.com/search?page=1&q=The+Disconnect+Sajjad+Rasool",
    },
    {
        slug: "his-last-day",
        title: "His Last Day",
        description: "A raw, investigative account of the final day of a life caught between history and tragedy.",
        genre: "Historical Nonfiction",
        price: "Free",
        format: "EPUB",
        coverColor: "amber",
        luluUrl: "https://www.lulu.com/search?page=1&q=His+Last+Day+Sajjad+Rasool",
    },
    {
        slug: "china-ate-red-apple",
        title: "China Ate Red Apple",
        description: "The True Cost of the iPhone and How a Capitalist Titan Became an Unwitting Architect of Its Rival's Rise.",
        genre: "Business & Economics",
        price: "$13.74",
        format: "Paperback",
        coverColor: "red",
        luluUrl: "https://www.lulu.com/search?page=1&q=China+Ate+Red+Apple+Sajjad+Rasool",
    },
    {
        slug: "the-face-you-know",
        title: "The Face You Know",
        description: "The most dangerous person in your life is the one who already has your trust.",
        genre: "Psychological Thriller",
        price: "Free",
        format: "PDF",
        coverColor: "orange",
        luluUrl: "https://www.lulu.com/search?page=1&q=The+Face+You+Know+Sajjad+Rasool",
    },
    {
        slug: "the-guilt-eater",
        title: "The Guilt Eater",
        description: "A profound psychological thriller exploring the darkest corners of the human heart.",
        genre: "Psychological Thriller",
        price: "Free",
        format: "PDF",
        coverColor: "zinc",
        luluUrl: "https://www.lulu.com/search?page=1&q=The+Guilt+Eater+Sajjad+Rasool",
    },
    {
        slug: "the-vault-of-amontillado-lane",
        title: "The Vault of Amontillado Lane",
        description: "A masterful work of Gothic horror — memory, trauma, and sins that refuse to stay buried.",
        genre: "Gothic Horror",
        price: "Free",
        format: "EPUB",
        coverColor: "stone",
        luluUrl: "https://www.lulu.com/search?page=1&q=Vault+Amontillado+Lane+Sajjad+Rasool",
    },
    {
        slug: "yellow-room-number-three",
        title: "Yellow Room Number Three",
        description: "The walls remember what the doctors made them forget.",
        genre: "Gothic Psychological Horror",
        price: "Free",
        format: "EPUB",
        coverColor: "yellow",
        luluUrl: "https://www.lulu.com/search?page=1&q=Yellow+Room+Number+Three+Sajjad+Rasool",
    },
    {
        slug: "the-whispering-ledger",
        title: "The Whispering Ledger",
        description: "The books in Lenore's library don't just contain stories. They contain souls.",
        genre: "Cosmic Horror",
        price: "Free",
        format: "EPUB",
        coverColor: "purple",
        luluUrl: "https://www.lulu.com/search?page=1&q=The+Whispering+Ledger+Sajjad+Rasool",
    },
    {
        slug: "carmillas-orchard",
        title: "Carmilla's Orchard",
        description: "A lush, sensual reimagining of the vampire mythos rooted in forbidden desire.",
        genre: "Erotic Gothic Novel",
        price: "Free",
        format: "EPUB",
        coverColor: "rose",
        luluUrl: "https://www.lulu.com/search?page=1&q=Carmilla+Orchard+Sajjad+Rasool",
    },
    {
        slug: "beneath-the-willowbridge",
        title: "Beneath the Willowbridge",
        description: "Some places remember. Some places hunger.",
        genre: "Supernatural Horror",
        price: "Free",
        format: "EPUB",
        coverColor: "emerald",
        luluUrl: "https://www.lulu.com/search?page=1&q=Beneath+The+Willowbridge+Sajjad+Rasool",
    },
    {
        slug: "the-weiner-effect",
        title: "The Weiner Effect",
        description: "A darkly humorous literary fiction about perception, power, and catastrophic consequences.",
        genre: "Literary Fiction",
        price: "Free",
        format: "EPUB",
        coverColor: "yellow",
        luluUrl: "https://www.lulu.com/search?page=1&q=The+Weiner+Effect+Sajjad+Rasool",
    },
];

// Group books by series
const seriesGroups = [
    {
        name: "The Spiral Arms",
        tagline: "A six-book space opera saga exploring consciousness, identity, and the post-human future",
        color: "from-cyan-500 to-cyan-800",
        badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
        books: books.filter((b) => b.series === "The Spiral Arms").sort((a, b) => (a.seriesNum ?? 0) - (b.seriesNum ?? 0)),
    },
    {
        name: "Children of the Olive",
        tagline: "A haunting five-part saga of occupation, memory, and supernatural resistance",
        color: "from-red-600 to-red-900",
        badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
        books: books.filter((b) => b.series === "Children of the Olive").sort((a, b) => (a.seriesNum ?? 0) - (b.seriesNum ?? 0)),
    },
    {
        name: "The Final Firmware",
        tagline: "A bio-sci-fi trilogy about alien gardeners and humanity's fight for survival",
        color: "from-violet-500 to-violet-900",
        badgeColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
        books: books.filter((b) => b.series === "The Final Firmware").sort((a, b) => (a.seriesNum ?? 0) - (b.seriesNum ?? 0)),
    },
];

const standaloneBooks = books.filter((b) => !b.series);

// ==========================================
// SOCIAL LINKS
// ==========================================
const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/sajjjad.rasool", icon: "M12 2.2c2.7 0 3 0 4.1.1 1 .1 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .4.4.7 1 1 1.6.2.6.4 1.3.5 2.3 0 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.4.4-1 .7-1.6 1-.6.2-1.3.4-2.3.5-1.1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1-.1-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.4-.4-.7-1-1-1.6-.2-.6-.4-1.3-.5-2.3C2.2 15 2.2 14.7 2.2 12s0-3 .1-4.1c.1-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.4-.4 1-.7 1.6-1C6 3.1 6.7 2.9 7.7 2.8c1.1 0 1.4-.1 4.1-.1h.2zm0 1.8c-2.7 0-3 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.3-.1 4s0 3 .1 4c0 .9.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.8.3 1.7.3 1 .1 1.3.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.8.3-1.7.1-1 .1-1.3.1-4s0-3-.1-4c0-.9-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.8-.3-1.7-.3-1-.1-1.3-.1-4-.1zM12 6.9a5.1 5.1 0 110 10.2 5.1 5.1 0 010-10.2zm0 1.8a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zm5.3-2a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" },
    { name: "Facebook", href: "https://www.facebook.com/sajjjadrasool", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
    { name: "X", href: "https://x.com/sajjadrasools4", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-sajjad-rasool-47ba63185", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
];

// ==========================================
// COMPONENTS
// ==========================================

function BookCard({ book }: { book: Book }) {
    const isFree = book.price === "Free";

    return (
        <Link href={`/books/${book.slug}`} className="group block">
            <div className="relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                {/* Cover Image */}
                <div className="relative aspect-[2/3] overflow-hidden">
                    <Image
                        src={`/books/${book.slug}.jpg`}
                        alt={`${book.title} Book Cover`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* Price badge */}
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${isFree ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-amber-500/20 text-amber-400 border border-amber-500/30"}`}>
                        {book.price}
                    </div>

                    {/* Series badge */}
                    {book.series && (
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md bg-white/10 text-white/80 border border-white/20">
                            {book.series} #{book.seriesNum}
                        </div>
                    )}

                    {/* Title overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-white mb-1 tracking-tight leading-tight">{book.title}</h3>
                        <p className="text-white/60 text-xs line-clamp-2 leading-relaxed">{book.description}</p>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 flex items-center justify-between border-t border-white/5">
                    <span className="text-xs text-white/50 font-medium">{book.genre}</span>
                    <span className="text-xs text-white/40">{book.format}</span>
                </div>
            </div>
        </Link>
    );
}

function SeriesSection({ name, tagline, color, badgeColor, seriesBooks }: {
    name: string;
    tagline: string;
    color: string;
    badgeColor: string;
    seriesBooks: Book[];
}) {
    return (
        <section className="mb-20">
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                    <div className={`h-px flex-1 bg-gradient-to-r ${color} opacity-30`} />
                    <span className={`px-4 py-1.5 rounded-full text-xs font-semibold border uppercase tracking-widest ${badgeColor}`}>
                        {name}
                    </span>
                    <div className={`h-px flex-1 bg-gradient-to-l ${color} opacity-30`} />
                </div>
                <p className="text-center text-white/50 text-sm font-light max-w-2xl mx-auto">{tagline}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {seriesBooks.map((book) => (
                    <BookCard key={book.slug} book={book} />
                ))}
            </div>
        </section>
    );
}

// ==========================================
// PAGE
// ==========================================

export default function BooksPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 font-sans tracking-tight">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/10">
                <Link href="/" className="text-white/60 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>
                <span className="font-semibold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-cyan-800 uppercase">
                    Sajjad Rasool
                </span>
            </nav>

            {/* Hero Header */}
            <header className="pt-32 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm mb-8">
                    <BookOpen size={16} className="text-cyan-500" />
                    <span>26 Books Available</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-6">
                    The{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-300">
                        Library
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                    Science fiction, horror, thrillers, and more. Most books are <strong className="text-emerald-400 font-semibold">free</strong> ebooks available on Lulu.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                    <a
                        href="https://www.lulu.com/search?contributor=Sajjad+Rasool&sortBy=PRODUCT_SALES_90_DAYS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                    >
                        <ShoppingCart size={18} />
                        Browse All on Lulu
                        <ExternalLink size={14} />
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center group"
                            aria-label={social.name}
                        >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/50 group-hover:fill-white transition-colors">
                                <path d={social.icon} />
                            </svg>
                        </a>
                    ))}
                </div>
            </header>

            {/* Book Catalog */}
            <main className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-24">
                {/* Series Sections */}
                {seriesGroups.map((group) => (
                    <SeriesSection
                        key={group.name}
                        name={group.name}
                        tagline={group.tagline}
                        color={group.color}
                        badgeColor={group.badgeColor}
                        seriesBooks={group.books}
                    />
                ))}

                {/* Standalone Books */}
                <section className="mb-20">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                            <span className="px-4 py-1.5 rounded-full text-xs font-semibold border uppercase tracking-widest bg-white/5 text-white/60 border-white/20">
                                Standalone Works
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent" />
                        </div>
                        <p className="text-center text-white/50 text-sm font-light max-w-2xl mx-auto">
                            Thrillers, horror, non-fiction, and literary fiction — each a complete story
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {standaloneBooks.map((book) => (
                            <BookCard key={book.slug} book={book} />
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 px-6 md:px-12 lg:px-24 bg-zinc-950">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-white/40 text-sm">
                            © {new Date().getFullYear()} Sajjad Rasool · All rights reserved
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/30 hover:text-white/70 transition-colors text-sm"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
}
