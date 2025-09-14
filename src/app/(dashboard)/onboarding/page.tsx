"use client"

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { BusinessDetails } from "@/components/layout/onboarding/business-details";
import { BusinessHours } from "@/components/layout/onboarding/business-hours";
import { PaymentInfo } from "@/components/layout/onboarding/payment-info";
import { FinalStep } from "@/components/layout/onboarding/final-step";
import { ProgressIndicator } from "@/components/layout/onboarding/progress-indicator";

const steps = ["Business Details", "Business Hours", "Payment Information"];

const OnboardingPage = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <BusinessDetails onNext={nextStep} />;
            case 1:
                return <BusinessHours onNext={nextStep} onBack={prevStep} />;
            case 2:
                return <PaymentInfo onNext={nextStep} onBack={prevStep} />;
            case 3:
                return <FinalStep />;
            default:
                return <BusinessDetails onNext={nextStep} />;
        }
    };

    return (
        <div className="min-h-screen bg-muted-foreground py-30">
            {currentStep < 3 && (
                <ProgressIndicator steps={steps} currentStep={currentStep} />
            )}
            <Card className="border border-muted max-w-3xl mx-auto px-20 py-10 shadow-sm">
                <div className="bg-white">
                    {renderStep()}
                </div>
            </Card>
        </div>
    );
};

export default OnboardingPage;
