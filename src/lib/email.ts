import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function fromAddress() {
  return process.env.RESEND_FROM_EMAIL ?? "IronForge Gym <onboarding@resend.dev>";
}

function adminEmail() {
  return process.env.ADMIN_EMAIL ?? "";
}

export async function sendBookingAdminEmail(payload: {
  name: string;
  phone: string;
  email?: string | null;
  service: string;
  preferred_date: string;
  preferred_time: string;
  notes?: string | null;
}) {
  const to = adminEmail();
  if (!to) {
    console.warn("[email] ADMIN_EMAIL not set; skipping admin notification");
    return { sent: false as const };
  }
  const resend = getResend();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set; skipping admin notification");
    return { sent: false as const };
  }

  const lines = [
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    payload.email ? `Email: ${payload.email}` : null,
    `Service: ${payload.service}`,
    `Preferred date: ${payload.preferred_date}`,
    `Preferred time: ${payload.preferred_time}`,
    payload.notes ? `Notes: ${payload.notes}` : null,
  ].filter(Boolean);

  const { error } = await resend.emails.send({
    from: fromAddress(),
    to,
    subject: `New Booking Request — ${payload.service} — ${payload.name}`,
    text: lines.join("\n"),
    html: `<pre style="font-family:system-ui,sans-serif">${lines.join("\n")}</pre>`,
  });

  if (error) {
    console.error("[email] Resend admin booking error:", error);
    return { sent: false as const };
  }
  return { sent: true as const };
}

export async function sendBookingUserConfirmation(toEmail: string, name: string, service: string) {
  const resend = getResend();
  if (!resend) return { sent: false as const };

  const { error } = await resend.emails.send({
    from: fromAddress(),
    to: toEmail,
    subject: `IronForge Gym — we received your ${service} request`,
    text: `Hi ${name},\n\nThanks for booking with IronForge Gym. We've received your request for "${service}" and will confirm your slot shortly.\n\n— IronForge Gym`,
    html: `<p>Hi ${name},</p><p>Thanks for booking with IronForge Gym. We've received your request for <strong>${service}</strong> and will confirm your slot shortly.</p><p>— IronForge Gym</p>`,
  });

  if (error) {
    console.error("[email] Resend user confirmation error:", error);
    return { sent: false as const };
  }
  return { sent: true as const };
}

export async function sendContactAdminEmail(payload: { name: string; email: string; phone: string; message: string }) {
  const to = adminEmail();
  if (!to) {
    console.warn("[email] ADMIN_EMAIL not set; skipping contact notification");
    return { sent: false as const };
  }
  const resend = getResend();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set; skipping contact notification");
    return { sent: false as const };
  }

  const text = [`From: ${payload.name}`, `Email: ${payload.email}`, `Phone: ${payload.phone}`, "", payload.message].join(
    "\n"
  );

  const { error } = await resend.emails.send({
    from: fromAddress(),
    to,
    subject: `New contact — ${payload.name}`,
    text,
    html: `<pre style="font-family:system-ui,sans-serif">${text.replace(/</g, "&lt;")}</pre>`,
  });

  if (error) {
    console.error("[email] Resend contact error:", error);
    return { sent: false as const };
  }
  return { sent: true as const };
}
