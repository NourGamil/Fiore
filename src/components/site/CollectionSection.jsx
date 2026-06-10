import { asset, collections } from "../../lib/site";
import SectionHeader from "./SectionHeader";

export default function CollectionSection() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Collections"
          title="Choose a bouquet mood, then let us make it personal."
          text="Each collection can be customized by color, size, wrap, card message, and delivery time."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {collections.map((item) => (
            <article key={item.title} data-reveal className="group overflow-hidden rounded-[2.5rem] border border-rose-dark/10 bg-white/60 p-5 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/85">
              <div className="grid h-72 place-items-center rounded-[2rem] bg-gradient-to-br from-blush/70 to-cream">
                <img src={asset(item.image)} alt="" className="h-40 w-40 object-contain drop-shadow-2xl transition duration-500 group-hover:scale-110 group-hover:rotate-3" />
              </div>
              <div className="p-3 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-rose">{item.eyebrow}</p>
                <h3 className="mt-3 font-display text-4xl italic text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/58">{item.description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-rose-dark/10 pt-5">
                  <span className="font-bold text-ink">{item.price}</span>
                  <span className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-cream cursor-pointer hover:scale-[110%] transition-all hover:bg-[#782236]">Order</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
