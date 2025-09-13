

const HeroSection = () => {
    return (
        <section className="bg-hero-gradient min-h-screen flex flex-col justify-center pt-16">
            <div className="py-20">
                {/* Hero Text */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-medium md:text-6xl lg:text-7xl font-light text-foreground mb-6 leading-tight">
                        Where Every Day is a{" "}
                        <span className="text-primary">Good Hair Day</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
                        Book premium salon experience with ease and elegance
                    </p>
                </div>

                {/* Hair Gallery */}
                <div className="flex justify-between items-end gap-4 md:gap-6 overflow-hidden">
                    <div className="w-[290px] h-[320px] rounded-lg rounded-l-none rounded-b-none overflow-hidden">
                        <img
                            src="/image/hero1.png"
                            alt="Beautiful box braids hairstyle"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="w-[290px] h-[370px] rounded-lg rounded-b-none  overflow-hidden shadow-elegant">
                        <img
                            src="/image/hero2.png"
                            alt="Natural curly afro hairstyle"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="w-[290px] h-[420px] rounded-lg rounded-b-none  overflow-hidden shadow-elegant col-span-2 md:col-span-1">
                        <img
                            src="/image/hero3.jpg"
                            alt="Sleek long locs hairstyle"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="w-[290px] h-[370px] rounded-lg rounded-b-none  overflow-hidden shadow-elegant">
                        <img
                            src="/image/hero4.png"
                            alt="Cornrows braided hairstyle"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="w-[290px] h-[320px] rounded-lg rounded-b-none  rounded-r-none overflow-hidden shadow-elegant">
                        <img
                            src="/image/hero5.png"
                            alt="Protective twisted hairstyle"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;