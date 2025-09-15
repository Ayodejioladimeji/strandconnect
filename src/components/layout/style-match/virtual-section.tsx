import { Button } from "@/components/ui/button";

const VirtualSection = () => {
    return (
        <section className="bg-background text-muted-foreground pt-[80px]">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <h2 className="font-serif text-3xl lg:text-4xl font-medium mb-[18px]">
                    Virtual Hairstyle Match
                </h2>
                <p className="text-base lg:text-base leading-relaxed text-muted">
                    Ever wondered how you'd look with custom bangs, a platinum pixie, or mermaid waves? Our virtual try-on tool lets you test-drive any style before you
                    commit. Simply take or upload a selfie and explore haircuts, colors, and treatments tailored to your face shape, hair texture, and personal vibe. No
                    guesswork, no regrets, just confidence that your next look is exactly what you always dreamed.
                </p>
            </div>
        </section>
    );
};

export default VirtualSection;