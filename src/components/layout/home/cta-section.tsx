import { Button } from "@/components/ui/button";
import salonService from "@/assets/salon-service.jpg";

const CTASection = () => {
    return (
        <section className="bg-secondary py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Image */}
                <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-soft mb-12">
                    <img
                        src="/images/salon-service.png"
                        alt="Professional hair stylist working on client in luxury salon"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl font-light text-secondary-foreground mb-6 leading-tight">
                        Be the Stylist Everyone's{" "}
                        <span className="text-primary font-medium">Booking</span>.
                    </h2>

                    <p className="font-body text-lg text-secondary-foreground/70 mb-8 leading-relaxed">
                        Join StrandConnect today to promote your services and grow your clientele. Seamlessly
                        connect with clients who need your expertise. Join thousands of stylists growing with
                        us every day. Join our community where your expertise meets expectation.
                    </p>

                    <Button variant="dark" size="lg" className="px-8">
                        Join Us
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;