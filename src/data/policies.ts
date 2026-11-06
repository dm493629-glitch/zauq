/**
 * Policy pages. Each entry becomes a page at /policies/<slug> and a link in the footer.
 * Edit the text freely. Add a new object to create a new policy page.
 * NOTE: this is starter text — review it before going live.
 */

export type PolicySection = { heading?: string; paragraphs?: string[]; points?: string[] };

export type Policy = {
  slug: string;
  title: string;
  updated: string;
  intro?: string;
  sections: PolicySection[];
};

export const policiesData: Policy[] = [
  {
    slug: "return-exchange",
    title: "Return & Exchange",
    updated: "November 4, 2026",
    intro: "We want you to love your purchase. If something isn't right, we're here to help.",
    sections: [
      {
        heading: "Eligibility",
        points: [
          "Report any issue within 3 days of receiving your order.",
          "Items must be unused, in original packaging, with all tags and boxes.",
          "Perfumes can only be returned if sealed and unopened, or if received damaged or leaking.",
        ],
      },
      {
        heading: "How to request a return or exchange",
        points: [
          "Message us on WhatsApp with your Order ID and photos/video of the item.",
          "Our team will confirm eligibility and share the return process.",
        ],
      },
      {
        heading: "Refunds",
        paragraphs: [
          "Once the returned item is received and checked, refunds are sent by bank transfer, JazzCash or Easypaisa within 5–7 working days. Delivery charges are non-refundable unless the item was damaged or incorrect.",
        ],
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    updated: "November 4, 2026",
    intro: "Your privacy matters to us. This page explains what information we collect and how we use it.",
    sections: [
      {
        heading: "Information we collect",
        points: [
          "Name, phone/WhatsApp number, email, city and delivery address you enter at checkout.",
          "Your order details (products, quantities, payment method).",
        ],
      },
      {
        heading: "How we use it",
        points: [
          "To confirm, process and deliver your order.",
          "To contact you about your order on WhatsApp or phone.",
        ],
      },
      {
        heading: "Sharing",
        paragraphs: [
          "We only share your name, number and address with our courier partner to deliver your order. We never sell your information.",
        ],
      },
      {
        heading: "Storage",
        paragraphs: [
          "Your cart is saved only in your own browser. Order details are sent to us through WhatsApp when you place an order.",
        ],
      },
    ],
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    updated: "November 4, 2026",
    intro: "By using this website and placing an order, you agree to the following terms.",
    sections: [
      {
        heading: "Orders",
        points: [
          "An order is confirmed only after we confirm it with you on WhatsApp.",
          "We may cancel an order if a product is out of stock or details are incorrect.",
        ],
      },
      {
        heading: "Pricing & payment",
        points: [
          "All prices are in PKR and may change without notice.",
          "We accept Cash on Delivery and Online Bank Transfer. For bank transfer, orders are processed after payment is verified.",
        ],
      },
      {
        heading: "Delivery",
        paragraphs: [
          "Delivery times are estimates and may vary by city and courier. Delivery charges are shown at checkout.",
        ],
      },
      {
        heading: "Product images",
        paragraphs: [
          "We try to show products accurately, but colors may look slightly different depending on your screen.",
        ],
      },
    ],
  },
  {
    slug: "cancellation-policy",
    title: "Cancellation Policy",
    updated: "November 4, 2026",
    sections: [
      {
        heading: "Before dispatch",
        paragraphs: [
          "You can cancel your order free of charge any time before it is dispatched. Just message us on WhatsApp with your Order ID.",
        ],
      },
      {
        heading: "After dispatch",
        paragraphs: [
          "Once an order is dispatched it cannot be cancelled. You may request a return under our Return & Exchange policy.",
        ],
      },
      {
        heading: "Prepaid orders",
        paragraphs: [
          "If you paid by bank transfer and cancel before dispatch, the full amount is refunded within 5–7 working days.",
        ],
      },
    ],
  },
];

export const getPolicy = (slug: string) => policiesData.find((p) => p.slug === slug);
