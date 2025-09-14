"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TagButton } from "./tag-button";
import { Button } from "@/components/ui/button";

interface BusinessHoursStepProps {
  onNext: () => void;
  onBack: () => void;
}

interface DaySchedule {
  enabled: boolean;
  openTime: string;
  closeTime: string;
}

const STORAGE_KEY = "onboarding_business_hours";

export const BusinessHours = ({ onNext, onBack }: BusinessHoursStepProps) => {
  // keep a stable order for rendering days
  const daysOrder = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const defaultSchedule: Record<string, DaySchedule> = {
    Sunday: { enabled: false, openTime: "9:00 AM", closeTime: "5:00 PM" },
    Monday: { enabled: true, openTime: "10:00 AM", closeTime: "6:00 PM" },
    Tuesday: { enabled: true, openTime: "10:00 AM", closeTime: "6:00 PM" },
    Wednesday: { enabled: true, openTime: "10:00 AM", closeTime: "6:00 PM" },
    Thursday: { enabled: false, openTime: "9:00 AM", closeTime: "5:00 PM" },
    Friday: { enabled: true, openTime: "10:00 AM", closeTime: "6:00 PM" },
  };

  const [schedule, setSchedule] = useState<Record<string, DaySchedule>>(
    defaultSchedule
  );
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [teamSize, setTeamSize] = useState("just-me");

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.schedule) setSchedule(parsed.schedule);
        if (parsed.selectedServices) setSelectedServices(parsed.selectedServices);
        if (parsed.teamSize) setTeamSize(parsed.teamSize || "just-me");
      }
    } catch (err) {
      // ignore parse errors
      console.warn("Failed to read business hours from localStorage", err);
    }
  }, []);

  const timeOptions = [
    "6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM",
    "9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM",
    "12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM",
    "3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM",
    "6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM",
    "9:00 PM","9:30 PM","10:00 PM","10:30 PM"
  ];

  const services = [
    "Hair Treatment", "Corn Row", "Braiding", "Hair Cut",
    "Passion Twist", "Hair Colouring", "Natural Hair",
    "Dread Locs", "Pony Tail", "Wig Installation"
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const updateDaySchedule = (day: string, enabled: boolean) => {
    setSchedule(prev => ({
      ...prev,
      [day]: { ...prev[day], enabled }
    }));
  };

  const updateDayTime = (day: string, timeType: 'openTime' | 'closeTime', time: string) => {
    setSchedule(prev => ({
      ...prev,
      [day]: { ...prev[day], [timeType]: time }
    }));
  };

  const handleTeamSizeChange = (newTeamSize: string) => {
    setTeamSize(newTeamSize);
  };

  // Save on "Save & Continue"
  const handleNext = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ schedule, selectedServices, teamSize })
      );
    } catch (err) {
      console.warn("Failed to save business hours to localStorage", err);
    }
    onNext();
  };

  return (
    <div className="space-y-8 text-black">
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium">Business Hours</Label>
            <p className="text-xs text-border mt-1">(When can your clients make an appointment)</p>
          </div>

          <div className="space-y-3">
            {daysOrder.map((day) => {
              const dayData = schedule[day] ?? { enabled: false, openTime: "9:00 AM", closeTime: "5:00 PM" };
              return (
                <div key={day} className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id={day}
                      checked={dayData.enabled}
                      onCheckedChange={(checked) => updateDaySchedule(day, !!checked)}
                    />
                    <label htmlFor={day} className="text-sm font-medium min-w-[80px] cursor-pointer">
                      {day}
                    </label>
                  </div>

                  {dayData.enabled ? (
                    <div className="flex items-center space-x-2">
                      <Select
                        value={dayData.openTime}
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

                      <span className="text-xs text-border mt-1">to</span>

                      <Select
                        value={dayData.closeTime}
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
                    <span className="text-sm text-border">Closed</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium">Services</Label>
            <p className="text-xs text-border mt-1">(Lets your clients know the services you provide)</p>
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
            <p className="text-xs text-border mt-1">(You can have unlimited number of teams for free)</p>
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

      {/* Actions */}
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
          className="px-8 rounded-[5px] text-sm font-medium py-6 transition-colors"
        >
          Save & Continue
        </Button>
      </div>
    </div>
  );
};
