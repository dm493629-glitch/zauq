"use client";

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { filtersToQuery, ShopFilters, SortKey } from "@/lib/shop";

const SortSelect = ({ filters }: { filters: ShopFilters }) => {
  const router = useRouter();
  return (
    <Select
      value={filters.sort}
      onValueChange={(v) => router.push(`/shop${filtersToQuery({ ...filters, sort: v as SortKey })}`)}
    >
      <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="popular">Most Popular</SelectItem>
        <SelectItem value="newest">Newest</SelectItem>
        <SelectItem value="low-price">Low Price</SelectItem>
        <SelectItem value="high-price">High Price</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortSelect;
