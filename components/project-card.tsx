import Link from "next/link";
import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <p className="eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <ul className="tags" aria-label={`${project.title} technologies`}>
        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <div className="card-footer">
        <span>{project.status}</span>
        <Link href={project.repository ?? project.href} aria-label={`View ${project.title}`}>Explore <span aria-hidden>↗</span></Link>
      </div>
    </article>
  );
}
