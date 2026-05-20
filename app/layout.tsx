import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.airavatl.com"),
  title: {
    default: "AiravatL — Transforming Logistics Across North-East India",
    template: "%s — AiravatL",
  },
  description:
    "Intelligent routing, real-time tracking, and best-in-market freight pricing across North-East India.",
  keywords: [
    "logistics",
    "North-East India",
    "freight",
    "cargo",
    "shipping",
    "supply chain",
    "real-time tracking",
    "intelligent routing",
    "Airavatl",
    "transportation",
    "delivery",
    "Assam logistics",
    "Meghalaya logistics",
    "Manipur logistics",
    "Nagaland logistics",
    "Tripura logistics",
    "Arunachal Pradesh logistics",
    "Mizoram logistics",
    "Sikkim logistics",
  ],
  openGraph: {
    title: "AiravatL — Logistics Across North-East India",
    description:
      "Intelligent routing, real-time tracking, and best-in-market freight pricing.",
    url: "https://www.airavatl.com",
    siteName: "AiravatL",
    images: ["/logo.png"],
    type: "website",
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 min-h-screen antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
