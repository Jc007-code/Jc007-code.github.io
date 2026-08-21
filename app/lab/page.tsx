import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { pageContent } from "@/data/site";

export const metadata: Metadata = { title: "Home Lab & Systems" };

export default function LabPage() {
  const content = pageContent.lab;

  return (
    <>
      <PageHero {...content.hero} />
      <section className="three-grid">
        {content.items.map(([title, text]) => (
          <article key={title}><h2>{title}</h2><p>{text}</p><span>{content.status}</span></article>
        ))}
      </section>
    </>
  );
}
