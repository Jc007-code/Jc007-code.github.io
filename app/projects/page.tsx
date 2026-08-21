import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { pageContent, projects } from "@/data/site";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHero {...pageContent.projects.hero} />
      <section className="project-grid full">
        {projects.filter((project) => project.title !== "Gutter Guru").map((project) => (
          <div id={project.href.split("#")[1]} key={project.title}><ProjectCard project={project} /></div>
        ))}
      </section>
    </>
  );
}
