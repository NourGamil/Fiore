import AboutSection from "../../components/site/AboutSection";
import CollectionSection from "../../components/site/CollectionSection";
import PageHero from "../../components/site/PageHero";
import Testimonials from "../../components/site/Testimonials";
import ValuesSection from "../../components/site/ValuesSection";

export const metadata = {
  title: "About | Fioré Floral Atelier",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our story" title="Floristry with romance, rhythm, and restraint." text="Our studio creates thoughtful floral pieces for gifts, homes, events, and everyday moments that deserve something softer." />
      <AboutSection compact />
      <ValuesSection />
      <CollectionSection />
      <Testimonials />
    </>
  );
}
