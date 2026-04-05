"use client";

import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/whatsapp";

const plans = [
  {
    name: "Basic",
    price: "₹1,500",
    period: "/ mo",
    blurb: "Gym access, locker, limited hours",
    cta: { label: "WhatsApp Us", href: whatsappHref("Hi IronForge! I'm interested in the Basic membership.") },
    external: true,
  },
  {
    name: "Pro",
    price: "₹2,500",
    period: "/ mo",
    blurb: "All-day access, 2 PT/month, group classes",
    popular: true,
    cta: { label: "Book Now", href: "/book" },
    external: false,
  },
  {
    name: "Elite",
    price: "₹5,000",
    period: "/ mo",
    blurb: "Unlimited PT, nutrition, priority booking",
    cta: { label: "Contact Us", href: whatsappHref("Hi IronForge! I'd like Elite membership details.") },
    external: true,
  },
  {
    name: "Day Pass",
    price: "₹399",
    period: "/ day",
    blurb: "Single-day full access",
    cta: { label: "WhatsApp Us", href: whatsappHref("Hi IronForge! I'd like a Day Pass.") },
    external: true,
  },
];

const rows: { feature: string; basic: string; pro: string; elite: string; day: string }[] = [
  { feature: "Gym floor access", basic: "Peak + off-peak", pro: "All day", elite: "All day + priority", day: "1 day" },
  { feature: "Locker", basic: "✓", pro: "✓", elite: "Dedicated", day: "Day locker" },
  { feature: "Group classes", basic: "—", pro: "✓", elite: "✓", day: "1 class" },
  { feature: "Personal training", basic: "Add-on", pro: "2 / month", elite: "Unlimited", day: "—" },
  { feature: "Nutrition coaching", basic: "—", pro: "—", elite: "✓", day: "—" },
];

export default function PackagesClient() {
  return (
    <>
      <section className="pt-28 pb-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-offwhite">PACKAGES</h1>
        <p className="text-gray-400 max-w-2xl">
          Pick a tier that matches your schedule and how much coaching you want. Compare features below.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-8 grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-lg border p-6 bg-nearblack transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
              p.popular ? "border-brandRed shadow-lg shadow-brandRed/20 scale-[1.02] z-10" : "border-white/10"
            }`}
          >
            {p.popular ? (
              <span className="absolute -top-3 right-3 bg-brandRed text-white text-[10px] font-black uppercase px-2 py-1 rounded rotate-3">
                Most Popular
              </span>
            ) : null}
            <h2 className="text-lg font-black uppercase">{p.name}</h2>
            <p className="text-sm text-gray-400 mt-2 flex-grow">{p.blurb}</p>
            <div className="my-6">
              <span className="text-3xl font-black">{p.price}</span>
              <span className="text-gray-500 text-sm ml-1">{p.period}</span>
            </div>
            {p.external ? (
              <a
                href={p.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex justify-center rounded-md py-2.5 text-sm font-bold text-center ${
                  p.popular ? "bg-white text-navy hover:bg-offwhite" : "bg-brandRed text-white hover:bg-brandRed/90"
                }`}
              >
                {p.cta.label}
              </a>
            ) : (
              <Button
                className="w-full !bg-white !text-navy hover:!bg-offwhite !border-0"
                size="md"
                href={p.cta.href}
              >
                {p.cta.label}
              </Button>
            )}
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 overflow-x-auto">
        <h2 className="text-2xl font-black mb-6 text-offwhite">Compare</h2>
        <table className="w-full min-w-[640px] text-sm border border-white/10 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-navy text-left">
              <th className="p-4 text-gray-400 font-bold">Feature</th>
              <th className="p-4 font-black">Basic</th>
              <th className="p-4 font-black text-brandRed">Pro</th>
              <th className="p-4 font-black">Elite</th>
              <th className="p-4 font-black">Day Pass</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature} className="border-t border-white/10 bg-nearblack/80">
                <td className="p-4 text-gray-300">{r.feature}</td>
                <td className="p-4">{r.basic}</td>
                <td className="p-4 bg-brandRed/10">{r.pro}</td>
                <td className="p-4">{r.elite}</td>
                <td className="p-4">{r.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-4 bg-nearblack/95 border-t border-white/10 backdrop-blur">
        <Button className="w-full" size="lg" href="/book">
          Get Started
        </Button>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </>
  );
}
