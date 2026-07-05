import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand", weight: ["500", "600", "700"] });

export const metadata = {
  title: "Mella ✿ Links",
  description: "Ilustrator & sticker artist. Semua karya lucu Mella di satu tempat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${quicksand.variable} antialiased`}>{children}</body>
    </html>
  );
}
