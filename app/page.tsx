import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  Clock3,
  Home,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";

const trustItems = [
  "Cash offer within 24 hours",
  "Complete in as little as 14 days",
  "No fees or commissions",
  "No repairs or viewings",
];

const situations = [
  {
    title: "Inherited Property",
    text: "A straightforward sale when you want to move things on quickly.",
    icon: Home,
  },
  {
    title: "Divorce / Separation",
    text: "A fast, clean sale with less hassle and more certainty.",
    icon: ShieldCheck,
  },
  {
    title: "Mortgage Arrears",
    text: "Sell quickly and reduce pressure before things get worse.",
    icon: Banknote,
  },
  {
    title: "Problem Tenants",
    text: "We buy tenanted properties and difficult landlord situations.",
    icon: Building2,
  },
  {
    title: "House Needs Work",
    text: "No need to spend money fixing the property before selling.",
    icon: Wrench,
  },
  {
    title: "Sale Fallen Through",
    text: "A direct buyer can help you avoid more months of uncertainty.",
    icon: BadgeCheck,
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us about the property",
    text: "Send us the postcode and a few details. It only takes a minute.",
  },
  {
    number: "02",
    title: "Get your cash offer",
    text: "We assess the property and come back with a fair no-obligation offer.",
  },
  {
    number: "03",
    title: "Complete on your timescale",
    text: "Choose a completion date that works for you, often in as little as 14 days.",
  },
];

const caseStudies = [
  {
    image: "/images/house1.jpg",
    area: "Wavertree, L15",
    title: "Inherited terrace",
    bullets: ["Offer in 24 hours", "Completed in just 16 days"],
  },
  {
    image: "/images/house2.jpg",
    area: "Birkenhead, CH41",
    title: "Tenanted property",
    bullets: ["Bought as-is", "Completed in just 12 days"],
  },
  {
    image: "/images/house3.jpg",
    area: "Bootle, L20",
    title: "House needing work",
    bullets: ["No repairs needed", "Completed in just 14 days"],
  },
];

const reviews = [
  {
    quote:
      "Needed a clean, quick sale after probate. Very straightforward from start to finish.",
    meta: "Seller, Liverpool",
  },
  {
    quote:
      "We were worried about arrears and repossession. Pronto helped us move quickly.",
    meta: "Seller, Bootle",
  },
  {
    quote:
      "Great communication and completed in just over 2 weeks. Highly recommended.",
    meta: "Landlord, Wirral",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-sm text-slate-700 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-amber-500" />
              Cash offer within 24 hours
            </span>
            <span className="hidden items-center gap-2 sm:inline-flex">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Complete in as little as 14 days
            </span>
          </div>

          <a
            href="tel:01519092777"
            className="inline-flex items-center gap-2 font-semibold text-slate-900"
          >
            <Phone className="h-4 w-4 text-amber-500" />
            0151 909 2777
          </a>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div className="relative z-10">
            <div className="mb-4 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800">
              Local cash house buyers for Liverpool & Wirral
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Sell your house fast in Liverpool & Wirral
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Get a fair cash offer within 24 hours and complete in as little as
              14 days. No fees, no repairs, no chain, no hassle.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-xl rounded-3xl bg-slate-950 p-5 shadow-2xl ring-1 ring-slate-900/10 sm:p-6">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white">
                  Get your cash offer today
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  Enter your postcode to get started.
                </p>
              </div>

              <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  type="text"
                  placeholder="Enter your postcode"
                  className="h-14 rounded-2xl border border-slate-700 bg-white px-4 text-base text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-amber-500"
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
                <span>Quick, free and no obligation</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-slate-950/10 via-transparent to-amber-300/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-slate-200">
              <Image
                src="/images/hero.jpg"
                alt="Liverpool waterfront"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white/95 p-4 shadow-xl backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Recent completion
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Wavertree, Liverpool
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Inherited property sold quickly with no repairs needed and funds
                received in just over 2 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 text-white sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
          {[
            "Trading since 2010",
            "Dundee Group (NI) Ltd",
            "Genuine cash buyer",
            "Liverpool & Wirral specialists",
            "Google rated 4.9/5",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-medium text-slate-100"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Who we help
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            We help homeowners in all situations
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Whether the property needs work, has tenants, or you just want a
            fast clean sale, we aim to make the process simple.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {situations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50">
                  <Icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
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
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                How it works
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A simple 3 step process
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="text-sm font-bold tracking-[0.2em] text-amber-600">
                      {step.number}
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
              <div className="inline-flex rounded-2xl bg-white/10 px-3 py-1 text-sm font-medium text-slate-200">
                Speed & certainty
              </div>
              <div className="mt-6 text-5xl font-extrabold text-amber-400">
                14 days
              </div>
              <p className="mt-3 text-base leading-7 text-slate-300">
                We can often complete in as little as 14 days, or on a
                timescale that suits you.
              </p>
              <Link
                href="/how-it-works"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                See how it works
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
              Why sell to Pronto
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Best for speed and certainty
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
                ["Certainty", "No chain", "Sale can fall through"],
                ["Fees", "No fees or commissions", "Agency fees apply"],
                ["Repairs", "Sell as-is", "Usually expected"],
                ["Viewings", "None", "Multiple viewings"],
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
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Star className="h-7 w-7 text-amber-500" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              A local buyer you can trust
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We are not listing your property and hoping for a buyer. We buy
              directly, which means less stress, fewer delays and more
              certainty.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Liverpool & Wirral focused",
                "No hidden costs",
                "Straightforward communication",
                "Sell in any condition",
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

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                Case studies
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Recent property sales
              </h2>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
            >
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-slate-500">
                    {item.area}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <div className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-center gap-3 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Reviews
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What our sellers say
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
            <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" />
            Rated 4.9/5
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.quote}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex gap-1 text-emerald-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current"
                  />
                ))}
              </div>
              <p className="text-base leading-7 text-slate-700">
                “{review.quote}”
              </p>
              <div className="mt-4 text-sm font-semibold text-slate-900">
                {review.meta}
              </div>
            </div>
          ))}
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
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 text-base font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-5 w-5 text-amber-400" />
              0151 909 2777
            </a>

            <button
              type="button"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-amber-500 px-6 text-base font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Get My Cash Offer
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}