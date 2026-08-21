import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { pageContent } from "@/data/site";

export const metadata: Metadata = { title: "Academic Archive" };

export default function AcademicPage() {
  const content = pageContent.academic;

  return (
    <>
      <PageHero {...content.hero} />
      <section className="placeholder">
        <span>{content.label}</span>
        <h2>{content.title}</h2>
        <p>{content.text}</p>
      </section>
    </>
  );
}
