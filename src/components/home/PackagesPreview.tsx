import { Button } from "@/components/ui/Button";

const packages = [
  { name: "Basic", price: "1500", features: ["Gym Access", "Locker Room", "General Training"] },
  { name: "Pro", price: "2500", features: ["24/7 Access", "2 PT Sessions", "Group Classes"], recommended: true },
  { name: "Elite", price: "5000", features: ["Unlimited PT", "Nutrition Plan", "Sauna Access"] },
];

export default function PackagesPreview() {
  return (
    <section id="packages" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-navy">
          MEMBERSHIP <span className="text-brandRed">PACKAGES</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`p-8 flex flex-col ${pkg.recommended ? 'bg-brandRed scale-105 z-10 shadow-2xl' : 'bg-white/5'}`}>
              {pkg.recommended && <span className="text-[10px] font-black uppercase mb-2">Most Popular</span>}
              <h3 className="text-2xl font-bold uppercase">{pkg.name}</h3>
              <div className="text-4xl font-black my-6">₹{pkg.price}<span className="text-sm font-normal">/mo</span></div>
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map(f => <li key={f} className="text-sm opacity-80">✓ {f}</li>)}
              </ul>
              <Button variant={pkg.recommended ? "secondary" : "primary"}>SELECT PLAN</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}