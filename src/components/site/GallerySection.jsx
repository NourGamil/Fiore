import Link from "next/link";
import { asset, gallery } from "../../lib/site";
import SectionHeader from "./SectionHeader";
import { ArrowRightIcon } from "../ui/icons";

export default function GallerySection({ preview = false }) {
  const items = preview ? gallery.slice(0, 6) : gallery;

  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Gallery"
            title="A living moodboard of petals, wrapping, and color."
            text="Explore bouquet styles, event details, soft textures, and color palettes arranged with a boutique floral touch."
          />
          {preview && (
            <Link href="/gallery" className="group inline-flex w-fit items-center gap-3 rounded-full border border-rose-dark/15 bg-white/55 px-6 py-3 font-bold text-ink transition hover:-translate-y-1 hover:bg-[#782236] hover:text-white">
              Full gallery <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="mt-12 grid auto-rows-[16rem] gap-4 md:grid-cols-4 md:auto-rows-[18rem]">
          {items.map((item, index) => {
            const span = item.size === "tall" ? "md:row-span-2" : item.size === "wide" ? "md:col-span-2" : "";
            return (
              <article key={item.src} data-reveal className={`flower-card group relative overflow-hidden rounded-[2rem] bg-blush shadow-card ${span}`}>
                <img src={asset(item.src)} alt={item.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 text-cream opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-blush">Arrangement 0{index + 1}</p>
                  <h3 className="mt-2 font-display text-3xl italic">{item.title}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
