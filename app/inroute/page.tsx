import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "InRoute — Airavatl",
  description: "InRoute by Airavatl — real-time route tracking and in-transit logistics intelligence.",
  alternates: { canonical: "/inroute" },
};

export default function InRoutePage() {
  return (
    <main className="relative min-h-screen w-full bg-white px-4 pt-32 pb-24 font-jakarta">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mx-auto mt-40 max-w-3xl text-4xl font-bold text-slate-900 sm:text-5xl">
          Your Delivery Driver is Now Your Salesman.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Stop relying on blind distribution. Track every route, every order, and every transaction in real-time. InRoute combines live logistics with mobile point-of-sale to give you 100% visibility from the warehouse to the retail shelf.
        </p>
        <div className="mx-auto mt-12 max-w-3xl">
          <Image
            src="/competitors_hero_24b3239d43.png"
            alt="InRoute real-time route tracking on a map"
            width={1200}
            height={600}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>

      {/* Full-screen statement */}
      <section className="mt-12 flex min-h-[50vh] items-center justify-center px-4">
        <h2 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          One app turns your delivery fleet into your most powerful sales force.
        </h2>
      </section>

      <section className="mx-auto mt-24 max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Never Miss a Stop. Never Miss a Pitch.
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Your drivers shouldn&apos;t have to guess where to go next or what
              to sell when they get there. The InRoute app provides turn-by-turn
              navigation with pre-loaded daily routes. As they approach a
              retailer, smart prompts transition them instantly from a driver
              into an informed sales agent.
            </p>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-base font-semibold text-slate-900">
                  Optimized Routing
                </dt>
                <dd className="mt-1 text-slate-600">
                  Pre-planned stops minimize drive time and fuel costs.
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold text-slate-900">
                  Account Context
                </dt>
                <dd className="mt-1 text-slate-600">
                  Drivers see past orders and outstanding balances before
                  walking through the door.
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold text-slate-900">
                  Live ETA Tracking
                </dt>
                <dd className="mt-1 text-slate-600">
                  HQ knows exactly when a driver arrives at a retailer and how
                  long they stay.
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex justify-center">
            <Image
              src="/inroute-priority-stop.svg"
              alt="Priority stop added at Zoo Tiniali. Inventory has been automatically assigned to your truck."
              width={520}
              height={1040}
              className="h-auto w-full max-w-2xl"
            />
          </div>
        </div>
      </section>

      {/* Feature 2: Mobile Point-of-Sale */}
      <section className="mx-auto mt-24 max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 flex justify-center lg:order-1">
            <Image
              src="/inroute-pos.svg"
              alt="InRoute mobile point-of-sale digital invoice"
              width={520}
              height={1040}
              className="h-auto w-full max-w-2xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Generate Sales, Not Just Delivery Slips.
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Say goodbye to messy paper records and the end-of-day guessing
              game. Once the driver is inside the store, InRoute acts as a full
              point-of-sale system in their pocket. They can log the exact SKUs
              moved and generate instant digital invoices.
            </p>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-base font-semibold text-slate-900">
                  100% Digital Invoicing
                </dt>
                <dd className="mt-1 text-slate-600">
                  Create, edit, and confirm orders on the spot.
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold text-slate-900">
                  Protect Your Margins
                </dt>
                <dd className="mt-1 text-slate-600">
                  Lock in pricing tiers so you know exactly what the product sold
                  for—no unauthorized discounts.
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold text-slate-900">
                  Instant Sync
                </dt>
                <dd className="mt-1 text-slate-600">
                  The moment the sale is confirmed, your warehouse inventory
                  automatically updates.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Feature 3: The HQ Dashboard */}
      <section className="mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Total Visibility from the Warehouse to the Shelf.
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            No more waiting for your field team to return to know how the day
            went. The InRoute HQ Dashboard gives management a real-time,
            bird&apos;s-eye view of your entire distribution network.
          </p>
        </div>

        <div className="relative left-1/2 right-1/2 mt-12 -ml-[50vw] -mr-[50vw] w-screen">
          <Image
            src="/inroute-dashboard.png"
            alt="InRoute HQ Dashboard with live map and revenue charts"
            width={1920}
            height={1080}
            className="h-auto w-full"
          />
        </div>

        <dl className="mx-auto mt-12 grid max-w-5xl gap-8 px-4 sm:grid-cols-3">
          <div>
            <dt className="text-2xl font-semibold text-slate-900">
              Live Tracking
            </dt>
            <dd className="mt-2 text-xl text-slate-600">
              Watch your fleet move through their territories on a live map.
            </dd>
          </div>
          <div>
            <dt className="text-2xl font-semibold text-slate-900">
              Real-Time Revenue
            </dt>
            <dd className="mt-2 text-xl text-slate-600">
              See sales numbers climb the second an invoice is generated in the
              field.
            </dd>
          </div>
          <div>
            <dt className="text-2xl font-semibold text-slate-900">
              Identify Blind Spots
            </dt>
            <dd className="mt-2 text-xl text-slate-600">
              Instantly spot which routes are underperforming and which retailers
              are buying the most.
            </dd>
          </div>
        </dl>
      </section>

      {/* Section 4: The Comparison */}
      <section className="mx-auto mt-24 max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          The Old Way vs. The InRoute Way
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-16">
            <h3 className="text-3xl font-semibold text-slate-700">
              Traditional Distribution
            </h3>
            <ul className="mt-10 space-y-8 text-xl">
              <li>
                <p className="font-medium text-slate-800">Blind Dispatch</p>
                <p className="mt-1 text-slate-500">
                  Drivers leave the warehouse, and you hope they hit their
                  targets.
                </p>
              </li>
              <li>
                <p className="font-medium text-slate-800">Paper Trails</p>
                <p className="mt-1 text-slate-500">
                  Messy invoices, lost receipts, and delayed end-of-day
                  reporting.
                </p>
              </li>
              <li>
                <p className="font-medium text-slate-800">Pricing Leaks</p>
                <p className="mt-1 text-slate-500">
                  Salesmen negotiate unapproved discounts to move products
                  faster.
                </p>
              </li>
              <li>
                <p className="font-medium text-slate-800">Inventory Guesswork</p>
                <p className="mt-1 text-slate-500">
                  You don&apos;t know what sold until the truck comes back.
                </p>
              </li>
            </ul>
          </div>

          <div
            className="rounded-3xl border p-16"
            style={{ borderColor: "#00bf63", backgroundColor: "#00bf63" }}
          >
            <h3
              className="font-spartan text-4xl font-semibold text-white"
              style={{ letterSpacing: "-0.074em" }}
            >
              InRoute
            </h3>
            <ul className="mt-10 space-y-8 text-xl">
              <li>
                <p className="font-medium text-white">Tracked Logistics</p>
                <p className="mt-1 text-white/80">
                  Live GPS tracking ensures every territory is covered
                  efficiently.
                </p>
              </li>
              <li>
                <p className="font-medium text-white">
                  Digital Point-of-Sale
                </p>
                <p className="mt-1 text-white/80">
                  Instant, paperless invoicing synced directly to HQ.
                </p>
              </li>
              <li>
                <p className="font-medium text-white">Margin Control</p>
                <p className="mt-1 text-white/80">
                  Locked pricing tiers ensure you collect every rupee you&apos;re
                  owed.
                </p>
              </li>
              <li>
                <p className="font-medium text-white">Live Sync</p>
                <p className="mt-1 text-white/80">
                  Inventory drops and revenue climbs the exact second a sale is
                  made.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="mx-auto mt-24 max-w-6xl">
        <div
          className="rounded-3xl px-8 py-16 text-center"
          style={{ backgroundColor: "#00bf63" }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to turn your fleet into a sales force?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Talk to our team about bringing InRoute to your distribution
            network. We&apos;ll walk you through a live demo.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ color: "#00bf63" }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
