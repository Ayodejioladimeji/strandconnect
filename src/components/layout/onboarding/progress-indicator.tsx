import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
    steps: string[];
    currentStep: number;
}

export const ProgressIndicator = ({ steps, currentStep }: ProgressIndicatorProps) => {
    return (
        <div className="flex items-center gap-10 justify-center mb-12 text-black">
            {steps.map((step, index) => (
                <div key={step} className="flex items-center">
                    <div className="flex flex-col items-center">
                        <div
                            className={cn(
                                "step-indicator",
                                index < currentStep ? "completed" :
                                    index === currentStep ? "current" : "pending"
                            )}
                        >
                            {index < currentStep ? (
                                <Check className="w-4 h-4" />
                            ) : (
                                <span className="text-sm font-medium">{index + 1}</span>
                            )}
                        </div>
                        
                        <span className="text-sm font-medium mt-2">{step}</span>
                    </div>
                    {index < steps.length - 1 && (
                        <div
                            className={cn(
                                "step-connector",
                                index < currentStep ? "completed" : "pending"
                            )}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};