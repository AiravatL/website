import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { products, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: { absolute: `${product.title} | Airavatl` },
    description: product.description,
    alternates: { canonical: `/solutions/${product.slug}` },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const Icon = product.icon;

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-violet-100 px-6 pb-20 pt-36 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-700 transition-colors hover:text-violet-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Solutions
          </Link>

          <div className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-100 bg-white shadow-sm">
            <Icon className="h-8 w-8" style={{ color: "#4c1d95" }} strokeWidth={1.5} />
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-slate-500">
            {product.label}
          </p>
          <h1 className="mt-2 text-5xl font-light leading-tight text-slate-900 md:text-6xl">
            {product.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            {product.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {product.href ? (
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#4c1d95" }}
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                {product.ctaLabel ?? "Learn More"}
              </a>
            ) : null}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-8 py-3.5 text-sm font-medium text-violet-900 transition-all hover:-translate-y-0.5 hover:bg-violet-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl font-light leading-tight text-slate-900 md:text-5xl">
            What it does
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {product.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-100 bg-violet-50">
                    <Check className="h-5 w-5" style={{ color: "#4c1d95" }} />
                  </span>
                  <h3 className="text-lg font-medium text-slate-900">{feature.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-700 transition-colors hover:text-violet-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
