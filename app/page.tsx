import Hero from "@/components/hero";
import VehicleShowcase from "@/components/vehicle-showcase";
import MobileApps from "@/components/mobile-apps";
import TechnologySection from "@/components/technology-section";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";

export default function HomePage() {
  return (
    <>
      <Hero />
      <VehicleShowcase />
      <MobileApps />
      <TechnologySection />
      <Testimonials />
      <CallToAction />
    </>
  );
}
