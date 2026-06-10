import { asset, testimonials } from "../../lib/site";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Client notes"
          title="The kind of feedback that makes the studio smell even sweeter."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.name} data-reveal className="rounded-[2.5rem] border border-rose-dark/10 bg-white/60 p-6 shadow-card backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-5">
                <img src={asset(item.image)} alt={item.name} className="h-20 w-20 rounded-full border-4 border-cream object-cover shadow-lg" />
                <div>
                  <h3 className="font-display text-3xl italic text-ink">{item.name}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">{item.role}</p>
                </div>
              </div>
              <p className="mt-8 font-display text-3xl italic leading-snug text-ink/80">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
