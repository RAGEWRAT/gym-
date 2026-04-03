"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-navy/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-xl font-black text-offwhite">
          IRONFORGE
        </Link>
        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="sm" href="#services">
            Services
          </Button>
          <Button variant="ghost" size="sm" href="#pricing">
            Pricing
          </Button>
          <Button size="sm" href="#contact">
            Join
          </Button>
        </nav>
      </div>
    </header>
  );
}
