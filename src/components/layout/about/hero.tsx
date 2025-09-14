import heroImage from "@/assets/hero-woman.jpg";

const AboutHero = () => {
    return (
        <section className="relative h-[60vh] md:h-[70vh] pt-40 flex items-center justify-start bg-terracotta-light overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url("/image/about-hero.png")`,
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute inset-0 bg-terracotta/30" />

            <div className="relative z-10 container mx-auto px-6 lg:px-12">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-wide">
                    About Us
                </h1>
            </div>
        </section>
    );
};

export default AboutHero;