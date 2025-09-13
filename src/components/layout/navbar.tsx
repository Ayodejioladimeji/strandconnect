import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import { Logo } from "../../../public/image/svgs";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-[0.1px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18">
                    {/* Logo */}
                    <div className="-mt-1 flex justify-start">
                        <Logo/>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-white hover:text-primary transition-colors">
                            Home
                        </a>

                        <a href="#" className="text-white hover:text-primary transition-colors">
                            About
                        </a>

                        <a href="#" className="text-white hover:text-primary transition-colors">
                           Register As A Stylist
                        </a>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        {/* <Button variant="ghost" size="icon" className="text-white hover:text-foreground">
                            <Search className="h-5 w-5" />
                        </Button> */}
                        <Button variant="dark" className="hidden md:inline-flex px-5">
                            StyleMatch AI
                        </Button>
                        <Button variant="accent" className="hidden md:inline-flex text-black px-7">
                            Log In
                        </Button>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;