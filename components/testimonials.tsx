"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Testimonial = { text: string; image: string; name: string; role: string };

const PLACEHOLDER = "/images/client-logos/placeholder-logo.svg";

const testimonials: Testimonial[] = [
  { text: "Airavatl revolutionized our logistics operations with their efficient supply chain solutions. Their real-time tracking keeps us informed at every step.", image: PLACEHOLDER, name: "Rajesh Kumar", role: "Tata AutoComp" },
  { text: "The seamless delivery service and competitive pricing have made Airavatl our preferred logistics partner for all furniture shipments.", image: "/images/client-logos/Nilkamal furniture.png", name: "Priya Sharma", role: "Nilkamal Furniture" },
  { text: "Their expertise in handling industrial cargo and timely deliveries across North-East India is exceptional. Highly recommend their services.", image: "/images/client-logos/Pioneer carbide.png", name: "Amit Patel", role: "Pioneer Carbide" },
  { text: "Airavatl's intelligent routing system has significantly reduced our shipping costs while maintaining excellent service quality.", image: PLACEHOLDER, name: "Sneha Reddy", role: "Power Maker" },
  { text: "The transparency and reliability of Airavatl's logistics services have transformed how we manage our supply chain operations.", image: PLACEHOLDER, name: "Vikram Singh", role: "Rosmerta Technologies" },
  { text: "From documentation to delivery, Airavatl handles everything professionally. Their customer support team is always responsive and helpful.", image: "/images/client-logos/Galeno mettalics.jpg", name: "Anita Desai", role: "Galeno Metallics" },
  { text: "We've seen remarkable improvement in our delivery timelines since partnering with Airavatl. Their network coverage is impressive.", image: "/images/client-logos/HomeTown_Logo.webp", name: "Karan Mehta", role: "HomeTown" },
  { text: "Airavatl's customized logistics solutions perfectly fit our business needs. Their team understands the unique challenges of our industry.", image: "/images/client-logos/jk tile & machinery.png", name: "Sunita Rao", role: "JK Tile & Machinery" },
  { text: "Exceptional service quality and competitive rates. Airavatl has become an integral part of our business operations.", image: "/images/client-logos/inter dominion.webp", name: "Rahul Gupta", role: "Inter Dominion" },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1 ? "true" : "false"}
                tabIndex={index === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.12), 0 10px 10px -5px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.05)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="p-10 rounded-3xl border border-violet-100 shadow-lg shadow-violet-900/5 max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-violet-500/30"
              >
                <blockquote className="m-0 p-0">
                  <p className="text-slate-600 leading-relaxed font-normal m-0">{text}</p>
                  <footer className="flex items-center gap-3 mt-6">
                    <Image
                      src={image}
                      alt={`${name} avatar`}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-contain bg-violet-50 p-1 ring-2 ring-violet-100 group-hover:ring-violet-300 transition-all duration-300"
                    />
                    <div className="flex flex-col">
                      <cite className="font-semibold not-italic tracking-tight leading-5 text-slate-900">{name}</cite>
                      <span className="text-sm leading-5 tracking-tight text-slate-500 mt-0.5">{role}</span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div id="about" className="w-full bg-white flex flex-col justify-center relative py-24">
      <section aria-labelledby="testimonials-heading" className="bg-transparent py-24 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], opacity: { duration: 0.8 } }}
          className="container px-4 z-10 mx-auto"
        >
          <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
            <div className="flex justify-center">
              <div className="border border-violet-200 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-violet-700 bg-violet-50">
                Testimonials
              </div>
            </div>
            <h2 id="testimonials-heading" className="text-5xl md:text-6xl font-light leading-tight mt-6 text-center text-slate-900">
              What our clients say
            </h2>
            <p className="text-center mt-5 text-slate-600 text-lg leading-relaxed max-w-sm">
              Discover how leading businesses trust Airavatl for their logistics needs.
            </p>
          </div>

          <div
            className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
            role="region"
            aria-label="Scrolling testimonials"
          >
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
