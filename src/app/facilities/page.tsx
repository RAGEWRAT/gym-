import FacilitiesClient from "@/components/facilities/FacilitiesClient";
import { buildPageMeta } from "@/lib/seo";

export const metadata = buildPageMeta({
  title: "Facilities",
  description:
    "Tour IronForge — cardio deck, power racks, machines, functional turf, studios, and locker rooms in Kanpur.",
  path: "/facilities",
});

export default function FacilitiesPage() {
  return <FacilitiesClient />;
}
