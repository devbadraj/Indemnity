import Hero from "@/sections/hero";
import Intro from "@/sections/intro";
import Features from "@/sections/features";
import HowItWorks from "@/sections/how-it-works";
import WhySolana from "@/sections/why-solana";
import Mission from "@/sections/mission";
import CTA from "@/sections/cta";
import Navbar from "@/sections/navbar";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background page-margin-pattern">
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
