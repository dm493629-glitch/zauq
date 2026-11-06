/**
 * ZAUQ — single source of truth for store settings.
 * Change values here; every page reads from this file.
 */

export type SocialPlatform =
  | "instagram"
  | "facebook"
  | "tiktok"
  | "whatsapp"
  | "youtube"
  | "snapchat"
  | "daraz"
  | "twitter";

export type City = { value: string; label: string; fee: number };

export type HeroSlide = {
  image: string; // desktop image (path in /public or full URL)
  mobileImage?: string; // optional separate image for phones
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
};

export type NavLink = {
  label: string;
  url: string;
  description?: string;
  children?: NavLink[];
};

export const shopConfig = {
  brandName: "ZAUQ",
  tagline: "Premium watches and perfumes, delivered across Pakistan.",
  siteTitle: "ZAUQ | Watches & Perfumes",

  currency: "PKR",

  // Only digits: country code + number, no "+", spaces or dashes.
  whatsappNumber: "923092074003",

  bankDetails: {
    bankName: "NAYAPAY",
    accountTitle: "DANIYAL MALIK",
    accountNumber: "03363724062",
    iban: "PK23 NAYA 1234 5033 6372 4062",
  },

  // Checkout city dropdown. The first city is selected by default.
  cities: [
    { value: "karachi", label: "Karachi", fee: 200 },
    { value: "lahore", label: "Lahore", fee: 500 },
    { value: "islamabad", label: "Islamabad", fee: 500 },
    { value: "other", label: "Other Cities", fee: 500 },
  ] as City[],

  // Free delivery when the order total (after discounts) reaches `threshold`.
  // `cities`: city values from the list above that get free delivery. Empty [] = all cities.
  // Set threshold: 0 to turn free delivery off.
  freeDelivery: {
    threshold: 15000,
    cities: [] as string[],
  },

  // Floating WhatsApp button (bottom-right). Message is pre-filled in the chat.
  whatsappButton: {
    enabled: true, //whatsapp ka button hatanay k leye
    message: "Hi ZAUQ! I'd like to know more about your products.", 
  },


  topBanner: {
    enabled: true,
    text: "Free delivery in Karachi on orders above PKR 15,000.",
    linkText: "Shop Now",
    linkUrl: "/shop",
  },

  hero: {
    intervalMs: 5000, // time between slides
    slides: [
      {
        image: "/images/watch1.jpg",
        mobileImage: "/images/watch2.jpeg",
        title: "Timeless Watches",
        subtitle: "Crafted for every moment.",
        buttonText: "Shop Watches",
        buttonLink: "/shop?category=watches",
      },
      {
        image: "/images/watch3.jpg",
        mobileImage: "/images/watch4.jpg",
        title: "Timeless Watches",
        subtitle: "Crafted for every moment.",
        buttonText: "Shop Watches",
        buttonLink: "/shop?category=watches",
      },
      {
        image: "/images/watch5.jpg",
        mobileImage: "/images/watch6.jpeg",
        title: "Timeless Watches",
        subtitle: "Crafted for every moment.",
        buttonText: "Shop Watches",
        buttonLink: "/shop?category=watches",
      },
      {
        image: "/images/watch5.jpg",
        mobileImage: "/images/watch7.jpeg",
        title: "Timeless Watches",
        subtitle: "Crafted for every moment.",
        buttonText: "Shop Watches",
        buttonLink: "/shop?category=watches",
      },
      {
        image: "/images/header-homepage.png",
        mobileImage: "/images/header-res-homepage.png",
        title: "Signature Perfumes",
        subtitle: "Scents that stay with you.",
        buttonText: "Shop Perfumes",
        buttonLink: "/shop?category=perfumes",
      },
    ] as HeroSlide[],
  },

  navMenu: [
    {
      label: "Shop",
      url: "/shop",
      children: [
        { label: "Watches", url: "/shop?category=watches", description: "Classic, sport and luxury watches" },
        { label: "Perfumes", url: "/shop?category=perfumes", description: "Long lasting fragrances" },
        //{ label: "Jewelry", url: "/shop?category=jewelry", description: "Elegant accessories" },
      ],
    },
    { label: "On Sale", url: "/shop?sale=1" },
    { label: "New Arrivals", url: "/shop?new=1" },
  ] as NavLink[],

  socials: [
    { platform: "instagram", url: "https://instagram.com/" },
    { platform: "facebook", url: "https://facebook.com/" },
    { platform: "tiktok", url: "https://tiktok.com/" },
    { platform: "whatsapp", url: "https://wa.me/923092074003" },
    { platform: "youtube", url: "https://youtube.com/" },
    { platform: "snapchat", url: "https://snapchat.com/" },
    { platform: "daraz", url: "https://daraz.com/" },
    { platform: "twitter", url: "https://twitter.com/" }
  ] as { platform: SocialPlatform; url: string }[],

  footerLinks: [
    {
      title: "Shop",
      links: [
        { label: "Watches", url: "/shop?category=watches" },
        { label: "Perfumes", url: "/shop?category=perfumes" },
        { label: "New Arrivals", url: "/shop?new=1" },
        { label: "On Sale", url: "/shop?sale=1" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Cart", url: "/cart" },
        { label: "Checkout", url: "/checkout" },
        { label: "FAQs", url: "/faq" },
        { label: "Contact on WhatsApp", url: "https://wa.me/923092074003" },
      ],
    },
    // "Policies" column is added automatically from data/policies.ts
  ],

  // Shown in the footer only (not used in checkout).
  // `logo` is an optional image path in /public; without it the name is shown as text.
  paymentBadges: [
   // { name: "JazzCash", logo: "/icons/applePay.svg" },
   { name: "JazzCash" },
    { name: "Easypaisa" },
    { name: "Bank Transfer" },
    { name: "COD" },
  ] as { name: string; logo?: string }[],

  // The year before this text updates automatically every year.
  copyright: "ZAUQ. All rights reserved.",

  // Shown under the copyright line. Remove this block to hide it.
  credit: {
    text: "Website developed by",
    name: "MHM",
    url: "https://mhm-portfolio-nextjs.vercel.app/",
  },
};
