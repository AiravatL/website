"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

type MenuItem = { label: string; href: string };

const servicesMenu: MenuItem[] = [
  { label: "Vehicle Booking", href: "/services" },
  { label: "Logistics Handling", href: "/services" },
  { label: "Market Price Discovery", href: "/services" },
  { label: "Driver & Vehicle Partner Network", href: "/services" },
];

const solutionsMenu: MenuItem[] = [
  { label: "Logistics Technology Ecosystem", href: "/solutions#ecosystem" },
  { label: "Business Software & Dashboards", href: "/solutions" },
  { label: "Custom Software Development", href: "/solutions" },
];

function NavDropdown({
  title,
  href,
  items,
}: {
  title: string;
  href: string;
  items: MenuItem[];
}) {
  return (
    <div className="relative group">
      <Link
        href={href}
        className="flex items-center gap-1 text-slate-800 hover:text-slate-600 transition-colors text-sm"
      >
        {title}
        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </Link>

      {/* pt-4 acts as a hover bridge so the menu stays open when moving down */}
      <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 invisible translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="w-64 rounded-2xl border border-violet-100 bg-white p-2 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-xl px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-900"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={href}
            className="mt-1 block rounded-xl px-4 py-2.5 text-sm font-medium text-violet-900 transition-colors hover:bg-violet-50"
          >
            View all {title.toLowerCase()} →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white border border-white/20 rounded-full px-8 py-2 h-16 flex items-center"
    >
      <div className="flex items-center justify-center w-full">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Airavatl" width={120} height={120} className="h-30 w-30" priority />
        </Link>

        <div className="hidden md:flex items-center space-x-8 mx-12">
          <NavDropdown title="Services" href="/services" items={servicesMenu} />
          <NavDropdown title="Solutions" href="/solutions" items={solutionsMenu} />
          <Link href="/inroute" className="text-slate-800 hover:text-slate-600 transition-colors text-sm">InRoute</Link>
          <Link href="/about" className="text-slate-800 hover:text-slate-600 transition-colors text-sm">About</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            href="https://enterprise.airavatl.in/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-7 py-2.5 rounded-full text-base font-medium hover:opacity-90 transition-all whitespace-nowrap"
            style={{ backgroundColor: "#4c1d95" }}
          >
            Airavatl Enterprise
          </motion.a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[80vw] max-w-xs bg-white border border-violet-100 rounded-2xl shadow-lg p-3 flex flex-col">
          <Link href="/services" onClick={() => setIsOpen(false)} className="px-4 py-2.5 rounded-xl text-slate-800 hover:bg-violet-50 transition-colors text-sm">Services</Link>
          <Link href="/solutions" onClick={() => setIsOpen(false)} className="px-4 py-2.5 rounded-xl text-slate-800 hover:bg-violet-50 transition-colors text-sm">Solutions</Link>
          <Link href="/inroute" onClick={() => setIsOpen(false)} className="px-4 py-2.5 rounded-xl text-slate-800 hover:bg-violet-50 transition-colors text-sm">InRoute</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="px-4 py-2.5 rounded-xl text-slate-800 hover:bg-violet-50 transition-colors text-sm">About</Link>
          <a
            href="https://enterprise.airavatl.in/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center text-white px-4 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all"
            style={{ backgroundColor: "#4c1d95" }}
          >
            Airavatl Enterprise
          </a>
        </div>
      )}
    </motion.nav>
  );
}
