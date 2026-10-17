
import Hero from "@/components/home/Hero";
import PriceChanges from "@/components/home/PriceChanges";
import MarqueeSection from "@/components/Marquee";

export default function Home() {
  return (
    <main>
      <MarqueeSection />
        
      <Hero />
       <PriceChanges />
       
    </main>
  );
}
