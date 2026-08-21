import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
export const metadata: Metadata = { title: "Academic Archive" };
export default function AcademicPage() { return <><PageHero eyebrow="Academic archive" title="Coursework will live here—later." intro="This section is intentionally reserved for selected academic work after the flagship portfolio is established." /><section className="placeholder"><span>Archive placeholder</span><h2>Strong work first. Academic depth second.</h2><p>Future additions will be curated, contextualized, and organized by skill—not uploaded as an undifferentiated course dump.</p></section></>; }
