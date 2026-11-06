import Link from "next/link";
import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import Filters from "@/components/shop-page/filters";
import SortSelect from "@/components/shop-page/SortSelect";
import SearchBox from "@/components/common/SearchBox";
import { FiSliders } from "react-icons/fi";
import { allProductsData } from "@/data";
import ProductCard from "@/components/common/ProductCard";
import { filterProducts, getShopTitle, parseFilters, SearchParams } from "@/lib/shop";

export default function ShopPage({ searchParams }: { searchParams: SearchParams }) {
  const filters = parseFilters(searchParams);
  const products = filterProducts(allProductsData, filters);
  // `key` resets the filter form whenever the URL changes
  const filterKey = JSON.stringify(filters);

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        {/* Mobile search (desktop search is in the navbar) */}
        <SearchBox key={filters.q ?? ""} defaultValue={filters.q} className="md:hidden mb-5" />
        <div className="flex md:space-x-5 items-start">
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filters</span>
              <FiSliders className="text-2xl text-black/40" />
            </div>
            <Filters key={filterKey} initial={filters} />
          </div>
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl md:text-[32px]">{getShopTitle(filters)}</h1>
                <MobileFilters key={filterKey} initial={filters} />
              </div>
              <div className="flex flex-col sm:items-center sm:flex-row">
                <span className="text-sm md:text-base text-black/60 mr-3">
                  Showing {products.length} of {allProductsData.length} Products
                </span>
                <div className="flex items-center">
                  Sort by: <SortSelect filters={filters} />
                </div>
              </div>
            </div>
            {products.length > 0 ? (
              <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-black/60">
                <p className="mb-4">No products match these filters.</p>
                <Link href="/shop" className="underline text-black">
                  Clear filters
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
