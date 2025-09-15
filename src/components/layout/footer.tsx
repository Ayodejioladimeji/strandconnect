import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FacebookIcon, InstagramIcon, Logo, TiktokIcon, XIcon } from "../../../public/image/svgs";

const Footer = () => {
    return (
        <footer className="bg-background pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between gap-12 mb-12">
                    <div className="space-y-6 w-full md:w-[400px]">
                        <Logo />
                        <div>
                            <h3 className="font-body text-2xl font-medium text-foreground mb-3">
                                Find Your Perfect Stylist
                            </h3>
                            <p className="font-body text-sm text-muted-foreground mb-4">
                                Explore and book stylists near you from the comfortable to
                                QLIK click. Start your style call to the best.
                            </p>
                            <label className="font-body text-sm text-muted-foreground block mb-2">Subscribe to our newsletter</label>
                            <div className="relative w-full">
                                <Input
                                    placeholder="Enter your email"
                                    className="w-full bg-white py-6 border-border text-card-foreground placeholder:text-gray-500"
                                />
                                <Button variant="dark" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                            <InstagramIcon />
                            <FacebookIcon />
                            <XIcon />
                            <TiktokIcon />
                        </div>
                    </div>

                    <div className="w-full sm:w-auto">
                        <h4 className="font-body text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                            Explore
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    All Stylists
                                </a>
                            </li>
                            <li>
                                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Featured Stylists
                                </a>
                            </li>
                            <li>
                                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Popular Styles
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-auto">
                        <h4 className="font-body text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                            Support
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Help Center
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-auto">
                        <h4 className="font-body text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                            Contact
                        </h4>
                        <div className="space-y-4">
                            <p className="font-body text-sm text-muted-foreground">
                                hello@strandconnect.com
                            </p>
                            <p className="font-body text-sm text-muted-foreground">
                                (555) 123-4567
                            </p>
                            <p className="font-body text-sm text-muted-foreground">
                                123 Beauty Street
                                Atlanta, GA 30309
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8">
                    <p className="font-body text-sm text-muted-foreground text-center">
                        © 2025 | StrandConnect, Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
