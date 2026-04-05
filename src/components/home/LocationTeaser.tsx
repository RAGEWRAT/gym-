import { Button } from "@/components/ui/Button";

const mapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114311.96827056643!2d80.26425315510688!3d26.447547000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770326db331%3A0x9698d2df96478314!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712150000000!5m2!1sen!2sin";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Kanpur%2C%20Uttar%20Pradesh";

export default function LocationTeaser() {
  return (
    <section className="py-24 bg-offwhite text-navy">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <div className="min-h-[280px] rounded-lg overflow-hidden border border-navy/10 shadow-lg">
          <iframe
            title="IronForge Gym location map"
            src={mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "280px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            FIND <span className="text-brandRed">US</span>
          </h2>
          <div className="space-y-5 text-navy/80">
            <p>
              <span className="font-bold text-navy uppercase text-xs tracking-widest block mb-1">
                Address
              </span>
              123 Ironforge Lane, Civil Lines, Kanpur, UP 208001
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-bold text-navy uppercase text-xs tracking-widest block mb-1">
                  Mon – Fri
                </span>
                5:00 AM – 11:00 PM
              </div>
              <div>
                <span className="font-bold text-navy uppercase text-xs tracking-widest block mb-1">
                  Sat – Sun
                </span>
                7:00 AM – 9:00 PM
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Button variant="default" size="lg" href={directionsUrl}>
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
