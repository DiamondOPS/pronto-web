

export default function InheritedPropertyPage() {
  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Sell an Inherited Property Quickly
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-300">
          We help you sell inherited houses fast, without stress, repairs, or delays.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            A simple way to sell
          </h2>
          <p className="text-slate-600 mb-4">
            Dealing with an inherited property can be overwhelming, especially during an already difficult time.
          </p>
          <p className="text-slate-600 mb-4">
            We provide a straightforward, respectful service that allows you to sell the property quickly without the usual complications.
          </p>
          <ul className="text-slate-600 space-y-2">
            <li>✓ No estate agents</li>
            <li>✓ No repairs or clearing needed</li>
            <li>✓ No chains or delays</li>
            <li>✓ Complete in as little as 14 days</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Get your cash offer
          </h3>
          <p className="text-slate-600 mb-6">
            Tell us about the property and we’ll come back with a no-obligation offer within 24 hours.
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
          Ready to move forward?
        </h2>
        <p className="mb-6 text-emerald-100">
          We’ll handle the process quickly and with sensitivity.
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