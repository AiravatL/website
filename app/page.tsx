import Hero from "@/components/hero";
// Kept for later use — ClickUp-style challenges section with the rope illustration.
// To re-enable: uncomment this import and the <ChallengesSection /> below.
// import ChallengesSection from "@/components/challenges-section";
import SolutionsPreview from "@/components/solutions-preview";
import ClientsBar from "@/components/clients-bar";
import ServicesPreview from "@/components/services-preview";
import Testimonials from "@/components/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <ChallengesSection /> */}
      <ClientsBar />
      <SolutionsPreview />
      <ServicesPreview />
      <Testimonials />
    </>
  );
}
