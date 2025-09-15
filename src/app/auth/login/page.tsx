"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { GoogleIcon, LogoBlack } from '../../../../public/image/svgs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
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
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left Side - Form */}
            <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 md:px-10 py-8 bg-white text-black">
                <Button
                    onClick={() => router.back()}
                    className="bg-transparent border text-black absolute left-4 top-4 sm:left-6 sm:top-6 hover:bg-gray-50 text-sm sm:text-base"
                >
                    <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="ml-1 hidden sm:inline">Go Back</span>
                </Button>

                <div className="w-full max-w-md space-y-8">
                    {/* Logo */}
                    <div className="text-center space-y-2">
                        <div className="flex justify-center mt-8 sm:mt-10">
                            <LogoBlack />
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-black mt-4 sm:mt-5">
                            Welcome Back!
                        </h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                className="py-5 sm:py-6 border rounded-[5px]"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password" className="text-sm font-medium text-text-dark">
                                    Password
                                </Label>
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
                                    className="pr-10 py-5 sm:py-6 rounded-[5px] border"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-dark"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>

                            <Link
                                href="/auth/forgot-password"
                                className="text-xs sm:text-sm text-primary-foreground block ml-auto mt-2 sm:mt-3 text-right"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <Button
                            type="submit"
                            variant="dark"
                            className="w-full py-5 sm:py-6"
                            disabled={!formData.agreeToTerms}
                        >
                            Login
                        </Button>

                        <div className="relative flex justify-center text-xs sm:text-sm">
                            <span className="bg-form-background px-3 sm:px-4 text-text-muted">
                                or Login with
                            </span>
                        </div>

                        {/* Social Login */}
                        <Button
                            type="button"
                            size="lg"
                            className="gap-3 w-full bg-transparent border border-muted hover:border-primary-foreground hover:bg-transparent"
                        >
                            <GoogleIcon className="h-5 w-5" />
                            Google
                        </Button>

                        {/* Register Link */}
                        <div className="text-center">
                            <span className="text-xs sm:text-sm text-text-muted">Don't have an account? </span>
                            <Link
                                href="/auth/register"
                                className="text-xs sm:text-sm text-link-color hover:text-brand-orange-light font-medium hover:underline"
                            >
                                Register
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
                <div className="relative flex items-center justify-center w-full bg-foreground">
                    <img
                        src="/image/signup-image.png"
                        alt="Beautiful woman with natural curly hair"
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
