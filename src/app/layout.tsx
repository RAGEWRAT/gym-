import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

// Configure Fonts
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["700", "800"], 
  variable: "--font-montserrat" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "IRONFORGE GYM | Forge Your Legacy",
  description: "Premium fitness destination with elite equipment and expert coaching.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${montserrat.variable} bg-navy text-offwhite antialiased`}>
        <Navbar />
        {/* Main padding-top ensures content isn't hidden under the sticky navbar */}
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}