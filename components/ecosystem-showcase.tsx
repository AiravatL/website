"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Smartphone,
  Truck,
  LayoutDashboard,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Platform = {
  icon: LucideIcon;
  title: string;
  label: string;
  description: string;
  /** Optional real logo — drop a file in /public and set this later. */
  logoSrc?: string;
};

const platforms: Platform[] = [
  {
    icon: Smartphone,
    title: "Airavatl",
    label: "Customer / Consigner App",
    description:
      "A customer-facing app where consigners and businesses can create transport requirements, manage bookings, and access logistics services digitally.",
  },
  {
    icon: Truck,
    title: "Airavatl Partner",
    label: "Driver / Vehicle Partner App",
    description:
      "A partner app built for drivers and vehicle owners to receive logistics opportunities, participate in transport operations, and manage assigned work.",
  },
  {
    icon: LayoutDashboard,
    title: "Airavatl Enterprise",
    label: "Customer Portal",
    description:
      "A customer portal that allows clients to access updates, submit requirements, view relevant information, and interact with business services online.",
  },
  {
    icon: BarChart3,
    title: "Airavatl Inroute",
    label: "Sales & Distribution (SDMS)",
    description:
      "Our sales and distribution management platform for managing sales teams, product movement, inventory allocation, distributor workflows, and business reporting.",
  },
];

export default function EcosystemShowcase() {
  const [active, setActive] = useState(0);
  const current = platforms[active];
  const CurrentIcon = current.icon;

  return (
    <div>
      {/* Active product — writing on top */}
      <div className="mx-auto flex min-h-[280px] max-w-3xl flex-col items-center text-center">
        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-violet-100 bg-violet-50">
          {current.logoSrc ? (
            <Image
              src={current.logoSrc}
              alt={current.title}
              fill
              sizes="64px"
              className="object-contain p-2"
            />
          ) : (
            <CurrentIcon className="h-8 w-8" style={{ color: "#4c1d95" }} strokeWidth={1.5} />
          )}
        </div>

        <p className="mt-8 text-2xl font-light leading-relaxed text-slate-800 md:text-3xl">
          {current.description}
        </p>

        <p className="mt-8 text-base">
          <span className="font-semibold" style={{ color: "#4c1d95" }}>
            {current.title}
          </span>
          <span className="text-slate-500">, {current.label}</span>
        </p>
      </div>

      {/* Logo tabs — bottom */}
      <div className="mt-16 grid grid-cols-2 border-t border-slate-200 md:grid-cols-4">
        {platforms.map((platform, i) => {
          const isActive = i === active;
          const TabIcon = platform.icon;
          return (
            <button
              key={platform.title}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className="group relative flex flex-col items-center gap-3 px-4 pb-2 pt-8 transition"
            >
              {isActive ? (
                <span className="absolute -top-px left-4 right-4 h-0.5 rounded bg-[#4c1d95]" />
              ) : null}

              <div
                className={cn(
                  "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl transition-colors",
                  isActive ? "bg-violet-50" : "bg-transparent"
                )}
              >
                {platform.logoSrc ? (
                  <Image
                    src={platform.logoSrc}
                    alt={platform.title}
                    fill
                    sizes="44px"
                    className={cn(
                      "object-contain p-1.5 transition",
                      isActive
                        ? "opacity-100"
                        : "opacity-50 grayscale group-hover:opacity-80"
                    )}
                  />
                ) : (
                  <TabIcon
                    className={cn(
                      "h-5 w-5 transition-colors",
                      isActive
                        ? "text-[#4c1d95]"
                        : "text-slate-400 group-hover:text-slate-600"
                    )}
                    strokeWidth={1.75}
                  />
                )}
              </div>

              <span
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-slate-900"
                    : "text-slate-400 group-hover:text-slate-600"
                )}
              >
                {platform.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
