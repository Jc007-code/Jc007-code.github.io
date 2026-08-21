import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { pageContent } from "@/data/site";

export const metadata: Metadata = { title: "Professional Work" };

export default function WorkPage() {
  const content = pageContent.professionalWork;

  return (
    <>
      <PageHero {...content.hero} />
      <article className="case-study" id="gutter-guru">
        <div>
          <p className="eyebrow">{content.caseStudy.eyebrow}</p>
          <h2>{content.caseStudy.title}</h2>
          <p>{content.caseStudy.summary}</p>
        </div>
        <div className="case-note">
          <strong>{content.caseStudy.boundaryTitle}</strong>
          <p>{content.caseStudy.boundaryText}</p>
        </div>
      </article>
    </>
  );
}
