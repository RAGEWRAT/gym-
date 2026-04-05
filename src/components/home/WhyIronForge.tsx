export default function WhyIronForge() {
  return (
    <section id="about" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          WHY <span className="text-brandRed">IRONFORGE?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Expert Training"
            desc="Our trainers are certified professionals dedicated to your growth."
          />
          <FeatureCard
            title="Modern Facility"
            desc="Top-tier equipment from LifeFitness and Hammer Strength."
          />
          <FeatureCard
            title="Results Driven"
            desc="Customized plans that ensure you reach your fitness goals."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-8 bg-white/5 border border-white/10 hover:-translate-y-2 transition-all duration-300 hover:border-brandRed group">
      <div className="w-12 h-1 bg-brandRed mb-6 group-hover:w-20 transition-all" />
      <h3 className="text-xl font-bold mb-4 uppercase">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}