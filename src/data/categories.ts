export type Category = {
  title: string;
  slug: string; // used in product.category and in /shop?category=<slug>
  image?: string; // shown on homepage "Browse by category"
};

export const categoriesData: Category[] = [
  { title: "Watches", slug: "watches", image: "/images/watch.jpg" },
  { title: "Perfumes", slug: "perfumes", image: "/images/perfume.jpg" },
];
