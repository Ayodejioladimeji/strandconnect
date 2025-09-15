"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialIcon } from "../../../../public/image/svgs";



const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "Sarah",
            text: "Sarah is the best and understood my needs. She is so knowledgeable about hair care and textures and her skill is when protection braiding. She was very professional."
        },
        {
            name: "Maya",
            text: "Maya is amazing! Her attention to detail and expertise in hair care is unmatched. The braiding work was flawless and my hair felt healthier than ever."
        },
        {
            name: "Zoe",
            text: "Zoe provided exceptional service with such care and professionalism. Her knowledge of different hair textures and protective styling techniques is remarkable."
        },
        {
            name: "Alex",
            text: "Alex transformed my hair with beautiful braids that lasted for weeks. The consultation was thorough and the results exceeded my expectations."
        },
        {
            name: "Jordan",
            text: "Jordan's skill and creativity are outstanding. The protective braiding not only looked amazing but helped my hair grow stronger and healthier."
        },
        {
            name: "Sarah",
            text: "Sarah is the best and understood my needs. She is so knowledgeable about hair care and textures and her skill is when protection braiding. She was very professional."
        },
    ];

    const totalSlides = Math.ceil(testimonials.length / 3)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    

    return (
        <section className="bg-background py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="relative mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl text-center font-medium text-foreground">
                        What clients are saying about us
                    </h2>

                    {/* Navigation */}
                    <div className="absolute right-0 top-0 flex gap-4 ">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={prevTestimonial}
                            className="h-12 w-12 rounded-full bg-transparent border border-muted-foreground/30 hover:bg-muted-foreground/10 text-foreground hover:text-foreground transition-all duration-300 hover:scale-105 cur"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={nextTestimonial}
                            className="h-12 w-12 rounded-full bg-transparent border border-muted-foreground/30 hover:bg-muted-foreground/10 text-foreground hover:text-foreground transition-all duration-300 hover:scale-105 cur"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Testimonials Slider Container */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                            width: `${(testimonials.length * 100) / 3}%`
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-1/3 flex-shrink-0 px-6"
                                style={{ width: `${100 / testimonials.length}%` }}
                            >
                                <div className="space-y-6 opacity-100 transform transition-all duration-500">
                                    <div className="flex justify-center">
                                        <TestimonialIcon />
                                    </div>

                                    <p className="font-body text-muted-foreground leading-relaxed text-base min-h-[120px] flex items-center">
                                        {testimonial.text}
                                    </p>
                                    <p className="font-body font-medium text-foreground">
                                        -- {testimonial.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-12 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-primary w-8'
                                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;