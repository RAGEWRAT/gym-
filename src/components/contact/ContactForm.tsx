"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validation";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    setStatus("idle");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json().catch(() => null);
    if (res.ok && json?.success) {
      setStatus("ok");
      reset();
    } else {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {status === "ok" ? (
        <div
          role="status"
          className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100"
        >
          Thanks — we&apos;ve received your message and will get back to you shortly.
        </div>
      ) : null}
      {status === "err" ? (
        <div className="rounded-md border border-brandRed/40 bg-brandRed/10 px-4 py-3 text-sm text-red-100">
          Something went wrong. Please try again or message us on WhatsApp.
        </div>
      ) : null}

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Name</label>
        <input
          className="w-full min-h-[48px] rounded-md bg-nearblack border border-white/15 px-4 py-3 text-offwhite focus:outline-none focus:ring-2 focus:ring-brandRed"
          {...register("name")}
        />
        {errors.name ? <p className="text-brandRed text-xs mt-1">{errors.name.message}</p> : null}
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Email</label>
        <input
          type="email"
          className="w-full min-h-[48px] rounded-md bg-nearblack border border-white/15 px-4 py-3 text-offwhite focus:outline-none focus:ring-2 focus:ring-brandRed"
          {...register("email")}
        />
        {errors.email ? <p className="text-brandRed text-xs mt-1">{errors.email.message}</p> : null}
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Phone</label>
        <input
          className="w-full min-h-[48px] rounded-md bg-nearblack border border-white/15 px-4 py-3 text-offwhite focus:outline-none focus:ring-2 focus:ring-brandRed"
          {...register("phone")}
        />
        {errors.phone ? <p className="text-brandRed text-xs mt-1">{errors.phone.message}</p> : null}
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Message</label>
        <textarea
          rows={5}
          className="w-full rounded-md bg-nearblack border border-white/15 px-4 py-3 text-offwhite focus:outline-none focus:ring-2 focus:ring-brandRed resize-y min-h-[120px]"
          {...register("message")}
        />
        {errors.message ? <p className="text-brandRed text-xs mt-1">{errors.message.message}</p> : null}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[52px] rounded-md bg-brandRed py-3 font-bold hover:bg-brandRed/90 disabled:opacity-50"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
