import heroImage from "@/assets/hero-woman.jpg";

const AboutHero = () => {
    return (
        <section className="relative h-[60vh] md:h-[70vh] pt-10 flex items-center justify-start bg-foreground overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat hover:scale-105 transition-transform duration-500 bg-foreground"
                style={{
                    backgroundImage: `url("/image/about-hero.png")`,
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute inset-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 container">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-wide">
                    About Us
                </h1>
            </div>
        </section>
    );
};

export default AboutHero;