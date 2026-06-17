"use client";

import { motion } from "framer-motion";
import { NeonOrbs } from "./ui/neon-orbs";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-orange-100">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <NeonOrbs />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-light mb-8 leading-tight"
        >
          <span style={{ color: "#4c1d95" }}>We Ship Your Trust</span>{" "}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          style={{ color: "#4c1d95" }}
        >
          Transforming Logistics with Intelligent Routing, Real-Time Tracking & Best-in-Market Prices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <motion.a
            href="https://enterprise.airavatl.in/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all"
            style={{ backgroundColor: "#4c1d95" }}
          >
            Airavatl for Enterprise
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
