import { cn } from "@/lib/utils";
import { formatPrice, getFinalPrice } from "@/lib/price";
import { Discount } from "@/types/product.types";

type PriceTagProps = {
  price: number;
  discount: Discount;
  className?: string; // size classes for the price text
};

const PriceTag = ({ price, discount, className }: PriceTagProps) => {
  const final = getFinalPrice(price, discount);
  const hasDiscount = final < price;
  return (
    <div className="flex items-center flex-wrap gap-x-2.5 gap-y-1">
      <span className={cn("font-bold text-black", className)}>
        {formatPrice(final)}
      </span>
      {hasDiscount && (
        <>
          <span className={cn("font-bold text-black/40 line-through", className)}>
            {formatPrice(price)}
          </span>
          <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
            {discount.percentage > 0
              ? `-${discount.percentage}%`
              : `-${formatPrice(discount.amount)}`}
          </span>
        </>
      )}
    </div>
  );
};

export default PriceTag;
