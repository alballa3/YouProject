"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Menu, User, X, Home, Info, Settings, LogOut, Shield } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { auth } = usePage().props;
    const session = auth ? true : false;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSignOut = () => {
        // Implement your sign out logic here
    };

    const NavLink = ({ href, children, icon: Icon }) => {
        const isActive = usePage().url.startsWith(href);
        return (
            <Link
                href={href}
                className={`relative px-3 py-2 transition-colors duration-200 flex items-center gap-2 ${
                    isActive
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                }`}
            >
                {Icon && <Icon className="w-4 h-4" />}
                {children}
                {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200"></span>
                )}
            </Link>
        );
    };

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-md"
                    : "bg-transparent"
            }`}
            role="banner"
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                    >
                        <Home className="w-6 h-6" />
                        You
                    </Link>

                    <nav
                        className="hidden md:flex space-x-1 items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        role="navigation"
                    >
                        <NavLink href="/" icon={Home}>
                            Home
                        </NavLink>
                        <NavLink href="/about" icon={Info}>
                            About Us
                        </NavLink>
                    </nav>

                    <div className="flex items-center space-x-4">
                        {session ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="flex items-center space-x-2"
                                    >
                                        <User className="h-4 w-4" />
                                        <span>{auth.name || "User"}</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    className="w-56"
                                >
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/profile"
                                            className="w-full flex items-center"
                                        >
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Profile</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/settings"
                                            className="w-full flex items-center"
                                        >
                                            <Settings className="mr-2 h-4 w-4" />
                                            <span>Settings</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link
                                            href="/auth/logout"
                                            className="w-full flex items-center"
                                            method="post"
                                            as="button"
                                        >
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Logout</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <a
                                            href="/admin"
                                            className="w-full flex items-center"
                                        >
                                            <Shield className="mr-2 h-4 w-4" />
                                            <span>
                                                Admin
                                            </span>
                                        </a>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className="hidden md:flex items-center space-x-2">
                                <Button variant="ghost" asChild>
                                    <Link
                                        href="/auth/login"
                                        className="flex items-center gap-2"
                                    >
                                        <User className="h-4 w-4" />
                                        Login
                                    </Link>
                                </Button>
                                <Button asChild>
                                    <Link
                                        href="/auth/register"
                                        className="flex items-center gap-2"
                                    >
                                        <User className="h-4 w-4" />
                                        Sign Up
                                    </Link>
                                </Button>
                            </div>
                        )}

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden fixed inset-0 z-50 bg-white transform ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                <div className="container mx-auto px-4 py-6">
                    <div className="flex justify-between items-center mb-8">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-primary flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Home className="w-6 h-6" />
                            You
                        </Link>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </Button>
                    </div>
                    <nav className="flex flex-col space-y-4">
                        <NavLink href="/" icon={Home}>
                            Home
                        </NavLink>
                        <NavLink href="/about" icon={Info}>
                            About Us
                        </NavLink>
                        {session ? (
                            <>
                                <NavLink href="/profile" icon={User}>
                                    Profile
                                </NavLink>
                                <NavLink href="/settings" icon={Settings}>
                                    Settings
                                </NavLink>
                                <Button
                                    variant="ghost"
                                    className="justify-start px-3 py-2 flex items-center gap-2"
                                >
                                    <LogOut className="h-4 w-4" />
                                    <Link
                                            href="/auth/logout"
                                            className="w-full flex items-center"
                                            method="post"
                                            as="button"
                                        >
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Logout</span>
                                        </Link>
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="ghost"
                                    asChild
                                    className="justify-start"
                                >
                                    <Link
                                        href="/auth/login"
                                        className="flex items-center gap-2"
                                    >
                                        <User className="h-4 w-4" />
                                        Login
                                    </Link>
                                </Button>
                                <Button asChild className="justify-start">
                                    <Link
                                        href="/auth/register"
                                        className="flex items-center gap-2"
                                    >
                                        <User className="h-4 w-4" />
                                        Sign Up
                                    </Link>
                                </Button>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}
