"use client";
import { Heart } from "lucide-react";
import { HeartButton } from "@/components/shsfui/icon-button/heart-icon-button";

export default function Mission() {
  return (
    <section id="mission" className="py-32 border-t">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 relative">
        {/* Vertical Separators */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-border"></div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HeartButton initialCount={0} className="w-8 h-8 text-primary size-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To make insurance <strong className="text-foreground">instant, intelligent, and inclusive</strong> — so protection becomes a <em className="font-semibold text-foreground">right, not a privilege</em>.
          </p>
        </div>
      </div>
    </section>
  );
}
