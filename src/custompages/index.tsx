import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VisionMission />
      <Services />
      <Comparison />
      <Benefits />
      <Contact />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
