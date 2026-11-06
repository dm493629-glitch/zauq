import { Review } from "@/types/review.types";

/**
 * Customer reviews.
 *  productId -> review also shows on that product's page (Rating & Reviews tab)
 *  no productId -> general store review (homepage only)
 * The homepage "Our Happy Customers" slider shows ALL reviews.
 */
export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Ahmed K.",
    productId: 1,
    content:
      '"The chronograph looks even better in person. Solid build, and delivery to Karachi was quick."',
    rating: 5,
    date: "October 2, 2026",
  },
  {
    id: 2,
    user: "Sana M.",
    productId: 5,
    content: '"Oud Intense lasts all day. I get compliments every time I wear it."',
    rating: 5,
    date: "October 5, 2026",
  },
  {
    id: 3,
    user: "Bilal R.",
    productId: 2,
    content: '"Simple and classy leather strap watch. Great value with the discount."',
    rating: 4,
    date: "October 9, 2026",
  },
  {
    id: 4,
    user: "Hira P.",
    productId: 7,
    content: '"Rose Musk is soft and elegant, exactly what I wanted for daily use."',
    rating: 5,
    date: "October 12, 2026",
  },
  {
    id: 5,
    user: "Usman T.",
    content:
      '"Ordering on WhatsApp was easy and they confirmed my order within minutes. Cash on delivery worked perfectly."',
    rating: 5,
    date: "October 15, 2026",
  },
  {
    id: 6,
    user: "Ayesha D.",
    content: '"Packaging was premium and everything arrived safely. Will order again from ZAUQ."',
    rating: 5,
    date: "October 20, 2026",
  },
];

export const getProductReviews = (productId: number) =>
  reviewsData.filter((r) => r.productId === productId);
