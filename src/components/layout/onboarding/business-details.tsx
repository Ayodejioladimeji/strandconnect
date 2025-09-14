import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { TagButton } from "./tag-button";
import { Button } from "@/components/ui/button";

interface BusinessDetailsStepProps {
    onNext: () => void;
}

export const BusinessDetails = ({ onNext }: BusinessDetailsStepProps) => {
    const [businessName, setBusinessName] = useState("");
    const [businessType, setBusinessType] = useState("independent");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [bio, setBio] = useState("");
    const [homeService, setHomeService] = useState("yes");
    const [ownerName, setOwnerName] = useState("");

    const categories = [
        "Barbershop", "Hair Salon", "Blow Drycolon", "Nail Salon", "Spa", "Make Up", "Others"
    ];

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    // Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("businessDetails");
        if (saved) {
            const data = JSON.parse(saved);
            setBusinessName(data.businessName ?? "");
            setOwnerName(data.ownerName ?? "");
        }
    }, []);

    const handleNext = () => {
        localStorage.setItem(
            "businessDetails",
            JSON.stringify({ businessName, ownerName })
        );
        onNext();
    };

    // 

    return (
        <div className="space-y-8">
            <div className="space-y-8">
                <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-sm font-medium">Business Name</Label>
                    <Input
                        id="businessName"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="bg-card py-5"
                    />
                </div>

                <div className="space-y-4">
                    <Label className="text-sm font-medium">Business Type</Label>
                    <RadioGroup value={businessType} onValueChange={setBusinessType}>
                        <div className="flex gap-2">
                            <RadioGroupItem value="independent" id="independent" className="border border-black mt-1" />
                            <div>
                                <label htmlFor="independent" className="text-sm font-medium cursor-pointer">
                                    Independent Service
                                </label>
                                <p className="text-xs text-border mt-1">(Self Employed / Mobile Service)</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <RadioGroupItem value="salon" id="salon" className="border border-black mt-1"/>
                            <div>
                                <label htmlFor="salon" className="text-sm font-medium cursor-pointer">
                                    Salon/ Spa Studio
                                </label>
                                <p className="text-xs text-border mt-1">(Physical Shop)</p>
                            </div>
                        </div>
                    </RadioGroup>
                </div>

                <div className="space-y-4">
                    <Label className="text-sm font-medium">Business Category</Label>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <TagButton
                                key={category}
                                selected={selectedCategories.includes(category)}
                                onClick={() => toggleCategory(category)}
                            >
                                {category}
                            </TagButton>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="bio" className="text-sm font-medium">
                        Bio <span className="text-border font-light">(Tell us about your business minimum of 250 words)</span>
                    </Label>
                    <Textarea
                        id="bio"
                        placeholder="Write Here"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="min-h-[120px] bg-card resize-none placeholder:text-border"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm font-medium">Business Location</Label>
                    <Input
                        id="location"
                        className="bg-card py-5 placeholder:text-border"
                        placeholder="Location"
                    />
                </div>

                <div className="space-y-4">
                    <Label className="text-sm font-medium">Do you provide home service?</Label>
                    <RadioGroup value={homeService} onValueChange={setHomeService}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" className="border border-black" />
                            <label htmlFor="yes" className="text-sm font-medium cursor-pointer">
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" className="border border-black" />
                            <label htmlFor="no" className="text-sm font-medium cursor-pointer">
                                No
                            </label>
                        </div>
                    </RadioGroup>
                </div>
            </div>

            <div className="flex justify-end">
                <Button
                variant="dark"
                    onClick={handleNext}
                    className="px-8 py-3 rounded-[5px] py-6 text-sm font-medium transition-colors hover:bg-card-foreground"
                >
                    Save & Continue
                </Button>
            </div>
        </div>
    );
};