"use client";

import CartCounter from "@/components/ui/CartCounter";
import React, { useState } from "react";
import { Product } from "@/types/product.types";
import { useAppDispatch } from "@/lib/hooks/redux";
import { addToCart } from "@/lib/features/carts/cartsSlice";
import { cn } from "@/lib/utils";
import { IoMdCheckmark } from "react-icons/io";
import AddedBurst from "@/components/common/AddedBurst";

const AddToCardSection = ({ data }: { data: Product }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const [color, setColor] = useState(data.colors?.[0]?.name);
  const [size, setSize] = useState(data.sizes?.[0]);
  const [added, setAdded] = useState(false);
  const [burst, setBurst] = useState(0);

  const handleAdd = () => {
    if (data.outOfStock) return;
    dispatch(
      addToCart({
        id: data.id,
        name: data.title,
        srcUrl: data.srcUrl,
        price: data.price,
        attributes: [size ?? "", color ?? ""],
        size,
        color,
        discount: data.discount,
        quantity,
      })
    );
    setAdded(true);
    setBurst((b) => b + 1);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      {data.colors && data.colors.length > 0 && (
        <>
          <hr className="h-[1px] border-t-black/10 mb-5" />
          <div className="flex flex-col">
            <span className="text-sm sm:text-base text-black/60 mb-4">
              Select Color: <span className="text-black">{color}</span>
            </span>
            <div className="flex items-center flex-wrap gap-3 sm:gap-4">
              {data.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  title={c.name}
                  aria-label={c.name}
                  style={{ backgroundColor: c.code }}
                  className="rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"
                  onClick={() => setColor(c.name)}
                >
                  {color === c.name && (
                    <IoMdCheckmark className="text-base text-white mix-blend-difference" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
      {data.sizes && data.sizes.length > 0 && (
        <>
          <hr className="h-[1px] border-t-black/10 my-5" />
          <div className="flex flex-col">
            <span className="text-sm sm:text-base text-black/60 mb-4">Choose Size</span>
            <div className="flex items-center flex-wrap gap-2 lg:gap-3">
              {data.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={cn([
                    "bg-[#F0F0F0] px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base rounded-full max-h-[46px]",
                    size === s && "bg-black font-medium text-white",
                  ])}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
      <hr className="hidden md:block h-[1px] border-t-black/10 my-5" />
      <div className="fixed md:relative w-full bg-white border-t md:border-none border-black/5 bottom-0 left-0 p-4 md:p-0 z-10 flex items-center justify-between sm:justify-start md:justify-center">
        <CartCounter onAdd={setQuantity} onRemove={setQuantity} />
        <div className="relative w-full ml-3 sm:ml-5">
          <AddedBurst category={data.category} trigger={burst} />
          <button
            type="button"
            disabled={data.outOfStock}
            className="bg-black w-full rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all disabled:bg-black/30 disabled:cursor-not-allowed"
            onClick={handleAdd}
          >
            {data.outOfStock ? "Out of Stock" : added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddToCardSection;
