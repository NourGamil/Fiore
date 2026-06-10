export function asset(path) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${path}`;
}

export const site = {
  name: "Fioré",
  fullName: "Fioré Floral Atelier",
  tagline: "Fresh flowers, sculpted arrangements, and thoughtful gifts for every soft moment.",
  email: "hello@fioreatelier.com",
  phone: "+20 102 456 7890",
  address: "Garden District, Cairo, Egypt",
  hours: "Daily 9:00 AM — 10:00 PM",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const collections = [
  {
    title: "Signature Roses",
    eyebrow: "Best seller",
    description: "Velvet roses arranged with airy greens, silk wrap, and a handwritten card.",
    price: "From EGP 950",
    image: "images/rose.webp",
  },
  {
    title: "Soft Tulip Set",
    eyebrow: "Seasonal",
    description: "Elegant tulips for birthdays, dates, new homes, and quiet apologies.",
    price: "From EGP 720",
    image: "images/tulip.webp",
  },
  {
    title: "Garden Mix Basket",
    eyebrow: "Custom made",
    description: "A fresh garden-inspired mix created around your preferred palette.",
    price: "From EGP 1,250",
    image: "images/flower.webp",
  },
];

export const values = [
  {
    title: "Hand-selected stems",
    description: "Every arrangement starts with fresh seasonal flowers chosen for color, shape, and longevity.",
  },
  {
    title: "Same-day styling",
    description: "Last-minute gift? We prepare refined bouquets quickly without losing the premium finish.",
  },
  {
    title: "Personal notes",
    description: "Add a card, color direction, or story — our florists shape the bouquet around the feeling.",
  },
  {
    title: "Event-ready design",
    description: "From tables to entrances, we design floral moments that photograph beautifully.",
  },
];

export const gallery = [
  { src: "images/g-1.jpg", title: "Blush rose cloud", size: "tall" },
  { src: "images/g-2.jpg", title: "Garden basket", size: "small" },
  { src: "images/g-3.jpg", title: "Pink peony mix", size: "small" },
  { src: "images/g-4.jpg", title: "Cream arrangement", size: "wide" },
  { src: "images/g-5.jpg", title: "Wild bouquet", size: "small" },
  { src: "images/g-6.jpg", title: "Romantic stem set", size: "small" },
  { src: "images/g-7.jpg", title: "Luxury gift wrap", size: "tall" },
  { src: "images/g-8.jpg", title: "Wedding palette", size: "wide" },
];

export const testimonials = [
  {
    name: "Adel",
    role: "Bride-to-be",
    image: "images/client-1.png",
    quote: "The bouquet looked even better in person. It felt delicate, premium, and made the whole engagement table softer.",
  },
  {
    name: "Youssef",
    role: "Regular client",
    image: "images/client-2.png",
    quote: "I ordered late and they still delivered something beautiful. The packaging, colors, and card were all perfect.",
  },
];

export const socials = ["Instagram", "Pinterest", "TikTok"];
