"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navItems, site } from "../../lib/site";
import { CloseIcon, FlowerIcon, MenuIcon } from "../ui/icons";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!panelRef.current) return;

    if (open) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: -18, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" }
      );
    }
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-rose-dark/10 bg-cream/75 px-4 py-3 shadow-[0_18px_60px_rgba(120,34,54,0.12)] backdrop-blur-2xl sm:px-5">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} home`}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-900 text-cream shadow-lg shadow-rose/20 transition-transform duration-300 group-hover:rotate-12">
            <FlowerIcon className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl italic tracking-tight text-ink">{site.name}</span>
            <span className="hidden text-[10px] uppercase tracking-[0.38em] text-rose-dark/55 sm:block">Floral atelier</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-rose-dark/10 bg-white/45 p-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active ? "bg-ink text-cream shadow-lg shadow-ink/10" : "text-ink/70 hover:bg-white hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+201024567890" className="text-sm font-medium text-ink/65 transition hover:text-rose">
            {site.phone}
          </a>
          <Link href="/contact" className="rounded-full bg-rose px-5 py-3 text-sm font-semibold text-cream shadow-lg shadow-rose/20 transition hover:-translate-y-0.5 hover:bg-rose-dark">
            Order bouquet
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-rose-dark/10 bg-white/60 text-ink lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div ref={panelRef} className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[2rem] border border-rose-dark/10 bg-cream/95 p-4 shadow-soft backdrop-blur-2xl lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-4 text-lg font-semibold transition ${
                    active ? "bg-rose text-cream" : "bg-white/55 text-ink/75 hover:bg-white hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <Link href="/contact" className="mt-4 flex items-center justify-center rounded-2xl bg-ink px-5 py-4 font-semibold text-cream">
            Build a custom bouquet
          </Link>
        </div>
      )}
    </header>
  );
}
