// Store-wide text content: FAQs and homepage brands strip.

export type FaqItem = { question: string; answer: string };

export const faqsData: FaqItem[] = [
  {
    question: "How do I place an order?",
    answer:
      "Add products to your cart, go to checkout, fill in your details and tap Order via WhatsApp. Your order is sent to us on WhatsApp and we confirm it there.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Cash on Delivery (COD) and Online Bank Transfer.",
  },
  {
    question: "How much is delivery?",
    answer: "Delivery charges depend on your city and are shown on the checkout page.",
  },
  {
    question: "What is your return policy?",
    answer:
      "If you receive a damaged or wrong item, contact us on WhatsApp within 3 days of delivery.",
  },
];

// `logo` is optional (path in /public). Without a logo the name is shown as text.
// `link` is optional. Without it, clicking the brand opens /shop filtered by that brand.
// To attach a product to a brand, set `brand: "<same name>"` on the product in products.ts
// (matching ignores upper/lower case, so "rolex" and "Rolex" are the same brand).
export type Brand = { name: string; logo?: string; link?: string };

export const brandLink = (b: Brand) => b.link ?? `/shop?brand=${encodeURIComponent(b.name)}`;

export const brandsData: Brand[] = [
  { name: "Rolex", logo: "/images/Rolex.avif" },
  { name: "Brand Two" },
  { name: "Brand Three" },
  { name: "Brand Four" },
  { name: "Brand Five" },
];
