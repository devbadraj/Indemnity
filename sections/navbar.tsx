import DayNightSwitch from "@/components/shsfui/switch/day-night-switch";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-2 left-90 right-90 z-50 bg-background/80 backdrop-blur-lg border rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Indemnity</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">How It Works</a>
            <a href="#mission" className="text-sm hover:text-primary transition-colors">Mission</a>
            <Button size="sm">Join Waitlist</Button>
          </div>
          <div className="flex items-center space-x-4">
            <DayNightSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
