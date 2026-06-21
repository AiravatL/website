import Image from "next/image";
import { User, Phone, Mail, MessageCircle, Send } from "lucide-react";

const PHONE = "+91 70992 20645";
const PHONE_TEL = "+917099220645";
const EMAIL = "airavatlogistic@gmail.com";
const WHATSAPP = "https://wa.me/917099220645";

const chips = [
  { icon: Phone, value: PHONE, label: "Call Us", href: `tel:${PHONE_TEL}` },
  { icon: Mail, value: EMAIL, label: "Email Us", href: `mailto:${EMAIL}` },
  { icon: MessageCircle, value: PHONE, label: "Chat on WhatsApp", href: WHATSAPP },
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-200";

// ── Illustration size control ───────────────────────────────
// Bump this up to enlarge the illustration, down to shrink it.
//   1   = default        1.15 = 15% bigger        0.9 = 10% smaller
const IMAGE_ZOOM = 1.25;
// Panel height (px) — taller panel = bigger image area.
const IMAGE_PANEL_HEIGHT = 440;
// ────────────────────────────────────────────────────────────

export default function ContactCta() {
  return (
    <section className="bg-[#4c1d95] px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#f6f5fb] shadow-2xl">
        <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left — form */}
          <div className="flex flex-col justify-center p-8 md:p-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100/70">
            </div>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-[#1b1540] md:text-4xl">
              One Step Away From Smarter Logistics
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500 md:text-base">
              Share your details and our logistics experts will connect with the
              right solution for your business.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input type="text" aria-label="Full Name" placeholder="Full Name" className={inputClass} />
                </div>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input type="tel" aria-label="Phone Number" placeholder="Phone Number" className={inputClass} />
                </div>
              </div>

              <button
                type="button"
                style={{ backgroundColor: "#4c1d95" }}
                className="flex w-full items-center justify-center gap-2 rounded-xl px-10 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90 sm:w-[calc(50%-0.5rem)]"
              >
                <Send className="h-4 w-4" />
                Submit Request
              </button>
            </form>
          </div>

          {/* Right — illustration. Resize via IMAGE_ZOOM / IMAGE_PANEL_HEIGHT above. */}
          <div
            className="relative hidden overflow-hidden bg-[#f6f5fb] lg:block"
            style={{ minHeight: `${IMAGE_PANEL_HEIGHT}px` }}
          >
            <Image
              src="/contact-illustration.png"
              alt="Airavatl logistics — warehouse, trucks, and forklifts"
              fill
              sizes="(max-width: 1024px) 0px, 55vw"
              className="object-cover object-center"
              style={{ transform: `translateX(135px) scale(${IMAGE_ZOOM})`, transformOrigin: "right center" }}
              priority
            />
          </div>

        </div>

        {/* Contact chips — full-width bar */}
        <div className="border-t border-slate-200/70 px-8 py-6 md:px-10">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {chips.map(({ icon: Icon, value, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3.5 transition-colors hover:border-violet-200 hover:bg-violet-50"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#4c1d95" }}
                >
                  <Icon className="h-4 w-4 text-white" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-slate-900">{value}</span>
                  <span className="block text-xs text-slate-500">{label}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
