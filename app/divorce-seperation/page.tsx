const situations = [
  "You both want a clean break from the property",
  "One person cannot afford to keep the home alone",
  "The sale needs to happen quickly to settle finances",
  "You want to avoid months of viewings and uncertainty",
  "There is pressure from a mortgage, solicitor, or court deadline",
  "Communication is difficult and the process needs to stay simple",
];

const reasons = [
  {
    title: "A private sale without repeated viewings",
    description:
      "A normal estate agency sale can mean multiple strangers walking through the home, feedback delays, and offers falling through. We keep things more direct and discreet.",
  },
  {
    title: "A clear offer both sides can review",
    description:
      "We provide a straightforward cash offer so everyone involved can understand the numbers and make a decision without pressure.",
  },
  {
    title: "Flexible timescales where needed",
    description:
      "If you need speed, we can aim to complete in as little as 14 days. If you need more time to coordinate paperwork, we can discuss that too.",
  },
];

const process = [
  {
    title: "Tell us about the property",
    text: "Share the address, condition, ownership situation, and ideal timescale. You do not need every answer before contacting us.",
  },
  {
    title: "We assess the sale options",
    text: "We look at the property, area, condition, and likely resale value, then explain whether a direct cash purchase is suitable.",
  },
  {
    title: "Receive a no-obligation offer",
    text: "You get a clear offer that can be reviewed by both parties and any professional advisers involved.",
  },
  {
    title: "Complete and move forward",
    text: "If accepted, solicitors handle the legal work and we move toward completion on the agreed timescale.",
  },
];

const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27m%20on%20the%20divorce%20and%20separation%20page%20and%20would%20like%20an%20offer%20on%20my%20house.";

const faqs = [
  {
    question: "Can you buy if both owners are separating?",
    answer:
      "Yes. As long as the legal owners agree to the sale, we can make an offer and work with solicitors to progress the transaction properly.",
  },
  {
    question: "What if one person still lives in the property?",
    answer:
      "That does not automatically stop the process. Tell us the situation and we can explain what is possible before you make any decision.",
  },
  {
    question: "Can you complete quickly if there is financial pressure?",
    answer:
      "Where the legal position is straightforward, we can complete in as little as 14 days. The exact timing depends on title checks, solicitors, and both parties being ready.",
  },
  {
    question: "Do we have to accept the offer?",
    answer:
      "No. The offer is no-obligation. You can compare it with other options and decide whether speed, certainty, and privacy are worth it for your situation.",
  },
];

