import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 border-t">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 relative">
        {/* Vertical Separators */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-border"></div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the waitlist to be one of the first to get AI-personalized life and health coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Join the Waitlist
            </Button>
            <Button size="lg" intent="outline" className="text-lg px-8 py-6">
              Get Notified When We Launch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
