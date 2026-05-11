"use client";

import { FormEvent, KeyboardEvent, Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27m%20on%20the%20contact%20page%20and%20would%20like%20a%20cash%20offer%20on%20my%20house.";

const contactOptions = [
  {
    title: "Call us",
    description: "Speak directly with the team about your property and timescale.",
    action: "0151 909 2777",
    href: "tel:01519092777",
  },
  {
    title: "WhatsApp us",
    description: "Send the property address and a few details for a fast response.",
    action: "Message on WhatsApp",
    href: whatsappHref,
  },
  {
    title: "Send the form",
    description: "Tell us about the property and we’ll review it as soon as possible.",
    action: "Complete the form above",
    href: "#offer-form",
  },
];

const reassurance = [
  "No estate agent fees",
  "No repairs needed",
  "No repeated viewings",
  "No obligation to accept",
  "Cash offer within 24 hours",
  "Completion possible in as little as 14 days",
];

const helpOptions = ["Just want a valuation", "Get a cash offer"];

const reasonOptions = [
  "Inherited property",
  "Divorce or separation",
  "Mortgage arrears",
  "Problem tenants",
  "Property chain issues",
  "Relocating",
  "Downsizing",
  "Financial difficulty",
  "House needs repairs",
  "Can’t sell with estate agent",
  "Other",
];

const timescaleOptions = ["ASAP", "Within 7 days", "Within 30 days", "Within 3 months", "No rush"];

const ownershipOptions = [
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5–10 years",
  "10+ years",
  "Inherited property",
  "Not sure",
];

const steps = ["1", "2", "3"];

type FunnelData = {
  postcode: string;
  selectedAddress: string;
  manualAddress: string;
  useManualAddress: boolean;
  helpType: string;
  reasonForSelling: string;
  timescale: string;
  ownershipLength: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  quickSaleExpectation: string;
};

const initialData: FunnelData = {
  postcode: "",
  selectedAddress: "",
  manualAddress: "",
  useManualAddress: false,
  helpType: "",
  reasonForSelling: "",
  timescale: "",
  ownershipLength: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  quickSaleExpectation: "",
};

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
      <path d="M16.01 3.2c-7.04 0-12.77 5.66-12.77 12.62 0 2.23.59 4.41 1.71 6.33L3.2 28.8l6.84-1.79a12.9 12.9 0 0 0 5.97 1.49c7.04 0 12.77-5.66 12.77-12.62S23.05 3.2 16.01 3.2Zm0 22.99c-1.9 0-3.75-.51-5.37-1.48l-.39-.23-4.06 1.06 1.08-3.91-.26-.4a10.22 10.22 0 0 1-1.57-5.41c0-5.69 4.74-10.32 10.57-10.32s10.57 4.63 10.57 10.32-4.74 10.37-10.57 10.37Zm5.8-7.75c-.32-.16-1.88-.92-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.55-.95-.84-1.59-1.88-1.78-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.69-.98-2.32-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.39 5.43 4.75.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.76 2.15-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function ContactFunnel() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FunnelData>(initialData);
  const [addresses, setAddresses] = useState<string[]>([]);
  const [lookupStatus, setLookupStatus] = useState<"idle" | "loading" | "found" | "not-found">("idle");
  const [lookupMessage, setLookupMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [qualifierSent, setQualifierSent] = useState(false);
  const searchParams = useSearchParams();

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  useEffect(() => {
    const postcode = searchParams.get("postcode")?.trim();

    if (!postcode) {
      return;
    }

    setData((current) => ({
      ...current,
      postcode: postcode.toUpperCase(),
    }));
  }, [searchParams]);

  function updateField(name: keyof FunnelData, value: string | boolean) {
    setData((current) => ({ ...current, [name]: value }));
  }

  function useManualEntry() {
    setLookupStatus("idle");
    setLookupMessage("Enter the full property address below.");
    setData((current) => ({
      ...current,
      useManualAddress: true,
    }));
  }

  function useLookupEntry() {
    setLookupMessage("");
    setData((current) => ({
      ...current,
      useManualAddress: false,
    }));
  }

  function preventEnterSkip(event: KeyboardEvent<HTMLFormElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  async function lookupPostcode() {
    if (!data.postcode.trim()) {
      setLookupStatus("not-found");
      setLookupMessage("Enter a postcode first.");
      return;
    }

    setLookupStatus("loading");
    setLookupMessage("");
    setAddresses([]);
    updateField("selectedAddress", "");
    updateField("useManualAddress", false);

    try {
      const response = await fetch(`/api/postcode?postcode=${encodeURIComponent(data.postcode.trim())}`);
      const result = await response.json();

      if (response.ok && Array.isArray(result.addresses) && result.addresses.length > 0) {
        setAddresses(result.addresses);
        setLookupStatus("found");
        setLookupMessage("Select your address below.");
        return;
      }

      setLookupStatus("not-found");
      setLookupMessage("We could not find that postcode. Please check it and try again, or enter the address manually.");
    } catch {
      setLookupStatus("not-found");
      setLookupMessage("We could not find that postcode. Please check it and try again, or enter the address manually.");
    }
  }

  function phoneLooksValid() {
    const cleaned = data.phone.replace(/[\s()-]/g, "");
    return /^(?:\+44|0)\d{10,11}$/.test(cleaned);
  }

  function emailLooksValid() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
  }

  function canContinue() {
    if (step === 0) {
      return data.postcode.trim() && (data.useManualAddress ? data.manualAddress.trim() : data.selectedAddress.trim());
    }

    if (step === 1) {
      return data.helpType && data.reasonForSelling && data.timescale && data.ownershipLength;
    }

    if (step === 2) {
      return (
        data.firstName.trim() &&
        data.lastName.trim() &&
        phoneLooksValid() &&
        emailLooksValid()
      );
    }

    return false;
  }

  function nextStep() {
    if (!canContinue()) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 0));
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canContinue()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, type: "lead" }),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please call or WhatsApp us instead.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function submitQualifier() {
    if (!data.quickSaleExpectation.trim()) {
      setQualifierSent(true);
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, type: "qualifier" }),
      });
    } finally {
      setIsSubmitting(false);
      setQualifierSent(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white p-6 text-[#1E293B] shadow-2xl ring-1 ring-white/20 md:p-8">
        <div className="rounded-2xl bg-[#EEF9FF] p-5">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0784C3]">
            Enquiry sent
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#071A2F]">
            Thanks, {data.firstName || "we’ve got your details"}.
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#475569]">
            We have received your enquiry and will review the property details as soon as possible.
          </p>
        </div>

        {!qualifierSent ? (
          <div className="mt-6">
            <label className="block text-base font-black text-[#071A2F]">
              What would you realistically accept for a quick cash sale?
            </label>
            <p className="mt-2 text-sm leading-6 text-[#475569]">
              Optional, but helpful. It gives us a clearer idea of whether we are likely to be a good fit before calling you.
            </p>
            <input
              type="text"
              inputMode="numeric"
              value={data.quickSaleExpectation}
              onChange={(event) => updateField("quickSaleExpectation", event.target.value)}
              placeholder="Example: £120,000"
              className="mt-4 w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
            />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={submitQualifier}
                disabled={isSubmitting}
                className="rounded-xl bg-[#0073E6] px-6 py-3 font-semibold text-white transition hover:bg-[#005fc2] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Expected Figure"}
              </button>
              <button
                type="button"
                onClick={() => setQualifierSent(true)}
                className="rounded-xl border border-[#DDE7F3] bg-white px-6 py-3 font-semibold text-[#071A2F] transition hover:bg-[#F8FBFF]"
              >
                Skip for now
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-[#DDE7F3] bg-[#FAFAF7] p-5 text-sm leading-6 text-[#475569]">
            We’ll be in touch shortly. For the fastest response, call or WhatsApp us directly.
          </div>
        )}
      </div>
    );
  }

  return (
    <form
      id="offer-form"
      onSubmit={submitLead}
      onKeyDown={preventEnterSkip}
      className="mx-auto w-full max-w-6xl rounded-3xl bg-white p-6 text-[#1E293B] shadow-2xl ring-1 ring-white/20 md:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0784C3]">
            Step {step + 1} of {steps.length}
          </p>
          <h2 className="mt-2 text-2xl font-black text-[#071A2F]">
            {step === 0 ? "Property" : step === 1 ? "Situation" : "Contact"}
          </h2>
        </div>
        <div className="text-right text-sm font-bold text-[#475569]">
          {Math.round(progress)}%
        </div>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#E6F3FF]">
        <div
          className="h-full rounded-full bg-[#0073E6] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-7 min-h-[320px] transition-all duration-300">
        {step === 0 && (
          <div>
            <h3 className="text-2xl font-bold text-[#071A2F]">
              What is the property postcode?
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#475569]">
              Enter the postcode first, then select the correct address from the list.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                type="text"
                name="postcode"
                autoComplete="postal-code"
                required
                value={data.postcode}
                onChange={(event) => updateField("postcode", event.target.value.toUpperCase())}
                placeholder="Enter postcode"
                className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition placeholder:text-slate-400 focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
              />
              <button
                type="button"
                onClick={lookupPostcode}
                className="rounded-xl bg-[#0073E6] px-6 py-3 font-semibold text-white transition hover:bg-[#005fc2]"
              >
                {lookupStatus === "loading" ? "Finding..." : "Find address"}
              </button>
            </div>

            {lookupMessage && (
              <p className="mt-3 text-sm leading-6 text-[#475569]">
                {lookupMessage}
              </p>
            )}

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={data.useManualAddress ? useLookupEntry : useManualEntry}
                className={`text-sm font-bold underline-offset-4 transition hover:underline ${
                  lookupStatus === "not-found" || data.useManualAddress
                    ? "text-[#0073E6]"
                    : "text-slate-400 hover:text-[#0073E6]"
                }`}
              >
                {data.useManualAddress ? "Use postcode lookup instead" : "Enter address manually"}
              </button>
            </div>

            {data.useManualAddress ? (
              <div className="mt-5">
                <textarea
                  name="manualAddress"
                  required
                  rows={4}
                  value={data.manualAddress}
                  onChange={(event) => updateField("manualAddress", event.target.value)}
                  className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition placeholder:text-slate-400 focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
                  placeholder="House number, street, town and postcode"
                />
              </div>
            ) : (
              <div className="mt-5">
                <select
                  name="selectedAddress"
                  required
                  value={data.selectedAddress}
                  onChange={(event) => updateField("selectedAddress", event.target.value)}
                  disabled={addresses.length === 0}
                  className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20 disabled:bg-slate-100 disabled:text-slate-400"
                >
                  <option value="">Select your address</option>
                  {addresses.map((address) => (
                    <option key={address} value={address}>
                      {address}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

        {step === 1 && (
          <div>
            <h3 className="text-2xl font-bold text-[#071A2F]">
              Tell us a little more
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#475569]">
              These details help us understand your situation before we call.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <select
                name="helpType"
                required
                value={data.helpType}
                onChange={(event) => updateField("helpType", event.target.value)}
                className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
              >
                <option value="">How can we help?</option>
                {helpOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>

              <select
                name="reasonForSelling"
                required
                value={data.reasonForSelling}
                onChange={(event) => updateField("reasonForSelling", event.target.value)}
                className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
              >
                <option value="">What is your reason for selling?</option>
                {reasonOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>

              <select
                name="timescale"
                required
                value={data.timescale}
                onChange={(event) => updateField("timescale", event.target.value)}
                className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
              >
                <option value="">How quickly do you want to sell?</option>
                {timescaleOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>

              <select
                name="ownershipLength"
                required
                value={data.ownershipLength}
                onChange={(event) => updateField("ownershipLength", event.target.value)}
                className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
              >
                <option value="">How long ago did you buy the property?</option>
                {ownershipOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-2xl font-bold text-[#071A2F]">
              Where should we send your offer?
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#475569]">
              Use a valid UK phone number and email so we can contact you quickly.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                required
                value={data.firstName}
                onChange={(event) => updateField("firstName", event.target.value)}
                placeholder="First name"
                className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition placeholder:text-slate-400 focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
              />

              <input
                type="text"
                name="lastName"
                autoComplete="family-name"
                required
                value={data.lastName}
                onChange={(event) => updateField("lastName", event.target.value)}
                placeholder="Last name"
                className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition placeholder:text-slate-400 focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
              />

              <div>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  pattern="^(?:\\+44|0)[0-9\\s()\-]{9,14}$"
                  title="Enter a valid UK phone number, for example 07123 456789 or 0151 909 2777"
                  value={data.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="Contact number"
                  className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition placeholder:text-slate-400 focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
                />
                {data.phone && !phoneLooksValid() && (
                  <p className="mt-2 text-sm font-semibold text-red-600">
                    Use a valid UK number, e.g. 07123 456789.
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={data.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="Email address"
                  className="w-full rounded-xl border border-[#DDE7F3] bg-white px-4 py-3 text-[#1E293B] outline-none transition placeholder:text-slate-400 focus:border-[#0073E6] focus:ring-2 focus:ring-[#0073E6]/20"
                />
                {data.email && !emailLooksValid() && (
                  <p className="mt-2 text-sm font-semibold text-red-600">
                    Enter a valid email address, e.g. name@example.com.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {submitError && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {submitError}
        </p>
      )}

      <div className="mt-6 grid gap-3 sm:grid-cols-[auto_1fr]">
        {step > 0 && (
          <button
            type="button"
            onClick={previousStep}
            className="rounded-xl border border-[#DDE7F3] bg-white px-6 py-3 font-semibold text-[#071A2F] transition hover:bg-[#F8FBFF]"
          >
            Back
          </button>
        )}

        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!canContinue()}
            className="rounded-xl bg-[#0073E6] px-6 py-3 font-semibold text-white transition hover:bg-[#005fc2] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canContinue() || isSubmitting}
            className="rounded-xl bg-[#0073E6] px-6 py-3 font-semibold text-white transition hover:bg-[#005fc2] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        )}
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-[#FAFAF7]">
      <section className="bg-[#071A2F] px-6 py-12 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#10A7E8]">
              Get Your Cash Offer
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Tell Us About Your Property
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Answer a few quick questions and we’ll come back with a clear, no-obligation cash offer where suitable.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
              aria-label="Message Pronto House Buyer on WhatsApp"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-12">
            <Suspense
              fallback={
                <div className="mx-auto w-full max-w-6xl rounded-3xl bg-white p-6 text-[#1E293B] shadow-2xl ring-1 ring-white/20 md:p-8">
                  Loading form...
                </div>
              }
            >
              <ContactFunnel />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {contactOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              target={option.href.startsWith("https://wa.me") ? "_blank" : undefined}
              rel={option.href.startsWith("https://wa.me") ? "noopener noreferrer" : undefined}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#DDE7F3] transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-[#071A2F]">{option.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#475569]">
                {option.description}
              </p>
              <p className="mt-5 font-semibold text-[#0073E6]">{option.action}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0073E6]">
              Request an Offer
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#071A2F] md:text-4xl">
              Send the essentials first. We can fill in the rest later.
            </h2>
            <p className="mt-5 leading-8 text-[#475569]">
              The form above captures the most important details: your property, situation, urgency and contact details. If anything needs clarifying, we can ask follow-up questions after reviewing the basics.
            </p>
            <p className="mt-4 leading-8 text-[#475569]">
              You do not need to prepare the property, repair anything, arrange valuations, or speak to an estate agent before contacting us.
            </p>
          </div>

          <div className="rounded-3xl bg-[#FAFAF7] p-8 shadow-sm ring-1 ring-[#DDE7F3]">
            <h3 className="text-2xl font-bold text-[#071A2F]">
              Why sellers contact us
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {reassurance.map((item) => (
                <div key={item} className="rounded-2xl bg-[#EEF6FF] p-4 text-sm font-medium text-[#071A2F]">
                  ✓ {item}
                </div>
              ))}
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
              aria-label="Message Pronto House Buyer on WhatsApp"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#071A2F] px-6 py-12 text-center text-white md:py-16">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl">
          Prefer to speak to someone now?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-200">
          Call or WhatsApp the team and tell us the property address. We’ll let you know quickly whether we can help.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="tel:01519092777"
            className="inline-flex items-center justify-center rounded-xl bg-[#10A7E8] px-6 py-3 font-semibold text-white transition hover:bg-[#078fd0]"
          >
            Call 0151 909 2777
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
            aria-label="Message Pronto House Buyer on WhatsApp"
          >
            <WhatsAppIcon />
            WhatsApp Us
          </a>
        </div>
      </section>
    </main>
  );
}