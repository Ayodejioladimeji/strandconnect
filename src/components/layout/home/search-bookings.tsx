import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar } from "lucide-react";

const SearchBooking = () => {
    return (
        <section className="bg-background py-16 -mt-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="shadow-elegant p-8 border border-border">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        {/* Services */}
                        <Select>
                            <SelectTrigger className="bg-transparent py-6 border-border text-white w-[40%] data-[placeholder]:text-white">
                                <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="braids">Box Braids</SelectItem>
                                <SelectItem value="locs">Locs Maintenance</SelectItem>
                                <SelectItem value="natural">Natural Hair Care</SelectItem>
                                <SelectItem value="protective">Protective Styles</SelectItem>
                                <SelectItem value="wash">Wash & Blow Dry</SelectItem>
                            </SelectContent>
                        </Select>



                        {/* Location */}
                        <div className="relative w-[40%]">
                            <MapPin color="white" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white" />
                            <Input
                                placeholder="Enter location"
                                className="pl-10 py-6 bg-transparent border-border text-white placeholder:text-white"
                            />
                        </div>

                        {/* Search Button */}
                        <Button variant="accent" className="py-6 rounded-sm text-black px-8 w-[15%]">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchBooking;