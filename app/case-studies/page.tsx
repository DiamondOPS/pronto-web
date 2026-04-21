import Image from "next/image";
import { CheckCircle2, Phone, Star } from "lucide-react";

const featured = {
  image: "/images/house1.jpg",
  badge: "Inherited Property",
  title: "Inherited Terrace in Wavertree (L15)",
  text:
    "The property was inherited and needed cosmetic work. The seller wanted a quick, hassle-free sale with no estate agent involved.",
  bullets: [
    "Cash offer in 18 hours",
    "Completed in just over 2 weeks",
    "No repairs or viewings",
    "Straightforward process throughout",
  ],
  quote:
    "I needed a clean, quick sale after probate. Pronto made the whole thing very straightforward.",
};

const studies = [
  {
    image: "/images/house2.jpg",
    badge: "Tenanted Property",
    title: "Tenanted Property in Birkenhead (CH41)",
    text:
      "Long-term tenant situation causing issues. We bought the property as-is with tenants in place.",
    bullets: [
      "Cash offer within 24 hours",
      "Completed in 12 days",
      "No repairs or viewings",
    ],
  },
  {
    image: "/images/house3.jpg",
    badge: "House Needs Work",
    title: "House Needing Work in Bootle (L20)",
    text:
      "Property needed substantial updating. Seller wanted speed and certainty rather than months of work.",
    bullets: [
      "Offer in 22 hours",
      "Completed in 14 days",
      "No repairs needed",
    ],
  },
  {
    image: "/images/house1.jpg",
    badge: "Mortgage Arrears",
    title: "Mortgage Arrears Case in Liverpool",
    text:
      "The seller needed to act quickly to reduce pressure and avoid a drawn-out process.",
    bullets: [
      "Offer in 20 hours",
      "Completed in 13 days",
      "Helped move things forward quickly",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-16">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Case Studies
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Real cases. Real people. Real results.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A few examples of how we have helped homeowners across Liverpool
              and Wirral sell quickly for cash.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Cash offer within 24 hours",
                "Complete in as little as 14 days",
                "No fees or commissions",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-800 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-slate-200">
            <Image
              src="/images/house1.jpg"
              alt="Featured case study property"
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[320px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 lg:p-10">
              <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                {featured.badge}
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                {featured.title}
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {featured.text}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {featured.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-slate-800"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    {bullet}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-3 flex gap-1 text-emerald-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-slate-700">
                  “{featured.quote}”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {studies.map((study) => (
            <div
              key={study.title}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-64">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                  {study.badge}
                </div>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {study.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {study.text}
                </p>

                <div className="mt-5 space-y-3">
                  {study.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Want your property to be the next quick completion?
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-slate-300">
              Get a no-obligation cash offer today.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="tel:01519092777"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 text-base font-semibold text-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5 text-amber-400" />
              0151 909 2777
            </a>
            <button
              type="button"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-amber-500 px-6 text-base font-semibold text-slate-950 hover:bg-amber-400"
            >
              Get My Cash Offer
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}