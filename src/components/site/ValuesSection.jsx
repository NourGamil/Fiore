import { values } from "../../lib/site";
import SectionHeader from "./SectionHeader";

export default function ValuesSection() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why choose us"
          title="Small details, beautiful timing, and flowers that arrive ready to impress."
          text="Every order is handled with care, from stem selection and wrapping to timing, delivery, and the final handwritten note."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => (
            <article key={item.title} data-reveal className="group relative overflow-hidden rounded-[2rem] border border-rose-dark/10 bg-white/58 p-6 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/85">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blush/70 blur-2xl transition group-hover:bg-rose/20" />
              <span className="relative text-sm font-extrabold text-rose">0{index + 1}</span>
              <h3 className="relative mt-6 font-display text-3xl italic leading-tight text-ink">{item.title}</h3>
              <p className="relative mt-4 text-sm leading-7 text-ink/58">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
