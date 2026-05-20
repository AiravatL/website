"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Car, Sliders, ChevronRight, Banknote, Navigation, Package, MapPin, type LucideIcon } from "lucide-react";

type Feature = { label: string; value: number; icon: LucideIcon };
type SideKey = "left" | "right";
type Side = {
  id: SideKey;
  label: string;
  title: string;
  description: string;
  stats: { connectionStatus: string; vehicleAvailability: number };
  features: Feature[];
};

const PRODUCT_DATA: Record<SideKey, Side> = {
  left: {
    id: "left",
    label: "Driver App",
    title: "Airavat Driver App",
    description:
      "Drive with Airavat and earn on your schedule. Get instant ride requests, real-time navigation, and seamless earnings tracking all in one app.",
    stats: { connectionStatus: "Active", vehicleAvailability: 82 },
    features: [
      { label: "Daily Earnings", value: 95, icon: Banknote },
      { label: "Trip Success Rate", value: 98, icon: Navigation },
    ],
  },
  right: {
    id: "right",
    label: "Consigner App",
    title: "Airavat Consigner",
    description:
      "Ship your packages with ease using Airavat Consigner. Track shipments in real-time, manage deliveries, and connect with reliable drivers instantly.",
    stats: { connectionStatus: "Active", vehicleAvailability: 74 },
    features: [
      { label: "Delivery Success", value: 96, icon: Package },
      { label: "Shipment Tracking", value: 92, icon: MapPin },
    ],
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 100, damping: 20 } },
  exit: { opacity: 0, y: -10, filter: "blur(5px)" },
};

function ProductVisual({ isLeft }: { isLeft: boolean }) {
  return (
    <motion.div layout="position" className="relative group shrink-0 flex flex-col items-center">
      <div className="relative">
        <Image src="/phone-mockup.svg" alt="Mobile app mockup" width={440} height={880} className="relative z-10 w-full h-auto max-w-md" />
      </div>
      <motion.div layout="position" className="mt-8 whitespace-nowrap z-20">
        <a
          href="https://play.google.com/store/apps/details?id=com.airavatl.app&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-xs uppercase tracking-widest ${
            isLeft
              ? "text-white bg-violet-900 hover:bg-violet-800 border-violet-900"
              : "text-violet-900 bg-white border-violet-300 hover:bg-violet-50"
          } px-5 py-3 rounded-full border transition-colors cursor-pointer shadow-sm`}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          Download App
        </a>
      </motion.div>
    </motion.div>
  );
}

function ProductDetails({ data, isLeft }: { data: Side; isLeft: boolean }) {
  const alignClass = isLeft ? "items-start text-left" : "items-end text-right";
  const flexDirClass = isLeft ? "flex-row" : "flex-row-reverse";
  const barPositionClass = isLeft ? "left-0" : "right-0";

  // Both sides stay within the violet brand; left = deeper, right = lighter.
  const labelColor = isLeft ? "text-violet-700" : "text-violet-500";
  const titleColor = isLeft ? "text-violet-900" : "text-violet-700";
  const descColor = "text-slate-600";
  const cardBg = "bg-white";
  const cardBorder = isLeft ? "border-violet-200" : "border-violet-100";
  const featureText = "text-slate-900";
  const featureTextMuted = "text-slate-500";
  const progressBg = "bg-violet-100";
  const progressBar = isLeft ? "bg-violet-900" : "bg-violet-500";
  const buttonText = "text-violet-700 hover:text-violet-900";
  const batteryColor = "text-slate-600";

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className={`flex flex-col ${alignClass}`}>
      <motion.h2 variants={itemVariants} className={`text-sm font-bold uppercase tracking-[0.2em] ${labelColor} mb-2`}>
        {data.label}
      </motion.h2>
      <motion.h1
        variants={itemVariants}
        className={`text-5xl md:text-6xl font-light tracking-tight mb-2 ${titleColor}`}
      >
        {data.title}
      </motion.h1>
      <motion.p variants={itemVariants} className={`${descColor} mb-8 max-w-sm leading-relaxed ${isLeft ? "mr-auto" : "ml-auto"}`}>
        {data.description}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className={`w-full space-y-6 ${cardBg} p-6 rounded-2xl border ${cardBorder} shadow-sm`}
      >
        {data.features.map((feature, idx) => (
          <div key={feature.label} className="group">
            <div className={`flex items-center justify-between mb-3 text-sm ${flexDirClass}`}>
              <div className={`flex items-center gap-2 ${feature.value > 50 ? featureText : featureTextMuted}`}>
                <feature.icon size={16} /> <span>{feature.label}</span>
              </div>
              <span className={`font-mono text-xs ${featureTextMuted}`}>{feature.value}%</span>
            </div>
            <div className={`relative h-2 w-full ${progressBg} rounded-full overflow-hidden`}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${feature.value}%` }}
                transition={{ duration: 1, delay: 0.4 + idx * 0.15 }}
                className={`absolute top-0 bottom-0 ${barPositionClass} ${progressBar}`}
              />
            </div>
          </div>
        ))}

        <div className={`pt-4 flex ${isLeft ? "justify-start" : "justify-end"}`}>
          <button type="button" className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${buttonText} transition-colors group`}>
            <Sliders size={14} /> View Specs
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className={`mt-6 flex items-center gap-3 ${batteryColor} ${flexDirClass}`}>
        <Car size={16} />
        <span className="text-sm font-medium">{data.stats.vehicleAvailability}% Vehicle Availability</span>
      </motion.div>
    </motion.div>
  );
}

function Switcher({ activeId, onToggle, isLeft }: { activeId: SideKey; onToggle: (id: SideKey) => void; isLeft: boolean }) {
  const options = Object.values(PRODUCT_DATA).map((p) => ({ id: p.id, label: p.label }));
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
      <motion.div
        layout
        className="flex items-center gap-1 p-1.5 rounded-full bg-white border border-violet-200 shadow-lg ring-1 ring-violet-100"
      >
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            onClick={() => onToggle(opt.id)}
            whileTap={{ scale: 0.96 }}
            className="relative w-24 h-12 rounded-full flex items-center justify-center text-sm font-medium focus:outline-none"
          >
            {activeId === opt.id && (
              <motion.div
                layoutId="island-surface"
                className={`absolute inset-0 rounded-full ${isLeft ? "bg-violet-900" : "bg-violet-500"}`}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-300 ${
                activeId === opt.id ? "text-white" : "text-violet-700 hover:text-violet-900"
              }`}
            >
              {opt.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

export default function MobileApps() {
  const [activeSide, setActiveSide] = useState<SideKey>("left");
  const currentData = PRODUCT_DATA[activeSide];
  const isLeft = activeSide === "left";

  return (
    <div id="solutions" className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 via-white to-violet-100 text-slate-900">
      <main className="relative z-10 w-full px-6 py-8 flex flex-col justify-center max-w-7xl mx-auto">
        <motion.div
          layout
          transition={{ type: "spring", bounce: 0, duration: 0.9 }}
          className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 lg:gap-48 w-full ${
            isLeft ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <ProductVisual isLeft={isLeft} />
          <motion.div layout="position" className="w-full max-w-md">
            <AnimatePresence mode="wait">
              <ProductDetails key={activeSide} data={currentData} isLeft={isLeft} />
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>
      <Switcher activeId={activeSide} onToggle={setActiveSide} isLeft={isLeft} />
    </div>
  );
}
