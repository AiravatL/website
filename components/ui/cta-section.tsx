import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface CTASectionProps {
  heading: string;
  text: string;
  buttons: CTAButton[];
  className?: string;
}

export function CTASection({ heading, text, buttons, className }: CTASectionProps) {
  return (
    <section className={cn("px-6 py-20 md:py-24", className)}>
      <div className="mx-auto max-w-5xl rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-violet-100 px-8 py-16 text-center shadow-sm">
        <h2 className="text-5xl font-light leading-tight text-slate-900 md:text-6xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          {text}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {buttons.map((button) =>
            button.variant === "outline" ? (
              <Link
                key={button.label}
                href={button.href}
                className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-8 py-3.5 text-sm font-medium text-violet-900 transition-all hover:-translate-y-0.5 hover:bg-violet-50"
              >
                {button.label}
              </Link>
            ) : (
              <Link
                key={button.label}
                href={button.href}
                style={{ backgroundColor: "#4c1d95" }}
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                {button.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
