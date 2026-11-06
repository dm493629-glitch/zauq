"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { shopConfig } from "@/data/config";

/** Homepage hero: auto-rotating image slider. Slides come from data/config.ts -> hero.slides */
const Header = () => {
  const { slides, intervalMs } = shopConfig.hero;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), intervalMs);
    return () => clearInterval(t);
  }, [index, slides.length, intervalMs]); // restarting on index change resets the timer after a manual click

  if (slides.length === 0) return null;

  return (
    <header className="relative overflow-hidden bg-[#F2F0F1] h-[480px] md:h-[calc(100vh-90px)] md:min-h-[560px]">
      {slides.map((slide, i) => (
        <div
          key={i}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* PC only: blurred copy of the image fills the empty space beside the full picture */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            alt=""
            aria-hidden
            className="hidden md:block absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <picture>
            {slide.mobileImage && <source media="(max-width: 767px)" srcSet={slide.mobileImage} />}
            <img
              src={slide.image}
              alt={slide.title ?? `Slide ${i + 1}`}
              className="relative w-full h-full object-cover object-top md:object-contain md:object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </picture>
          {(slide.title || slide.subtitle || slide.buttonText) && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent">
              <div className="max-w-frame mx-auto h-full flex flex-col justify-center px-4 xl:px-0 text-white">
                {slide.title && (
                  <h2 className={cn(integralCF.className, "text-4xl lg:text-[64px] lg:leading-[64px] mb-4 max-w-[600px]")}>
                    {slide.title}
                  </h2>
                )}
                {slide.subtitle && (
                  <p className="text-sm lg:text-lg mb-6 lg:mb-8 max-w-[500px] text-white/90">{slide.subtitle}</p>
                )}
                {slide.buttonText && slide.buttonLink && (
                  <Link
                    href={slide.buttonLink}
                    className="w-fit bg-white text-black hover:bg-white/80 transition-all px-12 py-4 rounded-full font-medium"
                  >
                    {slide.buttonText}
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2.5 rounded-full transition-all",
                i === index ? "w-8 bg-white" : "w-2.5 bg-white/50"
              )}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
