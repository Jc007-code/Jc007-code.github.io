import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() { return <><PageHero eyebrow="Contact" title="Let’s build something useful." intro="For opportunities, collaboration, or a thoughtful technical conversation, GitHub is the best public starting point." /><section className="contact-card"><div><h2>Find me online</h2><p>More contact options can be added once Jonathan chooses which details to publish.</p></div><Link className="button primary" href="https://github.com/Jc007-code">Visit GitHub profile ↗</Link></section></>; }
