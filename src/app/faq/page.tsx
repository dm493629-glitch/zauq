import type { Metadata } from "next";
import InfoPage from "@/components/common/InfoPage";
import FaqContent from "@/components/product-page/Tabs/FaqContent";
import { shopConfig } from "@/data";

export const metadata: Metadata = { title: `FAQs | ${shopConfig.brandName}` };

export default function FaqPage() {
  return (
    <InfoPage title="FAQs" subtitle="Answers to the questions we get asked the most.">
      <FaqContent title="" />
      <p className="text-sm text-black/60 mt-6">
        Didn&apos;t find your answer? Message us on{" "}
        <a
          href={`https://wa.me/${shopConfig.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black font-medium underline"
        >
          WhatsApp
        </a>
        .
      </p>
    </InfoPage>
  );
}
