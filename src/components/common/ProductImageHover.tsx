"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Eye, SprayCan, Watch } from "lucide-react";
import { cn } from "@/lib/utils";

// Icon per category slug (data/categories.ts). Unknown categories fall back to an eye.
export const categoryIcons: Record<string, React.ElementType> = {
  watches: Watch,
  perfumes: SprayCan,
};

/**
 * Wraps a product image. On desktop (real mouse), a round "View" badge with the
 * category icon follows the pointer while hovering. Disabled on phones/touch screens.
 */
const ProductImageHover = ({
  category,
  className,
  children,
}: {
  category: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 500, damping: 35 });
  const sy = useSpring(y, { stiffness: 500, damping: 35 });
  const Icon = categoryIcons[category] ?? Eye;

  useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const track = (e: React.MouseEvent, jump = false) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
    if (jump) {
      sx.jump(e.clientX - r.left);
      sy.jump(e.clientY - r.top);
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className, enabled && "cursor-none")}
      onMouseEnter={(e) => {
        if (!enabled) return;
        track(e, true);
        setHover(true);
      }}
      onMouseMove={(e) => enabled && track(e)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      <AnimatePresence>
        {enabled && hover && (
          <motion.div
            style={{ x: sx, y: sy }}
            className="pointer-events-none absolute left-0 top-0 z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="-translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-black/90 text-white flex flex-col items-center justify-center gap-1 shadow-lg">
              <motion.span
                animate={{ rotate: [0, -12, 12, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.6 }}
              >
                <Icon className="w-6 h-6" strokeWidth={1.75} />
              </motion.span>
              <span className="text-[11px] font-medium tracking-widest uppercase">View</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductImageHover;
