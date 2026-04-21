import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  Clock3,
  Hammer,
  Home,
  Phone,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

const benefits = [
  "Cash offer within 24 hours",
  "Complete in as little as 14 days",
  "No fees or commissions",
  "No repairs or viewings",
];

const reasons = [
  {
    title: "Inherited property",
    text: "A simple sale when you want to move things on quickly.",
    icon: Home,
  },
  {
    title: "Mortgage arrears",
    text: "Speed and certainty when time matters most.",
    icon: Banknote,
  },
  {
    title: "Divorce / separation",
    text: "A fast, clean sale with less stress and delay.",
    icon: Users,
  },
  {
    title: "House needs work",
    text: "No need to fix the property before selling.",
    icon: Wrench,
  },
];

const steps = [
  {
    title: "Tell us about the property",
    text: "Send the postcode and a few details. It only takes a minute.",
  },
  {
    title: "Get your cash offer",
    text: "We assess the property and come back with a fair no-obligation offer.",
  },
  {
    title: "Complete on your timescale",
    text: "Choose a date that suits you. We can often complete in as little as 14 days.",
  },
];

export default function SellMyHouseFastPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Sell My House Fast
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Sell your house fast in Liverpool & Wirral
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              We buy houses for cash in any condition. No estate agent fees, no
              repairs, no long waits and no chain.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-xl rounded-3xl bg-slate-950 p-5 shadow-2xl sm:p-6">
              <h2 className="text-2xl font-bold text-white">
                Get your cash offer today
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Quick, free and no obligation.
              </p>

              <form className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  type="text"
                  placeholder="Enter your postcode"
                  className="h-14 rounded-2xl border border-slate-700 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-amber-500 px-6 text-base font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Get My Cash Offer
                </button>
              </form>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <a
                  href="tel:01519092777"
                  className="inline-flex items-center gap-2 font-medium text-white"
                >
                  <Phone className="h-4 w-4 text-amber-400" />
                  0151 909 2777
                </a>
                <span className="text-slate-500">•</span>
                <span>No pressure, no hidden costs</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-slate-200">
              <Image
                src="/images/hero.jpg"
                alt="Liverpool waterfront"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white/95 p-5 shadow-xl backdrop-blur sm:bottom-6 sm:left-6 sm:right-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Recent completion
              </div>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Wavertree (L15)
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Inherited terrace sold without repairs, viewings or months of
                uncertainty.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  Offer in 24 hours
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  Completed in just over 2 weeks
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50">
                  <Icon className="h-6 w-6 text-amber-600" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                How it works
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A straightforward 3 step process
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="text-sm font-bold tracking-[0.2em] text-amber-600">
                      0{index + 1}
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
              <Clock3 className="h-10 w-10 text-amber-400" />
              <div className="mt-6 text-5xl font-extrabold text-amber-400">
                14 days
              </div>
              <p className="mt-3 text-base leading-7 text-slate-300">
                We can often complete in as little as 14 days or on a timescale
                that works for you.
              </p>
              <Link
                href="/how-it-works"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                See the full process
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Comparison
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Why sellers choose Pronto
            </h2>

            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <div className="grid grid-cols-3 bg-slate-950 text-sm font-semibold text-white">
                <div className="px-4 py-4">Feature</div>
                <div className="bg-amber-500 px-4 py-4 text-slate-950">
                  Pronto
                </div>
                <div className="px-4 py-4">Estate Agent</div>
              </div>

              {[
                ["Speed", "As fast as 14 days", "3–6 months+"],
                ["Certainty", "Direct buyer", "Sale can fall through"],
                ["Fees", "No fees", "Fees apply"],
                ["Repairs", "Sell as-is", "Often expected"],
                ["Viewings", "None", "Multiple viewings"],
                ["Chain risk", "No chain", "High risk"],
              ].map(([feature, pronto, agent]) => (
                <div
                  key={feature}
                  className="grid grid-cols-3 border-t border-slate-200 text-sm"
                >
                  <div className="bg-white px-4 py-4 font-medium text-slate-800">
                    {feature}
                  </div>
                  <div className="bg-emerald-50 px-4 py-4 text-emerald-800">
                    {pronto}
                  </div>
                  <div className="bg-white px-4 py-4 text-slate-600">
                    {agent}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <ShieldCheck className="h-12 w-12 text-amber-500" />
            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Best for speed and certainty
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We buy directly. That means no listings, no waiting on viewers and
              no hoping someone else can get their chain together.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Fair no-obligation cash offer",
                "No repairs or surveys to arrange yourself",
                "Simple communication throughout",
                "Local team with real experience",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-slate-800"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to sell your house fast?
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-slate-300">
              Get your no-obligation cash offer today.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="tel:01519092777"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 text-base font-semibold text-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5 text-amber-400" />
              0151 909 2777
            </a>
            <button
              type="button"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-amber-500 px-6 text-base font-semibold text-slate-950 hover:bg-amber-400"
            >
              Get My Cash Offer
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}