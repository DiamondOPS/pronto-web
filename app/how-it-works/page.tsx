import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock3,
  MessageCircle,
  Phone,
  PoundSterling,
  ShieldCheck,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27m%20on%20the%20How%20It%20Works%20page%20and%20would%20like%20a%20cash%20offer%20for%20my%20house.";

const steps = [
  {
    number: "01",
    title: "Tell us about the property",
    text: "Send the postcode, the rough condition and your ideal timescale. You can use the form, WhatsApp us or call directly.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "We review the details",
    text: "We look at the location, condition, likely resale value and your situation so the offer is based on the real property, not guesswork.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "You receive a cash offer",
    text: "We give you a clear no-obligation offer. You can compare it against an estate agency route before deciding.",
    icon: PoundSterling,
  },
  {
    number: "04",
    title: "Choose your completion date",
    text: "If you want to go ahead, solicitors handle the legal work and we aim to complete on the agreed timescale.",
    icon: CalendarDays,
  },
];

const timeline = [
  {
    label: "Same day",
    title: "Initial enquiry",
    text: "You contact us with the property address and basic details.",
  },
  {
    label: "Within 24 hours",
    title: "Offer prepared",
    text: "We assess the house and provide a clear cash offer where suitable.",
  },
  {
    label: "Day 2 onwards",
    title: "You decide",
    text: "There is no pressure. You can review the figures and ask questions.",
  },
  {
    label: "Legal stage",
    title: "Solicitors instructed",
    text: "If accepted, the legal process starts and title checks are completed.",
  },
  {
    label: "From 14 days",
    title: "Completion",
    text: "The sale completes and funds are released through the solicitor.",
  },
];

const benefits = [
  "No estate agent fees",
  "No public listing",
  "No repairs or decoration needed",
  "No viewings with strangers",
  "No buyer chain",
  "No last-minute survey renegotiation",
];

const questions = [
  {
    question: "Do I have to accept the offer?",
    answer:
      "No. The offer is no-obligation. It is there so you can make a clear decision with real numbers in front of you.",
  },
  {
    question: "Can you really complete in 14 days?",
    answer:
      "Where the legal work is straightforward and both sides are ready, completion can be possible in as little as 14 days. Some sellers choose a later date.",
  },
  {
    question: "Will I need to clean, repair or empty the house first?",
    answer:
      "No. We buy houses in any condition, including properties that need work, are inherited, tenanted or difficult to sell normally.",
  },
  {
    question: "Is this the same as using an estate agent?",
    answer:
      "No. We buy directly. That means no open-market listing, no chain and no repeated viewings. The trade-off is usually speed and certainty rather than testing the full market.",
  },
];

function CtaButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-3"}>
      <Link
        href="/contact"
        className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-center text-base font-bold text-white shadow-sm transition hover:bg-sky-400"
      >
        Get a Cash Offer
      </Link>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-center text-base font-bold text-white shadow-sm transition hover:bg-emerald-500"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp Us
      </a>
      <a
        href="tel:01519092777"
        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-sky-200 bg-white px-6 py-3 text-center text-base font-bold text-slate-950 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
      >
        <Phone className="h-5 w-5" />
        0151 909 2777
      </a>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16">
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
              How It Works
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              A simple way to sell your house without the usual delays
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Pronto House Buyer gives you a direct cash-sale route. You send us
              the details, we give you a clear offer, and if it works for you,
              we move toward completion without estate agent fees, repairs,
              public listings or buyer chains.
            </p>

            <div className="mt-8 max-w-2xl">
              <CtaButtons />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Offer within 24 hours",
                "Completion from 14 days",
                "No fees or repairs",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-sky-100 bg-white px-4 py-4 text-sm font-bold text-slate-800 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100/60 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
              <Clock3 className="h-8 w-8" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950">
              From enquiry to completion
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              You stay in control of the decision. We keep the process direct,
              practical and easy to understand from the first call onwards.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Tell us the address",
                "Receive a clear offer",
                "Ask questions before deciding",
                "Complete on the agreed date",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-bold text-slate-800"
                >
                  <CheckCircle2 className="h-5 w-5 flex-none text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-sky-50 p-5">
              <p className="text-sm font-bold text-slate-950">
                Prefer to speak to someone first?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Call, WhatsApp or send the form. You do not need to have every
                detail ready before getting in touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
            The process
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Four clear steps, no complicated sales process
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A traditional sale can involve valuations, photographs, viewings,
            offers, surveys, chains and renegotiations. Our process removes as
            much of that uncertainty as possible.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-extrabold tracking-[0.18em] text-sky-600">
                    {step.number}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
                Timeline
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                What usually happens after you contact us
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Every property is different, but this is the usual route. If you
                need more time, we can discuss it. If you need speed, we can aim
                to move quickly once the legal side is ready.
              </p>

              <div className="mt-8 rounded-[1.75rem] border border-sky-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-extrabold text-slate-950">
                  You are not locked in by asking
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  A quote from us is not a commitment. It gives you a practical
                  option to compare against waiting for an estate agent sale.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {timeline.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[150px_1fr]"
                >
                  <div className="text-sm font-extrabold uppercase tracking-[0.14em] text-sky-600">
                    {item.label}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="rounded-[2rem] border border-sky-100 bg-sky-50 p-7 sm:p-8">
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
              What you avoid
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Fewer moving parts than a normal house sale
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The main reason sellers choose a direct cash sale is certainty.
              You do not need to prepare the property for the open market or
              wait for a buyer who may still need their own sale to complete.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 text-sm font-bold text-slate-800 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 flex-none text-emerald-500" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <ShieldCheck className="h-12 w-12 text-sky-500" />
            <h3 className="mt-6 text-2xl font-extrabold text-slate-950">
              Clear numbers before you decide
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Some sellers use our offer because they need to move quickly.
              Others use it as a comparison against the estate agency route.
              Either way, you get a real figure and a practical timescale.
            </p>
            <div className="mt-7">
              <CtaButtons compact />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
                Questions
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Common questions about how it works
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                These are the questions sellers normally ask before requesting
                an offer. The aim is to keep the process clear before you decide
                whether a direct sale is right for you.
              </p>
              <Link
                href="/faqs"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-600 transition hover:text-sky-700"
              >
                View all FAQs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {questions.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[1.5rem] border border-sky-100 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-extrabold text-slate-950">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-sky-100 bg-sky-50 p-7 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
                Next step
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Ready to see what we could offer?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Send the property details and we will come back with a clear,
                no-obligation cash offer where the property is suitable.
              </p>
            </div>

            <CtaButtons />
          </div>
        </div>
      </section>
    </main>
  );
}