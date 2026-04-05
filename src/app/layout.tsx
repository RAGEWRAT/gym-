import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getSiteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = getSiteUrl();
const gymPhone = process.env.NEXT_PUBLIC_GYM_PHONE ?? "+915122000000";
const siteDescription =
  "Premium strength training in Kanpur — expert coaches, modern equipment, flexible memberships, and group classes at IronForge Gym.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A2E",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IronForge Gym",
    template: "%s | IronForge Gym",
  },
  description: siteDescription,
  keywords: ["gym Kanpur", "IronForge", "personal training", "fitness", "strength gym"],
  authors: [{ name: "IronForge Gym" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "IronForge Gym",
    title: "IronForge Gym | Strength Meets Performance",
    description:
      "Train with expert coaches, premium equipment, and a focused community. Book a free trial or explore memberships.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "IronForge Gym" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IronForge Gym | Strength Meets Performance",
    description: "Premium fitness in Kanpur — coaching, classes, and memberships.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "IronForge Gym",
  url: siteUrl,
  telephone: gymPhone,
  description: siteDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Ironforge Lane, Civil Lines",
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "208001",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "07:00",
      closes: "21:00",
    },
  ],
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${montserrat.variable} bg-navy text-offwhite antialiased`}>
        <Script id="ld-json-healthclub" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
        <Navbar />
        <main className="min-h-screen pt-20 pb-24 md:pb-8">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
