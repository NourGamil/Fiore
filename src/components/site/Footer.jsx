import Link from "next/link";
import { asset, gallery, navItems, site, socials } from "../../lib/site";
import { MailIcon, PhoneIcon, PinIcon, SparkleIcon } from "../ui/icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blush/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div data-reveal className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.25)] lg:p-10">
            <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-rose/30 blur-3xl" />
            <div className="relative flex items-center gap-3 text-blush">
              <SparkleIcon className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-[0.35em]">Fresh drops every morning</span>
            </div>
            <h2 className="relative mt-6 max-w-2xl font-display text-5xl italic leading-[0.95] text-balance sm:text-6xl lg:text-7xl">
              Let the flowers say it softly.
            </h2>
            <p className="relative mt-6 max-w-xl text-base leading-8 text-cream/65">
              Join the Fioré list for seasonal palettes, gift ideas, and private event floral notes.
            </p>
            <form className="relative mt-8 flex flex-col gap-3 rounded-[1.5rem] border border-white/10 bg-black/20 p-2 sm:flex-row">
              <input
                aria-label="Email address"
                placeholder="Your email address"
                className="min-h-14 flex-1 rounded-[1.1rem] border border-white/10 bg-white/10 px-5 text-sm text-cream outline-none placeholder:text-cream/35 focus:border-blush/70"
              />
              <button className="cursor-pointer min-h-14 rounded-[1.1rem] bg-blush px-6 text-sm font-bold text-rose-dark transition hover:bg-cream" type="button">
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div data-reveal className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-display text-3xl italic">Explore</h3>
              <div className="mt-6 grid gap-3">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="group flex items-center justify-between rounded-2xl bg-white/[0.04] px-4 py-3 text-sm text-cream/70 transition hover:bg-white/10 hover:text-cream">
                    {item.label}
                    <span className="transition group-hover:translate-x-1">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div data-reveal className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-display text-3xl italic">Visit</h3>
              <div className="mt-6 space-y-4 text-sm text-cream/65">
                <p className="flex gap-3"><PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-blush" /> {site.address}</p>
                <p className="flex gap-3"><PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-blush" /> {site.phone}</p>
                <p className="flex gap-3"><MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-blush" /> {site.email}</p>
              </div>
            </div>

            <div data-reveal className="sm:col-span-2 rounded-[2rem] border border-white/10 bg-white/[0.04] p-3">
              <div className="grid grid-cols-6 gap-2">
                {gallery.slice(0, 6).map((item) => (
                  <div key={item.src} className="aspect-square overflow-hidden rounded-2xl bg-white/10">
                    <img src={asset(item.src)} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-5xl italic leading-none text-cream sm:text-7xl">{site.name}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-cream/35">Premium floral atelier</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {socials.map((item) => (
              <a key={item} href="#" className="rounded-full border border-white/10 px-4 py-2 text-sm text-cream/60 transition hover:border-blush/70 hover:text-blush">
                {item}
              </a>
            ))}
          </div>
                                        <a
          href="https://nourgamil.github.io/Main-Portfolio/"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center gap-[20px]"
          >
            <span className="">Copyright © 2026 Nour</span>
            <div className="flex max-sm:h-[44px] max-sm:w-[44px] h-[54px] w-[54px] items-center justify-center rounded-full border border-[white]/50 bg-[white]/[0.5] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#fdc700]/40 hover:shadow-[0_18px_45px_rgba(253,199,0,0.12)]">
              <img className="max-sm:h-[24px] max-sm:w-[24px] h-[34px] w-[34px]" src="images/favicon.ico" alt="" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
