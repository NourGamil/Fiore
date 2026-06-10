import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { ArrowRightIcon } from "../ui/icons";
import { asset } from "../../lib/site";

export default function AboutSection({ compact = false }) {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <div data-reveal className="relative min-h-[33rem]">
          <div className="absolute left-8 top-8 h-[72%] w-[70%] overflow-hidden rounded-[2.5rem] bg-blush shadow-soft">
            <img src={asset("images/about-1.png")} alt="Florist arranging pink flowers" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-4 right-0 h-[56%] w-[62%] overflow-hidden rounded-[2rem] border-[10px] border-cream bg-white shadow-card">
            <img src={asset("images/about-2.png")} alt="Colorful bouquet" className="h-full w-full object-cover" />
          </div>
          <div className="absolute left-0 top-0 grid h-28 w-28 place-items-center rounded-full bg-rose text-center text-sm font-extrabold uppercase tracking-[0.18em] text-cream shadow-xl shadow-rose/25">
            Since<br />2019
          </div>
        </div>

        <div>
          <SectionHeader
            align="left"
            eyebrow="About the atelier"
            title="A softer way to gift, decorate, and celebrate."
            text="We design flowers with a boutique rhythm: premium stems, quiet color stories, refined wrapping, and a personal note that makes every order feel made just for one person."
          />
          <div data-reveal className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Fresh daily sourcing", "Custom color palettes", "Event floral styling", "Premium gift wrapping"].map((item) => (
              <div key={item} className="rounded-2xl border border-rose-dark/10 bg-white/55 p-5 font-semibold text-ink/75 shadow-card backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
          {!compact && (
            <Link data-reveal href="/about" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-bold text-cream transition hover:-translate-y-1 hover:bg-rose-dark">
              Our story
              <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
