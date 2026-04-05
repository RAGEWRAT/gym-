"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Users, Calendar, UserRound, Boxes } from "lucide-react";

const stats = [
  { icon: Users, label: "Members", value: 520, suffix: "+" },
  { icon: Calendar, label: "Years in Business", value: 12, suffix: "" },
  { icon: UserRound, label: "Trainers", value: 18, suffix: "" },
  { icon: Boxes, label: "Equipment", value: 100, suffix: "+" },
];

function useCountUp(target: number, durationMs: number, enabled: boolean) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let start: number | null = null;
    let raf = 0;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const t = Math.min((ts - start) / durationMs, 1);
      setN(Math.round(t * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled, target, durationMs]);

  return n;
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (inView) setArmed(true);
  }, [inView]);

  return (
    <section ref={ref} className="bg-brandRed/95 border-y border-black/10 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCell key={stat.label} stat={stat} enabled={armed} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCell({
  stat,
  enabled,
}: {
  stat: (typeof stats)[number];
  enabled: boolean;
}) {
  const count = useCountUp(stat.value, 1400, enabled);
  const Icon = stat.icon;
  return (
    <div className="text-white flex flex-col items-center text-center">
      <div className="mb-2 opacity-90">
        <Icon size={24} strokeWidth={2} />
      </div>
      <div className="text-3xl md:text-4xl font-black font-heading tabular-nums">
        {count}
        {stat.suffix}
      </div>
      <div className="text-[11px] md:text-xs uppercase tracking-widest font-bold mt-1">
        {stat.label}
      </div>
    </div>
  );
}
