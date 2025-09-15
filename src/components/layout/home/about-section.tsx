

const AboutSection = () => {
    return (
        <section className="bg-background pb-[96px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Heading */}
                <div className="text-center mb-[64px]">
                    <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground leading-tight">
                        Designed around the needs of{" "}
                        <span className="text-primary font-medium">Black women</span>,<br />
                        we make connecting with the right stylist<br />
                        <span className="text-primary font-medium">simple and seamless</span>
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

                    <div>
                        <h3 className="font-heading text-2xl font-semibold text-muted-foreground mb-4">
                            Expertise
                        </h3>
                        <p className="font-body text-muted leading-relaxed">
                            Our stylists are "locs specialists" and their
                            craftsmanship, they specialize in ways that
                            you can trust. You'll find professionals experienced
                            and skilled in everything from protective styles to
                            natural hair care. They understand the intricacies of
                            Black hair texture and take pride in their work.
                            This passion shows in every appointment, bringing
                            music, good vibes, and expert technique to make you
                            feel beautiful and confident.
                        </p>
                    </div>

                    <div className="aspect-[3/4] overflow-hidden shadow-elegant">
                        <img
                            src="image/about-section.png"
                            alt="Professional hair styling tools and accessories"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="lg:mt-[80px]">
                        <h3 className="font-heading text-2xl font-semibold text-muted-foreground mb-4">
                            Ease
                        </h3>
                        <p className="font-body text-muted leading-relaxed">
                            Gone are the days of stressful salon hunts.
                            Our booking platform makes it simple to find and
                            schedule with stylists who understand your needs.
                            No more calling around or waiting for callbacks -
                            just easy, convenient booking that works around
                            your schedule. Browse profiles, read reviews, and
                            book appointments instantly, all from the comfort
                            of your home.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;