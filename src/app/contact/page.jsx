import ContactSection from "../../components/site/ContactSection";
import PageHero from "../../components/site/PageHero";

export const metadata = {
  title: "Contact | Fioré Floral Atelier",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Start with a color, occasion, or feeling." text="Share the occasion, palette, delivery date, or message, and our florists will help shape the perfect arrangement." />
      <ContactSection />
      <section className="px-5 pb-24 sm:px-6 lg:px-8">
        <div data-reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-rose-dark/10 bg-white/60 p-3 shadow-soft backdrop-blur-xl">
          <iframe
            title="Fioré map"
            width="100%"
            height="420"
            className="rounded-[2rem]"
            loading="lazy"
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Fior%C3%A9)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          />
        </div>
      </section>
    </>
  );
}
