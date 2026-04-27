

export default function DivorceSeparationPage() {
  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Sell Your House During Divorce or Separation
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-300">
          A quick, straightforward way to sell your property and move forward with clarity.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Keep things simple
          </h2>
          <p className="text-slate-600 mb-4">
            Selling a property during a separation can be stressful and time-sensitive.
          </p>
          <p className="text-slate-600 mb-4">
            We provide a fast, neutral solution so both parties can move on without delays or complications.
          </p>
          <ul className="text-slate-600 space-y-2">
            <li>✓ No estate agents or fees</li>
            <li>✓ No viewings or disruption</li>
            <li>✓ No chains or delays</li>
            <li>✓ Complete in as little as 14 days</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Get a clear offer
          </h3>
          <p className="text-slate-600 mb-6">
            Tell us about the property and we’ll provide a fair, no-obligation cash offer.
          </p>
          <a
            href="/contact"
            className="block w-full text-center bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-500 transition"
          >
            Get My Offer
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Move forward with certainty
        </h2>
        <p className="mb-6 text-emerald-100">
          We help you complete quickly so both sides can move on.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-emerald-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-slate-100 transition"
        >
          Speak to us today
        </a>
      </section>
    </main>
  );
}