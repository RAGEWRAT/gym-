import { Star } from "lucide-react";

const reviews = [
  {
    name: "Riya K.",
    quote: "Best gym in Kanpur for serious lifting. Coaches actually care about form and progression.",
    rating: 5,
  },
  {
    name: "Vikram S.",
    quote: "Clean floors, great equipment, and the Pro package PT sessions are worth every rupee.",
    rating: 5,
  },
  {
    name: "Neha P.",
    quote: "Flexible hours saved my training during night shifts. Community here is motivating.",
    rating: 5,
  },
  {
    name: "Aman T.",
    quote: "From day pass to Elite — the upgrade path made sense as my goals got bigger.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-offwhite text-navy">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          MEMBER <span className="text-brandRed">STORIES</span>
        </h2>
        <p className="text-center text-navy/70 max-w-2xl mx-auto mb-14">
          Real feedback from people who train here week in, week out.
        </p>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="min-w-[280px] md:min-w-0 snap-start bg-white border border-navy/10 rounded-lg p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="h-12 w-12 rounded-full bg-navy/10 text-navy font-black flex items-center justify-center text-sm"
                  aria-hidden
                >
                  {r.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <figcaption className="font-bold">{r.name}</figcaption>
              </div>
              <div className="flex gap-0.5 mb-3" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < r.rating ? "text-amber-500 fill-amber-500" : "text-navy/20"}
                  />
                ))}
              </div>
              <blockquote className="text-sm text-navy/80 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
