import { Button } from "@/components/ui/button";
import bookingPortrait from "@/assets/booking-portrait.jpg";

const ServicesSection = () => {
    return (
        <section className="bg-foreground overflow-x-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                {/* Left Content */}
                <div className="space-y-10 sm:px-6 lg:px-27">
                    {/* Main Heading */}
                    <div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4 leading-tight">
                            Seamless bookings.<br />
                            Trusted stylists.
                        </h2>
                    </div>

                    {/* Steps */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-heading text-2xl font-bold text-secondary-foreground mb-3">
                                Search for Stylists
                            </h3>
                            <p className="font-body text-secondary-foreground/70 leading-relaxed">
                                Easily search and compare top stylists in your
                                area based on your specific needs.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-heading text-2xl font-bold text-secondary-foreground mb-3">
                                Choose a Professional
                            </h3>
                            <p className="font-body text-secondary-foreground/70 leading-relaxed">
                                View profiles, reviews, and portfolios, then choose the
                                best professional for your needs.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-heading text-2xl font-bold text-secondary-foreground mb-3">
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
                        <Button variant="dark" size="lg" className="px-8 rounded-sm py-6 hover:bg-primary hover:text-black">
                            Search Stylists
                        </Button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <div className="aspect-[3/3] overflow-hidden shadow-soft">
                        <img
                            src="/image/services-section.png"
                            alt="Beautiful woman with voluminous natural curly hair"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/15 rounded-full blur-xl"></div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;