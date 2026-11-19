
import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Our menu", href: "/menu" },
  { label: "Categories", href: "#categories" },
  { label: "Our dishes", href: "#signature-dishes" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#191815] px-4 py-14 text-[#f8f5ef] sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight">
                THE FOOD <span className="text-[#c45b3b]">DISTRICT.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
              Different cravings. One destination. Bringing together
              flavours, favourites and good food in one place.
            </p>

            <Link
              href="/menu"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#b7472a] px-6 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#963a23]"
            >
              Explore the menu
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d49a78]">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d49a78]">
              Find us
            </h3>

            <div className="mt-6 space-y-4 text-sm text-white/45">
              <p>Location details coming soon</p>
              <p>Contact details coming soon</p>
              <p>Opening hours coming soon</p>
            </div>

            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#d49a78] transition-colors hover:text-white"
            >
              Get in touch
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} The Food District. All rights
            reserved.
          </p>

          <p>Different cravings. One destination.</p>

          <Link
            href="#home"
            className="inline-flex items-center gap-2 self-start font-semibold text-white/60 transition-colors hover:text-[#d49a78] sm:self-auto"
          >
            Back to top
            <ArrowUp size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
