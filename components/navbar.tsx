"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

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
          <Image src="/logo.png" alt="AiravatL" width={120} height={120} className="h-30 w-30" priority />
        </Link>

        <div className="hidden md:flex items-center space-x-8 mx-12">
          <a href="#services" className="text-slate-800 hover:text-slate-600 transition-colors text-sm">Services</a>
          <a href="#solutions" className="text-slate-800 hover:text-slate-600 transition-colors text-sm">Solutions</a>
          <a href="#tracking" className="text-slate-800 hover:text-slate-600 transition-colors text-sm">Tracking</a>
          <a href="#about" className="text-slate-800 hover:text-slate-600 transition-colors text-sm">About</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="text-slate-800 hover:text-slate-600 transition-colors text-sm whitespace-nowrap">
            Customer Portal
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all whitespace-nowrap"
            style={{ backgroundColor: "#4c1d95" }}
          >
            Get Quote
          </motion.button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </motion.nav>
  );
}
