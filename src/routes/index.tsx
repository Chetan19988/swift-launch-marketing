import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-forklift.jpg";

const WHATSAPP = "7982773422";
const PHONE = "9810413452";
const EMAIL = "ashusuyavanshi@gmail.com";
const WA_LINK = `https://wa.me/91${WHATSAPP}?text=Hi%2C%20I%20need%20a%20forklift%20on%20rent`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chetan Lifters — Forklift on Rent | 24x7 Service" },
      {
        name: "description",
        content:
          "Reserve 3T, 5T or 10T diesel forklifts in seconds. Chetan Lifters — 24x7 forklift rental and maintenance. WhatsApp for instant quotes.",
      },
      { property: "og:title", content: "Chetan Lifters — Forklift on Rent | 24x7 Service" },
      {
        property: "og:description",
        content: "Reserve 3T, 5T or 10T diesel forklifts in seconds. 24x7 on-call support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://forklift-on-rent.lovable.app/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "https://forklift-on-rent.lovable.app/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as any,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Chetan Lifters",
          description:
            "24x7 forklift rental and maintenance — 3T, 5T and 10T diesel forklifts with same-day dispatch.",
          telephone: "+91-9810413452",
          email: "ashusuyavanshi@gmail.com",
          url: "https://forklift-on-rent.lovable.app/",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              name: "3 Ton Diesel Forklift Rental",
              description:
                "Light to medium loads. Ideal for warehouses and short runs.",
              brand: { "@type": "Brand", name: "Chetan Lifters" },
            },
            {
              "@type": "Product",
              name: "5 Ton Diesel Forklift Rental",
              description:
                "Our most-rented workhorse. Balanced power and reach.",
              brand: { "@type": "Brand", name: "Chetan Lifters" },
            },
            {
              "@type": "Product",
              name: "10 Ton Diesel Forklift Rental",
              description:
                "Heavy-duty loads and containers. Operator available on request.",
              brand: { "@type": "Brand", name: "Chetan Lifters" },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

type Tonnage = "3 Ton" | "5 Ton" | "10 Ton";

function Index() {
  const [reserveFor, setReserveFor] = useState<Tonnage | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="text-lg font-bold tracking-tight">
            <span className="text-amber-500">Chetan</span> Lifters
          </a>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#plans" className="hover:text-amber-600">Plans</a>
            <a href="#services" className="hover:text-amber-600">Services</a>
            <a href="/pricing" className="hover:text-amber-600">Pricing</a>
            <a href="#contact" className="hover:text-amber-600">Contact</a>
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="rounded-md bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
          >
            Call {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:py-16">
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-600">
            24×7 Support · Same-day dispatch
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Forklifts on Rent, Serviced & Ready to Move.
          </h1>
          <p className="mt-4 max-w-lg text-base text-slate-600 sm:text-lg">
            Daily, monthly and long-term forklift rentals. Reserve a 3T, 5T or 10T diesel forklift in seconds.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#plans" className="rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400">
              Reserve now
            </a>
            <a href={`tel:${PHONE}`} className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              Call {PHONE}
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <li>✓ Skilled operators</li>
            <li>✓ Well-maintained fleet</li>
            <li>✓ Transparent pricing</li>
          </ul>
        </div>
        <div className="relative">
          <img
            src={heroImg}
            alt="Yellow forklift lifting pallets in a warehouse"
            width={1200}
            height={800}
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full rounded-lg object-cover shadow-sm"
          />
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Reserve a forklift</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Pick a tonnage and send us your dates on WhatsApp — takes under 10 seconds.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Plan title="3 Ton Diesel Forklift" desc="Light to medium loads. Ideal for warehouses and short runs." onReserve={() => setReserveFor("3 Ton")} />
            <Plan title="5 Ton Diesel Forklift" desc="Our most-rented workhorse. Balanced power and reach." popular onReserve={() => setReserveFor("5 Ton")} />
            <Plan title="10 Ton Diesel Forklift" desc="Heavy-duty loads and containers. Operator available on request." onReserve={() => setReserveFor("10 Ton")} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">What we do</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            End-to-end material handling — rent equipment, get it serviced, or both.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Service title="Forklift Rental" body="Diesel & electric forklifts on daily, monthly and long-term contracts." />
            <Service title="Forklift Maintenance" body="Preventive servicing, breakdown repairs and genuine spares." />
            <Service title="Hand Pallet Trucks" body="New and refurbished hand pallets available on rent or for purchase." />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-slate-100 bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Talk to us</h2>
          <p className="mt-2 text-slate-300">24×7 on-call — WhatsApp is fastest.</p>
          <div className="mt-6 space-y-2 text-sm">
            <p><span className="text-slate-400">WhatsApp: </span><a href={`https://wa.me/91${WHATSAPP}`} className="font-semibold text-amber-400 hover:underline">+91 {WHATSAPP}</a></p>
            <p><span className="text-slate-400">Call: </span><a href={`tel:${PHONE}`} className="font-semibold text-amber-400 hover:underline">+91 {PHONE}</a></p>
            <p><span className="text-slate-400">Email: </span><a href={`mailto:${EMAIL}`} className="font-semibold text-amber-400 hover:underline">{EMAIL}</a></p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Chetan Lifters. All rights reserved.
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA_LINK}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.7a11.9 11.9 0 005.7 1.5h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.4z" />
        </svg>
      </a>

      {reserveFor && <ReserveModal tonnage={reserveFor} onClose={() => setReserveFor(null)} />}
    </div>
  );
}

