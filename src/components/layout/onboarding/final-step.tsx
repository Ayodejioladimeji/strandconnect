import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const FinalStep = () => {
    return (
        <div className="text-center space-y-8">
            <div className="space-y-4">
                <h1 className="text-2xl font-body font-semibold">Finish</h1>
                <p className="text-sm text-border">
                    You're all done! Thank you for your time.
                </p>
            </div>

            <div className="flex justify-center">
                <div className="w-16 h-16 bg-[#C35400] rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                </div>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-medium">Welcome to StrandConnect, Chrissy Pearl</h2>
                <p className="text-sm text-border">
                    Continue setting up your account and manage your bookings
                </p>
            </div>

            <Button variant="dark" className="px-8 py-6 rounded-[5px] text-sm font-medium transition-colors">
                Continue to Dashboard
            </Button>
        </div>
    );
};