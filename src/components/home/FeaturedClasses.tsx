import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const classes = [
  {
    name: "Power Hour",
    duration: "60 min",
    difficulty: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "HIIT Forge",
    duration: "45 min",
    difficulty: "Advanced",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Mobility Flow",
    duration: "50 min",
    difficulty: "All levels",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
  },
];

function badgeClass(difficulty: string) {
  if (difficulty === "Advanced") return "bg-brandRed text-white";
  if (difficulty === "Intermediate") return "bg-amber-500/90 text-nearblack";
  return "bg-white/90 text-nearblack";
}

export default function FeaturedClasses() {
  return (
    <section className="py-24 bg-nearblack border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black">
              FEATURED <span className="text-brandRed">CLASSES</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl">
              High-energy sessions led by coaches who know how to push you safely.
            </p>
          </div>
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-brandRed font-bold hover:gap-3 transition-all"
          >
            View All Classes
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((c) => (
            <article
              key={c.name}
              className="group bg-navy border border-white/10 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-brandRed/30"
            >
              <div className="relative h-52 w-full">
                <Image src={c.image} alt={c.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                <span
                  className={`absolute top-3 right-3 text-xs font-black uppercase tracking-wider px-3 py-1 rounded ${badgeClass(
                    c.difficulty
                  )}`}
                >
                  {c.difficulty}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold uppercase mb-2">{c.name}</h3>
                <p className="text-sm text-gray-400">Duration · {c.duration}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
