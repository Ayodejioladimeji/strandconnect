import { useState } from "react";
import { Card } from "@/components/ui/card";
import { BusinessDetails } from "@/components/layout/onboarding/business-details";
import { BusinessHours } from "@/components/layout/onboarding/business-hours";
import { PaymentInfo } from "@/components/layout/onboarding/payment-info";
import { FinalStep } from "@/components/layout/onboarding/final-step";
import { ProgressIndicator } from "@/components/layout/onboarding/progress-indicator";


const steps = ["Business Details", "Payment Information", "Finish"];

export const OnboardingPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [businessDetailsSubStep, setBusinessDetailsSubStep] = useState(0); // 0: details, 1: hours

    const nextStep = () => {
        if (currentStep === 0 && businessDetailsSubStep === 0) {
            // Move to business hours (still in step 0)
            setBusinessDetailsSubStep(1);
        } else if (currentStep === 0 && businessDetailsSubStep === 1) {
            // Move to payment information (step 1)
            setCurrentStep(1);
            setBusinessDetailsSubStep(0);
        } else if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep === 1 && businessDetailsSubStep === 0) {
            // Go back to business hours
            setCurrentStep(0);
            setBusinessDetailsSubStep(1);
        } else if (currentStep === 0 && businessDetailsSubStep === 1) {
            // Go back to business details
            setBusinessDetailsSubStep(0);
        } else if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const renderStep = () => {
        if (currentStep === 0) {
            if (businessDetailsSubStep === 0) {
                return <BusinessDetails onNext={nextStep} />;
            } else {
                return <BusinessHours onNext={nextStep} onBack={prevStep} />;
            }
        } else if (currentStep === 1) {
            return <PaymentInfo onNext={nextStep} onBack={prevStep} />;
        } else if (currentStep === 2) {
            return <FinalStep />;
        }
        return <BusinessDetails onNext={nextStep} />;
    };

    return (
        <div className="min-h-screen bg-background py-8">
            <div className="container max-w-2xl mx-auto px-4">
                {currentStep < 2 && (
                    <ProgressIndicator steps={steps} currentStep={currentStep} />
                )}

                <Card className="p-8 bg-card border-0 shadow-sm">
                    {renderStep()}
                </Card>
            </div>
        </div>
    );
};