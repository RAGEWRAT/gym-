import BookForm from "@/components/book/BookForm";
import SectionInView from "@/components/motion/SectionInView";
import { buildPageMeta } from "@/lib/seo";

export const metadata = buildPageMeta({
  title: "Book",
  description:
    "Book a free trial, personal training, group class, or gym tour at IronForge Gym — pick your date and time.",
  path: "/book",
});

export default function BookPage() {
  return (
    <div className="bg-navy text-offwhite min-h-screen pb-24">
      <section className="pt-28 pb-10 px-4 max-w-xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">BOOK</h1>
        <p className="text-gray-400">
          Tell us what you&apos;re after and when you&apos;d like to come in. We&apos;ll confirm by WhatsApp or phone.
        </p>
      </section>
      <div className="max-w-xl mx-auto px-4">
        <SectionInView>
          <BookForm />
        </SectionInView>
      </div>
    </div>
  );
}
