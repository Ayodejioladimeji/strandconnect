import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar } from "lucide-react";

const SearchBooking = () => {
    return (
        <section className="bg-background py-16 -mt-20 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-card rounded-2xl shadow-elegant p-8 border border-border">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        {/* Services */}
                        <div className="space-y-2">
                            <label className="text-sm font-body font-medium text-card-foreground">
                                Services
                            </label>
                            <Select>
                                <SelectTrigger className="bg-input border-border text-card-foreground">
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
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <label className="text-sm font-body font-medium text-card-foreground">
                                Find a location
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Enter location"
                                    className="pl-10 bg-input border-border text-card-foreground"
                                />
                            </div>
                        </div>

                        {/* Date */}
                        <div className="space-y-2">
                            <label className="text-sm font-body font-medium text-card-foreground">
                                Date
                            </label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="date"
                                    className="pl-10 bg-input border-border text-card-foreground"
                                />
                            </div>
                        </div>

                        {/* Search Button */}
                        <Button variant="accent" className="h-10 px-8">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchBooking;