import type { Metadata } from "next";
import DemocracyTheaterPageClient from "./DemocracyTheaterPageClient";

export const metadata: Metadata = {
    title: "The Democracy Theater | Investigative Report by Sajjad Rasool",
    description:
        "An investigative report exposing the gap between democratic branding and concentrated power through historical, legal, and financial analysis.",
    keywords: [
        "The Democracy Theater",
        "Sajjad Rasool",
        "investigative report",
        "American democracy",
        "political power analysis",
    ],
    alternates: { canonical: "https://sajjadrasool.com/books/the-democracy-theater" },
    openGraph: {
        title: "The Democracy Theater by Sajjad Rasool",
        description:
            "A document-grounded investigation into the architecture of power, war incentives, and institutional continuity.",
        url: "https://sajjadrasool.com/books/the-democracy-theater",
        type: "book",
        images: [
            {
                url: "/books/the-democracy-theater.jpg",
                width: 600,
                height: 900,
                alt: "The Democracy Theater Book Cover",
            },
        ],
    },
};

export default function DemocracyTheaterPage() {
    return <DemocracyTheaterPageClient />;
}
