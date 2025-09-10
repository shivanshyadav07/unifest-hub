import React from "react";

function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-none w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

export default function App() {
  const BRAND_NAME = "Unifest Hub";
  const GOOGLE_FORM_URL = "https://forms.gle/PvBPqBM1nuPYXjn96"; // replace with your Google Form URL
  const CALENDLY_URL = "https://calendly.com/shivanshyadav084/new-meeting"; // replace with your Calendly URL

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-white/20 flex items-center justify-center font-bold">UH</div>
            <div>
              <div className="font-bold">{BRAND_NAME}</div>
              <div className="text-xs opacity-80">AI-powered event management for universities</div>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#features" className="text-sm hover:underline">Features</a>
            <a href="#compare" className="text-sm hover:underline">Compare</a>
            <a href="#pricing" className="text-sm hover:underline">Pricing</a>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="px-4 py-2 bg-white text-indigo-700 rounded-md font-semibold">Try Free</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section id="hero" className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Smart event management for universities — without the headache.</h1>
            <p className="mt-4 text-gray-700 text-lg">Run fests, conferences, orientations and student events with AI scheduling, QR check-ins and a simple admin dashboard — deployed on your domain and handed to you completely.</p>

            <div className="mt-6 flex gap-3">
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="px-5 py-3 bg-indigo-600 text-white rounded-md font-semibold shadow">Book a Demo</a>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-md font-semibold">Try Free</a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <strong>Walk-away delivery:</strong> We build, deploy on your hosting, connect your domain, hand over source code, and show your team how to use it. No ongoing fees unless you ask for support.
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md">
            <div className="rounded-lg border border-dashed border-gray-200 p-6">
              <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">Demo screenshots / video</div>
              <div className="mt-4 text-sm text-gray-600">Student view • Organizer dashboard • QR confirmation</div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="h-20 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-400">Screenshot 1</div>
              <div className="h-20 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-400">Screenshot 2</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-16">
          <h2 className="text-2xl font-bold">Key features</h2>
          <p className="text-gray-600 mt-2">Everything a student events office needs — simplified and white-labeled for your university.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Feature icon="📅" title="AI Schedule Optimizer" desc="Automatically spot clashes and suggest optimal times for sessions." />
            <Feature icon="🎟️" title="QR Tickets & Check-in" desc="Attendees receive QR tickets in email; staff scan with any QR app for fast entry." />
            <Feature icon="🧾" title="Simple Registration" desc="Google Forms-based registration so your staff owns the data in Sheets." />
            <Feature icon="📣" title="Auto-Promotions" desc="AI-generated posters and social captions (templates you can edit)." />
            <Feature icon="📊" title="Basic Analytics" desc="Registrations, show-rate, and quick export to CSV for reports." />
            <Feature icon="🏷️" title="White-label Delivery" desc="Delivered on your domain; we transfer code & hosting access to you at handover." />
          </div>
        </section>

        {/* Comparison table */}
        <section id="compare" className="mt-16">
          <h2 className="text-2xl font-bold">How we compare</h2>
          <p className="text-gray-600 mt-2">A concise comparison showing what you get with {BRAND_NAME} vs typical platforms.</p>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse table-auto">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-3 text-sm font-semibold">Feature</th>
                  <th className="p-3 text-sm font-semibold">{BRAND_NAME}</th>
                  <th className="p-3 text-sm font-semibold">Swoogo</th>
                  <th className="p-3 text-sm font-semibold">Dryfta</th>
                  <th className="p-3 text-sm font-semibold">Eventdex</th>
                  <th className="p-3 text-sm font-semibold">Timely</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["AI Scheduling", true, false, false, false, false],
                  ["Social Event Feed", true, false, false, false, false],
                  ["QR Ticket & Check-in", true, true, true, true, false],
                  ["White-label Branding", true, true, false, true, false],
                  ["Budget Tracking & Analytics", true, false, true, true, false],
                  ["Abstract Management", true, true, true, true, false],
                  ["PWA (App-like)", true, false, false, false, false],
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 align-top text-sm font-medium">{row[0]}</td>
                    {row.slice(1).map((val, i) => (
                      <td key={i} className="p-3 align-top text-sm">
                        {typeof val === "boolean" ? (
                          val ? <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">Yes</span> : <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">No</span>
                        ) : val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mt-16">
          <h2 className="text-2xl font-bold">Pricing (Walk-away delivery)</h2>
          <p className="text-gray-600 mt-2">One-time build & handover. You own everything — code, hosting setup on your accounts, and Google Forms data.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <div className="text-sm font-semibold text-gray-500">Starter</div>
              <div className="mt-2 text-2xl font-bold">Free Pilot</div>
              <div className="mt-2 text-sm text-gray-600">Single event setup using Google Forms & Sheets. Includes handover documentation.</div>
              <div className="mt-4"><a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 border rounded-md">Request Pilot</a></div>
            </div>

            <div className="p-6 border rounded-lg">
              <div className="text-sm font-semibold text-gray-500">Pro</div>
              <div className="mt-2 text-2xl font-bold">$699</div>
              <div className="mt-2 text-sm text-gray-600">Landing page, Google Forms integration, QR email confirmation, PWA shell, and full handover docs.</div>
              <div className="mt-4"><a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">Book Pro</a></div>
            </div>

            <div className="p-6 border rounded-lg">
              <div className="text-sm font-semibold text-gray-500">Enterprise</div>
              <div className="mt-2 text-2xl font-bold">$1299</div>
              <div className="mt-2 text-sm text-gray-600">Everything in Pro + custom branding, extra demo screens, and 1-hour training call.</div>
              <div className="mt-4"><a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">Contact Sales</a></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-indigo-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Ready to modernize campus events?</h3>
              <p className="text-gray-700 mt-1">Book a short demo and we’ll show you how the walk-away plan works — no obligations.</p>
            </div>
            <div className="flex gap-3">
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="px-4 py-3 bg-indigo-600 text-white rounded-md font-semibold">Book Demo</a>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="px-4 py-3 border rounded-md">Request Pilot</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} {BRAND_NAME}. Built for walk-away delivery. Hosted on your accounts.</div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <a href={`mailto:hello@yourdomain.com`} className="hover:underline">hello@yourdomain.com</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>•</span>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}  
