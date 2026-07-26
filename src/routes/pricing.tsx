import { createFileRoute, Link } from "@tanstack/react-router";

const WHATSAPP = "7982773422";
const PHONE = "9810413452";
const EMAIL = "ashusuyavanshi@gmail.com";
const URL = "https://forklift-on-rent.lovable.app/pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Forklift Rental Cost in India — Pricing Guide | Chetan Lifters" },
      {
        name: "description",
        content:
          "Transparent forklift rental cost guide for 3 Ton, 5 Ton and 10 Ton diesel forklifts. Daily, weekly and monthly rates plus the cost factors that affect your quote.",
      },
      { property: "og:title", content: "Forklift Rental Cost — Pricing Guide | Chetan Lifters" },
      {
        property: "og:description",
        content:
          "Daily, weekly and monthly forklift rental rates for 3T, 5T and 10T diesel forklifts. Understand the cost factors before you book.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How much does it cost to rent a forklift in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Diesel forklift rentals typically range from ₹1,500–₹6,000 per day depending on capacity (3T, 5T or 10T), rental duration, operator requirements, site location and fuel arrangement. Monthly contracts offer the best per-day rate.",
              },
            },
            {
              "@type": "Question",
              name: "What affects forklift rental cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Capacity (tonnage), rental duration, operator inclusion, transportation distance, fuel (diesel) arrangement, working hours per day, and site conditions all influence the final quote.",
              },
            },
            {
              "@type": "Question",
              name: "Is it cheaper to rent monthly?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Monthly rentals bring the effective per-day cost down significantly compared to daily or weekly bookings, and long-term contracts get further discounts.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: PricingPage,
});

type Row = { capacity: string; daily: string; weekly: string; monthly: string; best: string };

