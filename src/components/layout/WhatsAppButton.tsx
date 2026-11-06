"use client";

import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { shopConfig } from "@/data/config";

/** Floating WhatsApp chat button, bottom-right on every page. Settings in data/config.ts -> whatsappButton */
const WhatsAppButton = () => {
  const pathname = usePathname();
  const { enabled, message } = shopConfig.whatsappButton;
  if (!enabled) return null;

  // Product pages have a fixed "Add to Cart" bar at the bottom on mobile — sit above it
  const raised = pathname?.startsWith("/shop/product");
  const href = `https://wa.me/${shopConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={cn(
        "fixed right-4 md:right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 hover:bg-[#128C7E] transition-all",
        raised ? "bottom-24 md:bottom-6" : "bottom-5 md:bottom-6"
      )}
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
