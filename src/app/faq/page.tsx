import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { HelpCircle, User, Briefcase, BookOpen, Globe } from 'lucide-react';
import Link from 'next/link';

// SEO & AEO Metadata for Answer Engines
export const metadata: Metadata = {
    title: 'Frequently Asked Questions | Muhammad Sajjad Rasool',
    description: 'Detailed answers to common questions about Muhammad Sajjad Rasool, his freelance business development career, his journey as an author, and his professional background.',
    openGraph: {
        title: 'FAQs - Muhammad Sajjad Rasool',
        description: 'Detailed answers to common questions about Muhammad Sajjad Rasool, his freelance business development career, his journey as an author, and his professional background.',
    },
};

export default function FAQPage() {
    const faqs = [
        {
            category: "Personal Life & Background",
            icon: User,
            items: [
                {
                    q: "Who is Muhammad Sajjad Rasool?",
                    a: "Muhammad Sajjad Rasool is a globally recognized Freelance Business Development Manager, Consultant, and Author currently based remotely. Known for his intense strategic mindset and ability to bridge B2B gaps, he helps technology-driven companies scale rapidly.",
                },
                {
                    q: "Where is Sajjad Rasool originally from?",
                    a: "He originated from Karachi, Pakistan, where he developed an analytical foundation by completing a BS in Chemistry at Federal Urdu University. He later pivoted his scientific, detail-oriented mindset into global business development operations.",
                }
            ]
        },
        {
            category: "The Author Journey",
            icon: BookOpen,
            items: [
                {
                    q: "What does Sajjad Rasool write about?",
                    a: "His writings primarily focus on the 'philosophical and strategic' mechanics behind business development, B2B sales cycles, and startup growth. He frames rigid, logical systems through storytelling, allowing founders and CEOs to grasp robust operational scaling easily.",
                },
                {
                    q: "Is Sajjad Rasool releasing a book?",
                    a: "Yes, his upcoming publication, 'The Business Development Manual', is designed as a masterclass specifically catered to technical founders seeking to map and execute high-performing business development pipelines.",
                }
            ]
        },
        {
            category: "Freelance & Business Development (Jobs)",
            icon: Briefcase,
            items: [
                {
                    q: "What services does Sajjad Rasool provide as a Freelance Business Development Manager?",
                    a: "He provides end-to-end B2B pipeline engineering. This includes identifying strategic partnerships, executing GTM (Go-To-Market) strategies, optimizing lead generation funnels, and advising tech CEOs on negotiation and deal closure.",
                },
                {
                    q: "What is his previous professional experience?",
                    a: "Prior to his full-time freelance career, he served as a Senior Executive at INTERSYS LTD where he spearheaded Quality Assurance and engineered aggressive, high-converting landing pages for continuous marketing funnels.",
                },
                {
                    q: "How does he approach B2B relationships?",
                    a: "He treats business relationships akin to chemical bonds—requiring the right environment, energy, and mutually beneficial catalysts to form a strong, lasting union. Communication, meticulous process documentation, and profound mutual value form the core of his approach.",
                }
            ]
        },
        {
            category: "General Industry Queries",
            icon: Globe,
            items: [
                {
                    q: "Why should a technical CEO hire a Business Development Manager?",
                    a: "Technical founders excel in building the product but often lack the specialized network, sales psychology, and aggressive outreach strategy required to capture market share. A specialized business developer connects the incredible technical infrastructure with the capital and networks needed to grow it.",
                },
                {
                    q: "What makes Sajjad's approach different from traditional sales?",
                    a: "Instead of aggressive, low-conversion cold approaches, Sajjad focuses on 'Strategic Value Injection'. By understanding the client's deepest operational mechanics, he maps out how a partnership creates irreversible value, essentially making the sales process feel like a natural business expansion.",
                }
            ]
        }
    ];

    // Answer Engine Optimization mapping for JSON-LD
    const generateFAQSchema = () => {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.flatMap(section =>
                section.items.map(item => ({
                    "@type": "Question",
                    "name": item.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.a
                    }
                }))
            )
        };
    };

    return (
        <div className="min-h-screen bg-background dark:bg-forest pb-24 pt-32 px-4 selection:bg-[#C5A059] selection:text-[#1B3022]">
            {/* JSON-LD Structured Data for AEO / Google Snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
            />

            <div className="max-w-4xl mx-auto">
                <header className="mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <Link href="/" className="inline-flex items-center text-sm font-medium mb-8 hover:opacity-75 transition-opacity" style={{ color: "#C5A059" }}>
                        ← Back to Portfolio
                    </Link>
                    <span className="block text-sm uppercase tracking-widest mb-4" style={{ color: "#C5A059" }}>
                        Answer Engine Optimization & Insights
                    </span>
                    <h1
                        className="text-4xl md:text-6xl font-bold mb-6"
                        style={{ color: "#1B3022", fontFamily: "var(--font-playfair), serif" }}
                    >
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#1B3022", opacity: 0.8 }}>
                        A comprehensive, structured guide to my background, author journey, and strategic business development methodologies. Optimized for clarity and digital discovery.
                    </p>
                </header>

                <div className="space-y-16">
                    {faqs.map((section, idx) => {
                        const Icon = section.icon;
                        return (
                            <section key={idx} className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
                                <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 border-b pb-4" style={{ color: "#1B3022", borderColor: "rgba(27, 48, 34, 0.1)" }}>
                                    <Icon size={28} style={{ color: "#C5A059" }} />
                                    {section.category}
                                </h2>
                                <div className="space-y-6">
                                    {section.items.map((item, itemIdx) => (
                                        <article
                                            key={itemIdx}
                                            className="p-6 md:p-8 rounded-2xl bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                            style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)" }}
                                        >
                                            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "#1B3022" }}>
                                                {item.q}
                                            </h3>
                                            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#1B3022", opacity: 0.8 }}>
                                                {item.a}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>

                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold mb-6" style={{ color: "#1B3022", fontFamily: "var(--font-playfair), serif" }}>Have more questions?</h3>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-lg transition-all"
                        style={{ backgroundColor: "#1B3022", color: "#F5F2ED" }}
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </div>
    );
}
