import Image from "next/image";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  /**
   * Optional image. The image area is only rendered when a real `image`
   * path is provided — no placeholder space is shown otherwise.
   */
  image?: string;
  imageAlt?: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  badge,
  image,
  imageAlt,
  className,
}: ServiceCardProps) {
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
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-100 bg-violet-50">
        <Icon className="h-6 w-6" style={{ color: "#4c1d95" }} strokeWidth={1.75} />
      </div>

      {badge ? (
        <span className="mb-3 inline-flex self-start items-center rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-900">
          {badge}
        </span>
      ) : null}

      <h3 className="text-xl font-medium text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
