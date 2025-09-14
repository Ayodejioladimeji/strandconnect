import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { TagButton } from "./tag-button";

interface BusinessDetailsStepProps {
    onNext: () => void;
}

export const BusinessDetails = ({ onNext }: BusinessDetailsStepProps) => {
    const [businessName, setBusinessName] = useState("");
    const [businessType, setBusinessType] = useState("independent");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [bio, setBio] = useState("");
    const [homeService, setHomeService] = useState("yes");

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

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-sm font-medium">Business Name</Label>
                    <Input
                        id="businessName"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="bg-card"
                    />
                </div>

                <div className="space-y-4">
                    <Label className="text-sm font-medium">Business Type</Label>
                    <RadioGroup value={businessType} onValueChange={setBusinessType}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="independent" id="independent" className="border-2" />
                            <div>
                                <label htmlFor="independent" className="text-sm font-medium cursor-pointer">
                                    Independent Service
                                </label>
                                <p className="text-xs text-muted-foreground">(Self Employed / Mobile Service)</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="salon" id="salon" className="border-2" />
                            <div>
                                <label htmlFor="salon" className="text-sm font-medium cursor-pointer">
                                    Salon/ Spa Studio
                                </label>
                                <p className="text-xs text-muted-foreground">(Physical Shop)</p>
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
                        Bio <span className="text-muted-foreground">(Tell us about your business minimum of 250 words)</span>
                    </Label>
                    <Textarea
                        id="bio"
                        placeholder="Write Here"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="min-h-[120px] bg-card resize-none"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm font-medium">Business Location</Label>
                    <Input
                        id="location"
                        className="bg-card"
                    />
                </div>

                <div className="space-y-4">
                    <Label className="text-sm font-medium">Do you provide home service?</Label>
                    <RadioGroup value={homeService} onValueChange={setHomeService}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" className="border-2" />
                            <label htmlFor="yes" className="text-sm font-medium cursor-pointer">
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" className="border-2" />
                            <label htmlFor="no" className="text-sm font-medium cursor-pointer">
                                No
                            </label>
                        </div>
                    </RadioGroup>
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    onClick={onNext}
                    className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                    Save & Continue
                </button>
            </div>
        </div>
    );
};