import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PaymentInfoStepProps {
    onNext: () => void;
    onBack: () => void;
}

export const PaymentInfo = ({ onNext, onBack }: PaymentInfoStepProps) => {
    const [requireDeposit, setRequireDeposit] = useState(false);
    const [cancellationPolicy, setCancellationPolicy] = useState("24-hours");
    const [customPolicy, setCustomPolicy] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);

    // Load saved values on mount
    useEffect(() => {
        const saved = localStorage.getItem("paymentInfo");
        if (saved) {
            const data = JSON.parse(saved);
            setRequireDeposit(data.requireDeposit ?? false);
            setCancellationPolicy(data.cancellationPolicy ?? "24-hours");
            setCustomPolicy(data.customPolicy ?? "");
            setAcceptTerms(data.acceptTerms ?? false);
        }
    }, []);

    const handleNext = () => {
        localStorage.setItem(
            "paymentInfo",
            JSON.stringify({
                requireDeposit,
                cancellationPolicy,
                customPolicy,
                acceptTerms,
            })
        );
        onNext();
    };

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <Label className="text-sm font-medium">Add payment information</Label>
                        <p className="text-xs text-border mt-1">(As with other info, you can change this later.)</p>
                    </div>

                    <div className="flex gap-2 ">
                        <Checkbox
                            id="deposit"
                            checked={requireDeposit}
                            onCheckedChange={(checked) => setRequireDeposit(!!checked)}
                            className="mt-1"
                        />
                        <div>
                            <label htmlFor="deposit" className="text-sm font-medium cursor-pointer">
                                Do you require a deposit to be paid?
                            </label>
                            <p className="text-xs text-border mt-1">
                                (By enabling deposits, Afrihub is able to take payment on your behalf.)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <Label className="text-sm font-medium">Cancellation Policy</Label>

                    <RadioGroup value={cancellationPolicy} onValueChange={setCancellationPolicy}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="24-hours" id="24-hours" className="border-2" />
                            <label htmlFor="24-hours" className="text-sm font-medium cursor-pointer">
                                Clients must cancel within 24 hours of booking
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="48-hours" id="48-hours" className="border-2" />
                            <label htmlFor="48-hours" className="text-sm font-medium cursor-pointer">
                                Clients must cancel within 48 hours of booking
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="others" id="others" className="border-2" />
                            <label htmlFor="others" className="text-sm font-medium cursor-pointer">
                                Others (Specify below)
                            </label>
                        </div>
                    </RadioGroup>

                    {cancellationPolicy === "others" && (
                        <Textarea
                            placeholder="Write Here"
                            value={customPolicy}
                            onChange={(e) => setCustomPolicy(e.target.value)}
                            className="min-h-[80px] bg-card resize-none"
                        />
                    )}
                </div>

                <div className="flex items-start gap-2">
                    <Checkbox
                        id="terms"
                        checked={acceptTerms}
                        onCheckedChange={(checked) => setAcceptTerms(!!checked)}
                        className="mt-1"
                    />
                    <div>
                        <label htmlFor="terms" className="text-sm cursor-pointer">
                            I Accept StrandConnect{" "}
                            <span className="text-orange-500 underline">Terms & conditions</span>{" "}
                            and{" "}
                            <span className="text-orange-500 underline">privacy policy</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <button
                    onClick={onBack}
                    className="bg-card text-card-foreground border border-border px-8 py-3 rounded-[5px] text-sm font-medium hover:bg-secondary/50 transition-colors cursor-pointer"
                >
                    Back
                </button>
                <Button
                variant="dark"
                    onClick={handleNext}
                    className="px-8 py-6 rounded-[5px] text-sm font-medium transition-colors"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};