/** Normalize to digits only for wa.me */
export function normalizePhoneDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

/**
 * Build a WhatsApp click-to-chat URL for a given phone (with country code, digits only)
 * and optional pre-filled message.
 */
export function buildWALink(phone: string, message?: string): string {
  const n = normalizePhoneDigits(phone);
  const base = `https://wa.me/${n}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

export function getWhatsAppNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "911234567890";
  return normalizePhoneDigits(raw);
}

/** Default gym number + optional message */
export function whatsappHref(message?: string): string {
  return buildWALink(getWhatsAppNumber(), message);
}

export function getGenericMessage(): string {
  return "Hi IronForge! I'd like to know more about the gym, classes, and memberships.";
}

export function getHeroTrialMessage(): string {
  return "Hi IronForge! I'd like to book a free trial. What's the next available slot?";
}

export function getBasicPlanMessage(): string {
  return "Hi IronForge! I'm interested in the Basic membership plan. Can you share details and pricing?";
}

export function getProPlanMessage(): string {
  return "Hi IronForge! I'm interested in the Pro membership (all-day access + PT + classes). How do I get started?";
}

export function getElitePlanMessage(): string {
  return "Hi IronForge! I'd like information about the Elite membership — unlimited PT, nutrition, and priority booking.";
}

export function getTrainerBookingMessage(trainerName: string, specialization?: string): string {
  const spec = specialization?.trim() ? ` (${specialization})` : "";
  return `Hi IronForge! I'd like to book a session with ${trainerName}${spec}. Please share availability.`;
}

export function getPostBookingMessage(service: string): string {
  const s = service?.trim() || "my request";
  return `Hi IronForge! I just submitted a website booking for "${s}". Please confirm my slot when you can. Thanks!`;
}

export function getDayPassMessage(): string {
  return "Hi IronForge! I'd like a Day Pass for a single visit. How do I pay and what are today's hours?";
}
