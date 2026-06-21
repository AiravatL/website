import LogisticsFlow from "@/components/logistics-flow";

// Placeholder copy — edit freely.
const challenges = [
  {
    title: "Manual Coordination",
    description:
      "Bookings, partner calls, and follow-ups still run on phone calls and spreadsheets.",
  },
  {
    title: "Limited Visibility",
    description:
      "No real-time view of vehicles, trips, or shipment status across operations.",
  },
  {
    title: "Rising Costs",
    description:
      "Idle capacity and manual rate negotiation quietly inflate transport spend.",
  },
];

export default function ChallengesSection() {
  return (
    <section className="bg-white px-6 py-24">
      {/* Headline + subheadline */}
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-light leading-tight text-slate-900 md:text-6xl">
          Logistics gets lost in the gaps{" "}
          <span className="text-slate-400">— and growth stalls without control.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
          Fragmented coordination is slowing your supply chain and inflating costs.
        </p>
      </div>

      {/* Connected-tools illustration (lucide placeholders — swap real icons later) */}
      <div className="mt-12">
        <LogisticsFlow />
      </div>

      {/* Bottom 3 columns */}
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
        {challenges.map((item) => (
          <div key={item.title}>
            <h3 className="text-2xl font-medium text-slate-900">{item.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-slate-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
