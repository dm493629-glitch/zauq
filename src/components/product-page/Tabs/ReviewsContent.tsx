import React from "react";
import ReviewCard from "@/components/common/ReviewCard";
import { getProductReviews, shopConfig } from "@/data";
import { Product } from "@/types/product.types";
import { FaWhatsapp } from "react-icons/fa6";

const ReviewsContent = ({ data }: { data: Product }) => {
  const reviews = getProductReviews(data.id);
  // "Write a Review" opens WhatsApp with the product name pre-filled
  const reviewUrl = `https://wa.me/${shopConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${shopConfig.brandName}! I'd like to leave a review for "${data.title}":\n`
  )}`;

  return (
    <section>
      <div className="flex items-center justify-between flex-col sm:flex-row mb-5 sm:mb-6 gap-4">
        <div className="flex items-center">
          <h3 className="text-xl sm:text-2xl font-bold text-black mr-2">All Reviews</h3>
          <span className="text-sm sm:text-base text-black/60">({reviews.length})</span>
        </div>
        <a
          href={reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white font-medium text-xs sm:text-base hover:bg-black/80 transition-all"
        >
          <FaWhatsapp /> Write a Review
        </a>
      </div>
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reviews.map((review) => (
            <ReviewCard key={review.id} data={review} isDate />
          ))}
        </div>
      ) : (
        <p className="text-black/60 py-8 text-center">
          No reviews yet for this product. Be the first to share your experience!
        </p>
      )}
    </section>
  );
};

export default ReviewsContent;
