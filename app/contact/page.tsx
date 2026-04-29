const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27d%20like%20a%20cash%20offer%20for%20my%20house.";

const contactOptions = [
  {
    title: "Call us",
    description: "Speak directly with the team about your property and timescale.",
    action: "0151 909 2777",
    href: "tel:01519092777",
  },
  {
    title: "WhatsApp us",
    description: "Send the property address and a few details for a fast response.",
    action: "Message on WhatsApp",
    href: whatsappHref,
  },
  {
    title: "Send the form",
    description: "Tell us about the property and we’ll review it as soon as possible.",
    action: "Complete the form below",
    href: "#offer-form",
  },
];

const reassurance = [
  "No estate agent fees",
  "No repairs needed",
  "No repeated viewings",
  "No obligation to accept",
  "Cash offer within 24 hours",
  "Completion possible in as little as 14 days",
];

export default function ContactPage() {
  return (
    <main className="bg-[#FAFAF7]">
      <section className="bg-[#071A2F] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#F2B84B]">
              Get Your Cash Offer
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Tell Us About Your Property
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Whether you need to sell quickly, avoid estate agent delays, or simply understand your options, send us the details and we’ll come back with a clear, no-obligation cash offer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#offer-form"
                className="inline-flex items-center justify-center rounded-xl bg-[#0073E6] px-6 py-3 font-semibold text-white transition hover:bg-[#005fc2]"
              >
                Start My Offer
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

          <form
            id="offer-form"
            className="rounded-3xl bg-white p-6 text-[#1E293B] shadow-2xl ring-1 ring-white/20 md:p-8"
          >
            <h2 className="text-2xl font-bold text-[#071A2F]">
              Get your cash offer
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#475569]">
              Send the key details and we’ll review your property as quickly as possible.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#071A2F]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#071A2F]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
                  placeholder="07123 456789"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-semibold text-[#071A2F]">
                Property Address
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
                placeholder="Property address or postcode"
              />
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-semibold text-[#071A2F]">
                What best describes your situation?
              </label>
              <select className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20">
                <option>Selling quickly</option>
                <option>Inherited property</option>
                <option>Mortgage arrears</option>
                <option>Problem tenants</option>
                <option>Divorce or separation</option>
                <option>House needs work</option>
                <option>Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-[#0073E6] px-6 py-3 font-semibold text-white transition hover:bg-[#005fc2]"
            >
              Get My Cash Offer
            </button>

            <p className="mt-3 text-center text-xs leading-5 text-[#475569]">
              For the fastest response, call or WhatsApp us directly.
            </p>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {contactOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              target={option.href.startsWith("https://wa.me") ? "_blank" : undefined}
              rel={option.href.startsWith("https://wa.me") ? "noopener noreferrer" : undefined}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#DDE7F3] transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-[#071A2F]">{option.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#475569]">
                {option.description}
              </p>
              <p className="mt-5 font-semibold text-[#0073E6]">{option.action}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0073E6]">
              Request an Offer
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#071A2F] md:text-4xl">
              Send the essentials first. We can fill in the rest later.
            </h2>
            <p className="mt-5 leading-8 text-[#475569]">
              The form above captures the most important details: your name, phone number, property address, and situation. If you are unsure about anything else, that is fine. We can ask follow-up questions after reviewing the basics.
            </p>
            <p className="mt-4 leading-8 text-[#475569]">
              You do not need to prepare the property, repair anything, arrange valuations, or speak to an estate agent before contacting us.
            </p>
          </div>

          <div className="rounded-3xl bg-[#FAFAF7] p-8 shadow-sm ring-1 ring-[#DDE7F3]">
            <h3 className="text-2xl font-bold text-[#071A2F]">
              Why sellers contact us
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {reassurance.map((item) => (
                <div key={item} className="rounded-2xl bg-[#EEF6FF] p-4 text-sm font-medium text-[#071A2F]">
                  ✓ {item}
                </div>
              ))}
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
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

      <section className="bg-[#071A2F] px-6 py-16 text-center text-white">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl">
          Prefer to speak to someone now?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-200">
          Call or WhatsApp the team and tell us the property address. We’ll let you know quickly whether we can help.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="tel:01519092777"
            className="inline-flex items-center justify-center rounded-xl bg-[#F2B84B] px-6 py-3 font-semibold text-[#071A2F] transition hover:bg-[#d9a13f]"
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
      </section>
    </main>
  );
}