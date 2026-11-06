import { cn } from "@/lib/utils";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaXTwitter,
  FaSnapchat,
} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
// import NewsLetterSection from "./NewsLetterSection";
import LayoutSpacing from "./LayoutSpacing";
import { shopConfig, SocialPlatform } from "@/data/config";
import { policiesData } from "@/data/policies";

const socialIcons: Record<SocialPlatform, React.ReactNode> = {
  instagram: <FaInstagram />,
  facebook: <FaFacebookF />,
  tiktok: <FaTiktok />,
  whatsapp: <FaWhatsapp />,
  youtube: <FaYoutube />,
  twitter: <FaXTwitter />,
  snapchat: <FaSnapchat />,
  // Daraz has no icon font, so we use the image from /public/icons
  // eslint-disable-next-line @next/next/no-img-element
  daraz: <img src="/icons/daraz.webp" alt="Daraz" width={16} height={16} className="block w-4 h-4 min-w-4 rounded-[3px] object-contain" />,
};

const Footer = () => {
  const { brandName, tagline, socials, paymentBadges, copyright, credit } = shopConfig;
  const footerLinks = [
    ...shopConfig.footerLinks,
    {
      title: "Policies",
      links: policiesData.map((p) => ({ label: p.title, url: `/policies/${p.slug}` })),
    },
  ];
  return (
    <footer className="mt-10">
      {/* Newsletter disabled for now — uncomment (and the import above) to bring it back.
      <div className="relative">
        <div className="absolute bottom-0 w-full h-1/2 bg-[#F0F0F0]"></div>
        <div className="px-4">
          <NewsLetterSection />
        </div>
      </div>
      */}
      <div className="pt-8 md:pt-[50px] bg-[#F0F0F0] px-4 pb-4">
        <div className="max-w-frame mx-auto">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            <div className="flex flex-col lg:col-span-4 lg:max-w-[280px]">
              <h1 className="font-brand text-[28px] lg:text-[32px] mb-6">{brandName}</h1>
              <p className="text-black/60 text-sm mb-9">{tagline}</p>
              <div className="flex items-center">
                {socials.map((social) => (
                  <Link
                    href={social.url}
                    key={social.platform}
                    target="_blank"
                    aria-label={social.platform}
                    className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5"
                  >
                    {socialIcons[social.platform]}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-8 lg:pl-10 gap-x-4">
              {footerLinks.map((group) => (
                <section className="flex flex-col mt-5" key={group.title}>
                  <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
                    {group.title}
                  </h3>
                  {group.links.map((link) => (
                    <Link
                      href={link.url}
                      key={link.label}
                      className="text-black/60 text-sm md:text-base mb-4 w-fit"
                    >
                      {link.label}
                    </Link>
                  ))}
                </section>
              ))}
            </div>
          </nav>

          <hr className="h-[1px] border-t-black/10 mb-6" />
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-2">
            <div className="text-sm text-center sm:text-left text-black/60 mb-4 sm:mb-0 sm:mr-1">
              <p>
                © {new Date().getFullYear()} {copyright}
              </p>
              {credit && (
                <p className="mt-1">
                  {credit.text}{" "}
                  <Link
                    href={credit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-black underline hover:text-black/70"
                  >
                    {credit.name}
                  </Link>
                </p>
              )}
            </div>
            <div className="flex items-center flex-wrap justify-center gap-2">
              {paymentBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={cn(
                    "h-[30px] min-w-[46px] px-2 rounded-[5px] border border-[#D6DCE5] bg-white flex items-center justify-center text-[11px] font-medium"
                  )}
                >
                  {badge.logo ? (
                    <Image src={badge.logo} width={40} height={20} alt={badge.name} className="max-h-[18px] w-auto" />
                  ) : (
                    badge.name
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;
