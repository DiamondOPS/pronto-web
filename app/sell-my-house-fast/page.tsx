import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  Clock3,
  Home,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27m%20on%20the%20Sell%20My%20House%20Fast%20page%20and%20would%20like%20a%20cash%20offer.";

const benefits = [
  "Cash offer within 24 hours",
  "Complete in as little as 14 days",
  "No estate agent fees",
  "No repairs, viewings or chain",
];

const reasons = [
  {
    title: "Inherited property",
    text: "Sell an inherited house quickly without repairs, delays or repeated viewings.",
    icon: Home,
    href: "/inherited-property",
  },
  {
    title: "Mortgage arrears",
    text: "Get a clear option when payments, deadlines or lender pressure are becoming difficult.",
    icon: Banknote,
    href: "/mortgage-arrears",
  },
  {
    title: "Divorce or separation",
    text: "A private, direct sale when both sides need clarity and a clean route forward.",
    icon: Users,
    href: "/divorce-separation",
  },
  {
    title: "House needs work",
    text: "Avoid spending money on repairs before you sell. We buy properties as they are.",
    icon: Wrench,
    href: "/house-needs-work",
  },
];

const steps = [
  {
    title: "Tell us about the property",
    text: "Send the postcode, condition and your preferred timescale. You do not need to prepare the house first.",
  },
  {
    title: "Receive a clear cash offer",
    text: "We assess the property and give you a straightforward no-obligation offer to review.",
  },
  {
    title: "Choose your completion date",
    text: "If the offer works for you, solicitors handle the legal work and we complete on the agreed timescale.",
  },
];

const sellerConcerns = [
  "Need to sell quickly because of a change in circumstances",
  "Want to avoid estate agent viewings and open-market uncertainty",
  "Own a property that needs repairs or modernisation",
  "Need a reliable buyer without a chain",
  "Want clear numbers before deciding what to do next",
  "Prefer a private sale with straightforward communication",
];

const comparisonRows = [
  ["Speed", "Completion possible in as little as 14 days", "Often 3–6 months or longer"],
  ["Certainty", "Direct cash buyer", "Buyer chains can collapse"],
  ["Fees", "No estate agent fees", "Agency fees usually apply"],
  ["Repairs", "Sell as-is", "Repairs may be expected"],
  ["Viewings", "No public viewings", "Multiple viewings and feedback delays"],
  ["Control", "Agree a timescale upfront", "Timing depends on buyer and chain"],
];

function CtaButtons() {
  return (
    <div className="grid gap-3">
      <Link
        href="/contact"
        className="inline-flex min-h-12 items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-sky-700"
      >
        Get a Cash Offer
      </Link>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-emerald-700"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp Us
      </a>
      <a
        href="tel:01519092777"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-950 shadow-sm transition hover:border-sky-200 hover:bg-sky-50"
      >
        <Phone className="h-4 w-4" />
        0151 909 2777
      </a>
    </div>
  );
}

export default function SellMyHouseFastPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
              Sell My House Fast
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Sell your house fast in Liverpool & Wirral
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Pronto House Buyer gives homeowners a direct way to sell quickly for cash. No estate agent delays, no repairs, no public viewings and no chain uncertainty.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-500" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9">
              <CtaButtons />
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Free, no-obligation offer. Speak to a real local buyer before deciding.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl ring-1 ring-sky-100">
              <Image
                src="/images/hero.jpg"
                alt="Homes in Liverpool and Wirral"
                width={1600}
                height={1000}
                className="h-full min-h-[420px] w-full object-cover"
                priority
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/70 bg-white/95 p-5 shadow-xl backdrop-blur sm:bottom-6 sm:left-6 sm:right-6">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                Example sale
              </div>
              <h2 className="mt-2 text-xl font-extrabold text-slate-950">
                Fast sale without repairs
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A local homeowner wanted certainty rather than months on the open market. We gave a clear cash offer and worked to their timescale.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-sky-50 px-4 py-3 text-sm font-bold text-slate-800">
                  Offer within 24 hours
                </div>
                <div className="rounded-2xl bg-sky-50 px-4 py-3 text-sm font-bold text-slate-800">
                  No viewings or chain
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
              Who we help
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              A faster option when a normal sale does not fit
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Some sellers need speed. Others need certainty, privacy or a buyer who will take the property as it stands. Every situation below has its own dedicated guide.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {reasons.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50">
                    <Icon className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-600 group-hover:text-sky-700">
                    Read the guide
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
                How it works
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                A simple 3 step process
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                We keep the process clear from the start. You get a cash offer, a practical timescale and a direct route to completion without listing the property publicly.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {steps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-base font-extrabold text-white">
                      {index + 1}
                    </div>
                    <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-sky-100 bg-sky-50 p-8 text-slate-950 shadow-sm">
              <Clock3 className="h-10 w-10 text-sky-600" />
              <div className="mt-6 text-5xl font-extrabold text-slate-950">
                14 days
              </div>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Completion can be possible in as little as 14 days where the legal work is straightforward. We can also slow things down if you need more time.
              </p>
              <Link
                href="/how-it-works"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700"
              >
                See the full process
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
              Is this right for you?
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Sell quickly without preparing the house for market
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              A direct cash sale is usually best when speed, privacy and certainty matter more than testing the open market. It is not the right route for everyone, which is why the offer is always free and no-obligation.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              You can use our offer to understand your position, compare it with an estate agency route, or move forward quickly if the numbers and timescale work for you.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-extrabold text-slate-950">
              Common reasons people contact us
            </h3>
            <div className="mt-6 grid gap-3">
              {sellerConcerns.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-50/70">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
                Compare your options
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Pronto cash sale vs estate agency sale
              </h2>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="grid grid-cols-3 bg-slate-950 text-sm font-bold text-white">
                  <div className="px-4 py-4">Feature</div>
                  <div className="bg-sky-500 px-4 py-4 text-white">Pronto</div>
                  <div className="px-4 py-4">Estate Agent</div>
                </div>

                {comparisonRows.map(([feature, pronto, agent]) => (
                  <div
                    key={feature}
                    className="grid grid-cols-3 border-t border-slate-200 text-sm"
                  >
                    <div className="bg-white px-4 py-4 font-bold text-slate-800">
                      {feature}
                    </div>
                    <div className="bg-sky-50 px-4 py-4 font-semibold text-slate-800">
                      {pronto}
                    </div>
                    <div className="bg-white px-4 py-4 text-slate-600">
                      {agent}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-sky-100 bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                  <ShieldCheck className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-950">
                    Built for speed and certainty
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    We buy directly. No chains, no listings, no delays — just a clear offer and a simple path forward.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  No chain or fall-through risk
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  No repairs or prep needed
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Clear timeline from day one
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50 p-4">
                <CtaButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-sky-100 bg-sky-50 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
                Before you decide
              </div>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Compare your options with a real cash offer
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                Some sellers use our offer to move forward quickly. Others use it to compare against an estate agency route. Either way, you get clear numbers and a practical timescale before deciding what to do with the property.
              </p>
            </div>
            <div className="w-full lg:w-[320px]">
              <CtaButtons />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}