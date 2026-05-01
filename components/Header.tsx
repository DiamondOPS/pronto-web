import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";

const navItems = [
  { href: "/sell-my-house-fast", label: "Sell Fast" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/areas-we-cover", label: "Areas" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faqs", label: "FAQs" },
];

const whatsappHref =
  "https://wa.me/447771252634?text=Hi%2C%20I%27d%20like%20a%20cash%20offer%20for%20my%20house.";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="bg-sky-50 px-4 py-2 text-center text-xs font-semibold text-slate-700 sm:text-sm">
        Cash offer within 24 hours · Completion possible in as little as 14 days · No fees
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Pronto House Buyer home"
        >
          <Image
            src="/images/logo.png"
            alt="Pronto House Buyer"
            width={210}
            height={64}
            priority
            className="h-auto w-[150px] sm:w-[175px] lg:w-[200px]"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold text-slate-700 transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-sky-500 after:transition-all hover:text-slate-950 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href="tel:01519092777"
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 transition hover:border-sky-200 hover:bg-sky-50"
          >
            <Phone className="h-4 w-4 text-sky-600" />
            <span>0151 909 2777</span>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
          >
            WhatsApp
          </a>

          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-sky-600 px-6 text-sm font-bold text-white shadow-sm shadow-sky-600/20 transition hover:bg-sky-500"
          >
            Get Cash Offer
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:01519092777"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100"
            aria-label="Call Pronto House Buyer"
          >
            <Phone className="h-5 w-5" />
          </a>

          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-sky-600 px-4 text-sm font-bold text-white shadow-sm shadow-sky-600/20 transition hover:bg-sky-500"
          >
            Offer
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}