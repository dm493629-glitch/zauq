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
    title: "Rolex Classic Chronograph Watch",
    category: "watches",
    brand: "Rolex",
    srcUrl: "/images/pic1.png",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: 8500,
    discount: { amount: 0, percentage: 18 },
    rating: 2.5,
    description:
      "Stainless steel chronograph with scratch-resistant glass and water resistance for everyday wear.",
    colors: [
      { name: "Black", code: "#111111" },
      { name: "Silver", code: "#C0C0C0" },
      { name: "Gold", code: "#C9A54C" },
      { name: "Noir", code: "#030D2A" },
    ],
    specs: [
      { label: "Movement", value: "Quartz" },
      { label: "Case", value: "42mm stainless steel" },
      { label: "Water resistance", value: "3 ATM" },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: false,
    topSelling: true,
  },
  {
    id: 2,
    title: "Minimal Leather Strap Watch",
    category: "watches",
    srcUrl: "/images/pic2.png",
    gallery: ["/images/pic2.png"],
    price: 6000,
    discount: { amount: 0, percentage: 20 },
    rating: 4,
    description:
      "Slim dial with a genuine leather strap. Clean and minimal for formal and casual looks.",
    colors: [
      { name: "Brown", code: "#6B4226" },
      { name: "Black", code: "#111111" },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: false,
  },
  {
    id: 3,
    title: "Sport Digital Watch",
    category: "watches",
    srcUrl: "/images/pic3.png",
    price: 3500,
    discount: { amount: 500, percentage: 0 },
    rating: 4.5,
    description: "Lightweight digital sports watch with alarm, stopwatch and backlight.",
    colors: [
      { name: "Black", code: "#111111" },
      { name: "Blue", code: "#1E3A8A" },
    ],
    outOfStock: false,
    newArrival: false,
    onSale: true,
    topSelling: true,
  },
  {
    id: 4,
    title: "Luxury Gold Watch",
    category: "watches",
    srcUrl: "/images/pic4.png",
    price: 15000,
    discount: { amount: 0, percentage: 0 },
    rating: 5,
    description: "Gold-tone luxury watch with a link bracelet and date window.",
    colors: [{ name: "Gold", code: "#C9A54C" }],
    outOfStock: true,
    newArrival: false,
    onSale: false,
    topSelling: true,
  },
  {
    id: 5,
    title: "Oud Intense Perfume",
    category: "perfumes",
    srcUrl: "/images/pic5.png",
    gallery: ["/images/pic5.png", "/images/pic10.png"],
    price: 4500,
    discount: { amount: 0, percentage: 10 },
    rating: 5,
    description: "Rich oud with warm amber and woody notes. Long lasting, 8+ hours.",
    sizes: ["50ml", "100ml"],
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
    id: 6,
    title: "Fresh Aqua Perfume",
    category: "perfumes",
    srcUrl: "/images/pic6.png",
    price: 3000,
    discount: { amount: 0, percentage: 0 },
    rating: 4,
    description: "Fresh citrus and marine notes, ideal for daily summer wear.",
    sizes: ["30ml", "50ml", "100ml"],
    outOfStock: false,
    newArrival: true,
    onSale: false,
    topSelling: false,
  },
  {
    id: 7,
    title: "Rose Musk Perfume",
    category: "perfumes",
    srcUrl: "/images/pic7.png",
    price: 3800,
    discount: { amount: 0, percentage: 0 },
    rating: 4.5,
    description: "Soft rose blended with white musk. Elegant and feminine.",
    sizes: ["50ml", "100ml"],
    outOfStock: false,
    newArrival: false,
    onSale: false,
    topSelling: true,
  },
  {
    id: 8,
    title: "Black Leather Perfume",
    category: "perfumes",
    srcUrl: "/images/pic8.png",
    price: 5200,
    discount: { amount: 0, percentage: 15 },
    rating: 4.5,
    description: "Bold leather and spice accord for evenings.",
    sizes: ["100ml"],
    outOfStock: false,
    newArrival: false,
    onSale: true,
    topSelling: false,
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
