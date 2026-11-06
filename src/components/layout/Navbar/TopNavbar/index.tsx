import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import SearchBox from "@/components/common/SearchBox";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";
import { shopConfig } from "@/data/config";

// Convert the simple menu from data/config.ts into the shape the menu components expect
const data: NavMenu = shopConfig.navMenu.map((item, i) => ({
  id: i + 1,
  label: item.label,
  url: item.url,
  type: item.children?.length ? "MenuList" : "MenuItem",
  children: (item.children ?? []).map((c, j) => ({
    id: (i + 1) * 10 + j,
    label: c.label,
    url: c.url,
    description: c.description,
  })),
}));

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link href="/" className="font-brand text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10">
            {shopConfig.brandName}
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Live search with suggestions; Enter -> /shop?q=... */}
        <SearchBox className="hidden md:block flex-1 mr-3 lg:mr-10" />
        <div className="flex items-center">
          <Link href="/shop" className="block md:hidden mr-[14px] p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
          <CartBtn />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
