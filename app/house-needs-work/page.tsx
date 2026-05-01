const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27m%20on%20the%20house%20needs%20work%20page%20and%20would%20like%20a%20cash%20offer.";

const problems = [
  "The property needs major repairs before it can be listed",
  "You do not want to spend money on builders or decorators",
  "A survey has already caused a buyer to reduce their offer",
  "There is damp, roof damage, structural movement, or outdated interiors",
  "The house needs clearing before it can be sold normally",
  "You want a simple sale without months of uncertainty",
];

const issues = [
  "Damp or mould",
  "Roof problems",
  "Old kitchens and bathrooms",
  "Full refurbishment needed",
  "Overgrown gardens",
  "Damaged interiors",
  "Empty or neglected homes",
  "Survey problems",
];

const benefits = [
  {
    title: "No repairs required",
    text: "You do not need to fix, decorate, clear, or modernise the house before speaking to us.",
  },
  {
    title: "No survey renegotiations",
    text: "We assess the condition upfront and make a clear offer based on what we see.",
  },
  {
    title: "No estate agent delays",
    text: "There are no repeated viewings, public listings, buyer chains, or drawn-out open-market delays.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us about the property",
    text: "Send the address, condition, photos if available, and your preferred timescale. You do not need to tidy it first.",
  },
  {
    number: "02",
    title: "We review the condition",
    text: "We look at the property, area, likely resale value, and the repair work needed before making an offer.",
  },
  {
    number: "03",
    title: "Receive a cash offer",
    text: "You get a clear, no-obligation offer with no estate agent fees and no hidden charges from us.",
  },
  {
    number: "04",
    title: "Complete on the agreed date",
    text: "If accepted, solicitors handle the legal work and we move toward completion at the agreed pace.",
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

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
      <path d="M16.01 3.2c-7.04 0-12.77 5.66-12.77 12.62 0 2.23.59 4.41 1.71 6.33L3.2 28.8l6.84-1.79a12.9 12.9 0 0 0 5.97 1.49c7.04 0 12.77-5.66 12.77-12.62S23.05 3.2 16.01 3.2Zm0 22.99c-1.9 0-3.75-.51-5.37-1.48l-.39-.23-4.06 1.06 1.08-3.91-.26-.4a10.22 10.22 0 0 1-1.57-5.41c0-5.69 4.74-10.32 10.57-10.32s10.57 4.63 10.57 10.32-4.74 10.37-10.57 10.37Z" />
    </svg>
  );
}

function ContactButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
      <a
        href="/contact"
        className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#0784C3] px-7 text-center text-base font-black text-white shadow-sm transition hover:bg-[#056C9F]"
      >
        Get a Cash Offer
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#079B6A] px-7 text-center text-base font-black text-white shadow-sm transition hover:bg-[#067f58]"
        aria-label="Message Pronto House Buyer on WhatsApp"
      >
        <WhatsAppIcon />
        WhatsApp Us
      </a>
      <a
        href="tel:01519092777"
        className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#B8E6FF] bg-white px-7 text-center text-base font-black text-[#071A2F] shadow-sm transition hover:bg-[#F4FBFF]"
      >
        0151 909 2777
      </a>
    </div>
  );
}

