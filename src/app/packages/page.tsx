import PackagesClient from "@/components/packages/PackagesClient";

export const metadata = {
  title: "Packages | IronForge Gym",
  description: "Membership tiers: Basic, Pro, Elite, and Day Pass at IronForge Gym.",
};

export default function PackagesPage() {
  return (
    <div className="bg-navy min-h-screen">
      <PackagesClient />
    </div>
  );
}
