import { Button } from "@/components/ui/Button";
import SectionInView from "@/components/motion/SectionInView";
import { buildPageMeta } from "@/lib/seo";
import { Bus, MapPin, Train } from "lucide-react";

export const metadata = buildPageMeta({
  title: "Location",
  description:
    "IronForge Gym in Civil Lines, Kanpur — map, hours, directions, nearby landmarks, and public transport.",
  path: "/location",
});

const mapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114311.96827056643!2d80.26425315510688!3d26.447547000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770326db331%3A0x9698d2df96478314!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712150000000!5m2!1sen!2sin";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=123+Ironforge+Lane+Civil+Lines+Kanpur";

export default function LocationPage() {
  return (
    <div className="bg-navy text-offwhite min-h-screen pb-20">
      <section className="pt-28 pb-10 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-4">LOCATION</h1>
        <p className="text-gray-400 max-w-2xl">Civil Lines, Kanpur — easy to reach by road and public transport.</p>
      </section>

      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 h-[420px] md:h-[520px] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
          <iframe title="IronForge Gym map" src={mapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
        </div>

        <SectionInView className="bg-nearblack border border-white/10 rounded-lg p-6 h-fit space-y-6">
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-brandRed mb-3">Info</h2>
            <div className="flex gap-3 text-gray-300">
              <MapPin className="text-brandRed shrink-0 mt-0.5" size={18} />
              <p>123 Ironforge Lane, Civil Lines, Kanpur, Uttar Pradesh 208001</p>
            </div>
          </div>
          <div className="text-sm space-y-2 text-gray-300">
            <p>
              <span className="text-offwhite font-bold">Phone · </span>
              <a href="tel:+915122000000" className="hover:text-brandRed">
                +91 512 200 0000
              </a>
            </p>
            <p>
              <span className="text-offwhite font-bold">Email · </span>
              <a href="mailto:hello@ironforgegym.in" className="hover:text-brandRed">
                hello@ironforgegym.in
              </a>
            </p>
          </div>
          <div className="text-sm text-gray-300 space-y-2">
            <p className="text-offwhite font-bold uppercase text-xs tracking-widest">Hours</p>
            <p>Mon – Fri · 5:00 AM – 11:00 PM</p>
            <p>Sat – Sun · 7:00 AM – 9:00 PM</p>
          </div>
          <Button className="w-full" size="lg" href={directionsUrl}>
            Get Directions
          </Button>
        </SectionInView>
      </div>

      <SectionInView className="max-w-6xl mx-auto px-4 mt-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-black mb-4">Nearby landmarks</h2>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>· Phool Bagh · 5 min walk</li>
            <li>· Nana Rao Park · 8 min walk</li>
            <li>· Civil Lines market · 3 min walk</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-black mb-4">Public transport</h2>
          <ul className="text-gray-400 space-y-4 text-sm">
            <li className="flex gap-3">
              <Bus className="text-brandRed shrink-0" size={20} />
              <span>City buses stop along Mall Road; 6–8 minute walk from the main Ironforge entrance.</span>
            </li>
            <li className="flex gap-3">
              <Train className="text-brandRed shrink-0" size={20} />
              <span>Kanpur Central is ~15 minutes by cab or auto from the gym.</span>
            </li>
          </ul>
        </div>
      </SectionInView>
    </div>
  );
}
