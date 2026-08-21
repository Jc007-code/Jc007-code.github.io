import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { homeContent, projects } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />{homeContent.hero.eyebrow}</p>
          <h1>{homeContent.hero.titleLead} <em>{homeContent.hero.titleAccent}</em></h1>
          <p className="lede">{homeContent.hero.intro}</p>
          <div className="actions">
            <Link className="button primary" href={homeContent.hero.primaryAction[1]}>{homeContent.hero.primaryAction[0]}</Link>
            <Link className="button secondary" href={homeContent.hero.secondaryAction[1]}>{homeContent.hero.secondaryAction[0]}</Link>
          </div>
        </div>
        <aside className="identity-card" aria-label="Jonathan's areas of focus">
          <div className="identity-card-inner">
            <p className="eyebrow">{homeContent.fieldNotes.eyebrow}</p>
            <p className="greek-motto" lang="el">{homeContent.fieldNotes.greekMotto}</p>
            <p className="motto-translation">{homeContent.fieldNotes.mottoTranslation}</p>
            <dl className="identity-list">
              {homeContent.fieldNotes.items.map(([term, detail]) => (
                <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>
              ))}
            </dl>
          </div>
        </aside>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div><p className="eyebrow">{homeContent.selectedWork.eyebrow}</p><h2>{homeContent.selectedWork.title}</h2></div>
          <Link href="/projects">{homeContent.selectedWork.linkLabel} →</Link>
        </div>
        <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </section>

      <section className="principles">
        <p className="eyebrow">{homeContent.principles.eyebrow}</p>
        <div className="principle-grid">
          {homeContent.principles.items.map((item) => (
            <div key={item.number}><strong>{item.number}</strong><h3>{item.title}</h3><p>{item.text}</p></div>
          ))}
        </div>
      </section>
    </>
  );
}
