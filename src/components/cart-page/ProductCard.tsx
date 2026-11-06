"use client";

import React from "react";
import { PiTrashFill } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import CartCounter from "@/components/ui/CartCounter";
import { Button } from "../ui/button";
import {
  addToCart,
  CartItem,
  remove,
  removeCartItem,
} from "@/lib/features/carts/cartsSlice";
import { useAppDispatch } from "@/lib/hooks/redux";
import PriceTag from "@/components/common/PriceTag";

type ProductCardProps = {
  data: CartItem;
};

const ProductCard = ({ data }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const href = `/shop/product/${data.id}/${data.name.split(" ").join("-")}`;
  const size = data.size ?? data.attributes[0];
  const color = data.color ?? data.attributes[1];
  const removeAll = () =>
    dispatch(remove({ id: data.id, attributes: data.attributes, quantity: data.quantity }));

  return (
    <div className="flex items-start space-x-4">
      <Link
        href={href}
        className="bg-[#F0EEED] rounded-lg w-full min-w-[100px] max-w-[100px] sm:max-w-[124px] aspect-square overflow-hidden"
      >
        <Image
          src={data.srcUrl}
          width={124}
          height={124}
          className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
          alt={data.name}
          priority
        />
      </Link>
      <div className="flex w-full self-stretch flex-col">
        <div className="flex items-center justify-between">
          <Link href={href} className="text-black font-bold text-base xl:text-xl">
            {data.name}
          </Link>
          <Button variant="ghost" size="icon" className="h-5 w-5 md:h-9 md:w-9" onClick={removeAll}>
            <PiTrashFill className="text-xl md:text-2xl text-red-600" />
          </Button>
        </div>
        <div className="mb-auto -mt-1 text-xs md:text-sm">
          {size && (
            <div>
              <span className="text-black mr-1">Size:</span>
              <span className="text-black/60">{size}</span>
            </div>
          )}
          {color && (
            <div>
              <span className="text-black mr-1">Color:</span>
              <span className="text-black/60">{color}</span>
            </div>
          )}
        </div>
        <div className="flex items-center flex-wrap justify-between gap-2">
          <PriceTag price={data.price} discount={data.discount} className="text-lg xl:text-2xl" />
          <CartCounter
            initialValue={data.quantity}
            onAdd={() => dispatch(addToCart({ ...data, quantity: 1 }))}
            onRemove={() =>
              data.quantity === 1
                ? removeAll()
                : dispatch(removeCartItem({ id: data.id, attributes: data.attributes }))
            }
            isZeroDelete
            className="px-5 py-3 max-h-8 md:max-h-10 min-w-[105px] max-w-[105px] sm:max-w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
