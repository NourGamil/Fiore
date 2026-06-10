import GallerySection from "../../components/site/GallerySection";
import PageHero from "../../components/site/PageHero";

export const metadata = {
  title: "Gallery | Fioré Floral Atelier",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="A flower gallery that feels like a moodboard." text="Browse floral moods, wrapping styles, soft color palettes, and arrangements created for gifting, events, and home styling." />
      <GallerySection />
    </>
  );
}
