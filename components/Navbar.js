"use client";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./moon";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Service", href: "/service" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Other Ventures", href: "/ventures" },
        { name: "Contact", href: "/contact" },
        { name: "Career", href: "/career" },
    ];

    const mobileExtraLinks = [
        { name: "CyberSecurity", href: "/cyber-security" },
        { name: "Case Study", href: "/case-study" },
    ];

    return (
        <nav className="bg-[#F5F5F5] dark:bg-[#1E1E1EFA] border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-32 relative">
                    {/* Logo */}
                    <div className="z-50">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={182}
                                height={194}
                                className="w-24"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu Items */}
                    <div className="hidden md:flex flex-1 justify-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-md font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Right Side */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="bg-gradient-to-r from-[#65A4D6] to-[#0C2B5F] text-white px-8 py-2 rounded-lg transition-transform duration-300 font-semibold text-sm shadow-lg cursor-pointer">
                            Get in touch
                        </button>
                        <ModeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2 z-50">
                        <ModeToggle />
                        <Sheet>
                            <SheetTrigger>
                                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            </SheetTrigger>
                            <SheetContent className="bg-[#F5F5F5] dark:bg-[#1E1E1EFA]">
                                <SheetHeader>
                                    <SheetTitle className="mt-2 text-lg font-bold">Marshmallow.Projects</SheetTitle>
                                    <SheetDescription asChild>
                                        <div className="flex flex-col gap-6 mt-10">
                                            {/* Desktop Links */}
                                            {navLinks.map((link) => (
                                                <Link
                                                    key={link.name}
                                                    href={link.href}
                                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-lg font-medium"
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                            {/* Additional Mobile Links */}
                                            {mobileExtraLinks.map((link) => (
                                                <Link
                                                    key={link.name}
                                                    href={link.href}
                                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-lg font-medium"
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                            <button className="bg-gradient-to-r from-[#65A4D6] to-[#0C2B5F] text-white px-6 py-2 rounded-lg font-semibold text-sm shadow-lg mt-4 cursor-pointer">
                                                Get in touch
                                            </button>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
