import Image from "next/image";
import {
  Truck,
  Package,
  Boxes,
  MapPin,
  Users,
  BarChart3,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// Placeholder icons — each node can later take an optional `logoSrc`
// (drop a file in /public) to swap the lucide icon for a real logo.
type Node = {
  icon: LucideIcon;
  x: number; // % horizontal
  y: number; // % vertical
  primary?: boolean;
  logoSrc?: string;
};

const nodes: Node[] = [
  { icon: Truck, x: 13, y: 66 },
  { icon: Package, x: 19, y: 49 },
  { icon: Smartphone, x: 23, y: 79 },
  { icon: Boxes, x: 29, y: 60 },
  { icon: MapPin, x: 41, y: 55 },
  { icon: Sparkles, x: 52, y: 45, primary: true },
  { icon: BarChart3, x: 47, y: 70 },
  { icon: Users, x: 58, y: 61 },
];

const bubbles = [
  { text: "Where's my truck?", x: 71, y: 47 },
  { text: "Who can deliver this?", x: 85, y: 58 },
  { text: "Is it on time?", x: 76, y: 71 },
];

// Tangled rope: a loop knot on the left, a weave through the centre,
// and a loop knot on the right. The OVER_* segments are redrawn on top
// to fake the over/under weave at each self-crossing.
const RIBBON =
  "M 20 285 C 110 285 165 245 180 200 C 192 158 150 145 122 175 C 98 200 135 232 190 228 C 270 222 320 255 405 245 C 500 237 540 175 620 200 C 700 222 690 280 760 285 C 835 290 880 250 880 210 C 880 170 835 165 815 195 C 800 220 835 248 885 245 C 930 243 955 250 980 250";
const OVER_LEFT = "M 132 186 C 150 202 170 218 188 226";
const OVER_RIGHT = "M 826 204 C 843 218 864 234 882 243";

// Thin lines dropping toward each of the three columns below.
const connectors = [170, 500, 830];

function Tile({ node }: { node: Node }) {
  const Icon = node.icon;
  const size = node.primary ? "h-16 w-16" : "h-12 w-12 md:h-14 md:w-14";
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_10px_25px_-8px_rgba(15,23,42,0.25)] ring-1 ring-slate-100 ${size}`}
      >
        {node.logoSrc ? (
          <Image src={node.logoSrc} alt="" fill sizes="64px" className="object-contain p-2.5" />
        ) : (
          <Icon
            className={node.primary ? "h-7 w-7" : "h-5 w-5 md:h-6 md:w-6"}
            style={{ color: "#4c1d95" }}
            strokeWidth={1.75}
          />
        )}
      </div>
    </div>
  );
}

export default function LogisticsFlow() {
  return (
    <div className="relative mx-auto aspect-[16/11] w-full max-w-5xl sm:aspect-[16/8] md:aspect-[16/7]">
      {/* Tangled rope ribbon */}
      <svg
        viewBox="0 0 1000 438"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <defs>
          <filter id="ropeShadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="9" stdDeviation="11" floodColor="#64748b" floodOpacity="0.18" />
          </filter>
          <filter id="ropeShadowSm" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#475569" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* rope body (under layer) */}
        <path
          d={RIBBON}
          stroke="#e9edf3"
          strokeWidth="40"
          strokeLinecap="round"
          filter="url(#ropeShadow)"
        />
        {/* sheen along the top edge */}
        <path
          d={RIBBON}
          stroke="#ffffff"
          strokeWidth="9"
          strokeLinecap="round"
          opacity="0.55"
          transform="translate(0 -8)"
        />

        {/* over-strands at the two knots (drawn on top for the weave) */}
        {[OVER_LEFT, OVER_RIGHT].map((d, i) => (
          <g key={i}>
            <path d={d} stroke="#e9edf3" strokeWidth="40" strokeLinecap="round" filter="url(#ropeShadowSm)" />
            <path d={d} stroke="#ffffff" strokeWidth="9" strokeLinecap="round" opacity="0.55" transform="translate(0 -8)" />
          </g>
        ))}

        {/* connector lines down to the columns */}
        {connectors.map((cx) => (
          <line key={cx} x1={cx} y1="372" x2={cx} y2="438" stroke="#e2e8f0" strokeWidth="2" />
        ))}
      </svg>

      {/* Tool tiles */}
      {nodes.map((node, i) => (
        <Tile key={i} node={node} />
      ))}

      {/* Chat bubbles (desktop) */}
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute hidden -translate-x-1/2 -translate-y-1/2 md:block"
          style={{ left: `${b.x}%`, top: `${b.y}%` }}
        >
          <div className="whitespace-nowrap rounded-2xl rounded-bl-sm bg-white px-4 py-2 text-sm text-slate-600 shadow-[0_10px_25px_-8px_rgba(15,23,42,0.2)] ring-1 ring-slate-100">
            {b.text}
          </div>
        </div>
      ))}
    </div>
  );
}
