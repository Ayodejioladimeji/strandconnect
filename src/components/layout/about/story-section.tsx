import storyImage from "@/assets/story-woman.jpg";

const StorySection = () => {
    return (
        <section className="bg-dark-charcoal py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <img
                                src="/image/about-story.png"
                                alt="Professional woman smiling"
                                className="w-full h-[500px] lg:h-[600px] object-cover shadow-2xl "
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2 text-white space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-light mb-8">Our Story</h2>

                        <div className="space-y-4 text-muted leading-relaxed">
                            <p className="text-sm lg:text-base text-muted">
                                We started StrandConnect with one simple goal: to make it easier for
                                people, especially those with textured hair, to find hairstylists they can
                                trust.
                            </p>

                            <p className="text-sm lg:text-base text-muted">
                                Like many, we were tired of unreliable bookings, endless DMs, and the
                                stress of trying to find someone who truly gets our hair. So we created a
                                space where connection, convenience, and care come first.
                            </p>

                            <p className="text-sm lg:text-base text-muted">
                                StrandConnect is more than a booking platform. It's a growing
                                community that celebrates Black hair, supports independent stylists,
                                and makes great hair days easier to come by.
                            </p>

                            <p className="text-sm lg:text-base text-muted">
                                Whether you're looking for braids, a silk press, loc maintenance, or a
                                bold new look. You'll find trusted hands here.
                            </p>

                            <p className="text-sm lg:text-base text-muted">
                                And for our clients, we're building a better hair journey, one that puts
                                you in control, helps you discover new favorites, and brings joy back to
                                booking.
                            </p>

                            <p className="text-sm lg:text-base text-muted">
                                At StrandConnect, we believe good hair isn't just about the look—It's
                                about the feeling. Confidence, comfort, connection. That's what we're
                                here for.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;