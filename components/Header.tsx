import Link from "next/link";
import { Menu, Phone } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/sell-my-house-fast", label: "Sell My House Fast" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/areas-we-cover", label: "Areas We Cover" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-extrabold text-amber-400">
            P
          </div>
          <div>
            <div className="text-lg font-extrabold tracking-tight text-slate-950">
              PRONTO
            </div>
            <div className="-mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              House Buyer
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:01519092777"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
          >
            <Phone className="h-4 w-4 text-amber-500" />
            0151 909 2777
          </a>

          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-amber-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Get Offer
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}