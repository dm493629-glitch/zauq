import React from "react";
import { Product } from "@/types/product.types";
import { categoriesData } from "@/data";

const ProductDetailsContent = ({ data }: { data: Product }) => {
  const category = categoriesData.find((c) => c.slug === data.category);
  const specs = [
    ...(data.brand ? [{ label: "Brand", value: data.brand }] : []),
    ...(category ? [{ label: "Category", value: category.title }] : []),
    ...(data.colors?.length
      ? [{ label: "Colors", value: data.colors.map((c) => c.name).join(", ") }]
      : []),
    ...(data.sizes?.length ? [{ label: "Sizes", value: data.sizes.join(", ") }] : []),
    ...(data.specs ?? []),
  ];

  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
        Product specifications
      </h3>
      {data.description && <p className="text-black/60 mb-4">{data.description}</p>}
      {specs.map((item, i) => (
        <div className="grid grid-cols-3" key={i}>
          <p className="text-sm py-3 leading-7 lg:py-4 pr-2 text-neutral-500">{item.label}</p>
          <p className="col-span-2 py-3 lg:py-4 border-b text-sm leading-7 text-neutral-800 font-medium">
            {item.value}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ProductDetailsContent;
