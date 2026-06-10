import { SparkleIcon } from "../ui/icons";
import { asset } from "../../lib/site";

export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-6 lg:px-8 lg:pt-40">
      <div className="absolute left-1/2 top-14 h-96 w-96 -translate-x-1/2 rounded-full bg-blush/60 blur-3xl" />
      <img data-float src={asset("images/flower.webp")} alt="" className="pointer-events-none absolute right-[12%] top-32 hidden w-24 opacity-70 lg:block" />
      <div className="relative mx-auto max-w-5xl text-center">
        <div data-hero className="inline-flex items-center gap-3 rounded-full border border-rose-dark/10 bg-white/60 px-4 py-2 text-sm font-bold text-rose-dark shadow-card backdrop-blur-xl">
          <SparkleIcon className="h-4 w-4 text-rose" />
          {eyebrow}
        </div>
        <h1 data-hero className="mt-7 font-display text-[clamp(3.6rem,10vw,8rem)] italic leading-[0.9] text-balance text-ink">{title}</h1>
        {text && <p data-hero className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-ink/60">{text}</p>}
      </div>
    </section>
  );
}
