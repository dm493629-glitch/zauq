"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputGroup from "@/components/ui/input-group";
import { allProductsData, categoriesData } from "@/data";
import { formatPrice, getFinalPrice } from "@/lib/price";
import { cn } from "@/lib/utils";
import { productUrl } from "./ProductCard";

/** Live search: suggestions appear while typing (all data is already in the browser, so it's instant).
 *  Enter -> full results on /shop?q=... */
const SearchBox = ({ className, defaultValue = "" }: { className?: string; defaultValue?: string }) => {
  const router = useRouter();
  const [q, setQ] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLFormElement>(null);

  const term = q.trim().toLowerCase();
  const results = term
    ? allProductsData
        .filter((p) => {
          const cat = categoriesData.find((c) => c.slug === p.category)?.title ?? "";
          return `${p.title} ${p.brand ?? ""} ${cat}`.toLowerCase().includes(term);
        })
        .slice(0, 6)
    : [];

  // close when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    router.push(term ? `/shop?q=${encodeURIComponent(q.trim())}` : "/shop");
  };

  return (
    <form ref={boxRef} onSubmit={submit} className={cn("relative", className)} role="search">
      <InputGroup className="bg-[#F0F0F0]">
        <InputGroup.Text>
          <Image priority src="/icons/search.svg" height={20} width={20} alt="search" className="min-w-5 min-h-5" />
        </InputGroup.Text>
        <InputGroup.Input
          type="search"
          name="q"
          value={q}
          autoComplete="off"
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          placeholder="Search for products..."
          className="bg-transparent placeholder:text-black/40"
        />
      </InputGroup>

      {open && term && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-black/10 rounded-[20px] shadow-lg z-50 overflow-hidden">
          {results.length > 0 ? (
            <>
              {results.map((p) => (
                <Link
                  key={p.id}
                  href={productUrl(p)}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#F0F0F0] transition-colors"
                >
                  <Image
                    src={p.srcUrl}
                    width={44}
                    height={44}
                    alt={p.title}
                    className="w-11 h-11 rounded-lg object-cover bg-[#F0EEED]"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-black truncate">{p.title}</p>
                    <p className="text-xs text-black/60">
                      {formatPrice(getFinalPrice(p.price, p.discount))}
                      {p.outOfStock && <span className="text-red-600 ml-2">Out of stock</span>}
                    </p>
                  </div>
                </Link>
              ))}
              <button
                type="submit"
                className="w-full text-left px-4 py-3 text-sm font-medium border-t border-black/10 hover:bg-[#F0F0F0]"
              >
                See all results for &quot;{q.trim()}&quot; →
              </button>
            </>
          ) : (
            <p className="px-4 py-3 text-sm text-black/60">No products found for &quot;{q.trim()}&quot;</p>
          )}
        </div>
      )}
    </form>
  );
};

export default SearchBox;
