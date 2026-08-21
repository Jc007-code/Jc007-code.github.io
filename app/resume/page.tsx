import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
export const metadata: Metadata = { title: "Resume" };
export default function ResumePage() { return <><PageHero eyebrow="Resume" title="Experience at a glance." intro="A concise resume will be added here after the public details and final document are reviewed." /><section className="placeholder"><span>Resume placeholder</span><h2>Want to start a conversation?</h2><p>Until the final resume is published, the projects and professional-work sections provide the clearest picture of Jonathan’s work.</p><Link className="button primary" href="/contact">Get in touch</Link></section></>; }
