"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Client = { name: string; src: string };

// Logos reused from the testimonials section (/public/images/client-logos).
const clients: Client[] = [
  { name: "Nilkamal Furniture", src: "/images/client-logos/Nilkamal furniture.png" },
  { name: "Pioneer Carbide", src: "/images/client-logos/Pioneer carbide.png" },
  { name: "Galeno Metallics", src: "/images/client-logos/Galeno mettalics.jpg" },
  { name: "HomeTown", src: "/images/client-logos/HomeTown_Logo.webp" },
  { name: "JK Tile & Machinery", src: "/images/client-logos/jk tile & machinery.png" },
  { name: "Inter Dominion", src: "/images/client-logos/inter dominion.webp" },
];

const SLOTS = 5;
const INTERVAL_MS = 6000;

export default function ClientsBar() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setStart((s) => (s + 1) % clients.length),
      INTERVAL_MS
    );
    return () => clearInterval(id);
  }, []);

  const visible = Array.from(
    { length: SLOTS },
    (_, i) => clients[(start + i) % clients.length]
  );

  return (
    <section className="border-y border-slate-100 bg-white px-6 py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-14">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Trusted by the best
        </p>

        <div className="group grid w-full flex-1 grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
          {visible.map((client, i) => (
            <div key={i} className="flex h-10 w-full items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-10 w-full max-w-[140px]"
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    sizes="140px"
                    className="object-contain opacity-60 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
