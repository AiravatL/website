import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Truck,
  Workflow,
  LayoutDashboard,
  BarChart3,
  Code2,
  Users,
  Gauge,
  Handshake,
  Boxes,
  Search,
  ClipboardList,
  Palette,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/ui/cta-section";
import EcosystemShowcase from "@/components/ecosystem-showcase";
import MobileApps from "@/components/mobile-apps";

export const metadata: Metadata = {
  title: { absolute: "Digital Solutions | Airavatl" },
  description:
    "Explore Airavatl's digital ecosystem including customer app, partner app, customer portal, dashboards, SDMS, and custom software solutions.",
  alternates: { canonical: "/solutions" },
};

const useCases: { icon: LucideIcon; title: string }[] = [
  { icon: Truck, title: "Logistics Management Software" },
  { icon: Workflow, title: "Workflow Automation" },
  { icon: LayoutDashboard, title: "Customer Portals" },
  { icon: BarChart3, title: "Sales & Distribution Software" },
  { icon: Users, title: "Field Team Management Systems" },
  { icon: Gauge, title: "Business Dashboards" },
  { icon: Handshake, title: "Vendor & Partner Portals" },
  { icon: Boxes, title: "Inventory & Reporting Systems" },
  { icon: Code2, title: "Custom Web Applications" },
  { icon: Smartphone, title: "Mobile App Solutions" },
];

const process: { icon: LucideIcon; step: string; title: string; description: string }[] = [
  {
    icon: Search,
    step: "Step 1",
    title: "Understand Business Requirement",
    description:
      "We study the client's business model, daily process, users, pain points, and operational flow.",
  },
  {
    icon: ClipboardList,
    step: "Step 2",
    title: "Plan the Software Structure",
    description:
      "We define modules, user roles, dashboards, workflows, and data requirements.",
  },
  {
    icon: Palette,
    step: "Step 3",
    title: "Design the User Experience",
    description:
      "We create clean, simple, and practical interfaces suitable for business users.",
  },
  {
    icon: Code2,
    step: "Step 4",
    title: "Develop and Test",
    description:
      "We build the system using scalable technology, test workflows, and fix issues before deployment.",
  },
  {
    icon: Rocket,
    step: "Step 5",
    title: "Deploy and Support",
    description:
      "We deploy the solution and provide support for improvements based on real usage.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-violet-100 px-6 pb-20 pt-36 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-light leading-tight text-slate-900 md:text-6xl">
            Technology Solutions Built for Logistics and Business Operations
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Airavatl develops and operates digital platforms including mobile
            apps, customer portals, dashboards, and custom business software
            designed around real operational needs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              style={{ backgroundColor: "#4c1d95" }}
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              Discuss Your Requirement
            </Link>
            <Link
              href="#ecosystem"
              className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-8 py-3.5 text-sm font-medium text-violet-900 transition-all hover:-translate-y-0.5 hover:bg-violet-50"
            >
              View Our Ecosystem
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: Ecosystem — logo row */}
      <section id="ecosystem" className="scroll-mt-28 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <EcosystemShowcase />
        </div>
      </section>

      {/* Section 3: Mobile apps (Driver / Consigner) */}
      <MobileApps />

      {/* Section 4: Use cases */}
      <section className="bg-slate-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Solutions We Can Build for Customers"
            description="Whatever your operation looks like, we can design and build the digital system that runs it."
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {useCases.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-violet-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-100 bg-violet-50">
                  <Icon
                    className="h-5 w-5"
                    style={{ color: "#4c1d95" }}
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="text-base font-medium text-slate-900">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Process */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How We Build Custom Solutions"
            description="A clear, practical path from understanding your business to deploying and supporting your solution."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {process.map(({ icon: Icon, step, title, description }) => (
              <div
                key={step}
                className="flex h-full flex-col rounded-2xl border border-violet-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-100 bg-violet-50">
                    <Icon
                      className="h-5 w-5"
                      style={{ color: "#4c1d95" }}
                      strokeWidth={1.75}
                    />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-violet-700">
                    {step}
                  </span>
                </div>
                <h3 className="text-base font-medium text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        heading="Want to digitize your business process?"
        text="Airavatl can help you plan and build a custom digital solution based on your exact business requirement."
        buttons={[
          { label: "Start Your Project", href: "/contact", variant: "primary" },
          { label: "Contact Us", href: "/contact", variant: "outline" },
        ]}
      />
    </main>
  );
}
