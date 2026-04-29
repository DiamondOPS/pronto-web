const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27m%20on%20the%20mortgage%20arrears%20page%20and%20would%20like%20an%20offer%20on%20my%20house.";

const pressures = [
  "Falling behind on monthly payments",
  "Letters or calls from the lender increasing",
  "Threat of repossession proceedings",
  "Mounting arrears and fees",
  "Uncertainty about what to do next",
  "Need for a fast, reliable sale",
];

const options = [
  {
    title: "Sell quickly to clear the mortgage",
    text: "A fast sale can allow you to repay the lender and avoid further arrears or legal escalation where the figures allow.",
  },
  {
    title: "Avoid drawn-out repossession",
    text: "Repossession can be stressful and public. A direct sale gives you more control over timing and outcome.",
  },
  {
    title: "No estate agent delays",
    text: "You don’t need to wait for buyers, chains, or repeated viewings. We look at the property and situation directly.",
  },
];

const steps = [
  {
    title: "Share the basics",
    text: "Tell us about the property, mortgage position, and how urgent things are. You don’t need exact figures to start.",
  },
  {
    title: "We assess the situation",
    text: "We consider the property value, outstanding mortgage, and current condition to see if a direct purchase is viable.",
  },
  {
    title: "Receive a clear offer",
    text: "If suitable, we provide a straightforward cash offer with no obligation to proceed.",
  },
  {
    title: "Move to completion",
    text: "If accepted, solicitors handle the legal work and we aim to complete as quickly as possible.",
  },
];

const faqs = [
  {
    question: "Can I sell if I’m already in arrears?",
    answer:
      "Yes. Arrears do not automatically prevent a sale. We’ll look at the numbers and explain your options clearly.",
  },
  {
    question: "What if repossession has started?",
    answer:
      "You can still speak to us. Depending on timing and legal status, a fast sale may still be possible.",
  },
  {
    question: "Will you deal with the lender?",
    answer:
      "Your solicitor handles the legal side, but we work with them to ensure the process is as smooth and fast as possible.",
  },
  {
    question: "Do I have to accept the offer?",
    answer:
      "No. It is completely no-obligation. You can use it to understand your position and compare options.",
  },
];

export default function MortgageArrearsPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Mortgage Arrears Property Sale
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Sell Your House with Mortgage Arrears
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              If you’re behind on payments and feeling pressure from your lender, you are not out of options. Pronto House Buyer offers a direct, private way to sell quickly and regain control.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/contact" className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-400">
                Get My Cash Offer
              </a>
              <a href="tel:01519092777" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10">
                Call 0151 909 2777
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1ebe5d]">
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-xl">
            <h2 className="text-2xl font-bold">A faster route forward</h2>
            <p className="mt-4 text-slate-600">
              We can usually provide an initial answer within 24 hours. Where the situation fits, completion can happen in as little as 14 days.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p>✓ Cash offer within 24 hours</p>
              <p>✓ No estate agent fees</p>
              <p>✓ No repairs required</p>
              <p>✓ Local Liverpool & Wirral buyer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Common pressures</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pressures.map((p) => (
            <div key={p} className="bg-white p-5 rounded-2xl shadow-sm ring-1 ring-slate-100 text-sm">✓ {p}</div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          {options.map((o) => (
            <div key={o.title} className="p-6 rounded-3xl bg-slate-50 border">
              <h3 className="font-bold text-lg text-slate-900">{o.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">How it works</h2>
        <div className="space-y-4">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-white p-6 rounded-2xl shadow-sm grid md:grid-cols-[60px_1fr] gap-4">
              <div className="bg-amber-500 text-slate-900 font-bold flex items-center justify-center rounded-xl">{i+1}</div>
              <div>
                <h3 className="font-bold text-slate-900">{s.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQs</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.question} className="bg-white p-6 rounded-2xl">
                <h3 className="font-bold">{f.question}</h3>
                <p className="text-sm text-slate-600 mt-2">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 text-white text-center px-6 py-16">
        <h2 className="text-3xl font-semibold">Need to act quickly?</h2>
        <p className="mt-4 text-emerald-100">Tell us your situation and we’ll give you a clear answer within 24 hours.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row justify-center">
          <a href="/contact" className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold">Get My Offer</a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] px-6 py-3 rounded-xl font-semibold">WhatsApp Us</a>
        </div>
      </section>
    </main>
  );
}
