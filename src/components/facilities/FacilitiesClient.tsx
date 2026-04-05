"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Category = "All" | "Cardio" | "Free Weights" | "Machines" | "Functional" | "Locker Rooms";

const tabs: Category[] = ["All", "Cardio", "Free Weights", "Machines", "Functional", "Locker Rooms"];

const facilities: {
  name: string;
  description: string;
  category: Exclude<Category, "All">;
  image: string;
}[] = [
  {
    name: "Cardio deck",
    description: "Treadmills, bikes, rowers, and SkiErgs with sprint lanes for intervals.",
    category: "Cardio",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Power racks",
    description: "Competition benches, calibrated plates, and pull-up stations.",
    category: "Free Weights",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Selectorized circuit",
    description: "Isolation and accessory work with machines from major OEM partners.",
    category: "Machines",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Functional turf",
    description: "Sleds, kettlebells, battle ropes, and space for movement-based sessions.",
    category: "Functional",
    image: "https://images.unsplash.com/photo-1518611012118-2960c8badce4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Locker rooms",
    description: "Private showers, day lockers, and vanity areas refreshed daily.",
    category: "Locker Rooms",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Spin & studio",
    description: "Dedicated room for coached classes and low-light cardio sessions.",
    category: "Cardio",
    image: "https://images.unsplash.com/photo-1599058945522-28dba598b8ff?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FacilitiesClient() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(
    () => (active === "All" ? facilities : facilities.filter((f) => f.category === active)),
    [active]
  );

  return (
    <>
      <section className="relative h-[45vh] min-h-[280px] pt-20">
        <Image
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-black text-center text-offwhite">FACILITIES</h1>
        </div>
      </section>

      <div className="bg-navy border-b border-white/10 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              className={`shrink-0 px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors ${
                active === t ? "bg-brandRed text-white" : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <section className="py-16 bg-nearblack min-h-[40vh]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {filtered.map((f) => (
            <article
              key={f.name}
              className="bg-navy border border-white/10 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-52 w-full">
                <Image src={f.image} alt={f.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
              <div className="p-6">
                <p className="text-brandRed text-xs font-bold uppercase tracking-widest mb-2">{f.category}</p>
                <h2 className="text-xl font-bold uppercase mb-2">{f.name}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 bg-navy border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">Equipment partners</p>
          <div className="flex flex-wrap justify-center gap-6 text-offwhite/70 font-bold text-sm">
            {["Life Fitness", "Hammer Strength", "Concept2", "Rogue", "Technogym"].map((b) => (
              <span key={b} className="border border-white/15 px-4 py-2 rounded">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
