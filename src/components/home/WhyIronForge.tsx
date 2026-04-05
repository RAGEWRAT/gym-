import { Dumbbell, Clock, Trophy, UserCheck } from "lucide-react";

const features = [
  {
    title: "Expert Trainers",
    desc: "Certified coaches who program for your goals — strength, fat loss, or sport performance.",
    icon: UserCheck,
  },
  {
    title: "Modern Equipment",
    desc: "Cardio, free weights, machines, and functional zones maintained to competition standards.",
    icon: Dumbbell,
  },
  {
    title: "Flexible Hours",
    desc: "Early opens, late closes, and membership tiers that fit your schedule — not the other way around.",
    icon: Clock,
  },
  {
    title: "Proven Results",
    desc: "Progress tracking, check-ins, and programming built on what actually moves the needle.",
    icon: Trophy,
  },
];

export default function WhyIronForge() {
  return (
    <section id="about" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          WHY <span className="text-brandRed">IRONFORGE?</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Everything under one roof — coaching, community, and equipment — so you can focus on the work.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="p-8 bg-white/5 border border-white/10 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-brandRed/40 group"
            >
              <div className="w-12 h-12 rounded-md bg-brandRed/15 flex items-center justify-center text-brandRed mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                <Icon size={26} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">{title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
