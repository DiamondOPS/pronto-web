const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27m%20on%20the%20FAQ%20page%20and%20would%20like%20to%20ask%20about%20selling%20my%20house.";

const faqs = [
  {
    category: "Offers",
    question: "How quickly can you make an offer?",
    answer:
      "We can usually give you a no-obligation cash offer within 24 hours after you send the property details. The more information you provide, the quicker we can assess it properly.",
  },
  {
    category: "Timescales",
    question: "How fast can the sale complete?",
    answer:
      "If the legal work is straightforward, completion can happen in as little as 14 days. We can also work to a slower timescale if you need more time.",
  },
  {
    category: "Costs",
    question: "Do I need to pay estate agent fees?",
    answer:
      "No. You do not pay estate agent fees, marketing costs, or hidden charges when selling directly to us.",
  },
  {
    category: "Condition",
    question: "Will I need to repair or decorate the house first?",
    answer:
      "No. We buy properties as they are, including houses that need repairs, updating, clearing, or full refurbishment.",
  },
  {
    category: "Tenants",
    question: "Do you buy houses with tenants?",
    answer:
      "Yes. We can consider rented properties, problem tenancies, vacant homes, and properties where the current situation is complicated.",
  },
  {
    category: "Property Types",
    question: "What types of property do you buy?",
    answer:
      "We buy terraced houses, semi-detached homes, detached houses, flats, inherited properties, tired homes, and properties with chain issues.",
  },
  {
    category: "Areas",
    question: "Do you only buy in Liverpool?",
    answer:
      "No. We focus on Liverpool, Wirral, and surrounding areas, including Birkenhead, Wallasey, Bootle, Huyton, St Helens, Widnes, and Runcorn.",
  },
  {
    category: "Offers",
    question: "Do I have to accept the offer?",
    answer:
      "No. The offer is no-obligation. You can review it, ask questions, compare your options, and decide whether it works for your situation.",
  },
  {
    category: "Mortgage Issues",
    question: "What if my house is in negative equity or mortgage arrears?",
    answer:
      "We can still talk through the situation with you. If the numbers work, a quick sale may help avoid further delays, charges, or uncertainty.",
  },
  {
    category: "Estate Agents",
    question: "How is this different from using an estate agent?",
    answer:
      "Selling through an agent can involve viewings, chains, surveys, renegotiations, delays, and fall-through risk. We offer a simpler direct sale with speed and certainty.",
  },
  {
    category: "Viewings",
    question: "Will lots of people need to view my house?",
    answer:
      "No. We do not need repeated public viewings. We review the property directly and keep the process private and straightforward.",
  },
  {
    category: "Probate",
    question: "Can you buy an inherited property?",
    answer:
      "Yes. We can consider inherited properties, including homes that need clearing, updating, or selling quickly once the legal position is ready.",
  },
];

const guideLinks = [
  { label: "Sell My House Fast", href: "/sell-my-house-fast" },
  { label: "Inherited Property", href: "/inherited-property" },
  { label: "Mortgage Arrears", href: "/mortgage-arrears" },
  { label: "Problem Tenants", href: "/problem-tenants" },
  { label: "House Needs Work", href: "/house-needs-work" },
  { label: "Areas We Cover", href: "/areas-we-cover" },
];

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
      <path d="M16.01 3.2c-7.04 0-12.77 5.66-12.77 12.62 0 2.23.59 4.41 1.71 6.33L3.2 28.8l6.84-1.79a12.9 12.9 0 0 0 5.97 1.49c7.04 0 12.77-5.66 12.77-12.62S23.05 3.2 16.01 3.2Zm0 22.99c-1.9 0-3.75-.51-5.37-1.48l-.39-.23-4.06 1.06 1.08-3.91-.26-.4a10.22 10.22 0 0 1-1.57-5.41c0-5.69 4.74-10.32 10.57-10.32s10.57 4.63 10.57 10.32-4.74 10.37-10.57 10.37Zm5.8-7.75c-.32-.16-1.88-.92-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.55-.95-.84-1.59-1.88-1.78-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.69-.98-2.32-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.39 5.43 4.75.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.76 2.15-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function ContactButtons() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <a
        href="/contact"
        className="inline-flex items-center justify-center rounded-2xl bg-[#10A7E8] px-5 py-4 text-center font-bold text-white shadow-sm transition hover:bg-[#078fd0]"
      >
        Get a Cash Offer
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#079B6A] px-5 py-4 text-center font-bold text-white shadow-sm transition hover:bg-[#067f58]"
        aria-label="Message Pronto House Buyer on WhatsApp"
      >
        <WhatsAppIcon />
        WhatsApp Us
      </a>
      <a
        href="tel:01519092777"
        className="inline-flex items-center justify-center rounded-2xl border border-[#CFEFFF] bg-white px-5 py-4 text-center font-bold text-[#071A2F] transition hover:bg-[#F4FBFF]"
      >
        0151 909 2777
      </a>
    </div>
  );
}

export default function FAQsPage() {
  return (
    <main className="bg-[#FAFAF7] text-[#071A2F]">
      <section className="bg-[#EEF9FF] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#0784C3]">
              Common Questions
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Frequently Asked Questions About Selling Your House Fast
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#40516A]">
              Clear answers about cash offers, timescales, fees, repairs, tenants, inherited properties, and selling directly to Pronto House Buyer.
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
            <h2 className="text-3xl font-black tracking-tight">
              Need a straight answer?
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#40516A]">
              If your situation is urgent, unusual, or sensitive, contact us directly. We will tell you clearly whether a direct cash sale is likely to work.
            </p>
            <div className="mt-6 space-y-3 text-base font-semibold text-[#1E293B]">
              <p>✓ Cash offer within 24 hours</p>
              <p>✓ Completion possible in as little as 14 days</p>
              <p>✓ No repairs, no fees, no chain</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
            Answers Before You Decide
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            The main things sellers ask us
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#40516A]">
            These questions cover the parts of the process that usually matter most: speed, certainty, cost, condition, privacy, and whether your property is suitable.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-[#E3EEF7] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#0784C3]">
                {faq.category}
              </p>
              <h3 className="text-xl font-black tracking-tight text-[#071A2F]">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#40516A]">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#CFEFFF] bg-[#EEF9FF] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
              More Detailed Help
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Read the guide that matches your situation
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#40516A]">
              Some questions need more context. These pages explain the most common selling situations in more detail.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {guideLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group rounded-3xl border border-[#E3EEF7] bg-[#FAFAF7] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#B8E6FF] hover:bg-[#EEF9FF] hover:shadow-md"
              >
                <h3 className="text-lg font-black">{link.label}</h3>
                <p className="mt-3 text-sm font-bold text-[#0784C3] group-hover:text-[#056C9F]">
                  Read more →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-[#CFEFFF] bg-[#EEF9FF] p-8 shadow-sm md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
                Still Unsure?
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Ask us before making a decision
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#40516A]">
                Send us the property details and your question. We will explain the next step clearly, without pressure and without obligation.
              </p>
            </div>
            <ContactButtons />
          </div>
        </div>
      </section>
    </main>
  );
}