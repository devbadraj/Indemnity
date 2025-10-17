"use client";

import { useState } from "react";
import DayNightSwitch from "@/components/shsfui/switch/day-night-switch";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-2 left-4 right-4 md:left-90 md:right-90 z-50 bg-background/80 backdrop-blur-lg border rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image src="/indemnitylogofinal.png" alt="Indemnity" width={150} height={150} />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">How It Works</a>
            <a href="#mission" className="text-sm hover:text-primary transition-colors">Mission</a>
            <Button size="sm">Join Waitlist</Button>
          </div>
          
          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <DayNightSwitch />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <DayNightSwitch />
            <Button
              size="sm"
              intent="plain"
              onClick={toggleMobileMenu}
              className="p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-lg rounded-b-lg">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#features"
                className="block text-sm hover:text-primary transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block text-sm hover:text-primary transition-colors py-2"
                onClick={closeMobileMenu}
              >
                How It Works
              </a>
              <a
                href="#mission"
                className="block text-sm hover:text-primary transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Mission
              </a>
              <div className="pt-2">
                <Button size="sm" className="w-full">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