const ROWS: Row[] = [
  { capacity: "3 Ton Diesel Forklift", daily: "₹1,500 – ₹2,500", weekly: "₹9,000 – ₹14,000", monthly: "₹30,000 – ₹45,000", best: "Warehouses, light-to-medium loads, short runs" },
  { capacity: "5 Ton Diesel Forklift", daily: "₹2,500 – ₹4,000", weekly: "₹14,000 – ₹22,000", monthly: "₹45,000 – ₹70,000", best: "General industrial use — our most-rented model" },
  { capacity: "10 Ton Diesel Forklift", daily: "₹4,500 – ₹6,500", weekly: "₹25,000 – ₹38,000", monthly: "₹85,000 – ₹1,25,000", best: "Heavy loads, container handling, steel & logistics yards" },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-lg font-bold tracking-tight">
            <span className="text-amber-500">Chetan</span> Lifters
          </Link>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <Link to="/" className="hover:text-amber-600">Home</Link>
            <Link to="/pricing" className="hover:text-amber-600">Pricing</Link>
            <a href={`https://wa.me/91${WHATSAPP}`} className="hover:text-amber-600">WhatsApp</a>
          </nav>
          <a href={`tel:${PHONE}`} className="rounded-md bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800">
            Call {PHONE}
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-600">
          Pricing Guide
        </p>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Forklift Rental Cost — 3T, 5T & 10T Diesel Forklifts
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          A transparent guide to forklift rental cost in India. Use the indicative daily, weekly and monthly rates
          below to budget your material handling — then WhatsApp us for a firm quote in minutes.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`https://wa.me/91${WHATSAPP}?text=Hi%2C%20please%20share%20a%20forklift%20rental%20quote`} className="rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400">
            Get a firm quote on WhatsApp
          </a>
          <Link to="/" hash="plans" className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            See plans
          </Link>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Indicative rental rates</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Rates are indicative for the Delhi NCR region and vary by duration, operator, site and fuel arrangement.
            Longer commitments reduce your effective per-day cost.
          </p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600">
                <tr>
                  <th className="px-4 py-3">Capacity</th>
                  <th className="px-4 py-3">Daily</th>
                  <th className="px-4 py-3">Weekly</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Best for</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.capacity} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-semibold">{r.capacity}</td>
                    <td className="px-4 py-3">{r.daily}</td>
                    <td className="px-4 py-3">{r.weekly}</td>
                    <td className="px-4 py-3">{r.monthly}</td>
                    <td className="px-4 py-3 text-slate-600">{r.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Prices exclude GST, transportation and diesel unless agreed. Operator charges billed separately where applicable.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">What affects your forklift rental cost?</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Card title="Capacity (tonnage)">
              A 3 Ton forklift is the most economical option for pallets and light loads. Stepping up to 5 Ton or 10 Ton adds fuel burn, heavier tyres and higher insurance — reflected in the rate.
            </Card>
            <Card title="Rental duration">
              Daily rates are highest. Weekly bookings cut the effective per-day cost by 15–25%. Monthly and long-term contracts are the cheapest way to run continuous operations.
            </Card>
            <Card title="Operator inclusion">
              Rentals can be dry (equipment only) or wet (with a trained operator). Wet hires add operator wages, PF and site allowances.
            </Card>
            <Card title="Transportation & site">
              Site distance from the depot, loading/unloading time, and access conditions (ramps, indoor use, night shifts) all feed into the quote.
            </Card>
            <Card title="Fuel arrangement">
              Diesel is typically billed at actuals or included at a flat allowance. Confirm this upfront to avoid surprises on the invoice.
            </Card>
            <Card title="Working hours">
              Single-shift (8 hrs) is standard. Double-shift or 24×7 usage carries a surcharge and scheduled servicing.
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">How to budget for a forklift rental</h2>
          <ol className="mt-5 space-y-3 text-slate-700">
            <li><strong>1. Match tonnage to your heaviest load.</strong> Renting a bigger forklift than you need wastes fuel and money — but under-rating capacity is unsafe. Ask us if unsure.</li>
            <li><strong>2. Pick the right duration bucket.</strong> Anything beyond 5 working days is almost always cheaper on a weekly plan; beyond 20 days switch to monthly.</li>
            <li><strong>3. Decide dry vs wet hire.</strong> If you have a certified operator on site, dry hire is significantly cheaper.</li>
            <li><strong>4. Confirm fuel, transport and GST inclusions.</strong> A "cheap" quote that excludes these often ends up costlier.</li>
            <li><strong>5. Lock dates early.</strong> Same-day dispatch is possible, but advance booking gets you the best rate and guaranteed availability.</li>
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
          <div className="mt-6 space-y-5">
            <Faq q="How much does it cost to rent a forklift per day?">
              Daily forklift rental cost in India typically ranges from ₹1,500 for a 3 Ton unit to around ₹6,500 for a 10 Ton unit, before GST, transport and fuel.
            </Faq>
            <Faq q="Is monthly rental cheaper than daily?">
              Yes — monthly contracts cut the effective per-day rate by 40–60% versus daily rentals, which is why most warehouses run monthly.
            </Faq>
            <Faq q="Does the price include an operator?">
              Only if you opt for wet hire. Dry hire (equipment only) is cheaper if you have a trained operator on site.
            </Faq>
            <Faq q="Are transportation charges extra?">
              Yes. Transportation is billed based on distance from our depot and site accessibility. We share the exact figure in your quote.
            </Faq>
            <Faq q="Can I get a firm quote quickly?">
              Yes — WhatsApp your dates, tonnage and pin code to <a className="text-amber-600 underline" href={`https://wa.me/91${WHATSAPP}`}>+91 {WHATSAPP}</a> and we'll respond with pricing within minutes during working hours.
            </Faq>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready for a firm quote?</h2>
          <p className="mt-2 text-slate-300">Send your dates and tonnage — we'll reply with pricing and availability.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`https://wa.me/91${WHATSAPP}?text=Hi%2C%20please%20share%20a%20forklift%20rental%20quote`} className="rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400">
              WhatsApp us
            </a>
            <a href={`tel:${PHONE}`} className="rounded-md border border-slate-500 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Call {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="rounded-md border border-slate-500 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Email us
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Chetan Lifters. All rights reserved.
      </footer>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{children}</p>
    </div>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="font-semibold">{q}</h3>
      <p className="mt-1 text-sm text-slate-600">{children}</p>
    </div>
  );
}
