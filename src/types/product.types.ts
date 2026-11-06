export type Discount = {
  amount: number; // fixed PKR off (used only if percentage is 0)
  percentage: number; // % off
};

export type ProductColor = {
  name: string;
  code: string; // hex, e.g. "#000000"
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: number;
  title: string;
  category: string; // must match a slug in data/categories.ts
  brand?: string;
  srcUrl: string;
  gallery?: string[];
  price: number;
  discount: Discount;
  rating: number;
  description?: string;
  colors?: ProductColor[]; // e.g. watches
  sizes?: string[]; // e.g. perfumes ("50ml", "100ml")
  specs?: ProductSpec[];
  faqs?: { question: string; answer: string }[]; // extra FAQs for this product only (shown before general FAQs)
  outOfStock: boolean;
  newArrival: boolean;
  onSale: boolean;
  topSelling: boolean;
};
