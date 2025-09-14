import { Check } from "lucide-react";

export const FinalStep = () => {
    return (
        <div className="text-center space-y-8">
            <div className="space-y-4">
                <h1 className="text-2xl font-semibold">Finish</h1>
                <p className="text-sm text-muted-foreground">
                    You're all done! Thank you for your time.
                </p>
            </div>

            <div className="flex justify-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8 text-accent-foreground" />
                </div>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-medium">Welcome to StrandConnect, Chrissy Pearl</h2>
                <p className="text-sm text-muted-foreground">
                    Continue setting up your account and manage your bookings
                </p>
            </div>

            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Continue to Dashboard
            </button>
        </div>
    );
};