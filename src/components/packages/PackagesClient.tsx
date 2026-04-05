"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/Button";
import {
  buildWALink,
  getWhatsAppNumber,
  getBasicPlanMessage,
  getProPlanMessage,
  getElitePlanMessage,
  getDayPassMessage,
} from "@/lib/whatsapp";

export default function PackagesClient() {
  const plans = useMemo(() => {
    const n = getWhatsAppNumber();
    return [
      {
        name: "Basic",
        price: "₹1,500",
        period: "/ mo",
        blurb: "Gym access, locker, limited hours",
        href: buildWALink(n, getBasicPlanMessage()),
        popular: false,
      },
      {
        name: "Pro",
        price: "₹2,500",
        period: "/ mo",
        blurb: "All-day access, 2 PT/month, group classes",
        href: buildWALink(n, getProPlanMessage()),
        popular: true,
      },
      {
        name: "Elite",
        price: "₹5,000",
        period: "/ mo",
        blurb: "Unlimited PT, nutrition, priority booking",
        href: buildWALink(n, getElitePlanMessage()),
        popular: false,
      },
      {
        name: "Day Pass",
        price: "₹399",
        period: "/ day",
        blurb: "Single-day full access",
        href: buildWALink(n, getDayPassMessage()),
        popular: false,
      },
    ];
  }, []);

  const rows: { feature: string; basic: string; pro: string; elite: string; day: string }[] = [
    { feature: "Gym floor access", basic: "Peak + off-peak", pro: "All day", elite: "All day + priority", day: "1 day" },
    { feature: "Locker", basic: "✓", pro: "✓", elite: "Dedicated", day: "Day locker" },
    { feature: "Group classes", basic: "—", pro: "✓", elite: "✓", day: "1 class" },
    { feature: "Personal training", basic: "Add-on", pro: "2 / month", elite: "Unlimited", day: "—" },
    { feature: "Nutrition coaching", basic: "—", pro: "—", elite: "✓", day: "—" },
  ];

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
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-[48px] items-center justify-center rounded-md py-2.5 text-sm font-bold text-center ${
                p.popular ? "bg-white text-navy hover:bg-offwhite" : "bg-brandRed text-white hover:bg-brandRed/90"
              }`}
            >
              WhatsApp Us
            </a>
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

      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] bg-nearblack/95 border-t border-white/10 backdrop-blur">
        <Button className="w-full min-h-[48px]" size="lg" href="/book">
          Get Started
        </Button>
      </div>
      <div className="h-24 md:hidden" aria-hidden />
    </>
  );
}
