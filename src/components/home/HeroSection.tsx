"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="IronForge gym floor"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 z-10 bg-black/75" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-black font-heading text-offwhite mb-6 max-w-5xl mx-auto leading-tight"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Where Strength Meets Performance
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Elite coaching, premium equipment, and a community built for progress. Train smarter,
          recover better, and unlock your next level at IronForge.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button size="lg" href="/book">
            Book Free Trial
          </Button>
          <Button variant="secondary" size="lg" href="/packages">
            Explore Packages
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
