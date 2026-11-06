import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

/** Shared layout for text pages (policies, FAQ) so they match the site design. */
const InfoPage = ({
  title,
  subtitle,
  aside,
  children,
}: {
  title: string;
  subtitle?: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <main className="pb-20">
    <div className="max-w-frame mx-auto px-4 xl:px-0">
      <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
      <Breadcrumb className="mb-5 sm:mb-9">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1
        className={cn(
          integralCF.className,
          "font-bold text-[32px] md:text-[40px] leading-tight text-black uppercase mb-2"
        )}
      >
        {title}
      </h1>
      {subtitle && <p className="text-sm text-black/50 mb-6 md:mb-8">{subtitle}</p>}
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        <div className="w-full p-5 md:p-8 rounded-[20px] border border-black/10">{children}</div>
        {aside && (
          <aside className="w-full lg:max-w-[295px] p-5 md:px-6 rounded-[20px] border border-black/10 lg:sticky lg:top-24">
            {aside}
          </aside>
        )}
      </div>
    </div>
  </main>
);

export default InfoPage;
