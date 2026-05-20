"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Vehicle = {
  id: number;
  name: string;
  image: string;
  capacity: string;
  type: string;
  bestFor: string;
  features: string[];
  rating: number;
  trips: string;
};

const vehicles: Vehicle[] = [
  { id: 1, name: "3 Wheeler", image: "/images/icons/3-wheeler-icon.png", capacity: "500 kg", type: "Light Cargo", bestFor: "Local Delivery", features: ["City Access", "Quick Pickup", "Affordable"], rating: 4.8, trips: "15K+" },
  { id: 2, name: "Tata Intra", image: "/images/icons/intra-icon.png", capacity: "1 Ton", type: "Mini Truck", bestFor: "Urban Distribution", features: ["Fuel Efficient", "Easy Maneuver", "Compact"], rating: 4.7, trips: "22K+" },
  { id: 3, name: "Bolero Pickup", image: "/images/icons/bolero-pickup-icon.png", capacity: "1.5 Tons", type: "Pickup Truck", bestFor: "Medium Loads", features: ["All Terrain", "Versatile", "Reliable"], rating: 4.9, trips: "18K+" },
  { id: 4, name: "Tata 407", image: "/images/icons/407-icon.png", capacity: "2.5 Tons", type: "Light Truck", bestFor: "Commercial Goods", features: ["Popular Choice", "Spacious", "Economic"], rating: 4.8, trips: "35K+" },
  { id: 5, name: "Tata 1109", image: "/images/icons/1109-icon.png", capacity: "9 Tons", type: "Medium Truck", bestFor: "Heavy Cargo", features: ["High Capacity", "Long Haul", "Robust"], rating: 4.7, trips: "28K+" },
  { id: 6, name: "12 Wheeler", image: "/images/icons/12-wheel-icon.png", capacity: "20+ Tons", type: "Heavy Truck", bestFor: "Bulk Transport", features: ["Max Capacity", "Highway Ready", "Industrial"], rating: 4.9, trips: "12K+" },
  { id: 7, name: "Container", image: "/images/icons/container-icon.png", capacity: "30+ Tons", type: "Trailer", bestFor: "Full Load", features: ["Secure", "Weather-proof", "Standardized"], rating: 4.8, trips: "8K+" },
];

export default function VehicleShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const next = () => setActiveIndex((p) => (p + 1) % vehicles.length);
  const prev = () => setActiveIndex((p) => (p - 1 + vehicles.length) % vehicles.length);
  const v = vehicles[activeIndex];

  return (
    <section id="services" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Move Anything.{" "}
            <span className="font-medium" style={{ color: "#f3f0f7ff" }}>Choose the Right Truck.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our diverse fleet designed to handle any cargo size, anywhere in India.
          </p>
        </motion.div>

        <div className="mb-20">
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center justify-center">
              <motion.div
                key={v.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
                <Image
                  src={v.image}
                  alt={v.name}
                  width={400}
                  height={320}
                  className="relative z-10 max-h-80 w-auto object-contain drop-shadow-2xl"
                />
              </motion.div>

              <motion.div
                key={`details-${v.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full">{v.type}</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-4">{v.name}</h3>
                <p className="text-slate-400 text-lg mb-6">
                  Best suited for <span className="text-white font-medium">{v.bestFor}</span>
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">{v.capacity}</div>
                    <div className="text-slate-400 text-sm">Capacity</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">{v.trips}</div>
                    <div className="text-slate-400 text-sm">Trips Done</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {v.features.map((f) => (
                    <span key={f} className="bg-slate-700/50 text-slate-300 px-4 py-2 rounded-full text-sm">
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=com.airavatl.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all w-fit inline-block"
                  style={{ color: "#09090aff" }}
                >
                  Book This Vehicle
                </a>
              </motion.div>
            </div>

            <button onClick={prev} aria-label="Previous vehicle" className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={next} aria-label="Next vehicle" className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 pb-6">
              {vehicles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Jump to vehicle ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${index === activeIndex ? "bg-white w-8" : "w-2 bg-slate-600 hover:bg-slate-500"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Browse All Vehicles</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredCard(vehicle.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveIndex(index)}
                className={`relative bg-slate-800/50 rounded-2xl p-4 cursor-pointer transition-all duration-300 border-2 ${
                  activeIndex === index ? "border-white bg-slate-800" : "border-transparent hover:border-slate-600"
                }`}
              >
                <div className="aspect-square flex items-center justify-center mb-3">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={160}
                    height={160}
                    className={`max-h-full max-w-full object-contain transition-transform duration-300 ${hoveredCard === vehicle.id ? "scale-110" : ""}`}
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-white font-semibold text-sm truncate">{vehicle.name}</h4>
                  <p className="text-slate-400 text-xs">{vehicle.capacity}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
