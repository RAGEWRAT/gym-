import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappHref, getGenericMessage } from "@/lib/whatsapp";

export default function FooterCTA() {
  return (
    <section className="py-20 bg-nearblack border-t border-white/10 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-offwhite mb-6 uppercase leading-tight">
          Ready to train <span className="text-brandRed">for real?</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Book a free trial or message us on WhatsApp — we&apos;ll help you pick the right membership.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
          <Button size="lg" href="/book" className="min-w-[200px] min-h-[52px] justify-center">
            Book Now
          </Button>
          <a
            href={whatsappHref(getGenericMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md font-medium transition-colors px-6 py-3 text-lg border border-white/20 text-offwhite hover:bg-white/10 min-w-[200px]"
          >
            <MessageCircle size={22} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
