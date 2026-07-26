import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-forklift.jpg";

const WHATSAPP = "7982773422";
const PHONE = "9810413452";
const EMAIL = "ashusuyavanshi@gmail.com";
const WA_LINK = `https://wa.me/91${WHATSAPP}?text=Hi%2C%20I%20need%20a%20forklift%20on%20rent`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forklift on Rent & Maintenance | 24x7 Service" },
      {
        name: "description",
        content:
          "Reliable forklift rental, hand pallet trucks, and expert forklift maintenance with 24x7 support. Call or WhatsApp for instant quotes.",
      },
      { property: "og:title", content: "Forklift on Rent & Maintenance | 24x7 Service" },
      {
        property: "og:description",
        content:
          "Forklift rental, hand pallet trucks, and maintenance with 24x7 on-call support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as any,
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="text-lg font-bold tracking-tight">
            <span className="text-amber-500">Fork</span>Lift Rentals
          </a>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#services" className="hover:text-amber-600">Services</a>
            <a href="#why" className="hover:text-amber-600">Why us</a>
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
            Daily, monthly and long-term forklift rentals. Hand pallet trucks and expert
            maintenance — with round-the-clock on-call support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              className="rounded-md bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
            >
              WhatsApp Quote
            </a>
            <a
              href={`tel:${PHONE}`}
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
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

      {/* Services */}
      <section id="services" className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">What we do</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            End-to-end material handling — rent equipment, get it serviced, or both.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Service
              title="Forklift Rental"
              body="Diesel & electric forklifts on daily, monthly and long-term contracts. Delivered on time, every time."
              icon={
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 17h11V6H8L3 11v6z" />
                  <circle cx="7" cy="19" r="2" />
                  <circle cx="17" cy="19" r="2" />
                  <path d="M14 6h4l3 5v6" />
                </svg>
              }
            />
            <Service
              title="Forklift Maintenance"
              body="Preventive servicing, breakdown repairs and genuine spares by experienced technicians."
              icon={
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a4 4 0 015.7 5.7L11 21l-8-2-2-8L9.3 2.6a4 4 0 015.7 5.7" />
                </svg>
              }
            />
            <Service
              title="Hand Pallet Trucks"
              body="New and refurbished hand pallets available on rent or for purchase. Ready-stock delivery."
              icon={
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h13v9H3z" />
                  <circle cx="7" cy="19" r="2" />
                  <circle cx="15" cy="19" r="2" />
                  <path d="M16 10h5v5" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Why choose us</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["24×7 Support", "On-call assistance whenever you need it — day, night, weekends."],
              ["Fast Dispatch", "Same-day delivery for most rentals across the service area."],
              ["Trained Operators", "Certified, safety-first operators available on request."],
              ["Fair Pricing", "Clear rates, no hidden fees, flexible contract lengths."],
            ].map(([t, b]) => (
              <div key={t}>
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-slate-600">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-slate-100 bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Get a quote in minutes</h2>
          <p className="mt-2 text-slate-300">
            Tell us what you need and we'll respond fast — 24×7.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-slate-400">WhatsApp: </span>
                <a href={WA_LINK} className="font-semibold text-amber-400 hover:underline">
                  +91 {WHATSAPP}
                </a>
              </p>
              <p>
                <span className="text-slate-400">Call: </span>
                <a href={`tel:${PHONE}`} className="font-semibold text-amber-400 hover:underline">
                  +91 {PHONE}
                </a>
              </p>
              <p>
                <span className="text-slate-400">Email: </span>
                <a href={`mailto:${EMAIL}`} className="font-semibold text-amber-400 hover:underline">
                  {EMAIL}
                </a>
              </p>
            </div>
            <form
              action={`mailto:${EMAIL}`}
              method="post"
              encType="text/plain"
              className="grid gap-3"
            >
              <input
                required
                name="name"
                placeholder="Your name"
                className="rounded-md bg-slate-800 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                required
                name="phone"
                type="tel"
                placeholder="Phone"
                className="rounded-md bg-slate-800 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <textarea
                name="message"
                rows={3}
                placeholder="What do you need?"
                className="rounded-md bg-slate-800 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-400"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ForkLift Rentals. All rights reserved.
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA_LINK}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.7a11.9 11.9 0 005.7 1.5h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.4zM12 21.5c-1.7 0-3.4-.5-4.9-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.4 9.4 0 012.6 12C2.6 6.8 6.8 2.6 12 2.6c2.5 0 4.9 1 6.7 2.8a9.4 9.4 0 012.8 6.7c0 5.2-4.3 9.4-9.5 9.4zm5.4-7c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1a7.7 7.7 0 01-3.8-3.3c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 3 1.2 3.2c.1.2 2.1 3.3 5.2 4.6 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.4-.1-.2-.3-.2-.6-.4z" />
        </svg>
      </a>
    </div>
  );
}

function Service({ title, body, icon }: { title: string; body: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-md bg-amber-50 text-amber-600">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{body}</p>
    </div>
  );
}
