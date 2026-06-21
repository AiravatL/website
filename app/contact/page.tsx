import type { Metadata } from "next";
import Image from "next/image";
import { Truck, User, Phone, Mail, MessageCircle, Send } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Contact | Airavatl" },
  description:
    "Share your details and Airavatl's logistics experts will connect with the right solution for your business.",
  alternates: { canonical: "/contact" },
};

const PHONE = "+91 70992 20645";
const PHONE_TEL = "+917099220645";
const EMAIL = "airavatlogistic@gmail.com";
const WHATSAPP = "https://wa.me/917099220645";

const chips = [
  { icon: Phone, value: PHONE, label: "Call Us", href: `tel:${PHONE_TEL}` },
  { icon: Mail, value: EMAIL, label: "Email Us", href: `mailto:${EMAIL}` },
  { icon: MessageCircle, value: PHONE, label: "Chat on WhatsApp", href: WHATSAPP },
];

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-br from-[#4c1d95] to-[#3b1680] px-4 pb-20 pt-32 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl">
        <div className="grid lg:grid-cols-2">
          {/* Left — form */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-100 bg-violet-50">
              <Truck className="h-6 w-6" style={{ color: "#4c1d95" }} strokeWidth={1.75} />
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              One Step Away From Smarter Logistics
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
              Share your details and our logistics experts will connect with the
              right solution for your business.
            </p>

            <form className="mt-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    aria-label="Full Name"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-200"
                  />
                </div>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    aria-label="Phone Number"
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-200"
                  />
                </div>
              </div>

              <button
                type="button"
                style={{ backgroundColor: "#4c1d95" }}
                className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90 sm:w-auto sm:px-10"
              >
                <Send className="h-4 w-4" />
                Submit Request
              </button>
            </form>

            <div className="my-8 h-px w-full bg-slate-100" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {chips.map(({ icon: Icon, value, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3 transition-colors hover:border-violet-200 hover:bg-violet-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100">
                    <Icon className="h-4 w-4" style={{ color: "#4c1d95" }} />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-slate-900">
                      {value}
                    </span>
                    <span className="block text-xs text-slate-500">{label}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — illustration */}
          <div className="relative hidden items-center justify-center bg-gradient-to-br from-violet-50 to-white p-10 lg:flex">
            <div className="relative aspect-square w-full max-w-md">
              <Image
                src="/contact-illustration.png"
                alt="Airavatl logistics — warehouse, trucks, and forklifts"
                fill
                sizes="480px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
