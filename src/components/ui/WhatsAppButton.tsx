"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg",
        "hover:scale-110 transition-transform flex items-center gap-2 text-white"
      )}
    >
      <MessageCircle size={28} />
      <span className="font-bold">CHAT WITH US</span>
    </a>
  );
}
