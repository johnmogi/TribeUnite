import { Metadata } from "next";

const siteMetadata: Metadata = {
  title: "TRIBES UNITE — Wake Up",
  description: "A browser-first deckbuilder. Unite the tribes. Walk the maze. Wake up.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "TRIBES UNITE — Wake Up",
    description: "A browser-first deckbuilder. Unite the tribes. Walk the maze. Wake up.",
    url: "https://your-domain.example",
    siteName: "TRIBES UNITE",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Tribes Unite" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRIBES UNITE — Wake Up",
    description: "A browser-first deckbuilder. Unite the tribes. Walk the maze. Wake up.",
    images: ["/og.jpg"],
  },
};

export default siteMetadata;
