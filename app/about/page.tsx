import type { Metadata } from "next";
import { Cpu, Truck, Users, Target } from "lucide-react";
import { CTASection } from "@/components/ui/cta-section";

export const metadata: Metadata = {
  title: { absolute: "About Us | Airavatl" },
  description:
    "Airavatl is a logistics company with strong technology capability — connecting businesses with a trusted vehicle partner network across North-East India.",
  alternates: { canonical: "/about" },
};

// Replace with real figures.
const stats = [
  { value: "1000+", label: "Vehicle partners onboarded" },
  { value: "8", label: "North-East states served" },
  { value: "24×7", label: "Operations & support" },
  { value: "100%", label: "Digital booking & tracking" },
];

const values = [
  {
    icon: Cpu,
    title: "Technology-Enabled",
    description:
      "We run operations on our own apps, ERP, and dashboards — built around real logistics needs.",
  },
  {
    icon: Truck,
    title: "Reliable Network",
    description:
      "A growing network of onboarded drivers and vehicle partners for faster fulfilment.",
  },
  {
    icon: Users,
    title: "Customer-First",
    description:
      "Transparent pricing, real-time updates, and support that puts your business first.",
  },
];

const eyebrow = "mb-4 text-sm font-semibold uppercase tracking-widest text-violet-700";
const heading = "text-4xl font-light leading-tight text-slate-900 md:text-5xl";
const accent = { color: "#4c1d95" };

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-br from-[#4c1d95] to-[#2e1065] px-6 pb-20 pt-36 text-center text-white md:pb-24 md:pt-44">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-300">
            About Us
          </p>
          <h1 className="text-5xl font-light leading-tight md:text-6xl">
            Get to know Airavatl
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-violet-100">
            A logistics company with strong technology capability — moving goods
            and building digital products across North-East India.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className={eyebrow}>Stats</p>
            <h2 className={heading}>
              Helping businesses move{" "}
              <span style={accent}>faster and smarter</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-semibold md:text-5xl" style={accent}>
                  {stat.value}
                </p>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambition */}
      <section className="bg-slate-50 px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className={eyebrow}>Ambition</p>
            <h2 className={heading}>
              Logistics that <span style={accent}>powers real growth</span>
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-slate-600 md:text-lg">
            <p>
              At Airavatl, we believe technology-enabled logistics should make
              moving goods simpler for every business. By connecting customers
              with a trusted vehicle partner network, we remove the friction
              from booking, coordination, and delivery.
            </p>
            <p>
              From local movements to long-distance freight across North-East
              India, we focus on reliability, transparency, and fair pricing —
              so your supply chain keeps moving without the guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className={eyebrow}>Values</p>
          <h2 className={heading}>
            Driven by a <span style={accent}>technology-first mindset</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            We pair logistics expertise with our own digital ecosystem.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-100 bg-violet-50">
                  <Icon className="h-7 w-7" style={accent} strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-2xl font-medium text-slate-900">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="bg-slate-50 px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className={eyebrow}>Purpose</p>
            <h2 className={heading}>
              Our <span style={accent}>objective</span>
            </h2>
            <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600 md:text-lg">
              <p>
                Airavatl is a logistics company with strong technology
                capability. Our goal is to make freight movement across
                North-East India efficient, transparent, and accessible for
                businesses of every size.
              </p>
              <p>
                Alongside our logistics services, we build digital products —
                from customer and partner apps to ERP, dashboards, and custom
                software — that help businesses run and scale their operations.
              </p>
            </div>
          </div>
          <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-100 to-violet-50">
            <Target className="h-24 w-24 text-violet-300" strokeWidth={1.25} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Want to work with Airavatl?"
        text="Tell us your logistics or software requirement and our team will help you plan the right solution."
        buttons={[
          { label: "Contact Us", href: "/contact", variant: "primary" },
          { label: "Explore Solutions", href: "/solutions", variant: "outline" },
        ]}
      />
    </main>
  );
}
