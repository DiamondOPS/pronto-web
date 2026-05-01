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
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";

const phoneNumber = "0151 909 2777";
const phoneHref = "tel:01519092777";
const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27m%20on%20the%20Pronto%20House%20Buyer%20homepage%20and%20would%20like%20a%20cash%20offer%20for%20my%20house.";

const trustItems = [
  "Cash offer within 24 hours",
  "Complete in as little as 14 days",
  "No estate agent fees",
  "No repairs or viewings needed",
];

const situations = [
  {
    title: "Inherited Property",
    text: "A straightforward sale when probate, family decisions, or an empty property need resolving.",
    icon: Home,
    href: "/inherited-property",
  },
  {
    title: "Divorce / Separation",
    text: "A private sale when both parties need certainty, clear numbers, and a clean break from the property.",
    icon: ShieldCheck,
    href: "/divorce-separation",
  },
  {
    title: "Mortgage Arrears",
    text: "Sell quickly and reduce pressure before arrears, missed payments, or repossession risks get worse.",
    icon: Banknote,
    href: "/mortgage-arrears",
  },
  {
    title: "Problem Tenants",
    text: "We buy tenanted properties, difficult landlord situations, and houses with rental complications.",
    icon: Building2,
    href: "/problem-tenants",
  },
  {
    title: "House Needs Work",
    text: "No need to spend money on repairs, clearance, decorating, damp, roofing, or structural issues.",
    icon: Wrench,
    href: "/house-needs-work",
  },
  {
    title: "Sell My House Fast",
    text: "A direct cash sale if you want to avoid chains, slow buyers, repeated viewings, and uncertainty.",
    icon: BadgeCheck,
    href: "/sell-my-house-fast",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us about the property",
    text: "Send the postcode and a few details about the property, condition, and your ideal timescale.",
  },
  {
    number: "02",
    title: "We give you a clear offer",
    text: "We assess the house, local area, condition, and resale value before giving you a no-obligation cash offer.",
  },
  {
    number: "03",
    title: "You choose what happens next",
    text: "If the offer works for you, solicitors handle the legal work and we move towards completion on the agreed date.",
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

const localAreas = [
  "Liverpool",
  "Wirral",
  "Birkenhead",
  "Wallasey",
  "Bootle",
  "Wavertree",
  "Huyton",
  "St Helens",
  "Widnes",
  "Runcorn",
  "Southport",
  "Warrington",
];

const reasons = [
  "You do not need to prepare the house for the open market",
  "You do not need to pay estate agent commission",
  "You do not need to wait for a buyer in a chain",
  "You do not need to repair, clear, decorate, or stage the property",
  "You get one direct route from offer to completion",
  "You can choose a timescale that suits your situation",
];

const sellerConcerns = [
  {
    title: "I do not want lots of viewings",
    text: "We buy directly, so you avoid repeated appointments, public listing pressure, and waiting for feedback from buyers who may not proceed.",
  },
  {
    title: "The house needs work",
    text: "You can sell the property as it stands. We will factor the condition into the offer, so you do not need to spend money first.",
  },
  {
    title: "I need a reliable timescale",
    text: "A cash sale can remove many of the delays caused by mortgage buyers, chains, surveys, and last-minute renegotiations.",
  },
];

function ContactButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <Link
        href="/contact"
        className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-sky-500 px-4 py-3 text-center text-sm font-semibold leading-5 text-white shadow-sm transition hover:bg-sky-400"
      >
        Get a Cash Offer
      </Link>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold leading-5 text-white shadow-sm transition hover:bg-emerald-500"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp Us
      </a>
      <a
        href={phoneHref}
        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-center text-sm font-semibold leading-5 transition ${
          dark
            ? "border-white/25 text-white hover:bg-white/10"
            : "border-sky-200 bg-white text-slate-900 hover:bg-sky-50"
        }`}
      >
        <Phone className="h-4 w-4" />
        <span className="whitespace-nowrap">{phoneNumber}</span>
      </a>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-sky-100 bg-sky-50/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-sm text-slate-700 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-sky-500" />
              Cash offer within 24 hours
            </span>
            <span className="hidden items-center gap-2 sm:inline-flex">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              No fees, no repairs, no chain
            </span>
          </div>

          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 font-semibold text-slate-950"
          >
            <Phone className="h-4 w-4 text-sky-500" />
            {phoneNumber}
          </a>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#EEF9FF] text-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.85),transparent_34%)]" />
        <div className="absolute left-1/2 top-0 h-full w-[640px] -translate-x-1/2 bg-white/35 opacity-70 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex rounded-full border border-sky-200 bg-white px-5 py-2 text-sm font-bold text-slate-900 shadow-sm">
              Liverpool, Wirral & surrounding areas
            </div>

            <h1 className="mx-auto max-w-5xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Sell your house fast for cash, without the usual stress
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              A simple alternative to the open market. No fees, no repairs, no viewings, and completion possible in as little as 14 days.
            </p>

            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-3xl border border-sky-300 bg-white p-4 shadow-2xl shadow-sky-300/40 ring-1 ring-white sm:flex-row sm:items-center">
              <input
                type="text"
                placeholder="Enter your postcode"
                className="h-12 min-w-0 flex-1 rounded-2xl border border-sky-200 bg-white px-4 text-center text-base font-semibold text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-500 sm:text-left"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#056C9F] px-6 text-sm font-black text-white transition hover:bg-[#034f75] sm:min-w-44"
              >
                Get My Cash Offer
              </button>
            </form>

            <div className="mt-5 flex flex-col items-center justify-center gap-3 text-sm font-bold text-slate-700 sm:flex-row sm:gap-6">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-700 transition hover:text-emerald-600"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp instead
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 text-slate-950 transition hover:text-sky-700"
              >
                <Phone className="h-4 w-4 text-sky-500" />
                Call {phoneNumber}
              </a>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 text-left md:grid-cols-3">
            <div className="rounded-2xl border border-sky-200 bg-white/90 p-5 shadow-sm">
              <div className="text-xl font-black text-[#0784C3]">24 hours</div>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                Typical initial cash offer after we review the property details.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-200 bg-white/90 p-5 shadow-sm">
              <div className="text-xl font-black text-[#0784C3]">14 days</div>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                Completion possible where the legal process is straightforward.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-200 bg-white/90 p-5 shadow-sm">
              <div className="text-xl font-black text-[#0784C3]">No fees</div>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                No estate agent commission, no repairs, and no hidden charges from us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
          {[
            "Genuine cash buyer",
            "Liverpool & Wirral specialists",
            "No fees or commissions",
            "Sell in any condition",
            "Completion possible from 14 days",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-sky-100 bg-sky-50/80 px-4 py-4 text-center text-sm font-semibold text-slate-800 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Local house buying service
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A practical alternative to waiting months on the open market
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              A normal estate agency sale can work, but it is not always the
              right fit. If the property needs repairs, the situation is urgent,
              the house is empty, or you simply do not want viewings, a direct
              cash sale can be cleaner and faster.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We make the process simple: you tell us about the property, we
              assess it properly, and you receive a clear offer. There is no
              pressure to accept, and there are no fees for getting an offer.
            </p>
            <div className="mt-7">
              <ContactButtons />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {sellerConcerns.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-sky-100 bg-sky-50/60 p-6"
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-50/70">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Who we help
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              We buy houses in all situations
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Every box links to a dedicated guide for that situation. Choose the
              one that matches your property sale and see exactly how we can help.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {situations.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-3xl border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/80"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 transition group-hover:bg-sky-100">
                    <Icon className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                    Read the guide
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                How it works
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A simple 3 step process
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                We keep the process direct. You do not need to list the property,
                prepare it for viewings, negotiate with buyers, or wait for a
                chain to complete.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-3xl border border-sky-100 bg-sky-50/60 p-6 shadow-sm"
                  >
                    <div className="text-sm font-bold tracking-[0.2em] text-sky-600">
                      {step.number}
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl shadow-sky-100/70">
              <div className="inline-flex rounded-2xl bg-sky-400/15 px-3 py-1 text-sm font-medium text-sky-100">
                Speed & certainty
              </div>
              <div className="mt-6 text-5xl font-extrabold text-sky-300">
                14 days
              </div>
              <p className="mt-3 text-base leading-7 text-slate-300">
                We can often complete in as little as 14 days, or on a timescale
                that suits your move, legal position, and onward plans.
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

      <section className="bg-sky-600 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Want to check if your house qualifies?
            </h2>
            <p className="mt-3 max-w-2xl text-sky-50">
              Send the postcode on WhatsApp, call us, or use the contact form.
              We will tell you what is realistic before you make any decision.
            </p>
          </div>
          <ContactButtons dark />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Why sell to Pronto
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Best for speed, privacy and certainty
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Estate agency can work well when you have time, money for repairs,
              and patience for viewings. Pronto is built for sellers who value a
              certain buyer, a clear offer, and a faster route to completion.
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-sky-100 shadow-sm">
              <div className="grid grid-cols-3 bg-slate-900 text-sm font-semibold text-white">
                <div className="px-4 py-4">Feature</div>
                <div className="bg-sky-500 px-4 py-4 text-white">Pronto</div>
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
                  className="grid grid-cols-3 border-t border-sky-100 text-sm"
                >
                  <div className="bg-white px-4 py-4 font-medium text-slate-800">
                    {feature}
                  </div>
                  <div className="bg-sky-50 px-4 py-4 text-sky-800">
                    {pronto}
                  </div>
                  <div className="bg-white px-4 py-4 text-slate-600">
                    {agent}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-sky-100 bg-sky-50/70 p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Star className="h-7 w-7 text-sky-500" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-slate-950">
              A local buyer you can speak to
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We are not listing your property and hoping for a buyer. We buy
              directly, which means less stress, fewer delays, and more control
              over your sale.
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
                  <CheckCircle2 className="h-5 w-5 text-sky-500" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="grid gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-sky-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-sky-400"
                >
                  Get a Cash Offer
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-sky-200 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-sky-50"
                >
                  <Phone className="h-4 w-4 text-sky-500" />
                  <span className="whitespace-nowrap">{phoneNumber}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Local coverage
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              We buy houses across Liverpool, Wirral and surrounding areas
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Pronto House Buyer works with sellers across Merseyside, Wirral,
              Cheshire, and nearby towns. If your property is in the local area
              and you need a quick cash sale, we can usually give you an initial
              answer fast.
            </p>
            <div className="mt-6">
              <ContactButtons dark />
            </div>
            <Link
              href="/areas-we-cover"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-200"
            >
              View areas we cover
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {localAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-sky-400/10 px-4 py-3 text-sm font-medium text-slate-100"
              >
                <MapPin className="h-4 w-4 text-sky-300" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              A better route for difficult sales
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              No viewings, no repairs, no drawn-out chain
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Some houses are not suited to a slow open-market sale. The
              property might need work, have tenants, be empty after probate, or
              need to be sold quickly because of financial pressure. We make a
              direct cash offer and buy the property in its current condition.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              That means you can avoid repeated viewings, surveys from uncertain
              buyers, renegotiations, and the risk of a sale collapsing because
              someone else in the chain pulls out.
            </p>
          </div>

          <div className="rounded-[2rem] bg-sky-50/70 p-8 ring-1 ring-sky-100">
            <h3 className="text-2xl font-bold text-slate-950">
              Why sellers choose this route
            </h3>
            <div className="mt-6 space-y-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex gap-3 text-sm font-medium leading-6 text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-50/70">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
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
                className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-sm"
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
                  <h3 className="mt-2 text-2xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <div className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-center gap-3 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2 className="h-5 w-5 text-sky-500" />
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
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Reviews
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What our sellers say
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800">
            <Star className="h-4 w-4 fill-sky-500 text-sky-500" />
            Rated 4.9/5
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.quote}
              className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex gap-1 text-sky-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-base leading-7 text-slate-700">
                “{review.quote}”
              </p>
              <div className="mt-4 text-sm font-semibold text-slate-950">
                {review.meta}
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to sell your house fast?
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-slate-300">
              Get your no-obligation cash offer today. No fees, no repairs, no
              viewings, and no pressure.
            </p>
          </div>

          <ContactButtons dark />
        </div>
      </section>
    </main>
  );
}