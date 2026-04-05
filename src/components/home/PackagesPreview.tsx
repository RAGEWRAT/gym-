import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/whatsapp";

const basicFeatures = ["Gym access", "Locker", "Off-peak hours", "App check-in"];
const proFeatures = ["All-day access", "2 PT sessions / month", "Group classes", "Progress review"];
const eliteFeatures = ["Unlimited PT", "Nutrition coaching", "Priority booking", "Recovery suite access"];

export default function PackagesPreview() {
  return (
    <section id="packages" className="py-24 bg-offwhite text-navy">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          MEMBERSHIP <span className="text-brandRed">PACKAGES</span>
        </h2>
        <p className="text-center text-navy/70 max-w-2xl mx-auto mb-14">
          Start where you are — upgrade when you&apos;re ready. Preview pricing; full comparison on Packages.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <PackageCard
            name="Basic"
            blurb="Essential access for independent training."
            price="₹1,500"
            period="/ month"
            features={basicFeatures}
            cta={{ label: "Chat on WhatsApp", href: whatsappHref("Hi IronForge! I'm interested in the Basic package.") }}
            variant="light"
          />
          <PackageCard
            name="Pro"
            blurb="Our best balance of access, coaching, and classes."
            price="₹2,500"
            period="/ month"
            features={proFeatures}
            cta={{ label: "Book Now", href: "/book" }}
            variant="popular"
            badge="Most Popular"
          />
          <PackageCard
            name="Elite"
            blurb="Maximum support for ambitious goals."
            price="₹5,000"
            period="/ month"
            features={eliteFeatures}
            cta={{ label: "Contact Us", href: whatsappHref("Hi IronForge! I'd like details on the Elite package.") }}
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}

function PackageCard({
  name,
  blurb,
  price,
  period,
  features,
  cta,
  variant,
  badge,
}: {
  name: string;
  blurb: string;
  price: string;
  period: string;
  features: string[];
  cta: { label: string; href: string };
  variant: "light" | "popular" | "dark";
  badge?: string;
}) {
  const base =
    "flex flex-col h-full rounded-lg border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl";
  const styles =
    variant === "popular"
      ? "bg-brandRed text-white border-brandRed shadow-2xl scale-[1.02] z-10 relative"
      : variant === "dark"
        ? "bg-nearblack text-offwhite border-white/10"
        : "bg-white border-navy/10 text-navy shadow-md";

  return (
    <div className={`${base} ${styles}`}>
      {badge ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nearblack text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
          {badge}
        </span>
      ) : null}
      <h3 className="text-xl font-bold uppercase tracking-wider mb-2">{name}</h3>
      <p className={`text-sm mb-6 ${variant === "popular" ? "text-white/90" : "text-current/70"}`}>{blurb}</p>
      <div className="mb-8">
        <span className="text-4xl font-black font-heading">{price}</span>
        <span className={`text-sm ml-2 ${variant === "popular" ? "text-white/80" : "opacity-70"}`}>{period}</span>
      </div>
      <ul className="space-y-3 mb-10 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-sm gap-2">
            <span className={variant === "popular" ? "text-white" : "text-brandRed"}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      {cta.href.startsWith("http") ? (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            variant === "dark"
              ? "inline-flex w-full items-center justify-center rounded-md font-medium transition-colors px-6 py-3 text-lg bg-brandRed text-white hover:bg-brandRed/90 text-center"
              : "inline-flex w-full items-center justify-center rounded-md font-medium transition-colors px-6 py-3 text-lg bg-navy text-white hover:bg-nearblack text-center"
          }
        >
          {cta.label}
        </a>
      ) : (
        <Button
          variant={variant === "popular" ? "secondary" : "default"}
          className={
            variant === "popular"
              ? "w-full !bg-white !text-navy hover:!bg-offwhite !border-0"
              : "w-full"
          }
          size="lg"
          href={cta.href}
        >
          {cta.label}
        </Button>
      )}
    </div>
  );
}
