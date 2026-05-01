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
  { number: "01", title: "Share the basics", text: "Tell us about the property, mortgage position, and urgency. You don’t need exact figures to start." },
  { number: "02", title: "We assess the situation", text: "We consider value, balance, and condition to see if a direct purchase is viable." },
  { number: "03", title: "Receive a clear offer", text: "If suitable, we provide a no-obligation cash offer." },
  { number: "04", title: "Move to completion", text: "If accepted, solicitors handle the legal work and we aim to complete quickly." },
];

const faqs = [
  { question: "Can I sell if I’m already in arrears?", answer: "Yes. Arrears do not automatically prevent a sale. We’ll look at the numbers and explain your options clearly." },
  { question: "What if repossession has started?", answer: "You can still speak to us. Depending on timing and legal status, a fast sale may still be possible." },
  { question: "Will you deal with the lender?", answer: "Your solicitor handles the legal side, but we work with them to keep things smooth and fast." },
  { question: "Do I have to accept the offer?", answer: "No. It is completely no-obligation. You can compare options and decide." },
];

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
      <path d="M16.01 3.2c-7.04 0-12.77 5.66-12.77 12.62 0 2.23.59 4.41 1.71 6.33L3.2 28.8l6.84-1.79a12.9 12.9 0 0 0 5.97 1.49c7.04 0 12.77-5.66 12.77-12.62S23.05 3.2 16.01 3.2Zm0 22.99c-1.9 0-3.75-.51-5.37-1.48l-.39-.23-4.06 1.06 1.08-3.91-.26-.4a10.22 10.22 0 0 1-1.57-5.41c0-5.69 4.74-10.32 10.57-10.32s10.57 4.63 10.57 10.32-4.74 10.37-10.57 10.37Z" />
    </svg>
  );
}

function ContactButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
      <a href="/contact" className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#0784C3] px-7 text-base font-black text-white shadow-sm transition hover:bg-[#056C9F]">Get a Cash Offer</a>
      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#079B6A] px-7 text-base font-black text-white shadow-sm transition hover:bg-[#067f58]"><WhatsAppIcon />WhatsApp Us</a>
      <a href="tel:01519092777" className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#B8E6FF] bg-white px-7 text-base font-black text-[#071A2F] shadow-sm transition hover:bg-[#F4FBFF]">0151 909 2777</a>
    </div>
  );
}

export default function MortgageArrearsPage() {
  return (
    <main className="bg-[#FAFAF7] text-[#071A2F]">
      <section className="bg-[#EEF9FF] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#0784C3]">Mortgage Arrears</p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">Sell Your House With Mortgage Arrears</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#40516A]">If payments have fallen behind and pressure is building, a direct sale can give you a clear route forward without viewings, chains, or delays.</p>
            <div className="mt-8 max-w-3xl"><ContactButtons /></div>
          </div>

          <aside className="rounded-[2rem] border border-[#CFEFFF] bg-white p-7 shadow-sm md:p-8">
            <div className="mb-6 inline-flex rounded-2xl bg-[#DDF3FF] p-4 text-[#0784C3]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current stroke-[2.5]"><path d="M12 3 4 7v6c0 5 3.4 7.7 8 9 4.6-1.3 8-4 8-9V7l-8-4Z" /><path d="m9.5 12 1.7 1.7 3.8-4" /></svg>
            </div>
            <h2 className="text-3xl font-black tracking-tight">A faster route forward</h2>
            <p className="mt-4 text-lg leading-8 text-[#40516A]">We can usually give an initial answer within 24 hours. Where suitable, completion can happen in as little as 14 days.</p>
            <div className="mt-6 space-y-3 text-base font-semibold text-[#1E293B]">
              <p>✓ Cash offer within 24 hours</p>
              <p>✓ No fees, no repairs</p>
              <p>✓ No chain or repeated viewings</p>
              <p>✓ Local Liverpool & Wirral buyer</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">Common Pressures</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">What sellers in arrears are dealing with</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pressures.map((p) => (
            <div key={p} className="rounded-2xl border border-[#E3EEF7] bg-white p-5 text-sm font-bold text-[#1E293B] shadow-sm">✓ {p}</div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          {options.map((o) => (
            <article key={o.title} className="rounded-3xl border border-[#E3EEF7] bg-[#FAFAF7] p-6 shadow-sm">
              <h3 className="text-lg font-black text-[#071A2F]">{o.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#40516A]">{o.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#EEF9FF] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">Simple Process</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">How it works</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <article key={s.number} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-black text-[#0784C3]">{s.number}</p>
                <h3 className="mt-3 text-lg font-black text-[#071A2F]">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#40516A]">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">FAQs</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Mortgage arrears questions</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {faqs.map((f) => (
            <article key={f.question} className="rounded-3xl border border-[#E3EEF7] bg-[#FAFAF7] p-6">
              <h3 className="text-lg font-black text-[#071A2F]">{f.question}</h3>
              <p className="mt-3 text-sm leading-6 text-[#40516A]">{f.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#EEF9FF] px-6 py-16">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0784C3]">Act Early</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Get a clear offer before pressure builds</h2>
            <p className="mt-5 text-lg leading-8 text-[#40516A]">Send the property details and we’ll explain your options clearly and quickly.</p>
          </div>
          <ContactButtons />
        </div>
      </section>
    </main>
  );
}
