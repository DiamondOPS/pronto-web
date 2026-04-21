import { CheckCircle2, Phone, Star } from "lucide-react";

const reviews = [
  {
    title: "Sold my house in just 10 days",
    quote:
      "Pronto made a difficult situation feel easy. They offered cash quickly and completed fast.",
    area: "Wavertree, L15",
    type: "Inherited Property",
    time: "2 weeks ago",
  },
  {
    title: "Great help with a tenanted property",
    quote:
      "We had a problem tenant and wanted a quick, hassle-free sale. Very easy to deal with.",
    area: "Birkenhead, CH41",
    type: "Tenanted Property",
    time: "3 weeks ago",
  },
  {
    title: "No fees, no hassle",
    quote:
      "From first call to completion, everything was straightforward. No viewings, no stress.",
    area: "Bootle, L20",
    type: "Needs Work",
    time: "1 month ago",
  },
  {
    title: "Helped us avoid more pressure",
    quote:
      "We were behind on payments and needed certainty. Pronto moved quickly and communicated well.",
    area: "Kirkdale, L4",
    type: "Mortgage Arrears",
    time: "1 month ago",
  },
  {
    title: "Perfect after our separation",
    quote:
      "Selling the house after our split was stressful, but Pronto kept it simple and moved fast.",
    area: "Wallasey, CH45",
    type: "Divorce / Separation",
    time: "2 months ago",
  },
  {
    title: "Couldn’t be happier",
    quote:
      "The property needed a lot of work and we didn’t want the hassle of renovating. Excellent service.",
    area: "Everton, L5",
    type: "Needs Work",
    time: "2 months ago",
  },
];

const trust = [
  "Rated highly by local sellers",
  "Liverpool & Wirral specialists",
  "No fees or commissions",
  "Fast and reliable service",
];

export default function ReviewsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                Reviews
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                What our customers say about Pronto
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                We are proud to help homeowners across Liverpool and Wirral sell
                quickly for cash. Here are some of the things they have said
                about working with us.
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

            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
              <div className="text-5xl font-extrabold text-amber-400">4.9/5</div>
              <div className="mt-4 flex gap-1 text-emerald-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Strong reviews from local sellers across inherited properties,
                arrears cases, landlord sales and homes needing work.
              </p>
              <div className="mt-8 space-y-3">
                {trust.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-200"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-3">
          {[
            "All Reviews",
            "Inherited Property",
            "Tenanted Property",
            "Needs Work",
            "Mortgage Arrears",
          ].map((item, index) => (
            <div
              key={item}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                index === 0
                  ? "bg-emerald-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-1 text-emerald-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div className="text-xs font-medium text-slate-500">
                  {review.time}
                </div>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                {review.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                “{review.quote}”
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                <span>{review.area}</span>
                <span>•</span>
                <span>{review.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trust.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-500" />
              <div className="mt-4 text-sm font-semibold text-slate-800">
                {item}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get your cash offer?
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-slate-300">
              Fast, straightforward and no obligation.
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