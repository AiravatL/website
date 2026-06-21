import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Truck,
  Building2,
  BarChart3,
  Package,
  Workflow,
  LayoutDashboard,
  LineChart,
  Users,
  Gauge,
  Handshake,
  Boxes,
  Code2,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

type EcosystemItem = {
  title: string;
  /** Shown only on the 4 center product tiles. */
  label?: string;
  icon: LucideIcon;
  /** Optional real logo — drop a file in /public and set this later. */
  logoSrc?: string;
  /** Desktop (lg) grid placement. */
  area: string;
  /** Overview page slug under /solutions/[slug] — makes the tile clickable. */
  slug?: string;
};

// Desktop layout: 7 columns × 4 rows flat grid.
// The 4 products fill the dominant center 2×2 (each tile spans 2×2 cells);
// the 10 capabilities flank them on the left and right columns.
const mainProducts: EcosystemItem[] = [
  {
    title: "Airavatl",
    label: "Customer / Consigner App",
    icon: Smartphone,
    slug: "customer-app",
    area: "lg:col-start-3 lg:row-start-1 lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Airavatl Partner",
    label: "Driver / Vehicle Partner App",
    icon: Truck,
    slug: "partner",
    area: "lg:col-start-5 lg:row-start-1 lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Airavatl Enterprise",
    label: "Customer Portal",
    icon: Building2,
    slug: "enterprise",
    area: "lg:col-start-3 lg:row-start-3 lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Airavatl Inroute",
    label: "SDMS Solution",
    icon: BarChart3,
    slug: "inroute",
    area: "lg:col-start-5 lg:row-start-3 lg:col-span-2 lg:row-span-2",
  },
];

// 2 columns on the left (cols 1–2) and 2 on the right (cols 7–8), mirrored.
const capabilities: EcosystemItem[] = [
  { title: "Logistics Management Software", icon: Package, area: "lg:col-start-1 lg:row-start-1" },
  { title: "Workflow Automation", icon: Workflow, area: "lg:col-start-1 lg:row-start-2" },
  { title: "Customer Portals", icon: LayoutDashboard, area: "lg:col-start-1 lg:row-start-3" },
  { title: "Sales & Distribution Software", icon: LineChart, area: "lg:col-start-2 lg:row-start-1" },
  { title: "Field Team Management Systems", icon: Users, area: "lg:col-start-2 lg:row-start-2" },
  { title: "Business Dashboards", icon: Gauge, area: "lg:col-start-8 lg:row-start-1" },
  { title: "Vendor & Partner Portals", icon: Handshake, area: "lg:col-start-8 lg:row-start-2" },
  { title: "Inventory & Reporting Systems", icon: Boxes, area: "lg:col-start-8 lg:row-start-3" },
  { title: "Custom Web Applications", icon: Code2, area: "lg:col-start-7 lg:row-start-1" },
  { title: "Mobile App Solutions", icon: MonitorSmartphone, area: "lg:col-start-7 lg:row-start-2" },
];

function ProductTile({ item }: { item: EcosystemItem }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.slug ? `/solutions/${item.slug}` : "/solutions"}
      className={cn(
        "group flex min-h-[150px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-violet-50 to-white p-6 text-center transition-colors duration-300 hover:from-violet-100",
        item.area
      )}
    >
      <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-violet-100 bg-white shadow-sm">
        {item.logoSrc ? (
          <Image src={item.logoSrc} alt={item.title} fill sizes="56px" className="object-contain p-1.5" />
        ) : (
          <Icon className="h-7 w-7" style={{ color: "#4c1d95" }} strokeWidth={1.75} />
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold" style={{ color: "#4c1d95" }}>
          {item.title}
        </h3>
        {item.label ? (
          <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">
            {item.label}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

function CapabilityTile({ item }: { item: EcosystemItem }) {
  const Icon = item.icon;
  return (
    <div
      className={cn(
        "group flex min-h-[120px] flex-col items-center justify-center gap-2.5 bg-white p-4 text-center transition-colors duration-200 hover:bg-violet-50",
        item.area
      )}
    >
      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
        {item.logoSrc ? (
          <Image src={item.logoSrc} alt={item.title} fill sizes="40px" className="object-contain p-1" />
        ) : (
          <Icon
            className="h-5 w-5 text-slate-400 transition-colors group-hover:text-[#4c1d95]"
            strokeWidth={1.75}
          />
        )}
      </div>
      <h3 className="text-xs font-medium text-slate-600 transition-colors group-hover:text-slate-900">
        {item.title}
      </h3>
    </div>
  );
}

export default function SolutionsPreview() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Airavatl Solutions Ecosystem"
          description="From logistics apps to ERP, customer portals, SDMS, dashboards, and custom business solutions — Airavatl builds technology around real operations."
        />

        {/* Flat grid with thin grid lines: container bg shows through the 1px gaps */}
        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-violet-100 bg-violet-100 md:grid-cols-2 lg:grid-cols-8 lg:grid-rows-4">
          {mainProducts.map((item) => (
            <ProductTile key={item.title} item={item} />
          ))}
          {capabilities.map((item) => (
            <CapabilityTile key={item.title} item={item} />
          ))}
          {/* Blank cells keep the side columns uniform (desktop only) */}
          <div className="hidden bg-white lg:col-start-2 lg:row-start-3 lg:block" />
          <div className="hidden bg-white lg:col-start-1 lg:row-start-4 lg:block" />
          <div className="hidden bg-white lg:col-start-2 lg:row-start-4 lg:block" />
          <div className="hidden bg-white lg:col-start-7 lg:row-start-3 lg:block" />
          <div className="hidden bg-white lg:col-start-7 lg:row-start-4 lg:block" />
          <div className="hidden bg-white lg:col-start-8 lg:row-start-4 lg:block" />
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/solutions"
            style={{ backgroundColor: "#4c1d95" }}
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Explore All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
