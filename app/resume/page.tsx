import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { pageContent } from "@/data/site";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  const content = pageContent.resume;

  return (
    <>
      <PageHero {...content.hero} />
      <section className="placeholder">
        <span>{content.label}</span>
        <h2>{content.title}</h2>
        <p>{content.text}</p>
        <Link className="button primary" href="/contact">{content.action}</Link>
      </section>
    </>
  );
}
