import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import WhyIronForge from "@/components/home/WhyIronForge";
import FeaturedClasses from "@/components/home/FeaturedClasses";
import TrainerSpotlight from "@/components/home/TrainerSpotlight";
import PackagesPreview from "@/components/home/PackagesPreview";
import Testimonials from "@/components/home/Testimonials";
import GalleryStrip from "@/components/home/GalleryStrip";
import LocationTeaser from "@/components/home/LocationTeaser";
import FooterCTA from "@/components/home/FooterCTA";
import SectionInView from "@/components/motion/SectionInView";

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
