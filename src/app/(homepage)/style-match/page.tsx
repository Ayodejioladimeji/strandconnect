import StylematchHero from "@/components/layout/style-match/hero";
import HowitWorks from "@/components/layout/style-match/how-it-works";
import TrySection from "@/components/layout/style-match/try-section";
import VirtualSection from "@/components/layout/style-match/virtual-section";



const StyleMatch = () => {
    return (
        <div className="min-h-screen">
            <StylematchHero />
            <VirtualSection />
            <HowitWorks />
            <TrySection/>
        </div>
    );
};

export default StyleMatch;