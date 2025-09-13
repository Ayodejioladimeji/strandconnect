"use client"

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "Sarah",
            text: "Sarah is the best and understood my needs. She is so knowledgeable about hair care and textures and her skill is when protection braiding. She was very professional."
        },
        {
            name: "Maya",
            text: "Sarah is the best and understood my needs. She is so knowledgeable about hair care and textures and her skill is when protection braiding. She was very professional."
        },
        {
            name: "Zoe",
            text: "Sarah is the best and understood my needs. She is so knowledgeable about hair care and textures and her skill is when protection braiding. She was very professional."
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };

    return (
        <section className="bg-hero-gradient py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">
                        What clients are saying about us
                    </h2>

                    {/* Navigation */}
                    <div className="flex gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={prevTestimonial}
                            className="h-12 w-12 rounded-full bg-transparent border border-muted-foreground/30 hover:bg-muted-foreground/10 text-foreground"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={nextTestimonial}
                            className="h-12 w-12 rounded-full bg-transparent border border-muted-foreground/30 hover:bg-muted-foreground/10 text-foreground"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {getVisibleTestimonials().map((testimonial, index) => (
                        <div key={index} className="space-y-6">
                            <div className="text-8xl text-primary font-heading leading-none">"</div>
                            <p className="font-body text-muted-foreground leading-relaxed text-base">
                                {testimonial.text}
                            </p>
                            <p className="font-body font-medium text-foreground">
                                -{testimonial.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;