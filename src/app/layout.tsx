import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kanishka Singh — Interior Designer",
  description:
    "Portfolio of Kanishka Singh, Interior Designer with 10+ years of experience in residential and commercial spaces.",
  openGraph: {
    title: "Kanishka Singh — Interior Designer",
    description: "10+ years crafting functional, beautiful spaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream-50 text-charcoal-900 antialiased">{children}</body>
    </html>
  );
}

