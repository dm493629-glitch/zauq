"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { brandsData, brandLink } from "@/data";

const AUTOPLAY_MS = 2500; // time between automatic moves

/** Homepage brands strip: logos slide automatically, arrows move them by hand. Click opens the shop filtered by brand. */
const Brands = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: false });
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi || paused) return;
    // pauses while the mouse is over the strip, so arrows can be used comfortably
    const t = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [emblaApi, paused]);

  if (brandsData.length === 0) return null;

  // Repeat the list so the loop has enough slides to fill wide screens
  const items = brandsData.length < 8 ? [...brandsData, ...brandsData] : brandsData;

  return (
    <div
      className="bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-frame mx-auto relative flex items-center px-10 md:px-12">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous brands"
          className="absolute left-1 md:left-2 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {items.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 flex items-center justify-center"
              >
                <Link
                  href={brandLink(brand)}
                  aria-label={brand.name}
                  className="flex items-center justify-center py-5 md:py-11 px-3 opacity-90 hover:opacity-100 transition-opacity"
                >
                  {brand.logo ? (
                    <Image
                      src={brand.logo}
                      height={0}
                      width={0}
                      sizes="200px"
                      alt={brand.name}
                      className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9"
                    />
                  ) : (
                    <span className="font-brand text-white text-lg lg:text-2xl whitespace-nowrap">
                      {brand.name}
                    </span>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next brands"
          className="absolute right-1 md:right-2 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Brands;
