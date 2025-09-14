import CTASection from "@/components/layout/about/cta-section";
import AboutHero from "@/components/layout/about/hero";
import StorySection from "@/components/layout/about/story-section";



const About = () => {
    return (
        <div className="min-h-screen">
            <AboutHero />
            <StorySection />
            <CTASection />
        </div>
    );
};

export default About;