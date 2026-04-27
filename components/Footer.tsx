import Link from "next/link";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-lg font-extrabold text-amber-400">
              P
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight">PRONTO</div>
              <div className="-mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                House Buyer
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
            Local cash house buyers covering Liverpool, Wirral and surrounding
            areas.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
            Company
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <Link href="/">Home</Link>
            <br />
            <Link href="/how-it-works">How It Works</Link>
            <br />
            <Link href="/areas-we-cover">Areas We Cover</Link>
            <br />
            <Link href="/case-studies">Case Studies</Link>
            <br />
            <Link href="/reviews">Reviews</Link>
            <br />
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
            Services
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <Link href="/sell-my-house-fast">Sell My House Fast</Link>
            <br />
            <Link href="/inherited-property">Inherited Property</Link>
            <br />
            <Link href="/mortgage-arrears">Mortgage Arrears</Link>
            <br />
            <Link href="/house-needs-work">House Needs Work</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
            Contact
          </h3>
          <a
            href="tel:01519092777"
            className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-white"
          >
            <Phone className="h-5 w-5 text-amber-400" />
            0151 909 2777
          </a>
          <p className="mt-4 text-sm text-slate-300">
            Dundee Group (NI) Ltd
            <br />
            Company No. NI618194
            <br />
            Trading since 2010
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 Pronto House Buyer. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}