const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27m%20on%20the%20inherited%20property%20page%20and%20would%20like%20an%20offer%20on%20my%20house.";

const situations = [
  "You have inherited a house you do not want to keep",
  "The property is empty and costing money each month",
  "The house needs clearing, repairs, or modernisation",
  "There are several beneficiaries who need a simple outcome",
  "You want to release money from the property quickly",
  "You are waiting for probate or dealing with estate paperwork",
];

const benefits = [
  {
    title: "No repairs or clearing needed",
    description:
      "You do not need to empty the house, decorate, repair damage, or prepare it for estate agent photos before speaking to us.",
  },
  {
    title: "A respectful, private process",
    description:
      "Inherited properties can be sensitive. We keep things straightforward, discreet, and focused on helping you make a practical decision.",
  },
  {
    title: "Helpful when there are multiple beneficiaries",
    description:
      "A clear cash offer can make it easier for everyone involved to understand the option and decide whether a quick sale is right.",
  },
  {
    title: "Flexible completion timescales",
    description:
      "If you need speed, completion can happen in as little as 14 days where the legal process allows. If you need more time, we can discuss that too.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us about the property",
    description:
      "Share the address, condition, whether it is occupied or empty, and where things stand with probate or the estate.",
  },
  {
    number: "02",
    title: "We review the details",
    description:
      "We look at the property, location, likely resale value, condition, and any complications that may affect the sale.",
  },
  {
    number: "03",
    title: "You receive a clear offer",
    description:
      "If the property is suitable, we provide a no-obligation cash offer that you can review privately or share with other beneficiaries.",
  },
  {
    number: "04",
    title: "Complete when ready",
    description:
      "If you accept, solicitors handle the legal work and we move toward completion on the agreed timeline.",
  },
];

const faqs = [
  {
    question: "Can I sell an inherited property before probate is complete?",
    answer:
      "You can speak to us before probate is complete. The exact timing of the sale depends on the legal position, but getting an offer early can help you understand your options.",
  },
  {
    question: "Do I need to clear the house first?",
    answer:
      "No. We can consider inherited properties as they are, including homes with furniture, belongings, or general clearance needed.",
  },
  {
    question: "What if the property needs a lot of work?",
    answer:
      "That is not a problem. We buy properties that need updating, repairs, full refurbishment, or clearing before they can be lived in or sold normally.",
  },
  {
    question: "What if there are several beneficiaries?",
    answer:
      "All legal owners or authorised representatives need to agree before completion, but a clear written offer can help everyone understand the option.",
  },
  {
    question: "Do I have to accept the offer?",
    answer:
      "No. The offer is completely no-obligation. You can compare it with an estate agent sale and decide what works best.",
  },
  {
    question: "How quickly can you complete?",
    answer:
      "Where the legal process is ready, completion can happen in as little as 14 days. Probate, title checks, or estate administration can affect timing.",
  },
];

