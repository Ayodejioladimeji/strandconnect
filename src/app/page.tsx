import AboutSection from "@/components/layout/home/about-section";
import CTASection from "@/components/layout/home/cta-section";
import HeroSection from "@/components/layout/home/hero-section";
import SearchBooking from "@/components/layout/home/search-bookings";
import ServicesSection from "@/components/layout/home/services-section";
import TestimonialsSection from "@/components/layout/home/testimonial";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <SearchBooking />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
