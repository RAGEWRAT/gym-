import ContactForm from "@/components/contact/ContactForm";
import SectionInView from "@/components/motion/SectionInView";
import { Share2, Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact | IronForge Gym",
  description: "Contact IronForge Gym in Kanpur — visit, call, or send a message.",
};

export default function ContactPage() {
  return (
    <div className="bg-navy text-offwhite min-h-screen pb-20">
      <section className="pt-28 pb-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-4">CONTACT</h1>
        <p className="text-gray-400 max-w-xl">Questions about memberships, classes, or corporate plans? Send a note — we reply within one business day.</p>
      </section>

      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        <SectionInView>
          <ContactForm />
        </SectionInView>

        <aside className="space-y-8 text-gray-300">
          <div className="flex gap-4">
            <MapPin className="text-brandRed shrink-0" />
            <div>
              <p className="font-bold text-offwhite uppercase text-xs tracking-widest mb-1">Address</p>
              <p>123 Ironforge Lane, Civil Lines, Kanpur, UP 208001</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="text-brandRed shrink-0" />
            <div>
              <p className="font-bold text-offwhite uppercase text-xs tracking-widest mb-1">Phone</p>
              <a href="tel:+915122000000" className="hover:text-brandRed">
                +91 512 200 0000
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Mail className="text-brandRed shrink-0" />
            <div>
              <p className="font-bold text-offwhite uppercase text-xs tracking-widest mb-1">Email</p>
              <a href="mailto:hello@ironforgegym.in" className="hover:text-brandRed">
                hello@ironforgegym.in
              </a>
            </div>
          </div>
          <div>
            <p className="font-bold text-offwhite uppercase text-xs tracking-widest mb-3">Social</p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 rounded-md px-4 py-2 hover:border-brandRed hover:text-brandRed"
            >
              <Share2 size={18} />
              @ironforgegym
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
