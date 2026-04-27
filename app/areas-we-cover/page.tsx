const areas = [
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

export default function Page() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-900 px-6 py-20 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Areas We Cover
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-300">
          We buy houses across Liverpool, the Wirral, and surrounding areas.
          Get a cash offer within 24 hours and complete in as little as 14 days.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-center text-2xl font-semibold text-slate-800">
          Locations We Buy In
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area}
              className="rounded-xl border border-slate-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-medium text-slate-800">{area}</h3>
              <p className="mt-2 text-sm text-slate-500">
                We buy properties in {area} and nearby areas.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-600 px-6 py-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-semibold">
          Get Your Cash Offer Today
        </h2>
        <p className="mb-6 text-emerald-100">No fees. No repairs. No hassle.</p>
        <a
          href="/contact"
          className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-emerald-700 shadow transition hover:bg-slate-100"
        >
          Get My Offer
        </a>
      </section>
    </main>
  );
}