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
    area: "col-start-2 row-start-2 md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-2",
  },
  {
    title: "Airavatl Partner",
    label: "Driver / Vehicle Partner App",
    icon: Truck,
    slug: "partner",
    area: "col-start-3 row-start-2 md:col-start-5 md:row-start-1 md:col-span-2 md:row-span-2",
  },
  {
    title: "Airavatl Enterprise",
    label: "Customer Portal",
    icon: Building2,
    slug: "enterprise",
    area: "col-start-2 row-start-3 md:col-start-3 md:row-start-3 md:col-span-2 md:row-span-2",
  },
  {
    title: "Airavatl Inroute",
    label: "SDMS Solution",
    icon: BarChart3,
    slug: "inroute",
    area: "col-start-3 row-start-3 md:col-start-5 md:row-start-3 md:col-span-2 md:row-span-2",
  },
];

// 2 columns on the left (cols 1–2) and 2 on the right (cols 7–8), mirrored.
const capabilities: EcosystemItem[] = [
  { title: "Logistics Management Software", icon: Package, area: "col-start-1 row-start-1 md:col-start-1 md:row-start-1" },
  { title: "Workflow Automation", icon: Workflow, area: "col-start-2 row-start-1 md:col-start-1 md:row-start-2" },
  { title: "Customer Portals", icon: LayoutDashboard, area: "col-start-3 row-start-1 md:col-start-1 md:row-start-3" },
  { title: "Sales & Distribution Software", icon: LineChart, area: "col-start-4 row-start-1 md:col-start-2 md:row-start-1" },
  { title: "Field Team Management Systems", icon: Users, area: "col-start-1 row-start-2 md:col-start-2 md:row-start-2" },
  { title: "Business Dashboards", icon: Gauge, area: "col-start-4 row-start-2 md:col-start-8 md:row-start-1" },
  { title: "Vendor & Partner Portals", icon: Handshake, area: "col-start-1 row-start-3 md:col-start-8 md:row-start-2" },
  { title: "Inventory & Reporting Systems", icon: Boxes, area: "col-start-4 row-start-3 md:col-start-8 md:row-start-3" },
  { title: "Custom Web Applications", icon: Code2, area: "col-start-2 row-start-4 md:col-start-7 md:row-start-1" },
  { title: "Mobile App Solutions", icon: MonitorSmartphone, area: "col-start-3 row-start-4 md:col-start-7 md:row-start-2" },
];

function ProductTile({ item }: { item: EcosystemItem }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.slug ? `/solutions/${item.slug}` : "/solutions"}
      className={cn(
        "group flex aspect-square flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-violet-50 to-white p-2 text-center transition-colors duration-300 hover:from-violet-100 md:aspect-auto md:min-h-[120px] md:gap-2 md:p-3 xl:min-h-[150px] xl:gap-3 xl:p-6",
        item.area
      )}
    >
      <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-violet-100 bg-white shadow-sm md:h-11 md:w-11 xl:h-14 xl:w-14">
        {item.logoSrc ? (
          <Image src={item.logoSrc} alt={item.title} fill sizes="56px" className="object-contain p-1.5" />
        ) : (
          <Icon className="h-4 w-4 md:h-5 md:w-5 xl:h-7 xl:w-7" style={{ color: "#4c1d95" }} strokeWidth={1.75} />
        )}
      </div>
      <div>
        <h3 className="text-[13px] font-semibold leading-tight xl:text-lg" style={{ color: "#4c1d95" }}>
          {item.title}
        </h3>
        {item.label ? (
          <p className="mt-1 hidden text-[10px] font-medium uppercase tracking-wider text-slate-500 md:block xl:text-[11px]">
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
        "group flex aspect-square flex-col items-center justify-center gap-1.5 bg-white p-2 text-center transition-colors duration-200 hover:bg-violet-50 md:aspect-auto md:min-h-[92px] md:gap-2 md:p-3 xl:min-h-[120px] xl:gap-2.5 xl:p-4",
        item.area
      )}
    >
      <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg md:h-9 md:w-9 xl:h-10 xl:w-10">
        {item.logoSrc ? (
          <Image src={item.logoSrc} alt={item.title} fill sizes="40px" className="object-contain p-1" />
        ) : (
          <Icon
            className="h-5 w-5 text-slate-400 transition-colors group-hover:text-[#4c1d95]"
            strokeWidth={1.75}
          />
        )}
      </div>
      <h3 className="text-[10px] font-medium leading-tight text-slate-600 transition-colors group-hover:text-slate-900 md:text-xs">
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
        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-4 gap-px overflow-hidden rounded-2xl border border-violet-100 bg-violet-100 md:grid-cols-8 md:grid-rows-4">
          {mainProducts.map((item) => (
            <ProductTile key={item.title} item={item} />
          ))}
          {capabilities.map((item) => (
            <CapabilityTile key={item.title} item={item} />
          ))}
          {/* Mobile-only blanks (bottom corners of the 4-col map) */}
          <div className="bg-white col-start-1 row-start-4 md:hidden" />
          <div className="bg-white col-start-4 row-start-4 md:hidden" />
          {/* Desktop-only blanks (keep the 8-col side columns uniform) */}
          <div className="hidden bg-white md:col-start-2 md:row-start-3 md:block" />
          <div className="hidden bg-white md:col-start-1 md:row-start-4 md:block" />
          <div className="hidden bg-white md:col-start-2 md:row-start-4 md:block" />
          <div className="hidden bg-white md:col-start-7 md:row-start-3 md:block" />
          <div className="hidden bg-white md:col-start-7 md:row-start-4 md:block" />
          <div className="hidden bg-white md:col-start-8 md:row-start-4 md:block" />
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
