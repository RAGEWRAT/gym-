"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema, type BookInput } from "@/lib/validation";

const services = ["Free Trial", "Personal Training", "Group Class", "Gym Tour"] as const;

export default function BookForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<BookInput>({
    resolver: zodResolver(bookSchema),
    defaultValues: { email: "", notes: "", service: "Free Trial" },
  });

  async function onSubmit(data: BookInput) {
    const payload = {
      name: data.fullName,
      phone: data.phone,
      email: data.email?.trim() || undefined,
      service: data.service,
      preferred_date: data.preferredDate,
      preferred_time: data.preferredTime,
      notes: data.notes?.trim() || undefined,
    };
    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json().catch(() => null);
    if (res.ok && json?.success) {
      router.push(`/thank-you?service=${encodeURIComponent(data.service)}`);
      return;
    }
    const hint =
      json?.error === "Server configuration error"
        ? "Server missing Supabase credentials (check Vercel: SUPABASE_SERVICE_ROLE_KEY and NEXT_PUBLIC_SUPABASE_URL)."
        : json?.detail
          ? `${json.error ?? "Error"}: ${json.detail}`
          : json?.error === "Validation failed" && Array.isArray(json?.issues)
            ? json.issues.map((i: { message?: string }) => i.message).filter(Boolean).join(" · ") ||
              "Check all required fields."
            : json?.error || "Could not submit. Try again or WhatsApp us.";
    setError("root", { message: hint });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {errors.root ? (
        <p className="text-brandRed text-sm border border-brandRed/30 rounded-md px-3 py-2">{errors.root.message}</p>
      ) : null}

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
          Full name <span className="text-brandRed">*</span>
        </label>
        <input
          className="w-full min-h-[48px] rounded-md bg-nearblack border border-white/15 px-4 py-3 text-offwhite focus:outline-none focus:ring-2 focus:ring-brandRed"
          {...register("fullName")}
        />
        {errors.fullName ? <p className="text-brandRed text-xs mt-1">{errors.fullName.message}</p> : null}
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
          Phone <span className="text-brandRed">*</span>
        </label>
        <input
          className="w-full min-h-[48px] rounded-md bg-nearblack border border-white/15 px-4 py-3 text-offwhite focus:outline-none focus:ring-2 focus:ring-brandRed"
          {...register("phone")}
        />
        {errors.phone ? <p className="text-brandRed text-xs mt-1">{errors.phone.message}</p> : null}
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
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
          Service <span className="text-brandRed">*</span>
        </label>
        <select
          className="w-full min-h-[48px] rounded-md bg-nearblack border border-white/15 px-4 py-3 text-offwhite focus:outline-none focus:ring-2 focus:ring-brandRed"
          {...register("service")}
        >
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service ? <p className="text-brandRed text-xs mt-1">{errors.service.message}</p> : null}
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            Preferred date <span className="text-brandRed">*</span>
          </label>
          <input
            type="date"
            className="w-full min-h-[48px] rounded-md bg-nearblack border border-white/15 px-4 py-3 text-offwhite focus:outline-none focus:ring-2 focus:ring-brandRed"
            {...register("preferredDate")}
          />
          {errors.preferredDate ? (
            <p className="text-brandRed text-xs mt-1">{errors.preferredDate.message}</p>
          ) : null}
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            Preferred time <span className="text-brandRed">*</span>
          </label>
          <input
            type="time"
            className="w-full min-h-[48px] rounded-md bg-nearblack border border-white/15 px-4 py-3 text-offwhite focus:outline-none focus:ring-2 focus:ring-brandRed"
            {...register("preferredTime")}
          />
          {errors.preferredTime ? (
            <p className="text-brandRed text-xs mt-1">{errors.preferredTime.message}</p>
          ) : null}
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Notes</label>
        <textarea
          rows={4}
          className="w-full rounded-md bg-nearblack border border-white/15 px-4 py-3 text-offwhite focus:outline-none focus:ring-2 focus:ring-brandRed resize-y min-h-[120px]"
          {...register("notes")}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[52px] rounded-md bg-brandRed py-3 font-bold hover:bg-brandRed/90 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting…" : "Submit booking"}
      </button>
    </form>
  );
}
