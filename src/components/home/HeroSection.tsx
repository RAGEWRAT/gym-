"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BLUR_DATA_URL } from "@/lib/image-blur";
import { getHeroTrialMessage, whatsappHref } from "@/lib/whatsapp";

const HERO_SRC =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop";

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_SRC}
          alt="IronForge gym training floor with racks and equipment"
          fill
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 z-10 bg-black/75" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full py-12 xl:py-20 grid xl:grid-cols-2 gap-10 xl:gap-16 items-center">
        <div className="text-center xl:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black font-heading text-offwhite mb-6 max-w-5xl xl:max-w-none mx-auto xl:mx-0 leading-tight"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Where Strength Meets Performance
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl xl:text-2xl text-gray-300 max-w-2xl mx-auto xl:mx-0 mb-10 font-light"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Elite coaching, premium equipment, and a community built for progress. Train smarter, recover better, and
            unlock your next level at IronForge.
          </motion.p>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap xl:justify-start justify-center max-w-xl mx-auto xl:max-w-none xl:mx-0"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button size="lg" href="/book" className="w-full sm:w-auto min-h-[48px] justify-center">
              Book Free Trial
            </Button>
            <Button variant="secondary" size="lg" href="/packages" className="w-full sm:w-auto min-h-[48px] justify-center">
              Explore Packages
            </Button>
            <a
              href={whatsappHref(getHeroTrialMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 text-lg font-medium text-offwhite hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={22} className="text-[#25D366]" aria-hidden />
              WhatsApp us
            </a>
          </motion.div>
        </div>

        <div className="hidden xl:block relative h-[min(70vh,520px)] w-full rounded-xl overflow-hidden border border-white/15 shadow-2xl">
          <Image
            src={HERO_SRC}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 0px, 50vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
