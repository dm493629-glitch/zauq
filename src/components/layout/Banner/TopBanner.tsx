"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { shopConfig } from "@/data/config";

const TopBanner = () => {
  const [open, setOpen] = useState(true);
  const { enabled, text, linkText, linkUrl } = shopConfig.topBanner;
  if (!enabled || !open) return null;

  return (
    <div className="bg-black text-white text-center py-2 px-2 sm:px-4 xl:px-0">
      <div className="relative max-w-frame mx-auto">
        <p className="text-xs sm:text-sm">
          {text}{" "}
          {linkText && (
            <Link href={linkUrl} className="underline font-medium">
              {linkText}
            </Link>
          )}
        </p>
        <Button
          variant="ghost"
          className="hover:bg-transparent absolute right-0 top-1/2 -translate-y-1/2 w-fit h-fit p-1 hidden sm:flex"
          size="icon"
          type="button"
          aria-label="close banner"
          onClick={() => setOpen(false)}
        >
          <Image priority src="/icons/times.svg" height={13} width={13} alt="close banner" />
        </Button>
      </div>
    </div>
  );
};

export default TopBanner;
