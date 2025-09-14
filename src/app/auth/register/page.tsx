"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { AppleIcon, Eye, EyeOff } from 'lucide-react';
import { GoogleIcon, LogoBlack } from '../../../../public/image/svgs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState('user');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        agreeToTerms: false,
    });
    const router = useRouter()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', { ...formData, userType });
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Form */}
            <div className="flex-1 flex items-center text-black justify-center px-6 py-8 bg-white">
                <div className="w-full max-w-md space-y-8">
                    {/* Logo */}
                    <div className="text-center space-y-2">
                        <div className="flex justify-center mt-10">
                            <LogoBlack />
                        </div>
                        <h1 className="text-3xl font-bold text-black mt-5">Sign Up</h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* User Type Selection */}
                        <div className="space-y-3">
                            <Label className="text-sm font-medium">Account Type</Label>
                            <RadioGroup value={userType} onValueChange={setUserType} className="flex gap-6">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="user" id="user" />
                                    <Label htmlFor="user" className="text-sm cursor-pointer">
                                        Regular User
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="stylist" id="stylist" />
                                    <Label htmlFor="stylist" className="text-sm cursor-pointer">
                                        Hair Stylist
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        {/* User Name */}
                        <div className="space-y-1">
                            <Label htmlFor="username" className="text-sm font-medium text-text-dark">
                                User name
                            </Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="claire"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="py-6 border rounded-[5px]"
                                required
                            />
                        </div>

                        {/* Email Address */}
                        <div className="space-y-1">
                            <Label htmlFor="email" className="text-sm font-medium text-text-dark">
                                Email address
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="claire@example.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="py-6 border rounded-[5px]"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password" className="text-sm font-medium text-text-dark">
                                    Password
                                </Label>
                                <Button variant="link" size="sm" type="button" className="text-xs text-primary-foreground">
                                    Forgot password?
                                </Button>
                            </div>

                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    className="pr-10 py-6 rounded-[5px] border focus:outline-none focus:ring-0 focus:border-red-400"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-dark cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start space-x-3">
                            <Checkbox
                                id="terms"
                                checked={formData.agreeToTerms}
                                onCheckedChange={(checked) =>
                                    setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                                }
                                className="mt-0.5"
                            />
                            <div className="text-sm font-light cursor-pointer">
                                By clicking 'Sign Up' I agree to StrandConnect {" "}
                                <Link href="/terms-of-service" className="font-medium underline cursor-pointer">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>

                        {/* Sign Up Button */}
                        <Button
                            type="submit"
                            variant="dark"
                            className="w-full py-6"
                            disabled={!formData.agreeToTerms}
                            onClick={() => router.push("/onboarding")}
                        >
                            Sign up
                        </Button>


                        <div className="relative flex justify-center text-sm">
                            <span className="bg-form-background px-4 text-text-muted">
                                or Sign up with
                            </span>
                        </div>

                        {/* Social Login Buttons */}
                        <Button type="button" size="lg" className="gap-3 w-full bg-transparent border border-muted hover:border-primary-foreground hover:bg-transparent">
                            <GoogleIcon className="h-5 w-5" />
                            Google
                        </Button>

                        {/* Login Link */}
                        <div className="text-center">
                            <span className="text-sm text-text-muted">Already have an account? </span>
                            <Link href="/auth/login" className="text-sm text-link-color hover:text-brand-orange-light font-medium hover:underline">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="hidden lg:flex flex-1 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-brand-orange to-brand-brown"
                    style={{ background: 'var(--hero-gradient)' }}
                />
                <div className="relative flex items-center justify-center w-full">
                    <img
                        src="/image/signup-image.png"
                        alt="Beautiful woman with natural curly hair"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;