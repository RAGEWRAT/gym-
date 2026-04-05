import PackagesClient from "@/components/packages/PackagesClient";
import { buildPageMeta } from "@/lib/seo";

export const metadata = buildPageMeta({
  title: "Packages",
  description:
    "Compare IronForge memberships — Basic, Pro, Elite, and Day Pass with features, pricing, and WhatsApp booking.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <div className="bg-navy min-h-screen">
      <PackagesClient />
    </div>
  );
}
