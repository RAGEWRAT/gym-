"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { getPostBookingMessage, whatsappHref } from "@/lib/whatsapp";

type Props = { service: string };

export default function ThankYouClient({ service }: Props) {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 pt-24 pb-20 text-center bg-navy text-offwhite">
      <motion.div
        initial={reduce ? false : { scale: 0.6, opacity: 0 }}
        animate={reduce ? undefined : { scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mb-8"
      >
        <motion.svg
          viewBox="0 0 24 24"
          className="w-10 h-10 text-emerald-400"
          initial={reduce ? false : { pathLength: 0 }}
          animate={reduce ? undefined : { pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.path
            d="M5 13l4 4L19 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
      <motion.h1
        className="text-3xl md:text-4xl font-black mb-4"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        Your booking is received!
      </motion.h1>
      <p className="text-gray-400 max-w-md mb-10">
        Our team will confirm your slot shortly. Prefer WhatsApp? Tap below with your request pre-filled for{" "}
        <span className="text-offwhite font-medium">{service}</span>.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:justify-center">
        <a
          href={whatsappHref(getPostBookingMessage(service))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-bold text-white hover:opacity-90"
        >
          <MessageCircle size={20} />
          WhatsApp follow-up
        </a>
        <Button variant="secondary" size="lg" href="/" className="min-h-[48px] w-full sm:w-auto">
          Back to Home
        </Button>
      </div>
      <Link href="/classes" className="mt-8 text-sm text-gray-500 hover:text-brandRed">
        Browse classes while you wait →
      </Link>
    </div>
  );
}
