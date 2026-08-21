import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { pageContent } from "@/data/site";

export const metadata: Metadata = { title: "Academic Archive" };

export default function AcademicPage() {
  const content = pageContent.academic;

  return (
    <>
      <PageHero {...content.hero} />
      <section className="academic-feature">
        <div className="academic-summary">
          <p className="eyebrow">{content.label}</p>
          <h2>{content.title}</h2>
          <p>{content.text}</p>
          <p className="academic-credit">{content.collaborators}</p>
          <Link className="button primary" href={content.repositoryUrl}>{content.repositoryLabel} ↗</Link>
        </div>
        <div className="academic-documents">
          {content.documents.map((document) => (
            <Link className="academic-document" href={document.href} key={document.label}>
              <span>PDF</span>
              <div><strong>{document.label}</strong><small>{document.detail}</small></div>
              <b aria-hidden>↗</b>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
