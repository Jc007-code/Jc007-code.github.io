import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { pageContent } from "@/data/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  const content = pageContent.about;

  return (
    <>
      <PageHero {...content.hero} />
      <section className="content-grid">
        <article>
          <h2>{content.sectionTitle}</h2>
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>
        <aside className="fact-card">
          <p className="eyebrow">{content.focusTitle}</p>
          <ul>{content.focusItems.map((item) => <li key={item}>{item}</li>)}</ul>
        </aside>
      </section>
    </>
  );
}