function Plan({ title, desc, popular, onReserve }: { title: string; desc: string; popular?: boolean; onReserve: () => void }) {
  return (
    <div className={`relative rounded-lg border bg-white p-6 ${popular ? "border-amber-400 shadow-md" : "border-slate-200"}`}>
      {popular && (
        <span className="absolute -top-3 left-6 rounded-full bg-amber-500 px-3 py-0.5 text-xs font-semibold text-slate-900">
          Most popular
        </span>
      )}
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
      <button
        type="button"
        onClick={onReserve}
        className="mt-5 w-full rounded-md bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400"
      >
        Reserve
      </button>
    </div>
  );
}

function Service({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{body}</p>
    </div>
  );
}

function ReserveModal({ tonnage, onClose }: { tonnage: Tonnage; onClose: () => void }) {
  const today = new Date().toISOString().slice(0, 10);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!start || !end) return setError("Please pick both start and end dates.");
    if (end < start) return setError("End date must be on or after start date.");
    setError("");
    const lines = [
      "*Forklift Reserve – Chetan Lifters*",
      `Forklift: ${tonnage}`,
      `Start: ${start}`,
      `End: ${end}`,
    ];
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push("", "Please confirm availability.");
    const url = `https://wa.me/917982773422?text=${encodeURIComponent(lines.join("\n"))}`;
    setSending(true);
    window.open(url, "_blank");
    setTimeout(onClose, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-3 sm:items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold">Reserve {tonnage} Forklift</h3>
            <p className="text-xs text-slate-500">Selected plan: {tonnage} Diesel</p>
          </div>
          <button aria-label="Close" onClick={onClose} className="rounded p-1 text-slate-500 hover:bg-slate-100">✕</button>
        </div>

        <form onSubmit={submit} className="space-y-3">
          <label className="block">
            <span className="text-xs font-medium text-slate-700">Start date</span>
            <input
              type="date"
              required
              min={today}
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-3 text-base focus:border-amber-500 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-slate-700">End date</span>
            <input
              type="date"
              required
              min={start || today}
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-3 text-base focus:border-amber-500 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-slate-700">Phone (optional)</span>
            <input
              type="tel"
              inputMode="tel"
              placeholder="For callback"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-3 text-base focus:border-amber-500 focus:outline-none"
            />
          </label>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-md bg-amber-500 px-4 py-3 text-base font-semibold text-slate-900 hover:bg-amber-400"
          >
            Send on WhatsApp
          </button>
          {sending && <p className="text-center text-xs text-slate-500">WhatsApp opening — tap Send inside WhatsApp.</p>}
          <button type="button" onClick={onClose} className="mx-auto block text-xs text-slate-500 hover:underline">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
