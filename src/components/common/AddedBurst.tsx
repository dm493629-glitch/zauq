"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { categoryIcons } from "./ProductImageHover";

/**
 * Small celebration shown above the Add to Cart button.
 * Perfumes: bottle pops up and "sprays" mist. Others (watches): icon pops with sparkles.
 * Re-plays every time `trigger` changes (pass a counter that increases on each add).
 */
const AddedBurst = ({ category, trigger }: { category: string; trigger: number }) => {
  const [show, setShow] = useState(false);
  const Icon = categoryIcons[category] ?? ShoppingBag;
  const isSpray = category === "perfumes";

  useEffect(() => {
    if (!trigger) return;
    setShow(true);
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, [trigger]);

  // spray: mist drifts up-right from the nozzle; sparkle: dots fly out in a circle
  const particles = Array.from({ length: 8 }).map((_, i) => {
    if (isSpray) {
      const angle = (-70 + i * 9) * (Math.PI / 180);
      const dist = 26 + (i % 3) * 10;
      return { x: 10 + Math.cos(angle) * dist, y: -14 + Math.sin(angle) * dist, size: 4 + (i % 3) * 2 };
    }
    const angle = (i / 8) * Math.PI * 2;
    return { x: Math.cos(angle) * 30, y: Math.sin(angle) * 30, size: 5 };
  });

  return (
    <div className="pointer-events-none absolute left-1/2 -top-2 -translate-x-1/2 z-20">
      <AnimatePresence>
        {show && (
          <motion.div
            key={trigger}
            className="relative"
            initial={{ y: 10, scale: 0.4, opacity: 0 }}
            animate={{ y: -34, scale: 1, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-lg">
              <Icon className="w-5 h-5" strokeWidth={1.75} />
            </div>
            {particles.map((p, i) => (
              <motion.span
                key={i}
                className={isSpray ? "absolute rounded-full bg-sky-300/80" : "absolute rounded-full bg-[#C9A54C]"}
                style={{ width: p.size, height: p.size, left: "50%", top: "50%" }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                animate={{ x: p.x, y: p.y, opacity: [0, 1, 0], scale: isSpray ? 1.6 : 1 }}
                transition={{ duration: 0.8, delay: 0.15 + (isSpray ? i * 0.03 : 0), ease: "easeOut" }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddedBurst;
