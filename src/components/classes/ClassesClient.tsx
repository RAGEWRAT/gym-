"use client";

import Image from "next/image";
import { useState } from "react";
import { Share2 } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

type ClassType = "strength" | "hiit" | "yoga" | "cardio";

const typeColors: Record<ClassType, string> = {
  strength: "bg-amber-500/25 text-amber-200 border-amber-500/40",
  hiit: "bg-brandRed/25 text-red-100 border-brandRed/40",
  yoga: "bg-emerald-500/20 text-emerald-100 border-emerald-500/40",
  cardio: "bg-sky-500/20 text-sky-100 border-sky-500/40",
};

type Slot = { time: string; name: string; trainer: string; duration: string; type: ClassType };

const timetable: Record<(typeof days)[number], Slot[]> = {
  Monday: [
    { time: "06:00", name: "Strength Lab", trainer: "Arjun S.", duration: "60m", type: "strength" },
    { time: "07:30", name: "HIIT Forge", trainer: "Rahul V.", duration: "45m", type: "hiit" },
    { time: "18:00", name: "Mobility Flow", trainer: "Sanya M.", duration: "50m", type: "yoga" },
  ],
  Tuesday: [
    { time: "06:30", name: "Cardio Engine", trainer: "Rahul V.", duration: "40m", type: "cardio" },
    { time: "19:00", name: "Power Hour", trainer: "Arjun S.", duration: "60m", type: "strength" },
  ],
  Wednesday: [
    { time: "07:00", name: "HIIT Forge", trainer: "Rahul V.", duration: "45m", type: "hiit" },
    { time: "18:30", name: "Yoga Reset", trainer: "Sanya M.", duration: "55m", type: "yoga" },
  ],
  Thursday: [
    { time: "06:00", name: "Strength Lab", trainer: "Arjun S.", duration: "60m", type: "strength" },
    { time: "17:30", name: "Spin & Core", trainer: "Rahul V.", duration: "45m", type: "cardio" },
  ],
  Friday: [
    { time: "07:00", name: "Power Hour", trainer: "Arjun S.", duration: "60m", type: "strength" },
    { time: "18:00", name: "HIIT Forge", trainer: "Rahul V.", duration: "45m", type: "hiit" },
  ],
  Saturday: [
    { time: "08:00", name: "Team Conditioning", trainer: "Rahul V.", duration: "50m", type: "hiit" },
    { time: "09:30", name: "Mobility Flow", trainer: "Sanya M.", duration: "50m", type: "yoga" },
  ],
  Sunday: [
    { time: "09:00", name: "Active Recovery", trainer: "Sanya M.", duration: "45m", type: "yoga" },
    { time: "10:30", name: "Open Gym Block", trainer: "Floor", duration: "120m", type: "strength" },
  ],
};

const classCards = [
  {
    name: "Power Hour",
    trainer: "Arjun Sharma",
    duration: "60 min",
    difficulty: "Intermediate",
    type: "strength" as ClassType,
    description: "Barbell-focused strength blocks with coaching on technique and progression.",
  },
  {
    name: "HIIT Forge",
    trainer: "Rahul Verma",
    duration: "45 min",
    difficulty: "Advanced",
    type: "hiit" as ClassType,
    description: "Intervals built to spike output while keeping movement quality high.",
  },
  {
    name: "Mobility Flow",
    trainer: "Sanya Malhotra",
    duration: "50 min",
    difficulty: "All levels",
    type: "yoga" as ClassType,
    description: "Joint prep, breath work, and flows that complement heavy training days.",
  },
];

const trainers = [
  {
    name: "Arjun Sharma",
    photo: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=600&auto=format&fit=crop",
    specs: ["Strength", "Powerlifting"],
    certs: ["NSCA-CSCS"],
    ig: "https://instagram.com",
  },
  {
    name: "Sanya Malhotra",
    photo: "https://images.unsplash.com/photo-1518611012118-2960c8badce4?q=80&w=600&auto=format&fit=crop",
    specs: ["Yoga", "Mobility"],
    certs: ["RYT-500"],
    ig: "https://instagram.com",
  },
  {
    name: "Rahul Verma",
    photo: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
    specs: ["HIIT", "Conditioning"],
    certs: ["ACE-CPT"],
    ig: "https://instagram.com",
  },
];

const timeSlots = ["06:00", "07:00", "08:00", "09:00", "17:00", "18:00", "19:00"];

