import heroImage from "@/assets/hero-woman.jpg";
import { Button } from "@/components/ui/button";

const StylematchHero = () => {
    return (
        <section className="relative h-[60vh] md:h-[70vh] pt-40 flex items-center justify-start bg-terracotta-light overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat hover:scale-105 transition-transform duration-500"
                style={{
                    backgroundImage: `url("/image/style-hero.png")`,
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute inset-0 bg-terracotta/30" />

            <div className="relative z-10 container mx-auto px-6 lg:px-12">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-wide">
                    StyleMatch AI
                </h1>

                <Button variant="dark" className="py-6 px-10 mt-8 hover:bg-primary transition hover:text-black">Get Started</Button>
            </div>
        </section>
    );
};

export default StylematchHero;