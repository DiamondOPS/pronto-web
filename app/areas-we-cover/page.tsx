const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27m%20on%20the%20areas%20we%20cover%20page%20and%20would%20like%20an%20offer%20on%20my%20house.";

const mainAreas = [
  "Liverpool",
  "Wirral",
  "Birkenhead",
  "Wallasey",
  "Bootle",
  "Huyton",
  "Prescot",
  "St Helens",
  "Runcorn",
  "Widnes",
  "Southport",
  "Ormskirk",
];

const widerAreas = [
  "Kirkby",
  "Crosby",
  "Formby",
  "Maghull",
  "Aintree",
  "Wavertree",
  "Toxteth",
  "Anfield",
  "Garston",
  "Speke",
  "Moreton",
  "Bebington",
  "Ellesmere Port",
  "Newton-le-Willows",
  "Warrington",
  "Skelmersdale",
];

const propertyTypes = [
  "Terraced houses",
  "Semi-detached homes",
  "Detached houses",
  "Flats and apartments",
  "Inherited properties",
  "Tenanted properties",
  "Houses needing work",
  "Properties with mortgage arrears",
];

const reasons = [
  {
    title: "Local knowledge",
    description:
      "We focus on Liverpool, Wirral, and the surrounding region, so we understand local streets, property types, buyer demand, and common issues.",
  },
  {
    title: "Fast decisions",
    description:
      "You do not need to wait weeks for estate agent feedback. We can usually review your property and provide a cash offer within 24 hours.",
  },
  {
    title: "Any condition considered",
    description:
      "We buy houses that need repairs, updating, clearing, or full refurbishment. You do not need to spend money before speaking to us.",
  },
  {
    title: "No chain uncertainty",
    description:
      "A direct cash sale avoids the delays and risks of buyer chains, mortgage issues, repeated viewings, and last-minute renegotiations.",
  },
];

export default function AreasWeCoverPage() {
  return (
    <main className="bg-[#FAFAF7]">
      <section className="bg-[#071A2F] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#F2B84B]">
              Local Cash House Buyer
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Areas We Cover Across Liverpool, Wirral and Beyond
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Pronto House Buyer purchases properties across Liverpool, Wirral, Merseyside, and nearby towns. If you want a fast cash offer without estate agents, repairs, viewings, or chains, we can help.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#0073E6] px-6 py-3 font-semibold text-white transition hover:bg-[#005fc2]"
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
          </div>

          <div className="rounded-3xl bg-white p-8 text-[#1E293B] shadow-2xl">
            <h2 className="text-2xl font-bold text-[#071A2F]">
              Selling locally? Start here.
            </h2>
            <p className="mt-4 leading-7 text-[#475569]">
              Whether your property is in Liverpool city centre, a Wirral suburb, or a nearby town, we can usually give you an initial answer quickly. We buy homes in good condition, poor condition, empty, tenanted, inherited, or stuck in difficult circumstances.
            </p>
            <div className="mt-6 rounded-2xl bg-[#EEF6FF] p-5 text-sm font-medium leading-6 text-[#071A2F]">
              Cash offer within 24 hours. Completion possible in as little as 14 days where the legal process allows.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0073E6]">
            Main Locations
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#071A2F] md:text-4xl">
            We buy houses across the local region
          </h2>
          <p className="mt-5 leading-8 text-[#475569]">
            Our core focus is Liverpool, Wirral, and surrounding areas. We understand the local market and can take a practical view of different property types, conditions, and selling situations.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mainAreas.map((area) => (
            <article
              key={area}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#DDE7F3] transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-[#071A2F]">{area}</h3>
              <p className="mt-2 text-sm leading-6 text-[#475569]">
                We buy houses in {area} and nearby areas, including properties that need work or require a quick sale.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-3xl bg-[#EAF4FF] p-8 ring-1 ring-[#DDE7F3]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0073E6]">
              Wider Coverage
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#071A2F]">
              Not listed above? We may still cover your area
            </h2>
            <p className="mt-5 leading-8 text-[#475569]">
              We regularly review properties across Merseyside, Cheshire, Lancashire, and nearby towns. If your area is not listed, contact us anyway and we will confirm quickly whether we can help.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {widerAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl bg-[#FAFAF7] p-4 text-sm font-medium text-[#1E293B] ring-1 ring-[#DDE7F3]"
              >
                ✓ {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0073E6]">
              Property Types
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#071A2F] md:text-4xl">
              We buy more than standard houses
            </h2>
            <p className="mt-5 leading-8 text-[#475569]">
              You do not need a perfect property to get an offer. We consider a wide range of homes, including properties that estate agents may struggle to sell quickly.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#DDE7F3]">
            <div className="grid gap-3 sm:grid-cols-2">
              {propertyTypes.map((type) => (
                <div key={type} className="rounded-2xl bg-[#EEF6FF] p-4 text-sm font-medium text-[#071A2F]">
                  ✓ {type}
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#0073E6] px-6 py-3 font-semibold text-white transition hover:bg-[#005fc2]"
            >
              Check If We Cover My Area
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF6FF] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0073E6]">
              Why Local Sellers Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#071A2F] md:text-4xl">
              A local cash buyer can make the process simpler
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#071A2F]">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#475569]">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-[#071A2F] p-8 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F2B84B]">
                Quick Local Offer
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Want to know if we buy in your area?
              </h2>
              <p className="mt-5 leading-8 text-slate-200">
                Send us the property postcode and a few details. We will confirm whether we cover the area and, where suitable, provide a no-obligation cash offer.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#F2B84B] px-6 py-3 font-semibold text-[#071A2F] transition hover:bg-[#d9a13f]"
              >
                Get My Offer
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
                aria-label="Message Pronto House Buyer on WhatsApp"
              >
                <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
                  <path d="M16.01 3.2c-7.04 0-12.77 5.66-12.77 12.62 0 2.23.59 4.41 1.71 6.33L3.2 28.8l6.84-1.79a12.9 12.9 0 0 0 5.97 1.49c7.04 0 12.77-5.66 12.77-12.62S23.05 3.2 16.01 3.2Zm0 22.99c-1.9 0-3.75-.51-5.37-1.48l-.39-.23-4.06 1.06 1.08-3.91-.26-.4a10.22 10.22 0 0 1-1.57-5.41c0-5.69 4.74-10.32 10.57-10.32s10.57 4.63 10.57 10.32-4.74 10.37-10.57 10.37Zm5.8-7.75c-.32-.16-1.88-.92-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.55-.95-.84-1.59-1.88-1.78-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.69-.98-2.32-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.39 5.43 4.75.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.76 2.15-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}