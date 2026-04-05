import { Trophy, Users, Dumbbell, Calendar } from "lucide-react";

const stats = [
  { icon: <Users size={24} />, label: "Active Members", value: "500+" },
  { icon: <Trophy size={24} />, label: "Years Experience", value: "10+" },
  { icon: <Dumbbell size={24} />, label: "Modern Equipment", value: "100+" },
  { icon: <Calendar size={24} />, label: "Days a Week", value: "24/7" },
];

export default function StatsBar() {
  return (
    <section className="bg-brandRed py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-white flex flex-col items-center text-center">
              <div className="mb-2 opacity-80">{stat.icon}</div>
              <div className="text-3xl font-black font-heading">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}