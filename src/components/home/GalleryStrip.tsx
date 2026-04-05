import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/image-blur";

const images = [
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop",
];

export default function GalleryStrip() {
  return (
    <section className="py-16 bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-black">
          INSIDE THE <span className="text-brandRed">FORGE</span>
        </h2>
        <p className="text-gray-400 mt-2">Floors, racks, cardio, and recovery — built for focus.</p>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 snap-x snap-mandatory">
        {images.map((src, i) => (
          <div
            key={src}
            className="relative h-56 w-80 shrink-0 snap-center rounded-lg overflow-hidden border border-white/10 shadow-lg"
          >
            <Image
              src={src}
              alt={`IronForge gym interior and equipment — photo ${i + 1}`}
              fill
              className="object-cover"
              sizes="320px"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
