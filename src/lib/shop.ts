import { allProductsData, brandsData, categoriesData } from "@/data";
import { getFinalPrice } from "@/lib/price";
import { Product } from "@/types/product.types";

export type SortKey = "popular" | "newest" | "low-price" | "high-price";

export type ShopFilters = {
  category?: string;
  brands: string[];
  colors: string[];
  sizes: string[];
  min?: number;
  max?: number;
  sale: boolean;
  isNew: boolean;
  inStock: boolean;
  q?: string;
  sort: SortKey;
};

export type SearchParams = Record<string, string | string[] | undefined>;

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);
const list = (v: string | string[] | undefined) =>
  (one(v) ?? "").split(",").map((s) => s.trim()).filter(Boolean);
const num = (v: string | string[] | undefined) => {
  const n = Number(one(v));
  return one(v) && !Number.isNaN(n) ? n : undefined;
};

/** URL ?category=watches&color=Black,Gold&size=50ml&min=1000&max=9000&sale=1&new=1&stock=1&q=oud&sort=low-price */
export const parseFilters = (sp: SearchParams): ShopFilters => ({
  category: one(sp.category) || undefined,
  brands: list(sp.brand),
  colors: list(sp.color),
  sizes: list(sp.size),
  min: num(sp.min),
  max: num(sp.max),
  sale: one(sp.sale) === "1",
  isNew: one(sp.new) === "1",
  inStock: one(sp.stock) === "1",
  q: one(sp.q)?.trim() || undefined,
  sort: (["popular", "newest", "low-price", "high-price"].includes(one(sp.sort) ?? "")
    ? one(sp.sort)
    : "popular") as SortKey,
});

export const filtersToQuery = (f: ShopFilters): string => {
  const p = new URLSearchParams();
  if (f.category) p.set("category", f.category);
  if (f.brands.length) p.set("brand", f.brands.join(","));
  if (f.colors.length) p.set("color", f.colors.join(","));
  if (f.sizes.length) p.set("size", f.sizes.join(","));
  if (f.min !== undefined) p.set("min", String(f.min));
  if (f.max !== undefined) p.set("max", String(f.max));
  if (f.sale) p.set("sale", "1");
  if (f.isNew) p.set("new", "1");
  if (f.inStock) p.set("stock", "1");
  if (f.q) p.set("q", f.q);
  if (f.sort !== "popular") p.set("sort", f.sort);
  const s = p.toString();
  return s ? `?${s}` : "";
};

/** Brand names match ignoring case and extra spaces ("rolex" === "Rolex"). */
export const sameBrand = (a?: string, b?: string) =>
  !!a && !!b && a.trim().toLowerCase() === b.trim().toLowerCase();

export const filterProducts = (products: Product[], f: ShopFilters): Product[] => {
  const q = f.q?.toLowerCase();
  const result = products.filter((p) => {
    const price = getFinalPrice(p.price, p.discount);
    if (f.category && p.category !== f.category) return false;
    if (f.brands.length && !f.brands.some((b) => sameBrand(b, p.brand))) return false;
    if (f.colors.length && !p.colors?.some((c) => f.colors.includes(c.name))) return false;
    if (f.sizes.length && !p.sizes?.some((s) => f.sizes.includes(s))) return false;
    if (f.min !== undefined && price < f.min) return false;
    if (f.max !== undefined && price > f.max) return false;
    if (f.sale && !p.onSale) return false;
    if (f.isNew && !p.newArrival) return false;
    if (f.inStock && p.outOfStock) return false;
    if (q && !`${p.title} ${p.brand ?? ""} ${p.category}`.toLowerCase().includes(q)) return false;
    return true;
  });

  const fp = (p: Product) => getFinalPrice(p.price, p.discount);
  switch (f.sort) {
    case "low-price":
      return result.sort((a, b) => fp(a) - fp(b));
    case "high-price":
      return result.sort((a, b) => fp(b) - fp(a));
    case "newest":
      return result.sort((a, b) => Number(b.newArrival) - Number(a.newArrival) || b.id - a.id);
    default:
      return result.sort((a, b) => b.rating - a.rating);
  }
};

/** Options shown in the filter sidebar, built from the product data itself. */
export const getFilterOptions = (category?: string) => {
  const pool = category
    ? allProductsData.filter((p) => p.category === category)
    : allProductsData;
  const colors = new Map<string, string>();
  const sizes = new Set<string>();
  pool.forEach((p) => {
    p.colors?.forEach((c) => colors.set(c.name, c.code));
    p.sizes?.forEach((s) => sizes.add(s));
  });
  // Brands listed in data/content.ts first, then any other brand names found on products
  const brandNames: string[] = [];
  [...brandsData.map((b) => b.name), ...allProductsData.map((p) => p.brand)].forEach((n) => {
    if (n && !brandNames.some((x) => sameBrand(x, n))) brandNames.push(n);
  });
  const brands = brandNames
    .map((name) => ({ name, count: pool.filter((p) => sameBrand(p.brand, name)).length }))
    .filter((b) => b.count > 0);
  const prices = allProductsData.map((p) => getFinalPrice(p.price, p.discount));
  return {
    categories: categoriesData.map((c) => ({
      ...c,
      count: allProductsData.filter((p) => p.category === c.slug).length,
    })),
    brands,
    colors: Array.from(colors, ([name, code]) => ({ name, code })),
    sizes: Array.from(sizes),
    minPrice: prices.length ? Math.min(...prices) : 0,
    maxPrice: prices.length ? Math.max(...prices) : 0,
  };
};

export const getShopTitle = (f: ShopFilters) => {
  if (f.q) return `Results for "${f.q}"`;
  const cat = categoriesData.find((c) => c.slug === f.category);
  if (cat) return cat.title;
  if (f.brands.length === 1) return f.brands[0];
  if (f.sale) return "On Sale";
  if (f.isNew) return "New Arrivals";
  return "All Products";
};
