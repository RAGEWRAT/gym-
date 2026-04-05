import { Button } from "@/components/ui/Button";

const basicFeatures = [
  "General Gym Access",
  "Locker Room & Showers",
  "Free Weights Area",
  "Cardio Zone Access",
  "Mobile App Access"
];

const proFeatures = [
  "24/7 Access",
  "2 PT Sessions",
  "Group Classes",
  "Nutrition Guidance",
  "Progress Tracking"
];

const eliteFeatures = [
  "All Pro Features Included",
  "Unlimited Personal Training",
  "Personal Nutritionist",
  "Sauna & Recovery Suite",
  "Dedicated VIP Locker",
  "Monthly Body Composition Analysis"
];

export default function PackagesPreview() {
  return (
    <section id="packages" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-navy">
          MEMBERSHIP <span className="text-brandRed">PACKAGES</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BasicCard />
          <ProCard />
          <EliteCard />
        </div>
      </div>
    </section>
  );
}

function BasicCard() {
  return (
    <div className="p-8 bg-white/5 border border-white/10 flex flex-col h-full hover:border-white/20 transition-colors">
      <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Basic</h3>
      <p className="text-gray-400 text-sm mb-6">Perfect for solo grinders.</p>

      <div className="mb-8">
        <span className="text-4xl font-black font-heading">₹1,500</span>
        <span className="text-gray-500 text-sm ml-2">/ month</span>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {basicFeatures.map((feature) => (
          <li key={feature} className="flex items-center text-sm text-gray-300">
            <span className="text-brandRed mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <Button variant="secondary" className="w-full" href="#book">
        SELECT BASIC
      </Button>
    </div>
  );
}

function ProCard() {
  return (
    <div className="p-8 bg-brandRed scale-105 z-10 shadow-2xl flex flex-col h-full relative">
      <span className="text-[10px] font-black uppercase mb-2 text-white">Most Popular</span>
      <h3 className="text-xl font-bold uppercase tracking-wider mb-2 text-white">Pro</h3>
      <p className="text-gray-200 text-sm mb-6">Balanced training & guidance.</p>

      <div className="mb-8">
        <span className="text-4xl font-black font-heading text-white">₹2,500</span>
        <span className="text-gray-300 text-sm ml-2">/ month</span>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {proFeatures.map((feature) => (
          <li key={feature} className="flex items-center text-sm text-white">
            <span className="text-white mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <Button variant="secondary" className="w-full" href="#book">
        SELECT PRO
      </Button>
    </div>
  );
}

function EliteCard() {
  return (
    <div className="p-8 bg-nearblack border-2 border-white/10 flex flex-col h-full relative overflow-hidden group hover:border-brandRed/50 transition-all shadow-2xl">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 p-2 bg-brandRed/10 text-brandRed text-[10px] font-black uppercase tracking-tighter">
        VIP ACCESS
      </div>

      <h3 className="text-xl font-bold uppercase tracking-wider mb-2 text-offwhite">Elite</h3>
      <p className="text-gray-400 text-sm mb-6">Total transformation & luxury.</p>

      <div className="mb-8">
        <span className="text-4xl font-black font-heading text-brandRed">₹5,000</span>
        <span className="text-gray-500 text-sm ml-2">/ month</span>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {eliteFeatures.map((feature) => (
          <li key={feature} className="flex items-center text-sm text-offwhite font-medium">
            <span className="text-brandRed mr-3">★</span>
            {feature}
          </li>
        ))}
      </ul>

      <Button variant="primary" className="w-full shadow-lg shadow-brandRed/20" href="#contact">
        GO ELITE
      </Button>
    </div>
  );
}