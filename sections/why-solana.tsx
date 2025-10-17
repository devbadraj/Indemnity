import { Globe } from "lucide-react";

export default function WhySolana() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 relative">
        {/* Vertical Separators */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-border"></div>
        
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Why Solana
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Solana's high speed and low cost make it ideal for processing real-time policies, enabling micropremiums and high-frequency claim verification. It's the blockchain backbone that allows Indemnity to run autonomously and efficiently.
          </p>
        </div>
      </div>
    </section>
  );
}
