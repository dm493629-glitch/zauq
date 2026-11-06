import { shopConfig } from "@/data/config";
import { Discount } from "@/types/product.types";

/** Price after discount: percentage wins, otherwise fixed amount. */
export const getFinalPrice = (price: number, discount: Discount): number => {
  if (discount.percentage > 0)
    return Math.round(price - (price * discount.percentage) / 100);
  if (discount.amount > 0) return Math.max(0, Math.round(price - discount.amount));
  return price;
};

/** 12500 -> "PKR 12,500" */
export const formatPrice = (value: number): string =>
  `${shopConfig.currency} ${Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

/** Delivery fee for a city, applying the free-delivery rule from config. */
export const getShipping = (cityValue: string, orderTotal: number) => {
  const city = shopConfig.cities.find((c) => c.value === cityValue) ?? shopConfig.cities[0];
  const { threshold, cities } = shopConfig.freeDelivery;
  const cityEligible = cities.length === 0 || cities.includes(city.value);
  const free = threshold > 0 && cityEligible && orderTotal >= threshold;
  return {
    city,
    fee: free ? 0 : city.fee,
    free,
    cityEligible,
    remaining: threshold > 0 && cityEligible ? Math.max(0, threshold - orderTotal) : 0,
  };
};

/** e.g. "Karachi" or "all cities" — for messages like "Free delivery in Karachi..." */
export const freeDeliveryCitiesLabel = () => {
  const { cities } = shopConfig.freeDelivery;
  if (cities.length === 0) return "all cities";
  return shopConfig.cities
    .filter((c) => cities.includes(c.value))
    .map((c) => c.label)
    .join(", ");
};
