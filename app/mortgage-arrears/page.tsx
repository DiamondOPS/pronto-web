export default function MortgageArrearsPage() {
  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Sell Your House with Mortgage Arrears
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-300">
          If you're behind on payments, we can help you sell quickly and avoid further stress or repossession.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            A fast, practical solution
          </h2>
          <p className="text-slate-600 mb-4">
            Mortgage arrears can escalate quickly, leading to pressure from lenders and the risk of repossession.
          </p>
          <p className="text-slate-600 mb-4">
            We offer a straightforward way to sell your property fast, helping you regain control and move forward.
          </p>
          <ul className="text-slate-600 space-y-2">
            <li>✓ Quick cash offer within 24 hours</li>
            <li>✓ Avoid repossession delays</li>
            <li>✓ No estate agent fees</li>
            <li>✓ Complete in as little as 14 days</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Get your cash offer
          </h3>
          <p className="text-slate-600 mb-6">
            Tell us about your situation and we’ll give you a clear, no-obligation offer.
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
          Take control today
        </h2>
        <p className="mb-6 text-emerald-100">
          The sooner you act, the more options you have. We’re here to help.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-emerald-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-slate-100 transition"
        >
          Speak to us now
        </a>
      </section>
    </main>
  );
}
