"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { IoMdCheckmark } from "react-icons/io";
import { cn } from "@/lib/utils";
import { filtersToQuery, getFilterOptions, sameBrand, ShopFilters } from "@/lib/shop";
import { shopConfig } from "@/data/config";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <>
    <hr className="border-t-black/10" />
    <Accordion type="single" collapsible defaultValue={id}>
      <AccordionItem value={id} className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          {title}
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0" contentClassName="overflow-visible">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </>
);

const toggle = (arr: string[], v: string) =>
  arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];

const Filters = ({ initial, onApply }: { initial: ShopFilters; onApply?: () => void }) => {
  const router = useRouter();
  const [f, setF] = useState<ShopFilters>(initial);
  const opts = getFilterOptions(f.category);
  const set = (patch: Partial<ShopFilters>) => setF((prev) => ({ ...prev, ...patch }));

  const apply = () => {
    router.push(`/shop${filtersToQuery(f)}`);
    onApply?.();
  };
  const reset = () => {
    router.push("/shop");
    onApply?.();
  };

  return (
    <>
      <Section id="filter-category" title="Categories">
        <div className="flex flex-col text-black/60 space-y-0.5">
          {opts.categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() =>
                // switching category clears color/size picks that may not exist there
                set({ category: f.category === c.slug ? undefined : c.slug, colors: [], sizes: [] })
              }
              className={cn(
                "flex items-center justify-between py-2 text-left",
                f.category === c.slug && "text-black font-bold"
              )}
            >
              {c.title} <span className="text-sm">({c.count})</span>
            </button>
          ))}
        </div>
      </Section>

      {opts.brands.length > 0 && (
        <Section id="filter-brand" title="Brands">
          <div className="flex flex-col space-y-2 text-black/70">
            {opts.brands.map((b) => {
              const checked = f.brands.some((x) => sameBrand(x, b.name));
              return (
                <label key={b.name} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      set({
                        brands: checked
                          ? f.brands.filter((x) => !sameBrand(x, b.name))
                          : [...f.brands, b.name],
                      })
                    }
                    className="w-4 h-4 accent-black"
                  />
                  <span className="flex-1">{b.name}</span>
                  <span className="text-sm text-black/60">({b.count})</span>
                </label>
              );
            })}
          </div>
        </Section>
      )}

      <Section id="filter-show" title="Show">
        <div className="flex flex-col space-y-2 text-black/70">
          {(
            [
              ["sale", "On Sale"],
              ["isNew", "New Arrivals"],
              ["inStock", "In Stock only"],
            ] as const
          ).map(([key, label]) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={f[key]}
                onChange={(e) => set({ [key]: e.target.checked })}
                className="w-4 h-4 accent-black"
              />
              {label}
            </label>
          ))}
        </div>
      </Section>

      {opts.maxPrice > opts.minPrice && (
        <Section id="filter-price" title="Price">
          <Slider
            key={`${opts.minPrice}-${opts.maxPrice}`}
            defaultValue={[f.min ?? opts.minPrice, f.max ?? opts.maxPrice]}
            min={opts.minPrice}
            max={opts.maxPrice}
            step={100}
            label={`${shopConfig.currency} `}
            onValueCommit={(v) => set({ min: v[0], max: v[1] })}
          />
          <div className="mb-8" />
        </Section>
      )}

      {opts.colors.length > 0 && (
        <Section id="filter-colors" title="Colors">
          <div className="flex flex-wrap gap-2.5">
            {opts.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                title={c.name}
                aria-label={c.name}
                style={{ backgroundColor: c.code }}
                className="rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"
                onClick={() => set({ colors: toggle(f.colors, c.name) })}
              >
                {f.colors.includes(c.name) && (
                  <IoMdCheckmark className="text-base text-white mix-blend-difference" />
                )}
              </button>
            ))}
          </div>
        </Section>
      )}

      {opts.sizes.length > 0 && (
        <Section id="filter-size" title="Size">
          <div className="flex items-center flex-wrap">
            {opts.sizes.map((s) => (
              <button
                key={s}
                type="button"
                className={cn([
                  "bg-[#F0F0F0] m-1 px-5 py-2.5 text-sm rounded-full max-h-[39px]",
                  f.sizes.includes(s) && "bg-black font-medium text-white",
                ])}
                onClick={() => set({ sizes: toggle(f.sizes, s) })}
              >
                {s}
              </button>
            ))}
          </div>
        </Section>
      )}

      <Button
        type="button"
        onClick={apply}
        className="bg-black w-full rounded-full text-sm font-medium py-4 h-12"
      >
        Apply Filter
      </Button>
      <button type="button" onClick={reset} className="w-full text-sm text-black/60 underline">
        Clear all filters
      </button>
    </>
  );
};

export default Filters;
