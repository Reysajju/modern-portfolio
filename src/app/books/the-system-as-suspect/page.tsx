import TSASPageClient from "./TSASPageClient";

export const metadata = {
    title: "The System As Suspect | Leaked Files Analysis",
    description: "The terrifying distillation of 3.5 million pages and the administrative erasure of Jeffrey Epstein.",
    keywords: ["The System As Suspect", "Sajjad Rasool", "Jeffrey Epstein", "investigative", "leaked files"],
    alternates: { canonical: "https://sajjadrasool.com/books/the-system-as-suspect" },
    openGraph: {
        title: "The System As Suspect by Sajjad Rasool",
        description: "The terrifying distillation of 3.5 million pages and the administrative erasure of Jeffrey Epstein.",
        url: "https://sajjadrasool.com/books/the-system-as-suspect",
        type: "book" as const,
        images: [{ url: "/books/the-system-as-suspect.png", width: 600, height: 900, alt: "The System As Suspect Book Cover" }],
    },
};

export default function BookPage() {
    return <TSASPageClient />;
}
