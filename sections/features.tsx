import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Brain, Shield, Activity, Lock } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-32">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 relative">
        {/* Vertical Separators */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-border"></div>
        
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What We're Building
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <CardSpotlight 
            className="bg-card border-border"
            color="hsl(var(--secondary))"
            radius={300}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">AI Risk Oracle</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Our <strong className="text-foreground">neural underwriting engine</strong> analyzes <em className="font-semibold text-foreground">decentralized data</em> to offer a <strong className="text-foreground">personalized risk profile</strong> and <em className="font-semibold text-foreground">tailor-made premiums</em> in real time.
            </p>
          </CardSpotlight>

          <CardSpotlight 
            className="bg-card border-border"
            color="hsl(var(--secondary))"
            radius={300}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">On-Chain Insurance</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Every <em className="font-semibold text-foreground">life and health policy</em> exists as a <strong className="text-foreground">verifiable smart contract</strong> on <strong className="text-foreground">Solana</strong>, ensuring <em className="font-semibold text-foreground">auditability, speed, and low transaction costs</em>.
            </p>
          </CardSpotlight>

          <CardSpotlight 
            className="bg-card border-border"
            color="hsl(var(--secondary))"
            radius={300}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Dynamic Coverage</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your <strong className="text-foreground">protection adapts</strong> to your data — so as your <em className="font-semibold text-foreground">health patterns or lifestyle</em> evolve, your <strong className="text-foreground">coverage evolves</strong> with it.
            </p>
          </CardSpotlight>

          <CardSpotlight 
            className="bg-card border-border"
            color="hsl(var(--secondary))"
            radius={300}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Secure & Autonomous</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              <em className="font-semibold text-foreground">No single entity</em> controls Indemnity. It's governed by the <strong className="text-foreground">community</strong> and driven by <strong className="text-foreground">transparent algorithms</strong>.
            </p>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
}
