const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27m%20on%20the%20areas%20we%20cover%20page%20and%20would%20like%20an%20offer%20on%20my%20house.";

const mainAreas = [
  "Liverpool",
  "Wirral",
  "Birkenhead",
  "Aintree",
  "Anfield",
  "Bebington",
  "Bootle",
  "Huyton",
  "Moreton",
  "Norris Green",
  "Ormskirk",
  "Prescot",
  "Runcorn",
  "Southport",
  "St Helens",
  "Toxteth",
  "Wallasey",
  "Walton",
  "Wavertree",
  "Widnes",
];

const widerAreas = [
  "Kirkby",
  "Crosby",
  "Formby",
  "Maghull",
  "Garston",
  "Speke",
  "Ellesmere Port",
  "Newton-le-Willows",
  "Warrington",
  "Skelmersdale",
];

const propertyTypes = [
  { label: "Inherited properties", href: "/inherited-property" },
  { label: "Tenanted properties", href: "/problem-tenants" },
  { label: "Houses needing work", href: "/house-needs-work" },
  { label: "Mortgage arrears", href: "/mortgage-arrears" },
  { label: "Divorce or separation", href: "/divorce-separation" },
  { label: "Fast house sale", href: "/sell-my-house-fast" },
];

const reasons = [
  {
    title: "Local area knowledge",
    description:
      "We focus on Liverpool, Wirral, and nearby towns, so we understand local streets, house types, resale demand, and common property issues.",
  },
  {
    title: "A direct answer quickly",
    description:
      "Send the postcode and a few details. We can usually confirm whether the property is suitable and provide a cash offer within 24 hours.",
  },
  {
    title: "No repairs before sale",
    description:
      "We regularly buy properties that need clearing, updating, repairs, or full refurbishment. You do not need to spend money first.",
  },
  {
    title: "No chain uncertainty",
    description:
      "A direct sale removes repeated viewings, buyer chains, mortgage delays, and last-minute renegotiations from the process.",
  },
];

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
      <path d="M16.01 3.2c-7.04 0-12.77 5.66-12.77 12.62 0 2.23.59 4.41 1.71 6.33L3.2 28.8l6.84-1.79a12.9 12.9 0 0 0 5.97 1.49c7.04 0 12.77-5.66 12.77-12.62S23.05 3.2 16.01 3.2Zm0 22.99c-1.9 0-3.75-.51-5.37-1.48l-.39-.23-4.06 1.06 1.08-3.91-.26-.4a10.22 10.22 0 0 1-1.57-5.41c0-5.69 4.74-10.32 10.57-10.32s10.57 4.63 10.57 10.32-4.74 10.37-10.57 10.37Zm5.8-7.75c-.32-.16-1.88-.92-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.55-.95-.84-1.59-1.88-1.78-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.69-.98-2.32-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.39 5.43 4.75.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.76 2.15-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function ContactButtons({ dark = false }: { dark?: boolean }) {
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
        className={`inline-flex items-center justify-center rounded-2xl border px-5 py-4 text-center font-bold transition ${
          dark
            ? "border-white/25 text-white hover:bg-white/10"
            : "border-[#CFEFFF] bg-white text-[#071A2F] hover:bg-[#F4FBFF]"
        }`}
      >
        0151 909 2777
      </a>
    </div>
  );
}

export default function AreasWeCoverPage() {
  return (
    <main className="bg-[#FAFAF7] text-[#071A2F]">
      <section className="bg-[#EEF9FF] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#0784C3]">
              Local Cash House Buyer
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Areas We Cover Across Liverpool, Wirral and Nearby Towns
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#40516A]">
              We buy houses across Liverpool, Wirral, Merseyside, and nearby towns. If you want a fast sale without estate agents, repairs, repeated viewings, or a chain, we can give you a clear local cash offer.
            </p>
            <div className="mt-8 max-w-3xl">
              <ContactButtons />
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#CFEFFF] bg-white p-7 shadow-sm md:p-8">
            <div className="mb-6 inline-flex rounded-2xl bg-[#DDF3FF] p-4 text-[#0784C3]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current stroke-[2.5]">
                <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" />
                <path d="M9.5 10.5 11 12l3.5-3.5" />
              </svg>
            </div>
            <h2 className="text-3xl font-black tracking-tight">
              Selling locally? Start here.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#40516A]">
              Tell us the postcode and basic property details. We will confirm whether we cover the area and explain the likely route to a no-obligation offer.
            </p>
            <div className="mt-6 space-y-3 text-base font-semibold text-[#1E293B]">
              <p>✓ Liverpool & Wirral focused</p>
              <p>✓ Cash offer within 24 hours</p>
              <p>✓ Completion possible in as little as 14 days</p>
              <p>✓ No repairs, no fees, no chain</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
            Main Locations
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            We buy houses across the local region
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#40516A]">
            Our core focus is Liverpool, Wirral, and surrounding areas. We understand local property types, buyer demand, street-by-street differences, and the problems that can slow down a normal sale.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#D8ECFA] bg-white p-5 shadow-sm md:p-7">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {mainAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-[#E3EEF7] bg-[#FAFAF7] px-5 py-4 font-black text-[#071A2F]"
              >
                {area}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-[#EEF9FF] p-5 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <h3 className="text-xl font-black text-[#071A2F]">
                Do not see your exact area?
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#40516A]">
                We cover nearby streets and surrounding towns too. Send the postcode and we will confirm quickly.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[#10A7E8] px-5 py-4 text-center font-bold text-white shadow-sm transition hover:bg-[#078fd0] md:mt-0 md:w-auto"
            >
              Check My Area
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#CFEFFF] bg-[#EEF9FF] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
              Wider Coverage
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Not listed above? We may still cover your area
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#40516A]">
              We regularly review properties across Merseyside, Cheshire, Lancashire, and nearby towns. If your area is not listed, contact us anyway and we will confirm quickly whether we can help.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {widerAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-[#E3EEF7] bg-[#FAFAF7] p-4 text-sm font-bold text-[#1E293B]"
              >
                ✓ {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
              Selling Situations
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Every situation page connects to a dedicated guide
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#40516A]">
              Sellers contact us for different reasons. Use the links below to read more about the situation that fits your property, or contact us directly for a quick answer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {propertyTypes.map((type) => (
              <a
                key={type.href}
                href={type.href}
                className="group rounded-3xl border border-[#E3EEF7] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#B8E6FF] hover:shadow-md"
              >
                <h3 className="text-lg font-black">{type.label}</h3>
                <p className="mt-3 text-sm font-semibold text-[#0784C3] group-hover:text-[#056C9F]">
                  Read the guide →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF9FF] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
              Why Local Sellers Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              A local cash buyer can make the process simpler
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-black">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#40516A]">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF9FF] px-6 py-16 text-[#071A2F]">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">
              Quick Local Offer
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Get a local offer before choosing your sale route
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#40516A]">
              Some sellers use our offer to move quickly. Others use it to compare against an estate agency valuation. Send the postcode and we will confirm whether we cover the area.
            </p>
          </div>
          <ContactButtons />
        </div>
      </section>
    </main>
  );
}