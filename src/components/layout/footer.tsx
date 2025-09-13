import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-hero-gradient py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                    {/* Left - Logo and Newsletter */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded">
                                <span className="text-primary-foreground font-bold text-lg">S</span>
                            </div>
                            <span className="font-heading text-xl font-semibold text-foreground">
                                Strand<span className="text-primary">Connect</span>
                            </span>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="font-heading text-lg font-medium text-foreground mb-3">
                                Find Your Perfect Stylist
                            </h3>
                            <p className="font-body text-sm text-muted-foreground mb-4">
                                Explore and book stylists near you from the comfortable to
                                QLIK click. Start your style call to the best.
                            </p>

                            <div className="flex space-x-2">
                                <Input
                                    placeholder="Enter your email"
                                    className="flex-1 bg-input border-border text-card-foreground"
                                />
                                <Button variant="accent">
                                    Subscribe
                                </Button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Middle - Links */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-heading text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                                Explore
                            </h4>
                            <ul className="space-y-2">
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

                        <div>
                            <h4 className="font-heading text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                                Support
                            </h4>
                            <ul className="space-y-2">
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
                    </div>

                    {/* Right - Contact */}
                    <div>
                        <h4 className="font-heading text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                            Contact
                        </h4>
                        <div className="space-y-2">
                            <p className="font-body text-sm text-muted-foreground">
                                hello@strandconnect.com
                            </p>
                            <p className="font-body text-sm text-muted-foreground">
                                (555) 123-4567
                            </p>
                            <p className="font-body text-sm text-muted-foreground">
                                123 Beauty Street<br />
                                Atlanta, GA 30309
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-border pt-8">
                    <p className="font-body text-sm text-muted-foreground text-center">
                        © 2024 StrandConnect, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;