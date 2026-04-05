"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { getGenericMessage, whatsappHref } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref(getGenericMessage())}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed z-50 bg-[#25D366] rounded-full shadow-lg",
        "hover:scale-105 transition-transform flex items-center gap-2 text-white",
        "min-h-[52px] min-w-[52px] p-3 md:px-4 md:py-3",
        "bottom-[6.5rem] right-4 md:bottom-6 md:right-6",
        "max-sm:max-w-[calc(100vw-2rem)]"
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="shrink-0" />
      <span className="font-bold text-sm sm:text-base pr-1 hidden sm:inline">CHAT WITH US</span>
    </a>
  );
}
