import {
  Smartphone,
  Truck,
  LayoutDashboard,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  slug: string;
  title: string;
  label: string;
  description: string;
  icon: LucideIcon;
  /** External link (Play Store / portal), if any. */
  href?: string;
  ctaLabel?: string;
  features: { title: string; description: string }[];
};

export const products: Product[] = [
  {
    slug: "customer-app",
    title: "Airavatl",
    label: "Customer / Consigner App",
    description:
      "The Airavatl Customer App lets consigners and businesses create transport requirements, manage bookings, and access logistics services digitally — all from a single app.",
    icon: Smartphone,
    href: "https://play.google.com/store/apps/details?id=com.airavatl.app",
    ctaLabel: "Download on Google Play",
    features: [
      { title: "Transport Requirements", description: "Create and post transport requirements in minutes." },
      { title: "Bookings & Enquiries", description: "Manage bookings, quotes, and enquiries in one place." },
      { title: "Shipment Tracking", description: "Follow your shipment status as it moves." },
      { title: "Digital Support", description: "Stay connected with the Airavatl team and partners." },
    ],
  },
  {
    slug: "partner",
    title: "Airavatl Partner",
    label: "Driver / Vehicle Partner App",
    description:
      "The Airavatl Partner App is built for drivers and vehicle owners to receive logistics opportunities, participate in transport operations, and manage assigned work.",
    icon: Truck,
    href: "https://play.google.com/store/apps/details?id=com.airavatl.partners",
    ctaLabel: "Download on Google Play",
    features: [
      { title: "Job Opportunities", description: "Receive nearby logistics opportunities as they arrive." },
      { title: "Easy Onboarding", description: "Onboard your vehicle and driver details quickly." },
      { title: "Bid & Participate", description: "Take part in trips and bid for available loads." },
      { title: "Trip Updates", description: "Update and track assigned trips on the go." },
    ],
  },
  {
    slug: "enterprise",
    title: "Airavatl Enterprise",
    label: "Customer Portal",
    description:
      "Airavatl Enterprise is our customer portal where clients access updates, submit requirements, view relevant information, and interact with business services online.",
    icon: LayoutDashboard,
    href: "https://enterprise.airavatl.in/",
    ctaLabel: "Open Customer Portal",
    features: [
      { title: "Client Login", description: "Secure access for your business and team." },
      { title: "Request Management", description: "Submit and manage requirements online." },
      { title: "Status Visibility", description: "Track updates and information in one place." },
      { title: "Online Support", description: "Interact with business services digitally." },
    ],
  },
  {
    slug: "inroute",
    title: "Airavatl Inroute",
    label: "Sales & Distribution (SDMS)",
    description:
      "Airavatl Inroute is our sales and distribution management platform for managing sales teams, product movement, inventory allocation, distributor workflows, and business reporting.",
    icon: BarChart3,
    features: [
      { title: "Sales Tracking", description: "Monitor sales teams and daily performance." },
      { title: "Inventory Movement", description: "Track product movement and allocation." },
      { title: "Distributor Management", description: "Coordinate distributor workflows end to end." },
      { title: "Daily Reporting", description: "Daily reporting and clear business insights." },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
