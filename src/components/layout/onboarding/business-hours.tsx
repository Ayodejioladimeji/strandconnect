import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TagButton } from "./tag-button";

interface BusinessHoursStepProps {
    onNext: () => void;
    onBack: () => void;
}

interface DaySchedule {
    enabled: boolean;
    openTime: string;
    closeTime: string;
}

export const BusinessHours = ({ onNext, onBack }: BusinessHoursStepProps) => {
    const [schedule, setSchedule] = useState<Record<string, DaySchedule>>({
        Sunday: { enabled: false, openTime: "9:00 AM", closeTime: "5:00 PM" },
        Monday: { enabled: true, openTime: "10:00 AM", closeTime: "6:00 PM" },
        Tuesday: { enabled: true, openTime: "10:00 AM", closeTime: "6:00 PM" },
        Wednesday: { enabled: true, openTime: "10:00 AM", closeTime: "6:00 PM" },
        Thursday: { enabled: false, openTime: "9:00 AM", closeTime: "5:00 PM" },
        Friday: { enabled: true, openTime: "10:00 AM", closeTime: "6:00 PM" },
    });

    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [teamSize, setTeamSize] = useState("just-me");

    const timeOptions = [
        "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
        "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
        "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
        "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
        "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"
    ];

    const services = [
        "Hair Treatment", "Corn Row", "Braiding", "Hair Cut",
        "Passion Twist", "Hair Colouring", "Natural Hair",
        "Dread Locs", "Pony Tail", "Wig Installation"
    ];

    const toggleService = (service: string) => {
        const newServices = selectedServices.includes(service)
            ? selectedServices.filter(s => s !== service)
            : [...selectedServices, service];

        setSelectedServices(newServices);
        console.log("Selected Services:", newServices);
    };

    const updateDaySchedule = (day: string, enabled: boolean) => {
        const newSchedule = {
            ...schedule,
            [day]: {
                ...schedule[day],
                enabled,
            }
        };
        setSchedule(newSchedule);
        console.log("Day Schedule Updated:", { day, enabled, schedule: newSchedule });
    };

    const updateDayTime = (day: string, timeType: 'openTime' | 'closeTime', time: string) => {
        const newSchedule = {
            ...schedule,
            [day]: {
                ...schedule[day],
                [timeType]: time,
            }
        };
        setSchedule(newSchedule);
        console.log("Time Updated:", { day, timeType, time, schedule: newSchedule });
    };

    const handleTeamSizeChange = (newTeamSize: string) => {
        setTeamSize(newTeamSize);
        console.log("Team Size Selected:", newTeamSize);
    };

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <Label className="text-sm font-medium">Business Hours</Label>
                        <p className="text-xs text-muted-foreground">(When can your clients make an appointment)</p>
                    </div>

                    <div className="space-y-3">
                        {Object.entries(schedule).map(([day, { enabled, openTime, closeTime }]) => (
                            <div key={day} className="flex items-center justify-between py-2">
                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id={day}
                                        checked={enabled}
                                        onCheckedChange={(checked) => updateDaySchedule(day, !!checked)}
                                    />
                                    <label htmlFor={day} className="text-sm font-medium min-w-[80px]">
                                        {day}
                                    </label>
                                </div>
                                {enabled ? (
                                    <div className="flex items-center space-x-2">
                                        <Select
                                            value={openTime}
                                            onValueChange={(time) => updateDayTime(day, 'openTime', time)}
                                        >
                                            <SelectTrigger className="w-[100px] h-8 text-xs">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {timeOptions.map((time) => (
                                                    <SelectItem key={time} value={time} className="text-xs">
                                                        {time}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <span className="text-xs text-muted-foreground">to</span>
                                        <Select
                                            value={closeTime}
                                            onValueChange={(time) => updateDayTime(day, 'closeTime', time)}
                                        >
                                            <SelectTrigger className="w-[100px] h-8 text-xs">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {timeOptions.map((time) => (
                                                    <SelectItem key={time} value={time} className="text-xs">
                                                        {time}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                ) : (
                                    <span className="text-sm text-muted-foreground">Closed</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <Label className="text-sm font-medium">Services</Label>
                        <p className="text-xs text-muted-foreground">(Lets your clients know the services you provide)</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {services.map((service) => (
                            <TagButton
                                key={service}
                                selected={selectedServices.includes(service)}
                                onClick={() => toggleService(service)}
                            >
                                {service}
                            </TagButton>
                        ))}
                    </div>

                    <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                        Add Services
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <Label className="text-sm font-medium">Team Size</Label>
                        <p className="text-xs text-muted-foreground">(You can have unlimited number of teams for free)</p>
                    </div>

                    <RadioGroup value={teamSize} onValueChange={handleTeamSizeChange}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="just-me" id="just-me" className="border-2" />
                            <label htmlFor="just-me" className="text-sm font-medium cursor-pointer">
                                It's just me
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="2-5" id="2-5" className="border-2" />
                            <label htmlFor="2-5" className="text-sm font-medium cursor-pointer">
                                2-5 people
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="6-10" id="6-10" className="border-2" />
                            <label htmlFor="6-10" className="text-sm font-medium cursor-pointer">
                                6-10 people
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="11+" id="11+" className="border-2" />
                            <label htmlFor="11+" className="text-sm font-medium cursor-pointer">
                                11+ people
                            </label>
                        </div>
                    </RadioGroup>
                </div>
            </div>

            <div className="flex justify-between">
                <button
                    onClick={onBack}
                    className="bg-card text-card-foreground border border-border px-8 py-3 rounded-md text-sm font-medium hover:bg-secondary/50 transition-colors"
                >
                    Back
                </button>
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