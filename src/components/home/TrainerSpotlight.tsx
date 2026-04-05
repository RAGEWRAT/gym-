import Image from "next/image";
import { whatsappHref } from "@/lib/whatsapp";

const trainers = [
  {
    name: "Arjun Sharma",
    specialization: "Strength & powerlifting",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sanya Malhotra",
    specialization: "Yoga & mobility",
    img: "https://images.unsplash.com/photo-1518611012118-2960c8badce4?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Rahul Verma",
    specialization: "HIIT & conditioning",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TrainerSpotlight() {
  return (
    <section className="py-24 bg-navy border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
          MEET THE <span className="text-brandRed">COACHES</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          Specialists who program, cue, and keep you accountable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t) => (
            <article
              key={t.name}
              className="bg-nearblack border border-white/10 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-brandRed/30"
            >
              <div className="relative h-72 w-full">
                <Image src={t.img} alt={t.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <div className="p-6 text-center md:text-left">
                <h3 className="text-xl font-bold uppercase">{t.name}</h3>
                <p className="text-brandRed font-bold text-sm mt-2 tracking-wide">{t.specialization}</p>
                <a
                  href={whatsappHref(
                    `Hi IronForge! I'd like to book a session with ${t.name} (${t.specialization}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md font-medium transition-colors px-4 py-2 text-base bg-brandRed text-white hover:bg-brandRed/90"
                >
                  Book Session
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
