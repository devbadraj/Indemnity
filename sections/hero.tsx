import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="pt-36 pb-32">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 relative">
        {/* Vertical Separators */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-border"></div>
        
        <div className="text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Coming Soon
          </Badge>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Insurance, Reimagined
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-semibold italic">
              <em className="font-semibold text-transparent">for the Decentralized Age</em>
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A new way to protect <em className="font-semibold text-foreground">life and health</em> — powered by <strong className="text-foreground">AI</strong>, built on <strong className="text-foreground">Solana</strong>, <em className="font-semibold text-foreground">owned by the people</em>.
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
