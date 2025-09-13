import { Button } from "@/components/ui/button";
import bookingPortrait from "@/assets/booking-portrait.jpg";

const ServicesSection = () => {
    return (
        <section className="bg-secondary py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-12">
                        {/* Main Heading */}
                        <div>
                            <h2 className="font-heading text-4xl md:text-5xl font-light text-secondary-foreground mb-4 leading-tight">
                                Seamless bookings.<br />
                                <span className="text-primary font-medium">Trusted stylists.</span>
                            </h2>
                        </div>

                        {/* Steps */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-heading text-xl font-medium text-secondary-foreground mb-3">
                                    Search for Stylists
                                </h3>
                                <p className="font-body text-secondary-foreground/70 leading-relaxed">
                                    Easily search and compare top stylists in your
                                    area based on your specific needs.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-heading text-xl font-medium text-secondary-foreground mb-3">
                                    Choose a Professional
                                </h3>
                                <p className="font-body text-secondary-foreground/70 leading-relaxed">
                                    View profiles, reviews, and portfolios, then choose the
                                    best professional for your needs.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-heading text-xl font-medium text-secondary-foreground mb-3">
                                    Book!
                                </h3>
                                <p className="font-body text-secondary-foreground/70 leading-relaxed">
                                    See availability and set your best appointment instantly.
                                    Simple & seamless.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div>
                            <Button variant="dark" size="lg" className="px-8">
                                Search Stylists
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-soft">
                            <img
                                src="/images/booking-portrait.png"
                                alt="Beautiful woman with voluminous natural curly hair"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/15 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;