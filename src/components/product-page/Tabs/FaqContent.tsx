import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsData, FaqItem } from "@/data";

/** Used on product pages (product FAQs + general) and on the /faq page (general only). */
const FaqContent = ({ extra = [], title = "Frequently asked questions" }: { extra?: FaqItem[]; title?: string }) => {
  const faqs = [...extra, ...faqsData];
  return (
    <section>
      {title && (
        <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">{title}</h3>
      )}
      <Accordion type="single" collapsible>
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqContent;
