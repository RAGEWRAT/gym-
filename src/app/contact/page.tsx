import ContactForm from "@/components/contact/ContactForm";
import SectionInView from "@/components/motion/SectionInView";
import { buildPageMeta } from "@/lib/seo";
import { whatsappHref, getGenericMessage } from "@/lib/whatsapp";
import { MessageCircle, Share2, Mail, MapPin, Phone } from "lucide-react";

export const metadata = buildPageMeta({
  title: "Contact",
  description: "Message IronForge Gym — email form, phone, address, or WhatsApp for memberships and questions.",
  path: "/contact",
});

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
              className="inline-flex items-center gap-2 border border-white/15 rounded-md px-4 py-2 min-h-[48px] hover:border-brandRed hover:text-brandRed"
            >
              <Share2 size={18} />
              @ironforgegym
            </a>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-5">
            <p className="font-bold text-offwhite uppercase text-xs tracking-widest mb-2">WhatsApp</p>
            <p className="text-sm text-gray-400 mb-4">Message the front desk for quick answers on trials, pricing, and class times.</p>
            <a
              href={whatsappHref(getGenericMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 font-bold text-white hover:opacity-90"
            >
              <MessageCircle size={20} />
              Open WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
