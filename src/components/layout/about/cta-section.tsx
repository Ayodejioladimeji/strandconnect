import { Button } from "@/components/ui/button";

const CTASection = () => {
    return (
        <section className="bg-foreground py-16 lg:py-20">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-3xl lg:text-5xl font-medium text-background mb-8 max-w-4xl mx-auto">
                    Want to know more about Strandconnect?
                </h2>

                <Button variant="dark" size="lg" className="px-8 py-6">
                    Connect with us
                </Button>
            </div>
        </section>
    );
};

export default CTASection;