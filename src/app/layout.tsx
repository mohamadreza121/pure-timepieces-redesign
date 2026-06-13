import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Luxury Watches Aurora Ontario`,
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Buy, sell, trade, and source authenticated luxury watches from Pure Timepieces Co. in Aurora, Ontario.",
  keywords: [
    "Pure Timepieces",
    "luxury watches Aurora",
    "Rolex Aurora",
    "sell luxury watch Ontario",
    "trade luxury watches",
    "authenticated watches Canada"
  ],
  openGraph: {
    title: `${siteConfig.name} | Luxury Watches Aurora Ontario`,
    description: "Rare luxury watches, privately sourced and fully authenticated.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: ["/opengraph-image.png"],
    locale: "en_CA",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <SmoothScrollProvider>
          <CursorGlow />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
