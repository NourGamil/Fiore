import Link from "next/link";
import { asset, collections, site } from "../../lib/site";
import { ArrowRightIcon, SparkleIcon } from "../ui/icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
      <div className="absolute left-1/2 top-24 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-blush/55 blur-3xl" />
      <img data-float src={asset("images/flower.webp")} alt="" className="pointer-events-none absolute right-[8%] top-28 hidden w-28 opacity-80 lg:block" />
      <img data-float src={asset("images/tulip.webp")} alt="" className="pointer-events-none absolute bottom-16 left-[5%] hidden w-24 opacity-70 lg:block" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <div data-hero className="inline-flex items-center gap-3 rounded-full border border-rose-dark/10 bg-white/55 px-4 py-2 text-sm font-semibold text-rose-dark shadow-card backdrop-blur-xl">
            <SparkleIcon className="h-4 w-4 text-rose" />
            Same-day hand-tied bouquets available
          </div>
          <h1 data-hero className="mt-8 max-w-4xl font-display text-[clamp(4rem,11vw,9.8rem)] italic leading-[0.82] tracking-tight text-ink text-balance">
            Flowers for every feeling.
          </h1>
          <p data-hero className="mt-8 max-w-xl text-lg leading-8 text-ink/62">
            {site.tagline} Choose a ready bouquet or build a custom arrangement with one of our floral stylists.
          </p>
          <div data-hero className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-rose px-7 py-4 font-bold text-cream shadow-xl shadow-rose/25 transition hover:-translate-y-1 hover:bg-rose-dark">
              Build bouquet
              <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <Link href="/gallery" className="inline-flex items-center justify-center rounded-full border border-rose-dark/15 bg-white/55 px-7 py-4 font-bold text-ink transition hover:-translate-y-1 hover:bg-white">
              View gallery
            </Link>
          </div>
        </div>

        <div data-hero className="relative min-h-[34rem]">
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/75 to-blush/60 shadow-soft" />
          <div className="absolute inset-4 overflow-hidden rounded-[2.5rem] border border-white/70 bg-cover bg-center shadow-card"
            style={{ backgroundImage: `url(${asset("images/hero.webp")})` }} />
          <div data-parallax className="absolute -bottom-5 -left-4 w-64 rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-soft backdrop-blur-xl sm:w-72">
            <img src={asset("images/about-1.png")} alt="Wrapped bouquet" className="h-40 w-full rounded-[1.5rem] object-cover" />
            <div className="mt-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-rose">Today pick</p>
                <h3 className="mt-1 font-display text-2xl italic">Blush harmony</h3>
              </div>
              <p className="rounded-full bg-ink px-3 py-1 text-xs font-bold text-cream">EGP 850</p>
            </div>
          </div>
          <div data-float className="absolute -right-3 top-8 rounded-full border border-white/70 bg-cream/80 px-5 py-3 text-sm font-bold text-rose-dark shadow-card backdrop-blur-xl">
            48h freshness care
          </div>
        </div>
      </div>

      <div data-hero className="relative mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-3">
        {collections.map((item) => (
          <div key={item.title} className="group rounded-[2rem] border border-rose-dark/10 bg-white/52 p-5 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/75">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-blush/60">
                <img src={asset(item.image)} alt="" className="h-10 w-10 object-contain transition group-hover:scale-110" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-rose">{item.eyebrow}</p>
                <h3 className="mt-1 font-display text-2xl italic text-ink">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-ink/45">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
