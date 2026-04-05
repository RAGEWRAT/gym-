export default function TrainerSpotlight() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          MEET OUR <span className="text-brandRed">TRAINERS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TrainerCard
            name="John Doe"
            title="Head Trainer"
            desc="Certified personal trainer with 10+ years experience."
          />
          <TrainerCard
            name="Jane Smith"
            title="Nutrition Specialist"
            desc="Helps you fuel your body for optimal performance."
          />
        </div>
      </div>
    </section>
  );
}

function TrainerCard({ name, title, desc }: { name: string; title: string; desc: string }) {
  return (
    <div className="p-8 bg-white/5 border border-white/10 hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-brandRed font-semibold mb-4">{title}</p>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}