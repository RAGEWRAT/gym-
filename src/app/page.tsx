import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy z-10" />
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
            alt="IronForge Gym"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-9xl font-extrabold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            FORGE YOUR <span className="text-brandRed">LEGACY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Premium equipment. Elite coaching. No excuses. 
            Join Kanpur&apos;s most powerful fitness community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" href="#packages">
              START TRAINING <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg" href="#about">
              OUR PHILOSOPHY
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}