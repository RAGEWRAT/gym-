export function getWhatsAppNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "911234567890";
  return raw.replace(/\D/g, "");
}

export function whatsappHref(message?: string): string {
  const num = getWhatsAppNumber();
  const base = `https://wa.me/${num}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}