export default function ClassesClient() {
  const [dayIndex, setDayIndex] = useState(0);
  const day = days[dayIndex];
  const dayClasses = timetable[day] ?? [];

  return (
    <div className="bg-navy text-offwhite pb-24">
      <section className="pt-28 pb-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-4">CLASSES & TRAINERS</h1>
        <p className="text-gray-400 max-w-2xl">
          Weekly timetable, class details, and coaches. Book a spot via WhatsApp — we&apos;ll confirm your slot.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-6">
        <h2 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-3">Filter by day</h2>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {days.map((d, i) => (
            <button
              key={d}
              type="button"
              onClick={() => setDayIndex(i)}
              className={`shrink-0 px-4 py-2 rounded-md text-sm font-bold ${
                i === dayIndex ? "bg-brandRed text-white" : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {d.slice(0, 3)}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-16 overflow-x-auto">
        <div className="min-w-[720px] border border-white/10 rounded-lg overflow-hidden bg-nearblack">
          <div className="grid grid-cols-8 bg-navy/80 text-xs font-bold uppercase tracking-wider border-b border-white/10">
            <div className="p-3 text-gray-500">Time</div>
            {days.map((d) => (
              <div key={d} className={`p-3 text-center ${d === day ? "text-brandRed" : "text-gray-400"}`}>
                {d.slice(0, 3)}
              </div>
            ))}
          </div>
          {timeSlots.map((slot) => (
            <div key={slot} className="grid grid-cols-8 border-b border-white/5 text-sm">
              <div className="p-3 text-gray-500 font-mono text-xs">{slot}</div>
              {days.map((d) => {
                const list = timetable[d].filter((c) => c.time === slot);
                return (
                  <div key={d + slot} className="p-2 min-h-[52px] border-l border-white/5">
                    {list.map((c) => (
                      <div
                        key={c.name}
                        className={`mb-1 rounded px-2 py-1 text-[10px] font-bold border ${typeColors[c.type]}`}
                      >
                        <div>{c.name}</div>
                        <div className="opacity-80 font-normal">{c.trainer}</div>
                        <div className="opacity-70">{c.duration}</div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-black mb-6">
          Today on <span className="text-brandRed">{day}</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {dayClasses.length === 0 ? (
            <p className="text-gray-500 text-sm">No listed classes this day — open gym available.</p>
          ) : (
            dayClasses.map((c) => (
              <div
                key={c.name + c.time}
                className={`inline-flex flex-col rounded-lg border px-4 py-3 ${typeColors[c.type]}`}
              >
                <span className="text-xs font-mono opacity-80">{c.time}</span>
                <span className="font-bold">{c.name}</span>
                <span className="text-xs opacity-90">{c.trainer}</span>
                <span className="text-xs opacity-75">{c.duration}</span>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-black mb-8">Class details</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {classCards.map((c) => (
            <article
              key={c.name}
              className="bg-nearblack border border-white/10 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className={`text-[10px] font-black uppercase px-2 py-1 rounded border ${typeColors[c.type]}`}>
                {c.type}
              </span>
              <h3 className="text-xl font-bold mt-4 mb-1">{c.name}</h3>
              <p className="text-sm text-gray-400 mb-2">
                {c.trainer} · {c.duration}
              </p>
              <p className="text-xs text-brandRed font-bold uppercase mb-3">{c.difficulty}</p>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{c.description}</p>
              <a
                href={whatsappHref(`Hi! I'd like to book ${c.name} with ${c.trainer}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center rounded-md bg-brandRed py-2 text-sm font-bold hover:bg-brandRed/90"
              >
                Book
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-black mb-8">Trainers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((t) => (
            <article
              key={t.name}
              className="bg-nearblack border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 w-full">
                <Image src={t.photo} alt={t.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold uppercase">{t.name}</h3>
                <p className="text-sm text-brandRed mt-1">{t.specs.join(" · ")}</p>
                <p className="text-xs text-gray-500 mt-3">{t.certs.join(" · ")}</p>
                <div className="flex items-center gap-3 mt-4">
                  <a
                    href={t.ig}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-white/15 rounded hover:text-brandRed"
                    aria-label="Social profile"
                  >
                    <Share2 size={18} />
                  </a>
                </div>
                <a
                  href={whatsappHref(`Hi IronForge! I'd like to book with ${t.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full justify-center rounded-md border border-white/20 py-2 text-sm font-bold hover:bg-white/10"
                >
                  Book With {t.name.split(" ")[0]}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
