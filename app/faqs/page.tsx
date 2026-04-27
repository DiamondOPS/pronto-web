

const faqs = [
  {
    question: "How quickly can you make an offer?",
    answer:
      "We can usually give you a no-obligation cash offer within 24 hours after you tell us about the property.",
  },
  {
    question: "How fast can the sale complete?",
    answer:
      "If everything is straightforward, completion can happen in as little as 14 days. We can also work to a slower timeline if that suits you better.",
  },
  {
    question: "Do I need to pay estate agent fees?",
    answer:
      "No. You do not pay estate agent fees, marketing costs, or hidden charges when selling directly to us.",
  },
  {
    question: "Will I need to repair or decorate the house first?",
    answer:
      "No. We buy properties as they are, including houses that need repairs, updating, clearing, or full refurbishment.",
  },
  {
    question: "Do you buy houses with tenants?",
    answer:
      "Yes. We can consider rented properties, problem tenancies, vacant homes, and properties where the current situation is complicated.",
  },
  {
    question: "What types of property do you buy?",
    answer:
      "We buy terraced houses, semi-detached homes, detached houses, flats, inherited properties, tired homes, and properties with chain issues.",
  },
  {
    question: "Do you only buy in Liverpool?",
    answer:
      "No. We focus on Liverpool, the Wirral, and surrounding areas, including places such as Birkenhead, Wallasey, Bootle, Huyton, St Helens, Widnes, and Runcorn.",
  },
  {
    question: "Do I have to accept the offer?",
    answer:
      "No. The offer is no-obligation. You can review it, ask questions, and decide whether it works for your situation.",
  },
  {
    question: "What if my house is in negative equity or mortgage arrears?",
    answer:
      "We can still talk through the situation with you. If the numbers work, a quick sale may help avoid further delays, charges, or uncertainty.",
  },
  {
    question: "How is this different from using an estate agent?",
    answer:
      "Selling through an agent can involve viewings, chains, surveys, renegotiations, delays, and fall-through risk. We offer a simpler direct sale with speed and certainty.",
  },
];

export default function FAQsPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-900 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Common Questions
          </p>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Clear answers about selling your house quickly, privately, and without estate agent fees.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1fr_2fr]">
        <aside className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-2xl font-bold text-slate-900">
            Need a straight answer?
          </h2>
          <p className="mt-4 text-slate-600">
            If your situation is urgent, unusual, or sensitive, you can speak to us directly. We will tell you clearly whether we can help.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p>✓ Cash offer within 24 hours</p>
            <p>✓ Complete in as little as 14 days</p>
            <p>✓ No repairs or viewings needed</p>
            <p>✓ No estate agent fees</p>
          </div>
          <a
            href="/contact"
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Ask Us a Question
          </a>
        </aside>

        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {faq.question}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-emerald-600 px-6 py-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-semibold">
          Ready to See What Your House Could Be Worth?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-emerald-100">
          Send us the property details and we’ll come back with a clear, no-obligation cash offer.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-emerald-700 shadow transition hover:bg-slate-100"
        >
          Get My Cash Offer
        </a>
      </section>
    </main>
  );
}