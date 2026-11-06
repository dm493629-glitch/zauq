import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { categoriesData } from "@/data";

/** Homepage "Browse by category" — cards come from data/categories.ts */
const DressStyle = () => {
  return (
    <div className="px-4 xl:px-0">
      <section className="max-w-frame mx-auto bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center">
        <motion.h2
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([integralCF.className, "text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14"])}
        >
          BROWSE BY CATEGORY
        </motion.h2>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
        >
          {categoriesData.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop?category=${cat.slug}`}
              style={cat.image ? { backgroundImage: `url('${cat.image}')` } : undefined}
              className="w-full h-[190px] md:h-[289px] rounded-[20px] bg-white bg-top bg-no-repeat bg-cover text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 text-white flex items-end [-webkit-text-stroke:1.5px_black] [paint-order:stroke_fill] [text-shadow:0_0_6px_rgba(0,0,0,0.6)]"
            >
              {cat.title}
            </Link>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default DressStyle;
