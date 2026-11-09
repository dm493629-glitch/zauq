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
  {
    id: 507.,
    title: "CALVIN KLEIN ETERNITY EAU DE TOILETTE",
    category: "perfumes",
    srcUrl: "/images/CALVIN KLEIN ETERNITY EAU DE TOILETTE 1.jpeg",
    gallery: ["/CALVIN KLEIN ETERNITY EAU DE TOILETTE 1.jpeg"],
    price: 5000,
    discount: { amount: 0, percentage: 10 },
    rating: 5.0,
    description: "Calvin Klein Eternity Eau de Toilette for Men is a timeless, fresh and masculine fragrance that combines refreshing citrus, aromatic herbs and warm woody notes. It opens with a crisp burst of mandarin and lavender, followed by an elegant herbal heart of basil, geranium and sage. The fragrance settles into a warm, smooth base of sandalwood, rosewood and amber, creating a clean, sophisticated and confident scent It is ideal for everyday wear, office use and casual or formal occasions. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Mandarin, Lavender, Green Botanics, Basil, Geranium, Sage, Sandalwood, Rosewood, Amber" },
    ],
    faqs: [
      {
        question: "How long does CALVIN KLEIN ETERNITY EAU DE TOILETTE last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
  {
    id: 508.,
    title: "JOOP! HOMME EAU DE TOILETTE 1",
    category: "perfumes",
    srcUrl: "/images/JOOP! HOMME EAU DE TOILETTE 1.jpeg",
    gallery: ["/JOOP! HOMME EAU DE TOILETTE 1.jpeg"],
    price: 7500,
    discount: { amount: 0, percentage: 10 },
    rating: 4.7,
    description: "JOOP! Homme Eau de Toilette is a bold, sensual and distinctive masculine fragrance with a rich blend of sweet, spicy, floral and woody notes. It opens with a refreshing burst of citrus and orange blossom, followed by a warm and spicy heart of cinnamon, jasmine and vanilla. The fragrance settles into a deep, smooth and seductive base of sandalwood, patchouli and vetiver, leaving a memorable and long-lasting impression.It is perfect for men who enjoy strong, confident and attention-grabbing fragrances, especially for evening wear, special occasions and cooler weather. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Bergamot, Mandarin Orange, Orange Blossom, Lemon, Cinnamon, Jasmine, Heliotrope, Lily of the Valley, Vanilla, Tonka Bean, Sandalwood, Patchouli" },
    ],
    faqs: [
      {
        question: "How long does JOOP! HOMME EAU DE TOILETTE last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
  {
    id: 509.,
    title: "NAUTICA CLASSIC EDT PERFUME",
    category: "perfumes",
    srcUrl: "/images/NAUTICA CLASSIC EDT PERFUME 1.jpeg",
    gallery: ["/NAUTICA CLASSIC EDT PERFUME 1.jpeg"],
    price: 7500,
    discount: { amount: 0, percentage: 10 },
    rating: 4.0,
    description: "Nautica Classic Eau de Toilette is a timeless, refreshing and masculine fragrance inspired by the fresh sea breeze and coastal lifestyle. It opens with a vibrant blend of citrus notes, including lemon and bergamot, creating a crisp and energizing first impression. Its aromatic heart combines fresh herbs and delicate floral notes, adding elegance and sophistication. The fragrance settles into a warm, smooth base of sandalwood, cedarwood, musk and amber, leaving a clean and pleasant woody trail.Perfect for men who appreciate fresh, classic and effortless fragrances. Ideal for everyday wear, office use and casual occasions. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Lemon, Bergamot, Lime, Neroli, Coriander, Cypress, Jasmine, Rose, Cyclamen, Geranium, Clary Sage, Sandalwood, Cedarwood, Musk, Amber, Patchouli, Oakmoss" },
    ],
    faqs: [
      {
        question: "How long does NAUTICA CLASSIC EDT PERFUME last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
  {
    id: 510.,
    title: "CHRISTIAN DIOR SAUVAGE EAU DE PARFUM",
    category: "perfumes",
    srcUrl: "/images/CHRISTIAN DIOR SAUVAGE EAU DE PARFUM 1.jpeg",
    gallery: ["/images/CHRISTIAN DIOR SAUVAGE EAU DE PARFUM 1.jpeg"],
    price: 7500,
    discount: { amount: 0, percentage: 10 },
    rating: 5.0,
    description: "Christian Dior Sauvage Eau de Parfum is a powerful, sophisticated and captivating masculine fragrance that combines fresh citrus, aromatic spices and warm woody accords. It opens with a vibrant burst of juicy Calabrian bergamot, delivering a fresh and energetic sensation. Its aromatic heart blends spicy Sichuan pepper, lavender and star anise, creating a distinctive balance of freshness and warmth. The fragrance settles into a rich and sensual base of vanilla, ambroxan and earthy patchouli, leaving a smooth, smoky and unforgettable trail.Perfect for the modern man who appreciates luxury, confidence and elegance. Ideal for daily wear, business meetings, evening occasions and special events. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Calabrian Bergamot, Sichuan Pepper, Lavender, Star Anise, Papua New Guinean Vanilla, Ambroxan, Patchouli" },
    ],
    faqs: [
      {
        question: "How long does CHRISTIAN DIOR SAUVAGE EAU DE PARFUM last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
  {
    id: 511.,
    title: "CREED AVENTUS EAU DE PARFUM SPRAY",
    category: "perfumes",
    srcUrl: "/images/CREED AVENTUS EAU DE PARFUM SPRAY 1.jpeg",
    gallery: ["/images/CREED AVENTUS EAU DE PARFUM SPRAY 1.jpeg"],
    price: 7500,
    discount: { amount: 0, percentage: 10 },
    rating: 5.0,
    description: "Creed Aventus Eau de Parfum is a luxurious, bold and sophisticated masculine fragrance that represents strength, confidence, ambition and success. It opens with a refreshing and fruity blend of pineapple, bergamot, blackcurrant and apple, creating a vibrant and captivating first impression. Its heart reveals a distinctive combination of juicy pineapple, elegant jasmine and earthy patchouli, adding depth and refinement. The fragrance settles into a rich and masculine base of smoky birch, oakmoss, cedarwood and Ambroxan, leaving a smooth, powerful and memorable trail.Perfect for the modern gentleman who appreciates luxury, elegance and individuality. Ideal for business meetings, formal occasions, everyday wear and special events. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Pineapple, Bergamot, Blackcurrant, Apple, Jasmine, Birch, Patchouli, Pink Pepper,Oakmoss, Cedarwood, Musk, Ambergris, Ambroxan" },
    ],
    faqs: [
      {
        question: "How long does CREED AVENTUS EAU DE PARFUM SPRAY last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
  {
    id: 512.,
    title: "MARJ BY AHMED AL MAGHRIBI",
    category: "perfumes",
    srcUrl: "/images/MARJ BY AHMED AL MAGHRIBI 1.jpeg",
    gallery: ["/images/MARJ BY AHMED AL MAGHRIBI 1.jpeg"],
    price: 5500,
    discount: { amount: 0, percentage: 10 },
    rating: 5.0,
    description: "MARJ by Ahmed Al Maghribi is a luxurious, sophisticated and richly layered unisex fragrance that blends fresh citrus, warm spices, sweet honey, elegant florals and deep oriental woods. It opens with a vibrant combination of bergamot, pink pepper and tangerine, enhanced by nutmeg, elemi, oud and honey, creating a refreshing yet warm first impression.Its heart reveals an elegant blend of rose, jasmine, saffron, cinnamon, patchouli and vetiver, adding floral richness and spicy depth. The fragrance settles into a luxurious base of musk, amber, raspberry, leather, sandalwood, oakmoss and agarwood, leaving a warm, sensual and memorable trail.Perfect for men and women who appreciate rich Arabian fragrances with a balance of freshness, sweetness, spices and woody elegance. Ideal for special occasions, evening wear, formal events and everyday luxury. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Bergamot, Pink Pepper, Elemi, Nutmeg, Tangerine, Oud, Honey, Patchouli, Vetiver, Cashmere Wood, Cinnamon, Rose, Saffron, Jasmine, Orange Blossom, Musk, Amber, Raspberry, Oakmoss, Ambrette Seeds, Leather, Sandalwood, Violet, Agarwood, Ambroxan" },
    ],
    faqs: [
      {
        question: "How long does MARJ BY AHMED AL MAGHRIBI last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
  {
    id: 513.,
    title: "EVERYONE PERFUME FOR MEN BY CREATION LAMIS",
    category: "perfumes",
    srcUrl: "/images/EVERYONE PERFUME FOR MEN BY CREATION LAMIS 1.jpeg",
    gallery: ["/images/EVERYONE PERFUME FOR MEN BY CREATION LAMIS 1.jpeg"],
    price: 1000,
    discount: { amount: 0, percentage: 10 },
    rating: 4.2,
    description: "Everyone by Creation Lamis is a refreshing, elegant and versatile fragrance designed for individuals who appreciate clean, fruity, floral and woody scents. It opens with an energetic blend of fresh citrus, juicy pineapple, bergamot, mandarin orange and green notes, creating a bright and uplifting first impression.Its heart reveals a beautiful combination of sweet papaya, spicy nutmeg, violet, jasmine, rose and lily of the valley, adding a soft floral and fruity character. The fragrance settles into a smooth and comforting base of sandalwood, amber, musk, cedarwood and oakmoss, leaving a fresh, warm and pleasant impression.Perfect for those who enjoy light, refreshing and effortlessly stylish fragrances. Ideal for everyday wear, office use, casual outings and daytime occasions. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Pineapple, Green Notes, Mandarin Orange, Papaya, Bergamot, Cardamom, Lemon, Nutmeg, Violet, Orris Root, Jasmine, Lily of the Valley, Rose, Sandalwood, Amber, Musk, Cedarwood, Oakmoss" },
    ],
    faqs: [
      {
        question: "How long does EVERYONE PERFUME FOR MEN BY CREATION LAMIS last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
  {
    id: 514.,
    title: "CALVIN KLEIN TRUTH EAU DE TOILETTE",
    category: "perfumes",
    srcUrl: "/images/CALVIN KLEIN TRUTH EAU DE TOILETTE 1.jpeg",
    gallery: ["/images/CALVIN KLEIN TRUTH EAU DE TOILETTE 1.jpeg"],
    price: 7500,
    discount: { amount: 0, percentage: 10 },
    rating: 4.9,
    description: "Calvin Klein Truth Eau de Toilette is a refreshing, natural and sophisticated masculine fragrance inspired by the freshness of nature. It opens with a crisp blend of green leaves, aromatic basil and warm cardamom, creating a clean and invigorating first impression. Its heart reveals fresh fern and smooth resins, adding an earthy and aromatic character. The fragrance settles into a warm, masculine base of red cedar, white patchouli and exotic woods, leaving a subtle, elegant and refreshing trail.Perfect for men who appreciate simple elegance, natural freshness and understated sophistication. Ideal for everyday wear, office use, casual outings and daytime occasions.  Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Basil, Cardamom, Green Leaves, Fern, Resins, Red Cedar, White Patchouli, Exotic Woods" },
    ],
    faqs: [
      {
        question: "How long does CALVIN KLEIN TRUTH EAU DE TOILETTE last?",
        answer: "8+ hours on skin, longer on clothes.",
      },
    ],
    outOfStock: false,
    newArrival: true,
    onSale: true,
    topSelling: true,
  },
  {
    id: 515.,
    title: "HAIDER BY SAEED GHANI",
    category: "perfumes",
    srcUrl: "/images/HAIDER BY SAEED GHANI 1.jpeg",
    gallery: ["/images/HAIDER BY SAEED GHANI 1.jpeg"],
    price: 2200,
    discount: { amount: 0, percentage: 10 },
    rating: 5.0,
    description: "Haider by Saeed Ghani is a luxurious, bold and captivating masculine fragrance that blends fresh fruity accords, smoky woods and warm sensual notes. It opens with a vibrant combination of juicy pineapple, bergamot, blackcurrant and crisp apple, creating a fresh, fruity and energetic first impression.Its heart reveals an elegant blend of smoky birch, earthy patchouli, Moroccan jasmine and delicate rose, adding depth, sophistication and a distinctive woody-floral character. The fragrance settles into a rich and sensual base of musk, oakmoss, ambergris and vanilla, leaving a warm, smooth and memorable trail.Perfect for the modern gentleman who appreciates confidence, elegance and distinctive fragrances. Ideal for formal occasions, business meetings, evening wear and special events. Long lasting, 4 to 6 hours.",
    sizes: ["100ml"],
    specs: [
      { label: "Type", value: "Eau de Parfum" },
      { label: "Notes", value: "Pineapple, Bergamot, Blackcurrant, Apple, Birch, Patchouli, Moroccan Jasmine, Rose, Musk, Oakmoss, Ambergris, Vanilla" },
    ],
    faqs: [
      {
        question: "How long does HAIDER BY SAEED GHANI last?",
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
