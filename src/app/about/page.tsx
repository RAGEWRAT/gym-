import Image from "next/image";
import { Button } from "@/components/ui/Button";
import SectionInView from "@/components/motion/SectionInView";
import { Heart, Shield, Target, Users } from "lucide-react";

const values = [
  { title: "Discipline", desc: "We show up consistently — and we help you do the same.", icon: Target },
  { title: "Community", desc: "Training is easier when the room wants you to win.", icon: Users },
  { title: "Results", desc: "Measurable progress beats motivation alone.", icon: Shield },
  { title: "Integrity", desc: "Honest coaching, clear expectations, no gimmicks.", icon: Heart },
];

const milestones = [
  { year: "2014", title: "Doors open", side: "left" as const, text: "IronForge starts as a small strength-focused floor in Civil Lines." },
  { year: "2017", title: "Expansion", side: "right" as const, text: "Added cardio wing, functional zone, and extended morning hours." },
  { year: "2020", title: "Digital check-in", side: "left" as const, text: "Member app, class bookings, and progress logs go live." },
  { year: "2024", title: "Elite tier", side: "right" as const, text: "Recovery suite, nutrition desk, and priority PT scheduling." },
];

export default function AboutPage() {
  return (
    <div className="bg-navy text-offwhite">
      <section className="relative min-h-[55vh] flex items-end pt-20">
        <Image
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16 w-full">
          <p className="text-brandRed font-bold text-sm tracking-widest uppercase mb-3">About us</p>
          <h1 className="text-4xl md:text-6xl font-black max-w-3xl">Built for people who take training seriously.</h1>
        </div>
      </section>

      <SectionInView className="py-24 bg-offwhite text-navy">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              OUR <span className="text-brandRed">STORY</span>
            </h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              IronForge began with a simple idea: a gym should feel like a training facility, not a showroom.
              We invested in racks, barbells, and coaches who understand programming — not just counting reps.
            </p>
            <p className="text-navy/80 leading-relaxed">
              Today we serve everyone from first-time lifters to competitive athletes, with memberships and coaching
              that scale as your goals do.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden border border-navy/10 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop"
              alt="IronForge training floor"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionInView>

      <SectionInView className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">
            CORE <span className="text-brandRed">VALUES</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="p-6 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brandRed/40"
              >
                <Icon className="text-brandRed mb-4" size={32} />
                <h3 className="text-lg font-bold uppercase mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionInView>

      <SectionInView className="bg-nearblack py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative h-72 md:h-96 w-full rounded-lg overflow-hidden border border-white/10 mb-10">
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600&auto=format&fit=crop"
              alt="Founder training"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <h2 className="text-3xl font-black mb-4">Founder · Aditya Malhotra</h2>
          <p className="text-gray-400 max-w-3xl leading-relaxed mb-6">
            Former national-level powerlifter and certified strength coach. Aditya built IronForge to bridge the gap
            between commercial gyms and serious training halls — approachable for beginners, uncompromising for
            athletes.
          </p>
          <ul className="text-sm text-gray-500 space-y-2">
            <li>• NSCA-CSCS, Precision Nutrition L1</li>
            <li>• 12+ years on the gym floor</li>
          </ul>
        </div>
      </SectionInView>

      <SectionInView className="py-24 bg-offwhite text-navy">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">
            <span className="text-brandRed">MILESTONES</span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-navy/20 -translate-x-1/2 hidden md:block" />
            <ul className="space-y-12">
              {milestones.map((m) => (
                <li
                  key={m.year}
                  className={`flex flex-col md:flex-row md:items-center gap-4 ${m.side === "right" ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 md:text-right">
                    <span className="text-brandRed font-black text-xl">{m.year}</span>
                    <h3 className="font-bold text-lg">{m.title}</h3>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-brandRed border-4 border-offwhite z-10 shrink-0" />
                  <p className="flex-1 text-navy/75 text-sm leading-relaxed">{m.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionInView>

      <SectionInView className="py-16 bg-navy border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-8">Accreditations & partners</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14 opacity-60">
            {["NSCA", "ACE", "Life Fitness", "Hammer Strength"].map((name) => (
              <span key={name} className="text-xl font-black text-offwhite/80 border border-white/20 px-6 py-3 rounded">
                {name}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Button size="lg" href="/book">
              Train with us
            </Button>
          </div>
        </div>
      </SectionInView>
    </div>
  );
}
