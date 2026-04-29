const warningSigns = [
  "Rent arrears are building up",
  "The tenant is refusing access for viewings or inspections",
  "The property is being damaged or poorly looked after",
  "Communication has broken down",
  "You are facing complaints from neighbours or the council",
  "You want to sell but cannot face a long eviction process",
];

const benefits = [
  {
    title: "Sell with tenants still in place",
    description:
      "You may not need to wait for the property to be vacant. We can look at the situation as it stands and make a direct offer.",
  },
  {
    title: "Avoid repeated viewings",
    description:
      "Estate agent viewings can be difficult when tenants are uncooperative. We keep the process private, simple, and low-disruption.",
  },
  {
    title: "No repairs or clearing needed",
    description:
      "If the property has been neglected or damaged, you do not need to spend money putting it right before speaking to us.",
  },
  {
    title: "Move quickly if the numbers work",
    description:
      "We can make a cash offer within 24 hours and complete in as little as 14 days where the legal process allows.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us what is happening",
    description:
      "Explain the tenancy, rent position, property condition, and whether you need a fast sale or a more flexible timeline.",
  },
  {
    number: "02",
    title: "We review the property",
    description:
      "We assess the property, location, condition, tenancy situation, and likely sale options without asking you to prepare it for market.",
  },
  {
    number: "03",
    title: "You receive a clear offer",
    description:
      "If the property fits, we give you a straightforward cash offer with no estate agent fees and no obligation to accept.",
  },
  {
    number: "04",
    title: "Complete and move forward",
    description:
      "If you accept, we work with solicitors to complete as quickly as possible so you can draw a line under the problem.",
  },
];

const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27m%20on%20the%20problem%20tenants%20page%20and%20would%20like%20an%20offer%20on%20my%20house.";

const faqs = [
  {
    question: "Can I sell if the tenant is still living there?",
    answer:
      "Yes, in many cases we can consider buying with tenants still in place. Tell us the details and we will explain what is realistic.",
  },
  {
    question: "What if the tenant is not paying rent?",
    answer:
      "Rent arrears do not automatically stop a sale. We will factor the situation into the offer and explain your options clearly.",
  },
  {
    question: "Do I need to evict the tenant before speaking to you?",
    answer:
      "No. You can speak to us before starting or completing an eviction process. This may save time, stress, and further holding costs.",
  },
  {
    question: "Will you still buy if the property has been damaged?",
    answer:
      "Yes. We buy properties that need work, including homes that have been damaged, neglected, or left in poor condition.",
  },
];

export default function ProblemTenantsPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Problem Tenant Property Sale
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Sell a Property with Problem Tenants
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              If you are a landlord dealing with difficult tenants, rent arrears, property damage, or a tenancy that is stopping you from selling, Pronto House Buyer can give you a direct route out.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Get My Cash Offer
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

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
            <h2 className="text-2xl font-bold text-white">
              We can help when selling feels stuck
            </h2>
            <div className="mt-6 space-y-4 text-slate-200">
              <p>✓ Cash offer within 24 hours</p>
              <p>✓ Complete in as little as 14 days</p>
              <p>✓ No estate agent viewings</p>
              <p>✓ No repairs before sale</p>
              <p>✓ Liverpool, Wirral, and surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Landlord Problems
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              A difficult tenancy can make a normal sale almost impossible
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              When a tenant stops paying, refuses access, damages the property, or makes communication difficult, selling through an estate agent can become slow and uncertain. Buyers may be put off, mortgage lenders can ask awkward questions, and viewings may be hard to arrange.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              That does not mean you are stuck. Pronto House Buyer works with landlords who want a clean exit without months of uncertainty. We look at the property, the tenancy, the location, and the wider situation, then give you a clear answer.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-xl font-bold text-slate-900">
              Common signs you may need a faster route
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {warningSigns.map((sign) => (
                <div
                  key={sign}
                  className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700"
                >
                  ✓ {sign}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Why landlords speak to us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              We make the sale simpler when the property is complicated
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Direct Buyer
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Why a cash buyer can be better than the open market
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              A traditional sale usually depends on viewings, surveys, mortgage approval, buyer confidence, and a smooth legal process. Problem tenants can create friction at every stage. A buyer may pull out if they cannot inspect properly, if arrears are unclear, or if they believe eviction will be difficult.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              We are not looking for a perfect property. We are looking for realistic situations where we can make a fair offer and complete quickly. That gives you certainty and removes the pressure of trying to present a difficult property to the open market.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-3xl font-bold text-slate-900">
              What you do not need to do first
            </h2>
            <div className="mt-6 space-y-4 text-slate-700">
              <p>✓ You do not need to renovate the property</p>
              <p>✓ You do not need to arrange repeated viewings</p>
              <p>✓ You do not need to wait months before asking us</p>
              <p>✓ You do not need to hide the problem from us</p>
              <p>✓ You do not need to pay estate agent fees</p>
            </div>
            <a
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500"
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
      </section>

      <section className="bg-slate-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              How selling a tenanted problem property works
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.number} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-amber-600">{step.number}</p>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Local Property Buyer
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Selling in Liverpool, Wirral, or nearby areas?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              We buy properties across Liverpool, Wirral, Birkenhead, Wallasey, Bootle, Huyton, St Helens, Widnes, Runcorn, and surrounding areas. We understand that rental property issues can vary street by street, and we take a practical view of each situation.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Whether you own one rental house or several properties, we can give you a clear route to sell without putting the property on the open market.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-2xl font-bold text-slate-900">
              Start with a private conversation
            </h3>
            <p className="mt-4 leading-7 text-slate-600">
              You do not need to have everything resolved before getting in touch. Share the basics and we will tell you whether a direct sale is likely to work.
            </p>
            <div className="mt-6 rounded-2xl bg-emerald-50 p-5 text-sm leading-6 text-emerald-900">
              The offer is no-obligation. You can ask questions, compare your options, and decide whether a fast cash sale is right for you.
            </div>
            <a
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Get a No-Obligation Offer
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
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Questions
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Problem tenant FAQs
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
          Ready to stop the stress and sell the property?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-emerald-100">
          Tell us what is happening with the tenant and the property. We will come back with a clear answer and, where suitable, a cash offer within 24 hours.
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