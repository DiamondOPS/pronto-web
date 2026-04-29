

const problems = [
  "The house needs major repairs before it can go on the open market",
  "You do not want to spend money on builders, decorators, or clean-up work",
  "A survey has already put off a buyer or reduced their offer",
  "The property has damp, structural issues, roof problems, or outdated interiors",
  "You inherited a property that has been left empty or neglected",
  "You want a simple sale without months of uncertainty",
];

const benefits = [
  {
    title: "No repairs required",
    description:
      "You do not need to fix, decorate, clear, or modernise the house before speaking to us. We buy properties in poor condition.",
  },
  {
    title: "No survey renegotiations",
    description:
      "A traditional buyer may reduce their offer after a survey. We assess the condition upfront and make a clear cash offer based on what we see.",
  },
  {
    title: "A faster route forward",
    description:
      "Where the legal process is straightforward, completion can be possible in as little as 14 days.",
  },
];

const process = [
  {
    title: "Tell us about the property",
    text: "Send the address, condition, photos if available, and your preferred timescale. You do not need to tidy it first.",
  },
  {
    title: "We review the condition",
    text: "We look at the property, local area, likely resale value, and repair work needed before making an offer.",
  },
  {
    title: "Receive a cash offer",
    text: "You get a clear, no-obligation offer with no estate agent fees and no hidden charges from us.",
  },
  {
    title: "Complete on the agreed date",
    text: "If accepted, solicitors handle the legal work and we move toward completion at the pace agreed.",
  },
];

const faqs = [
  {
    question: "Can you buy a house that needs major work?",
    answer:
      "Yes. We can look at houses with damp, roof issues, outdated interiors, structural concerns, fire damage, water damage, or general neglect.",
  },
  {
    question: "Do I need to clear the property first?",
    answer:
      "No. Tell us what is inside the property and we can discuss the simplest way forward. You usually do not need to empty the house before contacting us.",
  },
  {
    question: "Will you still buy if a survey has failed?",
    answer:
      "Yes. A failed survey does not automatically stop us from making an offer. We assess the property condition directly and price accordingly.",
  },
  {
    question: "Will I pay any fees?",
    answer:
      "No. There are no estate agent fees and no fees charged by us. We make a cash offer and you decide whether it works for you.",
  },
];

const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27m%20on%20the%20house%20needs%20work%20page%20and%20would%20like%20a%20cash%20offer.";

export default function HouseNeedsWorkPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Sell a House That Needs Work
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Sell Your House Fast Without Repairs
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              If your property needs repairs, modernisation, clearing, or serious renovation, Pronto House Buyer can give you a direct cash sale option without estate agent delays, buyer chains, or expensive works first.
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
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
            <h2 className="text-2xl font-bold">No need to fix it first</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Repairs can be expensive, slow, and stressful. We assess the property as it stands and explain whether a direct cash purchase is suitable.
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
            Common Situations
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Selling a property that needs work can be difficult
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Buyers often expect discounts, surveys can create problems, and estate agents may suggest spending money before listing. A direct cash sale can remove that pressure.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-2xl bg-white p-5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-100"
            >
              ✓ {problem}
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
                A practical option when the open market is awkward
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                We buy houses in Liverpool, Wirral, and nearby areas, including properties that need refurbishment, repairs, or full renovation.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-3xl border border-slate-100 bg-slate-50 p-6"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {benefit.description}
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
              Avoid Extra Costs
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              You do not need to spend thousands preparing the property
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Renovation costs can quickly grow once work begins. If you do not want the risk, delay, or stress of managing repairs, a direct sale may be a cleaner option.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We can review properties with damp, outdated kitchens, old bathrooms, roof problems, damaged interiors, overgrown gardens, or full refurbishment needs.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-2xl font-bold text-slate-900">
              What you can avoid
            </h3>
            <div className="mt-6 space-y-4 text-slate-700">
              <p>✓ Builder quotes and project delays</p>
              <p>✓ Decorating before viewings</p>
              <p>✓ Survey problems with buyers</p>
              <p>✓ Estate agent fees</p>
              <p>✓ Long chains and collapsed sales</p>
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

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Questions
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              House needs work FAQs
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
          Want to sell without doing the work first?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-emerald-100">
          Tell us about the property and its condition. We will give you a clear, no-obligation cash offer where the property is suitable.
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
        </div>
      </section>
    </main>
  );
}