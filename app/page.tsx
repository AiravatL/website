import Hero from "@/components/hero";
import SolutionsPreview from "@/components/solutions-preview";
import ClientsBar from "@/components/clients-bar";
import ServicesPreview from "@/components/services-preview";
import Testimonials from "@/components/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsBar />
      <SolutionsPreview />
      <ServicesPreview />
      <Testimonials />
    </>
  );
}