export default function InheritedPropertyPage() {
  return (
    <main className="bg-[#FAFAF7]">
      <section className="bg-[#071A2F] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#F2B84B]">
              Inherited Property Sale
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Sell an Inherited Property Quickly and Respectfully
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              If you have inherited a house and want a simple way to sell, Pronto House Buyer can provide a clear cash offer without estate agents, repairs, viewings, or unnecessary delays.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#0073E6] px-6 py-3 font-semibold text-white transition hover:bg-[#005fc2]"
              >
                Get My Cash Offer
              </a>
              <a
                href="tel:01519092777"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
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
                <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
                  <path d="M16.01 3.2c-7.04 0-12.77 5.66-12.77 12.62 0 2.23.59 4.41 1.71 6.33L3.2 28.8l6.84-1.79a12.9 12.9 0 0 0 5.97 1.49c7.04 0 12.77-5.66 12.77-12.62S23.05 3.2 16.01 3.2Zm0 22.99c-1.9 0-3.75-.51-5.37-1.48l-.39-.23-4.06 1.06 1.08-3.91-.26-.4a10.22 10.22 0 0 1-1.57-5.41c0-5.69 4.74-10.32 10.57-10.32s10.57 4.63 10.57 10.32-4.74 10.37-10.57 10.37Zm5.8-7.75c-.32-.16-1.88-.92-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.55-.95-.84-1.59-1.88-1.78-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.69-.98-2.32-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.39 5.43 4.75.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.76 2.15-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 text-[#1E293B] shadow-2xl">
            <h2 className="text-2xl font-bold text-[#071A2F]">
              A practical option during a difficult time
            </h2>
            <p className="mt-4 leading-7 text-[#475569]">
              Inheriting a property can come with paperwork, family decisions, ongoing bills, insurance, maintenance, and emotional pressure. We give you a straightforward sale option so you can decide what is best without being rushed.
            </p>
            <div className="mt-6 rounded-2xl bg-[#EEF6FF] p-5 text-sm font-medium leading-6 text-[#071A2F]">
              Cash offer within 24 hours. No estate agent fees. No repairs needed before sale.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0073E6]">
            Common Inherited Property Situations
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A] md:text-4xl">
            You may not want to keep, manage, or renovate the property
          </h2>
          <p className="mt-5 leading-8 text-[#475569]">
            Many inherited homes are not ready for the open market. They may need clearing, updating, structural work, or simply too much time and attention. A traditional estate agent sale can add months of viewings, negotiation, survey issues, and uncertainty.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {situations.map((situation) => (
            <div
              key={situation}
              className="rounded-2xl bg-white p-5 text-sm font-medium text-[#1E293B] shadow-sm ring-1 ring-[#DDE7F3]"
            >
              ✓ {situation}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-3xl bg-[#EAF4FF] p-8 text-[#071A2F] ring-1 ring-[#DDE7F3]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0073E6]">
              Why a Direct Sale Helps
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Remove the pressure of preparing the house for market
            </h2>
            <p className="mt-5 leading-8 text-[#475569]">
              If the house has been lived in for many years, needs work, or still contains belongings, preparing it for an estate agent sale can be expensive and time-consuming. We can assess it as it stands.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-3xl border border-[#DDE7F3] bg-[#FAFAF7] p-6"
              >
                <h3 className="text-lg font-bold text-[#0B1F3A]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#475569]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0073E6]">
              Probate and Beneficiaries
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#071A2F] md:text-4xl">
              A clear offer can help everyone make a decision
            </h2>
            <p className="mt-5 leading-8 text-[#475569]">
              When there are several beneficiaries, different opinions can slow things down. One person may want to keep the property, another may want to sell, and someone else may be worried about costs. A clear cash offer gives everyone a practical option to consider.
            </p>
            <p className="mt-4 leading-8 text-[#475569]">
              You can contact us before every legal detail is finished. We cannot replace legal advice, but we can help you understand whether a fast direct sale is likely to be possible once the estate is ready to proceed.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#DDE7F3]">
            <h3 className="text-2xl font-bold text-[#0B1F3A]">
              What you do not need to do first
            </h3>
            <div className="mt-6 space-y-4 text-[#1E293B]">
              <p>✓ You do not need to clear the whole property</p>
              <p>✓ You do not need to repair or modernise it</p>
              <p>✓ You do not need to arrange repeated viewings</p>
              <p>✓ You do not need to wait until it looks perfect</p>
              <p>✓ You do not need to pay estate agent fees</p>
            </div>
            <a
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#0073E6] px-6 py-3 font-semibold text-white transition hover:bg-[#005fc2]"
            >
              Tell Us About the Property
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
              aria-label="Message Pronto House Buyer on WhatsApp"
            >
              <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
                <path d="M16.01 3.2c-7.04 0-12.77 5.66-12.77 12.62 0 2.23.59 4.41 1.71 6.33L3.2 28.8l6.84-1.79a12.9 12.9 0 0 0 5.97 1.49c7.04 0 12.77-5.66 12.77-12.62S23.05 3.2 16.01 3.2Zm0 22.99c-1.9 0-3.75-.51-5.37-1.48l-.39-.23-4.06 1.06 1.08-3.91-.26-.4a10.22 10.22 0 0 1-1.57-5.41c0-5.69 4.74-10.32 10.57-10.32s10.57 4.63 10.57 10.32-4.74 10.37-10.57 10.37Zm5.8-7.75c-.32-.16-1.88-.92-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.55-.95-.84-1.59-1.88-1.78-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.69-.98-2.32-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.39 5.43 4.75.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.76 2.15-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF6FF] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0073E6]">
              Simple Process
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#071A2F] md:text-4xl">
              How selling an inherited house works
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.number} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-[#F2B84B]">{step.number}</p>
                <h3 className="mt-3 text-lg font-bold text-[#071A2F]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#475569]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#DDE7F3] md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0073E6]">
                Local Property Buyer
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#071A2F] md:text-4xl">
                Inherited property in Liverpool, Wirral, or nearby?
              </h2>
              <p className="mt-5 leading-8 text-[#475569]">
                We buy inherited houses across Liverpool, Wirral, Birkenhead, Wallasey, Bootle, Huyton, St Helens, Widnes, Runcorn, and surrounding areas. If you want a local buyer who can move quickly and keep things simple, we can help.
              </p>
            </div>

            <div className="rounded-3xl bg-[#071A2F] p-6 text-white">
              <h3 className="text-2xl font-bold">
                Start with a private conversation
              </h3>
              <p className="mt-4 leading-7 text-slate-200">
                You do not need to make a final decision today. Tell us about the property and we will explain whether a direct cash sale is likely to work.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#F2B84B] px-6 py-3 font-semibold text-[#071A2F] transition hover:bg-[#d9a13f]"
              >
                Request My Offer
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0073E6]">
              Questions
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A] md:text-4xl">
              Inherited property FAQs
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-[#DDE7F3] bg-[#FAFAF7] p-6"
              >
                <h3 className="text-lg font-bold text-[#0B1F3A]">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#475569]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071A2F] px-6 py-16 text-center text-white">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl">
          Ready to review your options?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-200">
          Tell us about the inherited property and we will come back with a clear, no-obligation cash offer where suitable.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#F2B84B] px-6 py-3 font-semibold text-[#071A2F] shadow transition hover:bg-[#d9a13f]"
          >
            Get My Cash Offer
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
            aria-label="Message Pronto House Buyer on WhatsApp"
          >
            <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
              <path d="M16.01 3.2c-7.04 0-12.77 5.66-12.77 12.62 0 2.23.59 4.41 1.71 6.33L3.2 28.8l6.84-1.79a12.9 12.9 0 0 0 5.97 1.49c7.04 0 12.77-5.66 12.77-12.62S23.05 3.2 16.01 3.2Zm0 22.99c-1.9 0-3.75-.51-5.37-1.48l-.39-.23-4.06 1.06 1.08-3.91-.26-.4a10.22 10.22 0 0 1-1.57-5.41c0-5.69 4.74-10.32 10.57-10.32s10.57 4.63 10.57 10.32-4.74 10.37-10.57 10.37Zm5.8-7.75c-.32-.16-1.88-.92-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.55-.95-.84-1.59-1.88-1.78-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.69-.98-2.32-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.39 5.43 4.75.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.76 2.15-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </section>
    </main>
  );
}