export default function HouseNeedsWorkPage() {
  return (
    <main className="bg-[#FAFAF7] text-[#071A2F]">
      <section className="bg-[#EEF9FF] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#0784C3]">
              House Needs Work
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Sell Your House Fast Without Repairs
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#40516A]">
              If your property needs repairs, clearing, modernisation, or full refurbishment, Pronto House Buyer can give you a direct cash sale option without spending money on works first.
            </p>
            <div className="mt-8 max-w-3xl">
              <ContactButtons />
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[#CFEFFF] bg-white p-7 shadow-sm md:p-8">
            <div className="mb-6 inline-flex rounded-2xl bg-[#DDF3FF] p-4 text-[#0784C3]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current stroke-[2.5]">
                <path d="M12 3 4 7v6c0 5 3.4 7.7 8 9 4.6-1.3 8-4 8-9V7l-8-4Z" />
                <path d="m9.5 12 1.7 1.7 3.8-4" />
              </svg>
            </div>
            <h2 className="text-3xl font-black tracking-tight">No need to fix it first</h2>
            <p className="mt-4 text-lg leading-8 text-[#40516A]">
              Repairs can be expensive, slow, and stressful. We assess the property as it stands and explain whether a direct cash purchase is suitable.
            </p>
            <div className="mt-6 space-y-3 text-base font-semibold text-[#1E293B]">
              <p>✓ Cash offer within 24 hours</p>
              <p>✓ No repairs or clearing needed first</p>
              <p>✓ Completion possible in as little as 14 days</p>
              <p>✓ No estate agent fees</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
            Common Situations
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Selling a property that needs work can be difficult
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#40516A]">
            Buyers often expect discounts, surveys can create problems, and estate agents may suggest spending money before listing. A direct cash sale can remove that pressure.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-2xl border border-[#E3EEF7] bg-white p-5 text-sm font-bold text-[#1E293B] shadow-sm"
            >
              ✓ {problem}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#CFEFFF] bg-[#EEF9FF] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
              Why a Direct Sale Helps
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              A practical option when the open market is awkward
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#40516A]">
              We buy houses in Liverpool, Wirral, and nearby areas, including properties that need refurbishment, repairs, clearing, or full renovation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-3xl border border-[#E3EEF7] bg-[#FAFAF7] p-6 shadow-sm"
              >
                <h3 className="text-lg font-black text-[#071A2F]">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#40516A]">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
              Avoid Extra Costs
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              You do not need to spend thousands preparing the property
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#40516A]">
              Renovation costs can quickly grow once work begins. If you do not want the risk, delay, or stress of managing repairs, a direct sale may be a cleaner option.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#40516A]">
              We can review properties with damp, outdated kitchens, old bathrooms, roof problems, damaged interiors, overgrown gardens, or full refurbishment needs.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#CFEFFF] bg-white p-7 shadow-sm md:p-8">
            <h3 className="text-2xl font-black tracking-tight">What you can avoid</h3>
            <div className="mt-6 space-y-4 text-base font-semibold text-[#1E293B]">
              <p>✓ Builder quotes and project delays</p>
              <p>✓ Decorating before viewings</p>
              <p>✓ Survey problems with buyers</p>
              <p>✓ Estate agent fees</p>
              <p>✓ Long chains and collapsed sales</p>
            </div>
            <div className="mt-8 grid gap-3">
              <a
                href="/contact"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#0784C3] px-7 text-center text-base font-black text-white shadow-sm transition hover:bg-[#056C9F]"
              >
                Tell Us About the Property
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#079B6A] px-7 text-center text-base font-black text-white shadow-sm transition hover:bg-[#067f58]"
                aria-label="Message Pronto House Buyer on WhatsApp"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF9FF] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
              Property Issues We Can Consider
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Houses that are hard to sell normally may still suit us
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {issues.map((issue) => (
              <div
                key={issue}
                className="rounded-2xl border border-[#CFEFFF] bg-white px-5 py-4 text-sm font-black text-[#071A2F] shadow-sm"
              >
                {issue}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
            Simple Process
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            How the sale works
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-black text-[#0784C3]">{step.number}</p>
              <h3 className="mt-3 text-lg font-black text-[#071A2F]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#40516A]">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
              Questions
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              House needs work FAQs
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-[#E3EEF7] bg-[#FAFAF7] p-6"
              >
                <h3 className="text-lg font-black text-[#071A2F]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-[#40516A]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF9FF] px-6 py-16 text-[#071A2F]">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
              Ready to Sell Without Repairs?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Get a clear offer before spending money on work
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#40516A]">
              Tell us about the property and its condition. We will give you a clear, no-obligation cash offer where suitable.
            </p>
          </div>
          <ContactButtons />
        </div>
      </section>
    </main>
  );
}