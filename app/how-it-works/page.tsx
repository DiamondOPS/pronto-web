import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Phone,
  PoundSterling,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell us about your property",
    text: "Fill in the form or call us. We just need the postcode and a few simple details.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "We assess and make an offer",
    text: "We review the property and your situation, then make a fair no-obligation cash offer.",
    icon: PoundSterling,
  },
  {
    number: "03",
    title: "Choose your completion date",
    text: "If you are happy to go ahead, we move to completion on a timescale that suits you.",
    icon: CalendarDays,
  },
];

const timeline = [
  {
    label: "Day 1",
    title: "You get in touch",
    text: "Use the form, call us or message us with the property details.",
  },
  {
    label: "Day 1",
    title: "Initial review",
    text: "We assess the address and understand the situation.",
  },
  {
    label: "Within 24 hours",
    title: "Cash offer",
    text: "We come back with a fair no-obligation offer.",
  },
  {
    label: "Day 2–14",
    title: "Legal process",
    text: "We progress things quickly and keep communication simple.",
  },
  {
    label: "Completion day",
    title: "Funds received",
    text: "The sale completes and the money is paid to you.",
  },
];

const faqs = [
  "How quickly can you buy my house?",
  "Do I have to pay any fees?",
  "Do you buy houses in poor condition?",
  "Will I get full market value?",
  "What areas do you cover?",
];

export default function HowItWorksPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              How It Works
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              A simple, stress-free way to sell your house fast
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              From first enquiry to completion, we keep the process clear,
              direct and fast. No estate agent fees, no repairs and no chain.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Cash offer within 24 hours",
                "Complete in as little as 14 days",
                "No fees or commissions",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-800 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
            <Clock3 className="h-12 w-12 text-amber-400" />
            <h2 className="mt-6 text-3xl font-bold">14 days</h2>
            <p className="mt-3 text-base leading-7 text-slate-300">
              We can often complete in as little as 14 days, or on a timescale
              that works for you.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Sell in any condition",
                "No hidden costs",
                "No viewings needed",
                "Direct cash buyer",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-slate-200"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="tel:01519092777"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4 text-amber-400" />
              0151 909 2777
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Our 3 step process
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            How it works in 3 simple steps
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="text-sm font-bold tracking-[0.2em] text-amber-600">
                  {step.number}
                </div>
                <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50">
                  <Icon className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                Typical timeline
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                From enquiry to completion
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-5">
                {timeline.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                      {item.label}
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <ShieldCheck className="h-12 w-12 text-amber-500" />
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Clear, quick and direct
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We aim to make the process easy to understand, with fewer delays
                and less uncertainty than a traditional open-market sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              FAQs
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Common questions
            </h2>

            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <div
                  key={faq}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-800"
                >
                  {faq}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <h3 className="text-3xl font-bold">Ready to get started?</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              If you want a fast, straightforward sale, get in touch today and
              we’ll come back to you with a no-obligation cash offer.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-amber-500 px-6 text-base font-semibold text-slate-950 hover:bg-amber-400"
              >
                Get My Cash Offer
              </button>
              <a
                href="tel:01519092777"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 text-base font-semibold text-white hover:bg-white/10"
              >
                <Phone className="h-5 w-5 text-amber-400" />
                0151 909 2777
              </a>
            </div>

            <Link
              href="/sell-my-house-fast"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Back to sell my house fast
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}