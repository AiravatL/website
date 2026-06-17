"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram, Linkedin, Globe } from "lucide-react";

const footerLinks: Record<string, string[]> = {
  Services: ["Inter-State Logistics", "Intra-State Logistics", "Logistics Consultancy"],
  Solutions: ["Fleet Management", "GPS Tracking", "Airavatl Enterprise"],
  Resources: ["Tracking", "Documentation", "Transit Times", "Shipping Guides", "API Integration"],
  Company: ["About Us", "Careers", "News & Media", "Sustainability", "Investor Relations"],
};

const socialIcons = [Twitter, Facebook, Instagram, Linkedin];

export default function Footer() {
  return (
    <footer className="border-t border-violet-900 bg-[#2e1065] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2 flex flex-col">
            <p className="text-violet-100 mb-6 leading-relaxed text-center">
              Airavatl is a leading logistics company providing comprehensive supply
              chain solutions across India.
            </p>
            <div className="flex items-center justify-center space-x-4">
              {socialIcons.map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-violet-900/60 rounded-full flex items-center justify-center text-violet-100 hover:text-white hover:bg-violet-800 transition-all duration-300"
                  aria-label="social"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => {
                  const isEnterprise = link === "Airavatl Enterprise";
                  return (
                    <li key={link}>
                      <a
                        href={isEnterprise ? "https://enterprise.airavatl.in/" : "#"}
                        target={isEnterprise ? "_blank" : undefined}
                        rel={isEnterprise ? "noopener noreferrer" : undefined}
                        className="text-violet-200 hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-violet-900 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-violet-200">
                <Globe size={16} />
                <select className="bg-transparent text-violet-200 text-sm focus:outline-none" aria-label="Language">
                  <option className="text-slate-900">English</option>
                  <option className="text-slate-900">Español</option>
                  <option className="text-slate-900">Français</option>
                  <option className="text-slate-900">Deutsch</option>
                </select>
              </div>
              <div className="text-violet-200 text-sm">© {new Date().getFullYear()} AiravatL Logistics</div>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-violet-200 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <Link href="/delete-account" className="hover:text-white transition-colors">
                Delete Account
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
