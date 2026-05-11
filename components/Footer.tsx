import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Areas We Cover", href: "/areas-we-cover" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Sell My House Fast", href: "/sell-my-house-fast" },
  { label: "Inherited Property", href: "/inherited-property" },
  { label: "Mortgage Arrears", href: "/mortgage-arrears" },
  { label: "Problem Tenants", href: "/problem-tenants" },
  { label: "House Needs Work", href: "/house-needs-work" },
];

const areaLinks = [
  { label: "Liverpool", href: "/areas-we-cover" },
  { label: "Wirral", href: "/areas-we-cover" },
  { label: "Birkenhead", href: "/areas-we-cover" },
  { label: "Wallasey", href: "/areas-we-cover" },
  { label: "Bootle", href: "/areas-we-cover" },
  { label: "St Helens", href: "/areas-we-cover" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#063746] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <div className="absolute -top-24 left-1/4 h-[520px] w-[360px] rotate-45 bg-white/5" />
        <div className="absolute -bottom-32 right-1/4 h-[620px] w-[420px] rotate-45 bg-white/5" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.25fr_0.85fr_0.85fr_0.85fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/images/logo.png"
              alt="Pronto House Buyer"
              width={210}
              height={70}
              className="h-auto w-52 object-contain"
            />
          </Link>

          <div className="mt-8">
            <p className="text-lg font-semibold text-white">Office:</p>
            <a
              href="tel:01519092777"
              className="mt-2 inline-flex items-center gap-3 text-3xl font-black tracking-tight text-white transition hover:text-[#10A7E8]"
            >
              <Phone className="h-7 w-7 text-[#10A7E8]" />
              0151 909 2777
            </a>
          </div>

          <p className="mt-8 max-w-sm text-sm leading-7 text-slate-200">
            Local cash house buyers covering Liverpool, Wirral and surrounding areas. No fees, no repairs, no viewings, and no chain.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-black text-[#10E070]">Company</h3>
          <nav className="mt-6 flex flex-col gap-3 text-base text-white/90">
            {companyLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-[#10A7E8]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-lg font-black text-[#10E070]">Services</h3>
          <nav className="mt-6 flex flex-col gap-3 text-base text-white/90">
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-[#10A7E8]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-lg font-black text-[#10E070]">Areas</h3>
          <nav className="mt-6 flex flex-col gap-3 text-base text-white/90">
            {areaLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-[#10A7E8]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-4 px-6 pb-10 text-xs leading-6 text-white/80 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p>
            Dundee Group (NI) Ltd. Company No. NI618194. Trading since 2010.
          </p>
          <p className="mt-2">
            Pronto House Buyer is a local cash house buyer service covering Liverpool, Wirral and surrounding areas.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 lg:items-end">
          <Link href="/privacy-policy" className="transition hover:text-[#10A7E8]">
            Privacy Policy
          </Link>
          <span>© 2026 Pronto House Buyer. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}