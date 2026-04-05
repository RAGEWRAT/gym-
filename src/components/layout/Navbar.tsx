"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/facilities", label: "Facilities" },
  { href: "/classes", label: "Classes" },
  { href: "/packages", label: "Packages" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-navy/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-xl font-black text-offwhite tracking-tight">
          IRONFORGE
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Button key={l.href} variant="ghost" size="sm" href={l.href}>
              {l.label}
            </Button>
          ))}
          <Button size="sm" href="/book" className="ml-2">
            Book
          </Button>
        </nav>

        <button
          type="button"
          className="lg:hidden p-2 text-offwhite rounded-md hover:bg-white/10"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-white/10 bg-navy px-4 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-2 text-offwhite font-medium hover:text-brandRed"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Button className="w-full mt-2" href="/book" onClick={() => setOpen(false)}>
            Book
          </Button>
        </div>
      ) : null}
    </header>
  );
}
