  import { Product } from "@/types/product.types";

/**
 * ALL products live here. Flags decide where a product shows up:
 *  newArrival -> homepage "New Arrivals" + shop filter
 *  topSelling -> homepage "Top Selling"
 *  onSale     -> shop "On Sale" filter (set a discount too)
 *  outOfStock -> true disables "Add to Cart"
 * Watches use `colors`, perfumes use `sizes`. Leave either out if not needed.
 */
export const allProductsData: Product[] = [
  {
    id: 1,
    title: "Rolex Oysterquartz Land Dweller",
    category: "watches",
    brand: "Rolex",
    srcUrl: "/images/Rolex Oysterquartz Land Dweller.png",
    gallery: ["/images/Rolex Oysterquartz Land Dweller.png", "/images/Rolex Oysterquartz Land Dweller.png"],
    price: 4200,
    discount: { amount: 0, percentage: 10 },
    rating: 4.5,
    description:
      "Stainless steel and date working with scratch-resistant glass and water resistance for everyday wear.",
    colors: [
      { name: "Tiffany Blue", code: "#81D8D0" },
    ],
    specs: [
      { label: "Movement", value: "Quartz" },
      { label: "Case", value: "38mm dial size stainless steel" },
      { label: "Water resistance", value: "3 ATM" },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: false,
    topSelling: true,
  },
  {
    id: 501,
    title: "Oud Mood",
    category: "perfumes",
    srcUrl: "/images/oud mood 1.jpeg",
    gallery: ["/images/oud mood 1.jpeg", "/images/oud mood 2.jpeg"],
    price: 600,
    discount: { amount: 0, percentage: 10 },
    rating: 5,
    description: "Rich oud with warm amber and woody notes. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Oud, Amber, Sandalwood" },
    ],
    faqs: [
      {
        question: "How long does Oud Intense last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
    {
    id: 502,
    title: " LOUIS VUITTON OMBRE NOMADE",
    category: "perfumes",
    srcUrl: "/images/LOUIS VUITTON OMBRE NOMADE 1.jpeg",
    gallery: ["/images/LOUIS VUITTON OMBRE NOMADE 1.jpeg", "/images/LOUIS VUITTON OMBRE NOMADE 2.AVIF"],
    price: 2500,
    discount: { amount: 0, percentage: 10 },
    rating: 5,
    description: "The fragrance features Agarwood (Oud), Rose, Raspberry, Saffron, Incense, Benzoin, Amberwood, Birch and Geranium. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Oud, Amber, warm spicy, rose, fruity, leather, smoky ,woody, sweet, metallic" },
    ],
    faqs: [
      {
        question: "How long does LV OMBRE NOMADE last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
    {
    id: 503,
    title: " J. WHITE MUSK",
    category: "perfumes",
    srcUrl: "/images/J. WHITE MUSK 1.jpeg",
    gallery: ["/images/J. WHITE MUSK 1.jpeg"],
    price: 1000,
    discount: { amount: 0, percentage: 10 },
    rating: 5,
    description: "The fragrance features Italian Lemon, Mint, Green Apple, White Floral, Vanilla, Woody. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Fresh, Woody, Italian Lemon, Mint, Green Apple, White Floral, Vanilla" },
    ],
    faqs: [
      {
        question: "How long does J. WHITE MUSK last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
  {
    id: 504.,
    title: " J.EXCLUSIVE",
    category: "perfumes",
    srcUrl: "/images/J.EXCLUSIVE 1.jpeg",
    gallery: ["/images/J.EXCLUSIVE 1.jpeg"],
    price: 1500,
    discount: { amount: 0, percentage: 10 },
    rating: 4.5,
    description: "A name that represents elegance, uniqueness, luxury, and premium quality. Designed for those who love to stand out with confidence and style. Be exclusive, be extraordinary, be unforgettable. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Bergamot ,Lemon, Fresh Citrus, Pink Pepper, Jasmine, Rose, Lavender, Geranium, Vanilla, Amber, Musk, Sandalwood, Oud" },
    ],
    faqs: [
      {
        question: "How long does J.EXCLUSIVE last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
  {
    id: 505.,
    title: "MAISON FRANCIS KURUDJIAN BACCARAT ROUGH 540 EXTRAIT DE PARFUM SPRAY",
    category: "perfumes",
    srcUrl: "/images/MAISON FRANCIS KURUDJIAN BACCARAT ROUGH 540 EXTRAIT DE PARFUM SPRAY 1.jpeg",
    gallery: ["/images/MAISON FRANCIS KURUDJIAN BACCARAT ROUGH 540 EXTRAIT DE PARFUM SPRAY 1.jpeg"],
    price: 3500,
    discount: { amount: 0, percentage: 10 },
    rating: 5.0,
    description: "A luxurious and captivating fragrance inspired by the iconic Baccarat Rouge 540 scent profile. It combines sweet, warm, floral, and woody accords to create an elegant and unforgettable fragrance experience. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Saffron, Bitter Almond, Jasmine, Amber Floral Accord, Cedarwood, Amberwood, Musk, Woody Accords" },
    ],
    faqs: [
      {
        question: "How long does MAISON FRANCIS KURUDJIAN BACCARAT ROUGH 540 EXTRAIT DE PARFUM last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
  {
    id: 506.,
    title: "TOM FORD NEROLI PORTOFINO COLOGNE",
    category: "perfumes",
    srcUrl: "/images/TOM FORD NEROLI PORTOFINO COLOGNE 1.jpeg",
    gallery: ["/images/TOM FORD NEROLI PORTOFINO COLOGNE 1.jpeg"],
    price: 5000,
    discount: { amount: 0, percentage: 10 },
    rating: 5.0,
    description: "A refreshing and sophisticated fragrance inspired by the beautiful Italian Riviera. Neroli Portofino blends sparkling citrus, fresh aromatic herbs, and elegant floral notes to create a clean, luxurious, and uplifting scent. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Italian Bergamot, Sicilian Lemon, Mandarin Orange, Bitter Orange, Lavender, Rosemary, Tunisian Neroli, African Orange Blossom, Jasmine, Pittosporum, Amber, Ambrette, Angelica" },
    ],
    faqs: [
      {
        question: "How long does TOM FORD NEROLI PORTOFINO COLOGNE last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
];

// Derived lists — don't edit these, change the flags above instead.
export const newArrivalsData = allProductsData.filter((p) => p.newArrival);
export const topSellingData = allProductsData.filter((p) => p.topSelling);
export const onSaleData = allProductsData.filter((p) => p.onSale);

export const getProductById = (id: number) =>
  allProductsData.find((p) => p.id === id);

export const getRelatedProducts = (product: Product, limit = 4) => {
  const rest = allProductsData.filter((p) => p.id !== product.id);
  return [
    ...rest.filter((p) => p.category === product.category),
    ...rest.filter((p) => p.category !== product.category),
  ].slice(0, limit);
};
