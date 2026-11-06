import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import InfoPage from "@/components/common/InfoPage";
import { cn } from "@/lib/utils";
import { getPolicy, policiesData, shopConfig } from "@/data";

export const generateStaticParams = () => policiesData.map((p) => ({ slug: p.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => ({
  title: `${getPolicy(params.slug)?.title ?? "Policy"} | ${shopConfig.brandName}`,
});

export default function PolicyPage({ params }: { params: { slug: string } }) {
  const policy = getPolicy(params.slug);
  if (!policy) notFound();

  const aside = (
    <nav className="flex flex-col">
      <span className="font-bold text-black text-xl mb-4">Policies</span>
      {policiesData.map((p) => (
        <Link
          key={p.slug}
          href={`/policies/${p.slug}`}
          className={cn(
            "py-2 text-black/60 hover:text-black transition-colors",
            p.slug === policy.slug && "text-black font-bold"
          )}
        >
          {p.title}
        </Link>
      ))}
    </nav>
  );

  return (
    <InfoPage title={policy.title} subtitle={`Last updated: ${policy.updated}`} aside={aside}>
      {policy.intro && <p className="text-black/70 mb-6 md:text-lg">{policy.intro}</p>}
      <div className="space-y-6 md:space-y-8">
        {policy.sections.map((s, i) => (
          <section key={i}>
            {s.heading && (
              <h2 className="text-lg md:text-xl font-bold text-black mb-3">{s.heading}</h2>
            )}
            {s.paragraphs?.map((p, j) => (
              <p key={j} className="text-black/60 leading-7 mb-3">
                {p}
              </p>
            ))}
            {s.points && (
              <ul className="list-disc pl-5 space-y-2 text-black/60 leading-7">
                {s.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
      <hr className="border-t-black/10 my-6 md:my-8" />
      <p className="text-sm text-black/60">
        Questions? Message us on{" "}
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
