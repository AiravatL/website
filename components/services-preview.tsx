import Link from "next/link";
import { Truck, PackageCheck, TrendingDown } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";
import { SectionHeading } from "@/components/ui/section-heading";

const previewServices = [
  {
    icon: Truck,
    title: "Vehicle Booking",
    description:
      "Book vehicles for business transport requirements including local and long-distance goods movement.",
  },
  {
    icon: PackageCheck,
    title: "Logistics Handling",
    description:
      "End-to-end support for vehicle requirements, loading coordination, delivery follow-up, and transport operations.",
  },
  {
    icon: TrendingDown,
    title: "Market Price Discovery",
    description:
      "Use Airavatl's partner network to discover competitive transport rates and reduce manual rate negotiation.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Reliable Logistics, Powered by Technology"
          description="From vehicle booking to trip coordination, Airavatl combines a strong partner network with a digital operating model to keep your goods moving."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewServices.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            style={{ backgroundColor: "#4c1d95" }}
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
