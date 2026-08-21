import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { pageContent, siteContent } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const content = pageContent.contact;

  return (
    <>
      <PageHero {...content.hero} />
      <section className="contact-card">
        <div><h2>{content.title}</h2><p>{content.text}</p></div>
        <Link className="button primary" href={siteContent.githubUrl}>{content.action} ↗</Link>
      </section>
    </>
  );
}
