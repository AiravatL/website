import Image from "next/image";
import { Check, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SolutionCardProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  points?: string[];
  /**
   * Optional image. The image area is only rendered when a real `image`
   * path is provided — no placeholder space is shown otherwise.
   */
  image?: string;
  imageAlt?: string;
  className?: string;
}

export function SolutionCard({
  icon: Icon,
  badge,
  title,
  description,
  points,
  image,
  imageAlt,
  className,
}: SolutionCardProps) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-violet-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg",
        className
      )}
    >
      {image ? (
        <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-100 bg-violet-50">
          <Icon className="h-6 w-6" style={{ color: "#4c1d95" }} strokeWidth={1.75} />
        </div>
        <span className="inline-flex items-center rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-900">
          {badge}
        </span>
      </div>

      <h3 className="text-xl font-medium text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>

      {points && points.length > 0 ? (
        <ul className="mt-5 space-y-2.5">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 text-sm text-slate-700"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: "#4c1d95" }}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
