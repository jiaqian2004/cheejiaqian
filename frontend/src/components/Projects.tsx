import { siteContent } from '../content/siteContent'
import Link from './Link'
import ProjectLinks from './ProjectLinks'
import ProjectStack from './ProjectStack'
import './Projects.css'

// The home page only previews the first few projects; the rest live on /projects.
const HOME_PROJECT_LIMIT = 3

export default function Projects() {
  const projects = siteContent.projects.slice(0, HOME_PROJECT_LIMIT)

  return (
    <section id="projects" className="projects">
      <div className="section-inner">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <Link className="pill-btn" to="/projects">
            View all projects →
          </Link>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article key={project.slug} className="card project-card">
              {project.image && (
                <img
                  className="project-image"
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  decoding="async"
                />
              )}
              <h3>{project.title}</h3>
              <ProjectStack stack={project.stack} />
              <p className="project-description">{project.description}</p>
              <Link className="project-readmore" to={`/projects#${project.slug}`}>
                Read more →
              </Link>
              <ProjectLinks links={project.links} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
