import React from "react";
import Rating from "../ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";
import PriceTag from "./PriceTag";
import ProductImageHover from "./ProductImageHover";

type ProductCardProps = {
  data: Product;
};

export const productUrl = (p: { id: number; title: string }) =>
  `/shop/product/${p.id}/${p.title.split(" ").join("-")}`;

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <Link href={productUrl(data)} className="flex flex-col items-start aspect-auto">
      <ProductImageHover
        category={data.category}
        className="relative bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden"
      >
        <Image
          src={data.srcUrl}
          width={295}
          height={298}
          className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
          alt={data.title}
          priority
        />
        {data.outOfStock && (
          <span className="absolute top-3 left-3 bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
            Out of Stock
          </span>
        )}
      </ProductImageHover>
      <strong className="text-black xl:text-xl">{data.title}</strong>
      <div className="flex items-end mb-1 xl:mb-2">
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          emptyClassName="fill-gray-50"
          size={19}
          readonly
        />
        <span className="text-black text-xs xl:text-sm ml-[11px] xl:ml-[13px] pb-0.5 xl:pb-0">
          {data.rating.toFixed(1)}
          <span className="text-black/60">/5</span>
        </span>
      </div>
      <PriceTag price={data.price} discount={data.discount} className="text-lg xl:text-2xl" />
    </Link>
  );
};

export default ProductCard;
