import { Button } from "@/components/ui/button";
import salonService from "@/assets/salon-service.jpg";

const CTASection = () => {
    return (
        <section className="bg-foreground pb-20">
            {/* Hero Image */}
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden shadow-soft mb-12">
                <img
                    src="/image/booking.png"
                    alt="Professional hair stylist working on client in luxury salon"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="font-heading text-4xl md:text-5xl font-semibold text-black mb-6 leading-tight">
                    Be the Stylist Everyone's Booking.
                </h2>

                <p className="font-body text-lg text-black font-light mb-8 leading-relaxed">
                    With StrandConnect, building your clientele has never been easier. Seamlessly sync your current calendar, showcase your talent, and watch the bookings roll in. No double booking, no app hopping, no stress.
                </p>

                <Button variant="dark" size="lg" className="px-10 py-6">
                    Join Us
                </Button>
            </div>
        </section>
    );
};

export default CTASection;