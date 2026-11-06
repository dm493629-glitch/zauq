import React from "react";
import PhotoSection from "./PhotoSection";
import { Product } from "@/types/product.types";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Rating from "@/components/ui/Rating";
import AddToCardSection from "./AddToCardSection";
import PriceTag from "@/components/common/PriceTag";

const Header = ({ data }: { data: Product }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <PhotoSection data={data} />
      </div>
      <div>
        <h1
          className={cn([
            integralCF.className,
            "text-2xl md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 capitalize",
          ])}
        >
          {data.title}
        </h1>
        <div className="flex items-center mb-3 sm:mb-3.5">
          <Rating
            initialValue={data.rating}
            allowFraction
            SVGclassName="inline-block"
            emptyClassName="fill-gray-50"
            size={25}
            readonly
          />
          <span className="text-black text-xs sm:text-sm ml-[11px] sm:ml-[13px] pb-0.5 sm:pb-0">
            {data.rating.toFixed(1)}
            <span className="text-black/60">/5</span>
          </span>
        </div>
        <div className="mb-5">
          <PriceTag price={data.price} discount={data.discount} className="text-2xl sm:text-[32px]" />
        </div>
        <p
          className={cn(
            "text-sm font-medium mb-3",
            data.outOfStock ? "text-red-600" : "text-green-700"
          )}
        >
          {data.outOfStock ? "Out of Stock" : "In Stock"}
        </p>
        {data.description && (
          <p className="text-sm sm:text-base text-black/60 mb-5">{data.description}</p>
        )}
        <AddToCardSection data={data} />
      </div>
    </div>
  );
};

export default Header;
