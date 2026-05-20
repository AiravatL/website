"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Smartphone, Truck, MapPin, SatelliteDish } from "lucide-react";

function FleetNetwork() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const id = setInterval(() => setScale((prev) => (prev === 1 ? 1.2 : 1)), 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div animate={{ scale }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
        <Truck className="w-20 h-20 md:w-28 md:h-28 text-white" strokeWidth={1.2} />
      </motion.div>
    </div>
  );
}

function SmartRouting() {
  return (
    <div className="h-full flex items-center justify-center relative">
      <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        <MapPin className="w-12 h-12 text-white" fill="currentColor" />
      </motion.div>
    </div>
  );
}

function RealTimePricing() {
  const [price, setPrice] = useState(1200);
  useEffect(() => {
    const id = setInterval(() => {
      setPrice((prev) => {
        let next = prev + (Math.random() - 0.5) * 20;
        if (next < 900) next = 900;
        if (next > 1500) next = 1500;
        return Math.round(next);
      });
    }, 900);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2 md:gap-3 w-full">
      <div className="flex items-center justify-center w-full">
        <span className="text-2xl md:text-3xl font-semibold text-white">₹{price}</span>
      </div>
    </div>
  );
}

function SecurityBadge() {
  const [shields, setShields] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
  ]);
  useEffect(() => {
    const id = setInterval(() => {
      setShields((prev) => {
        const nextIndex = prev.findIndex((s) => !s.active);
        if (nextIndex === -1) return prev.map(() => ({ id: Math.random(), active: false }));
        return prev.map((s, i) => (i === nextIndex ? { ...s, active: true } : s));
      });
    }, 800);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center justify-center h-full gap-2">
      {shields.map((shield) => (
        <motion.div
          key={shield.id}
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${shield.active ? "bg-white/20 border-2 border-white" : "bg-white/5 border-2 border-transparent"}`}
          animate={{ scale: shield.active ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Lock className={`w-5 h-5 ${shield.active ? "text-white" : "text-white/40"}`} />
        </motion.div>
      ))}
    </div>
  );
}

function LiveTracking() {
  const [ping, setPing] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setPing((p) => !p), 1200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center justify-center h-full relative">
      <SatelliteDish className="w-16 h-16 text-white z-10" />
      <motion.div
        className="absolute w-16 h-16 border-2 border-white/30 rounded-full"
        animate={{ scale: ping ? 2.5 : 1, opacity: ping ? 0 : 0.7 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        style={{ left: 0, top: 0 }}
      />
    </div>
  );
}

export default function TechnologySection() {
  return (
    <section id="tracking" className="bg-black px-6 py-24 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto">
        <motion.p
          className="text-slate-400 text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Features
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px]">
          <motion.div
            className="md:col-span-2 md:row-span-2 bg-slate-800/50 border-2 border-slate-700 rounded-xl p-8 flex flex-col hover:border-slate-600 transition-colors cursor-pointer overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(255, 255, 255, 0.1)" }}
          >
            <div className="flex-1"><FleetNetwork /></div>
            <div className="mt-4">
              <h3 className="text-xl text-white font-medium">Fleet Network</h3>
              <p className="text-white/70 text-sm mt-1">Verified trucks across multiple segments — from 3-wheelers to multi-axle trailers.</p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 bg-slate-800/50 border-2 border-slate-700 rounded-xl p-6 flex flex-col hover:border-slate-600 transition-colors cursor-pointer overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1 min-h-0"><SmartRouting /></div>
            <div className="mt-3">
              <h3 className="text-lg text-white font-medium">Smart Routing</h3>
              <p className="text-white/70 text-xs mt-1">Optimized routes based on distance, terrain, and real road conditions.</p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 md:row-span-2 bg-slate-800/50 border-2 border-slate-700 rounded-xl p-6 flex flex-col hover:border-slate-600 transition-colors cursor-pointer overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.1)" }}
          >
            <div className="flex-1 flex items-center justify-center"><div className="relative"><LiveTracking /></div></div>
            <div className="mt-auto relative z-20 bg-white/10 backdrop-blur-sm rounded-lg p-2">
              <h3 className="text-xl text-white flex items-center gap-2 font-medium">
                <SatelliteDish className="w-5 h-5" /> Live Vehicle Tracking
              </h3>
              <p className="text-white/70 text-sm mt-1">Track your truck in real time with location updates and status alerts.</p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 bg-slate-800/50 border-2 border-slate-700 rounded-xl p-8 flex flex-col hover:border-slate-600 transition-colors cursor-pointer overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.3 }} whileHover={{ scale: 0.98 }} style={{ minHeight: 0 }}
          >
            <div className="flex-1 min-h-0 flex flex-col"><RealTimePricing /></div>
            <div className="mt-4">
              <h3 className="text-xl text-white font-medium">Real-Time Pricing</h3>
              <p className="text-white/70 text-sm mt-1">AI-driven rate calculation for fair, market-best freight pricing.</p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-3 bg-slate-800/50 border-2 border-slate-700 rounded-xl p-8 flex flex-col hover:border-slate-600 transition-colors cursor-pointer overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.4 }} whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1"><SecurityBadge /></div>
            <div className="mt-4">
              <h3 className="text-xl text-white flex items-center gap-2 font-medium">
                <Lock className="w-5 h-5" /> Security First
              </h3>
              <p className="text-white/70 text-sm mt-1">Enterprise-grade encryption and data protection built-in.</p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-3 bg-slate-800/50 border-2 border-slate-700 rounded-xl p-8 flex flex-col hover:border-slate-600 transition-colors cursor-pointer overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.5 }} whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1 flex items-center justify-center"><Smartphone className="w-16 h-16 text-white" /></div>
            <div className="mt-4">
              <h3 className="text-xl text-white font-medium">Mobile Ready</h3>
              <p className="text-white/70 text-sm mt-1">Optimized for all devices and screen sizes.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
