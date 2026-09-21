import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand", weight: ["500", "600", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Mella","jobTitle":"Ilustrator & Sticker Artist","url":"https://linkinbio-mellow.vercel.app","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://linkinbio-mellow.vercel.app"),
  title: "Mella — Ilustrator & Sticker Artist",
  description: "Link in bio ilustrator & sticker artist Mella: semua karya lucu dan menggemaskan dalam satu tempat.",
  applicationName: "Mella",
  keywords: ["link in bio", "ilustrator", "sticker artist", "illustration", "karya seni"],
  authors: [{ name: "Mella" }],
  creator: "Mella",
  publisher: "Mella",
  alternates: { canonical: "https://linkinbio-mellow.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-mellow.vercel.app",
    siteName: "Mella",
    title: "Mella — Ilustrator & Sticker Artist",
    description: "Link in bio ilustrator & sticker artist Mella: semua karya lucu dan menggemaskan dalam satu tempat.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Mella — Ilustrator & Sticker Artist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mella — Ilustrator & Sticker Artist",
    description: "Link in bio ilustrator & sticker artist Mella: semua karya lucu dan menggemaskan dalam satu tempat.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${quicksand.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
