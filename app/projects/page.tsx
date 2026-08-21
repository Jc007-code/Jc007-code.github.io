import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/site";
export const metadata: Metadata = { title: "Projects" };
export default function ProjectsPage() { return <><PageHero eyebrow="Projects" title="Selected builds and experiments." intro="A growing collection of products, tools, and technical explorations. Detailed write-ups, demos, and approved source links will be added as each project is prepared for publication." /><section className="project-grid full">{projects.filter((p) => p.title !== "Gutter Guru").map((p) => <div id={p.href.split("#")[1]} key={p.title}><ProjectCard project={p} /></div>)}</section></>; }
