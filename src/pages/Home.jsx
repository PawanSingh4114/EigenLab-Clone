import Hero from "../components/home/Hero";
import Capabilities from "../components/home/Capabilities";
import Highlights from "../components/home/Highlights";
import CoreModules from "../components/home/CoreModules";
import StartingPoint from "../components/home/StartingPoint";
import Process from "../components/home/Process";
import Engagement from "../components/home/Engagement";
import ContactSection from "../components/common/ContactSection";
import StickyLayer from "../components/common/StickyLayer";

export default function Home() {
  return (
    <>
      <Hero />
      {/* "Trusted across" strip baad mein yaha aayegi */}

      {/* Sirf ye 3 sections slide-over wale hain:
          Capabilities chipka rehta hai, Highlights uske upar se slide karta hai,
          aur Core Modules Highlights ke upar se slide karke phir normal scroll hota hai. */}
      <div className="relative isolate">
        <StickyLayer>
          <Capabilities />
        </StickyLayer>
        <StickyLayer>
          <Highlights />
        </StickyLayer>
        <CoreModules />
      </div>

      {/* Ye ab wrapper ke bahar hai, to bina kisi effect ke poora normal scroll hoga */}
      <StartingPoint />

      <Process />
      <Engagement />
      <ContactSection />
    </>
  );
}