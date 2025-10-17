import Hero from "@/sections/hero";
import Intro from "@/sections/intro";
import Features from "@/sections/features";
import HowItWorks from "@/sections/how-it-works";
import WhySolana from "@/sections/why-solana";
import Mission from "@/sections/mission";
import CTA from "@/sections/cta";
import Navbar from "@/sections/navbar";
import Footer from "@/sections/footer";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Home() {
  return (
    <div className="min-h-screen bg-background page-margin-pattern relative overflow-hidden">
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(var(--primary), 0.15) 0, hsla(var(--primary), 0.08) 50%, hsla(var(--primary), 0.02) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(var(--primary), 0.12) 0, hsla(var(--primary), 0.06) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(var(--primary), 0.08) 0, hsla(var(--primary), 0.04) 80%, transparent 100%)"
        translateY={-350}
        width={560}
        height={1380}
        smallWidth={240}
        duration={7}
        xOffset={100}
      />
      <Navbar />
      <Hero />
      <Intro />
      <Features />
      <HowItWorks />
      <WhySolana />
      <Mission />
      <CTA />
      <Footer />
    </div>
  );
}
