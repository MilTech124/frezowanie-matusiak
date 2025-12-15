import Hero from "@/components/Home/Hero";
import Process from "@/components/Home/Process";
import WhyUs from "@/components/Home/WhyUs";
import FAQSection from "@/components/Home/FAQSection";
import CTA from "@/components/Home/CTA";
import GalleryPreview from "@/components/Home/GalleryPreview";
import VideoGallery from "@/components/Home/VideoGallery";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <GalleryPreview />
      <VideoGallery />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQSection />
      <CTA />
    </div>
  );
}
