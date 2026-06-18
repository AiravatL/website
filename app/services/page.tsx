import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  PackageCheck,
  TrendingDown,
  Users,
  Building2,
  Route,
} from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import VehicleShowcase from "@/components/vehicle-showcase";
import { CTASection } from "@/components/ui/cta-section";

export const metadata: Metadata = {
  title: { absolute: "Logistics Services | Airavatl" },
  description:
    "Airavatl provides technology-enabled logistics services, vehicle booking, partner coordination, trip handling, and enterprise logistics support.",
  alternates: { canonical: "/services" },
};

const services = [
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
      "End-to-end support for managing vehicle requirements, loading coordination, delivery follow-up, and transport operations.",
  },
  {
    icon: TrendingDown,
    title: "Market Price Discovery",
    description:
      "Use Airavatl's partner network to discover competitive transport rates and reduce manual rate negotiation.",
  },
  {
    icon: Users,
    title: "Driver & Vehicle Partner Network",
    description:
      "Connect with onboarded vehicle partners and drivers for faster fulfilment of logistics requirements.",
  },
  {
    icon: Building2,
    title: "Enterprise Logistics Support",
    description:
      "Logistics support for businesses, distributors, agencies, suppliers, and growing enterprises.",
  },
  {
    icon: Route,
    title: "Trip Coordination",
    description:
      "Manage trip flow, partner communication, loading details, delivery updates, and operational records.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-violet-100 px-6 pb-20 pt-36 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-light leading-tight text-slate-900 md:text-6xl">
            Reliable Logistics Services Powered by Technology
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Airavatl helps businesses manage vehicle booking, transport
            coordination, partner handling, trip operations, and logistics
            workflows through a technology-enabled logistics service model.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              style={{ backgroundColor: "#4c1d95" }}
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              Get Quote
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-8 py-3.5 text-sm font-medium text-violet-900 transition-all hover:-translate-y-0.5 hover:bg-violet-50"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Vehicle showcase */}
      <VehicleShowcase />

      {/* Service cards */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="End-to-End Logistics, Backed by Our Own Technology"
            description="From vehicle booking to trip coordination, Airavatl combines a strong partner network with a digital operating model to keep your goods moving."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        heading="Need logistics support for your business?"
        text="Share your transport requirement and Airavatl will help you plan the right logistics solution."
        buttons={[
          { label: "Get Quote", href: "/contact", variant: "primary" },
          { label: "Contact Us", href: "/contact", variant: "outline" },
        ]}
      />
    </main>
  );
}