export default function DivorceSeparationPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Divorce & Separation Property Sale
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Sell Your House During Divorce or Separation
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              When a relationship ends, deciding what to do with the home can be one of the hardest practical decisions. Pronto House Buyer gives you a clear, private route to sell quickly without estate agent delays, repeated viewings, or chain uncertainty.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Get a Cash Offer
              </a>
              <a
                href="tel:01519092777"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Call 0151 909 2777
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
                aria-label="Message Pronto House Buyer on WhatsApp"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M16.01 3.2c-7.04 0-12.77 5.66-12.77 12.62 0 2.23.59 4.41 1.71 6.33L3.2 28.8l6.84-1.79a12.9 12.9 0 0 0 5.97 1.49c7.04 0 12.77-5.66 12.77-12.62S23.05 3.2 16.01 3.2Zm0 22.99c-1.9 0-3.75-.51-5.37-1.48l-.39-.23-4.06 1.06 1.08-3.91-.26-.4a10.22 10.22 0 0 1-1.57-5.41c0-5.69 4.74-10.32 10.57-10.32s10.57 4.63 10.57 10.32-4.74 10.37-10.57 10.37Zm5.8-7.75c-.32-.16-1.88-.92-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.55-.95-.84-1.59-1.88-1.78-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.69-.98-2.32-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.39 5.43 4.75.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.76 2.15-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
            <h2 className="text-2xl font-bold">
              A calmer way to deal with the property
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              You do not need to prepare the property for the open market, arrange multiple viewings, or wait months for an uncertain buyer. We can assess the property quickly and provide a no-obligation offer both sides can consider.
            </p>
            <div className="mt-6 rounded-2xl bg-emerald-50 p-5 text-sm font-medium leading-6 text-emerald-900">
              Cash offer within 24 hours. Completion possible in as little as 14 days where the legal process allows.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            When a quick sale can help
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Property decisions during separation are rarely simple
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            The home may need to be sold so finances can be divided, debts can be cleared, or both people can move on. But a traditional sale can create more pressure: valuations, viewings, offers, renegotiations, survey issues, buyer chains, and long waits for completion.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {situations.map((situation) => (
            <div
              key={situation}
              className="rounded-2xl bg-white p-5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-100"
            >
              ✓ {situation}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-3xl bg-slate-900 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Why Pronto
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Built for speed, privacy, and certainty
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                We are not here to add pressure. We give you a direct option: a clear cash offer, no estate agent fees, no public listing, and no drawn-out chain. That can make the decision easier when both sides need clarity.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {reasons.map((reason) => (
                <article
                  key={reason.title}
                  className="rounded-3xl border border-slate-100 bg-slate-50 p-6"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Avoid common delays
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              A normal house sale can become another source of conflict
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              When two people are trying to agree on price, timing, access, offers, and completion dates, the open market can create unnecessary tension. A buyer may reduce their offer after survey, get stuck in a chain, or pull out completely.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              A direct cash sale can remove several moving parts. You still get to make your own decision, but you are working from one clear offer and one agreed route forward.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-2xl font-bold text-slate-900">
              What you do not need to do first
            </h3>
            <div className="mt-6 space-y-4 text-slate-700">
              <p>✓ You do not need to repair or redecorate the property</p>
              <p>✓ You do not need to list the property publicly</p>
              <p>✓ You do not need to arrange repeated viewings</p>
              <p>✓ You do not need to wait for a buyer in a chain</p>
              <p>✓ You do not need to pay estate agent fees</p>
            </div>
            <a
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500"
            >
              Tell Us About the Property
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Simple Process
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              How the sale works
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {process.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-5 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-[80px_1fr] md:items-start"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-lg font-bold text-slate-950">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Local Help
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Selling in Liverpool, Wirral, or the surrounding areas?
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                We buy houses across Liverpool, Wirral, Birkenhead, Wallasey, Bootle, Huyton, St Helens, Widnes, Runcorn, and nearby areas. If the property is local and you need a quick, private sale, we can usually give you an initial answer quickly.
              </p>
            </div>

            <div className="rounded-3xl bg-emerald-50 p-6 text-emerald-950">
              <h3 className="text-2xl font-bold">
                No pressure. No obligation.
              </h3>
              <p className="mt-4 leading-7">
                You can use our offer to understand your options. If it works for both sides, we move forward. If not, you have lost nothing.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500"
              >
                Request My Offer
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
                aria-label="Message Pronto House Buyer on WhatsApp"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M16.01 3.2c-7.04 0-12.77 5.66-12.77 12.62 0 2.23.59 4.41 1.71 6.33L3.2 28.8l6.84-1.79a12.9 12.9 0 0 0 5.97 1.49c7.04 0 12.77-5.66 12.77-12.62S23.05 3.2 16.01 3.2Zm0 22.99c-1.9 0-3.75-.51-5.37-1.48l-.39-.23-4.06 1.06 1.08-3.91-.26-.4a10.22 10.22 0 0 1-1.57-5.41c0-5.69 4.74-10.32 10.57-10.32s10.57 4.63 10.57 10.32-4.74 10.37-10.57 10.37Zm5.8-7.75c-.32-.16-1.88-.92-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.55-.95-.84-1.59-1.88-1.78-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.69-.98-2.32-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.39 5.43 4.75.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.76 2.15-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Questions
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Divorce and separation property FAQs
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 px-6 py-16 text-center text-white">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl">
          Need a clear way to sell and move forward?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-emerald-100">
          Tell us about the property and your preferred timescale. We will give you a clear, no-obligation cash offer where the property is suitable.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 shadow transition hover:bg-slate-100"
          >
            Get My Cash Offer
          </a>
          <a
            href="tel:01519092777"
            className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Call 0151 909 2777
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
            aria-label="Message Pronto House Buyer on WhatsApp"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="h-5 w-5 fill-current"
            >
              <path d="M16.01 3.2c-7.04 0-12.77 5.66-12.77 12.62 0 2.23.59 4.41 1.71 6.33L3.2 28.8l6.84-1.79a12.9 12.9 0 0 0 5.97 1.49c7.04 0 12.77-5.66 12.77-12.62S23.05 3.2 16.01 3.2Zm0 22.99c-1.9 0-3.75-.51-5.37-1.48l-.39-.23-4.06 1.06 1.08-3.91-.26-.4a10.22 10.22 0 0 1-1.57-5.41c0-5.69 4.74-10.32 10.57-10.32s10.57 4.63 10.57 10.32-4.74 10.37-10.57 10.37Zm5.8-7.75c-.32-.16-1.88-.92-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.55-.95-.84-1.59-1.88-1.78-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.69-.98-2.32-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.39 5.43 4.75.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.76 2.15-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </section>
    </main>
  );
}