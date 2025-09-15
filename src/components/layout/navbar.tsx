"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "../../../public/image/svgs";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-[0.1px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18">
                    {/* Logo */}
                    <div className="-mt-1 flex justify-start">
                        <Logo />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-white hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="/about-us" className="text-white hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link href="/style-match" className="text-white hover:text-primary transition-colors">
                            StyleMatch AI
                        </Link>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        <Button
                            onClick={() => router.push("/auth/register")}
                            variant="dark"
                            className="hidden md:inline-flex px-5"
                        >
                            Register
                        </Button>
                        <Button
                            onClick={() => router.push("/auth/login")}
                            variant="accent"
                            className="hidden md:inline-flex text-black px-7"
                        >
                            Log In
                        </Button>

                        {/* Mobile menu toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation with transition */}
            <div
                className={`md:hidden bg-background/95 backdrop-blur-sm border-t px-4 overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="space-y-4 py-4">
                    <Link
                        href="/"
                        className="block text-white hover:text-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about-us"
                        className="block text-white hover:text-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/style-match"
                        className="block text-white hover:text-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        StyleMatch AI
                    </Link>

                    <div className="flex flex-col gap-3 pt-2">
                        <Button
                            onClick={() => {
                                setMobileOpen(false);
                                router.push("/auth/register");
                            }}
                            variant="dark"
                            className="w-full"
                        >
                            Register
                        </Button>
                        <Button
                            onClick={() => {
                                setMobileOpen(false);
                                router.push("/auth/login");
                            }}
                            variant="accent"
                            className="w-full text-black"
                        >
                            Log In
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
