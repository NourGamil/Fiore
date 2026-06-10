import "./globals.css";
import Navigation from "../components/site/Navigation";
import Footer from "../components/site/Footer";
import MotionInit from "../components/site/MotionInit";
import { site } from "../lib/site";

export const metadata = {
  title: `${site.name} | Premium Floral Atelier`,
  description: site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noise-bg font-sans antialiased">
        <MotionInit />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
