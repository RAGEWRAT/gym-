import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import WhyIronForge from "@/components/home/WhyIronForge";
import FeaturedClasses from "@/components/home/FeaturedClasses";
import TrainerSpotlight from "@/components/home/TrainerSpotlight";
import PackagesPreview from "@/components/home/PackagesPreview";
import LocationTeaser from "@/components/home/LocationTeaser";
import FooterCTA from "@/components/home/FooterCTA";
import SectionInView from "@/components/motion/SectionInView";
import { buildPageMeta } from "@/lib/seo";

const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
  loading: () => <div className="min-h-[320px] bg-offwhite" aria-hidden />,
});

const GalleryStrip = dynamic(() => import("@/components/home/GalleryStrip"), {
  loading: () => <div className="min-h-[240px] bg-navy" aria-hidden />,
});

export const metadata = buildPageMeta({
  absoluteTitle: "IronForge Gym | Strength Meets Performance in Kanpur",
  description:
    "IronForge Gym in Kanpur — where strength meets performance. Book a free trial, explore memberships, and train with expert coaches.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SectionInView>
        <StatsBar />
      </SectionInView>
      <SectionInView>
        <WhyIronForge />
      </SectionInView>
      <SectionInView>
        <FeaturedClasses />
      </SectionInView>
      <SectionInView>
        <TrainerSpotlight />
      </SectionInView>
      <SectionInView>
        <PackagesPreview />
      </SectionInView>
      <SectionInView>
        <Testimonials />
      </SectionInView>
      <SectionInView>
        <GalleryStrip />
      </SectionInView>
      <SectionInView>
        <LocationTeaser />
      </SectionInView>
      <SectionInView>
        <FooterCTA />
      </SectionInView>
    </div>
  );
}
