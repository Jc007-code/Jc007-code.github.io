import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Open to meaningful technical work</p>
          <h1>I build useful systems at the intersection of <em>software, security, and automation.</em></h1>
          <p className="lede">I’m Jonathan Cagle, an Applied Computing professional who turns ambiguous problems into dependable tools, clearer workflows, and practical outcomes.</p>
          <div className="actions">
            <Link className="button primary" href="/projects">View selected work</Link>
            <Link className="button secondary" href="/about">More about me</Link>
          </div>
        </div>
        <aside className="terminal-card" aria-label="Jonathan's areas of focus">
          <div className="terminal-top"><span /><span /><span /><small>focus.json</small></div>
          <pre>{`{
  "craft": [
    "software development",
    "cybersecurity",
    "systems + networking",
    "automation"
  ],
  "approach": "learn → build → improve",
  "based_in": "Arizona"
}`}</pre>
        </aside>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2>Projects with a point of view.</h2></div>
          <Link href="/projects">See all projects →</Link>
        </div>
        <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </section>

      <section className="principles">
        <p className="eyebrow">How I work</p>
        <div className="principle-grid">
          <div><strong>01</strong><h3>Understand the real problem</h3><p>Start with context, constraints, and the person on the other side of the screen.</p></div>
          <div><strong>02</strong><h3>Make complexity legible</h3><p>Design systems and explanations that people can understand, trust, and maintain.</p></div>
          <div><strong>03</strong><h3>Ship, learn, improve</h3><p>Build a strong first version, test assumptions, and make the next decision with evidence.</p></div>
        </div>
      </section>
    </>
  );
}
