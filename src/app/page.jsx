import AboutSection from "../components/site/AboutSection";
import CollectionSection from "../components/site/CollectionSection";
import ContactSection from "../components/site/ContactSection";
import GallerySection from "../components/site/GallerySection";
import Hero from "../components/site/Hero";
import Marquee from "../components/site/Marquee";
import Testimonials from "../components/site/Testimonials";
import ValuesSection from "../components/site/ValuesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutSection />
      <ValuesSection />
      <CollectionSection />
      <GallerySection preview />
      <Testimonials />
      <ContactSection />
    </>
  );
}
