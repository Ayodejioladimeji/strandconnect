import Footer from "@/components/layout/footer";
import AboutSection from "@/components/layout/home/about-section";
import CTASection from "@/components/layout/home/cta-section";
import HeroSection from "@/components/layout/home/hero-section";
import SearchBooking from "@/components/layout/home/search-bookings";
import ServicesSection from "@/components/layout/home/services-section";
import TestimonialsSection from "@/components/layout/home/testimonial";
import Navbar from "@/components/layout/navbar";



export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <SearchBooking />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer/>
    </main>
  );
}
