

export default function ContactPage() {
  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get Your Cash Offer
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-300">
          Tell us about your property and get a no-obligation cash offer within 24 hours.
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-3xl mx-auto py-16 px-6">
        <form className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="07123 456789"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Property Address
            </label>
            <input
              type="text"
              className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Property address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Additional Info
            </label>
            <textarea
              className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              rows={4}
              placeholder="Tell us anything useful (condition, situation, timeline...)"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-500 transition"
          >
            Get My Cash Offer
          </button>
        </form>
      </section>
    </main>
  );
}