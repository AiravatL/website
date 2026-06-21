import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

type Column = { heading: string; links: { label: string; href: string }[] };

const ENTERPRISE_URL = "https://enterprise.airavatl.in/";

const columns: Column[] = [
  {
    heading: "Services",
    links: [
      { label: "Vehicle Booking", href: "/services" },
      { label: "Logistics Handling", href: "/services" },
      { label: "Driver & Partner Network", href: "/services" },
      { label: "Trip Coordination", href: "/services" },
      { label: "Enterprise Logistics", href: "/services" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Airavatl Customer App", href: "/solutions" },
      { label: "Airavatl Partner App", href: "/solutions" },
      { label: "Airavatl Enterprise", href: ENTERPRISE_URL },
      { label: "Airavatl Inroute (SDMS)", href: "/solutions" },
      { label: "Custom Software", href: "/solutions" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Delete Account", href: "/delete-account" },
    ],
  },
];

const linkClass = "text-sm text-violet-200 transition-colors hover:text-white";

function FooterLink({ label, href }: { label: string; href: string }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={linkClass}>
      {label}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2e1065] text-violet-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + contact */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-white">Airavatl</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-violet-200">
              Technology-enabled logistics across North-East India — vehicle
              booking, partner coordination, and a digital ecosystem built
              around real operations.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-violet-300" />
                <a href="mailto:airavatlogistic@gmail.com" className="transition-colors hover:text-white">
                  airavatlogistic@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-violet-300" />
                <a href="tel:+917099220645" className="transition-colors hover:text-white">
                  +91 70992 20645
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-violet-300" />
                <span>North-East India</span>
              </li>
            </ul>

            <a
              href="https://play.google.com/store/apps/details?id=com.airavatl.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/15 transition-colors hover:bg-white/20"
            >
              Download the Airavatl App
            </a>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-semibold text-white">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink label={link.label} href={link.href} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-violet-900 pt-8 sm:flex-row">
          <p className="text-sm text-violet-300">
            © {year} Airavatl Logistics. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/privacy" className="text-violet-200 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/delete-account" className="text-violet-200 transition-colors hover:text-white">
              Delete Account
            </Link>
            <Link href="/contact" className="text-violet-200 transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
