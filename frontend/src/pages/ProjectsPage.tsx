import ProjectLinks from '../components/ProjectLinks'
import ProjectStack from '../components/ProjectStack'
import { siteContent } from '../content/siteContent'
import './ProjectsPage.css'

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <div className="section-inner">
        <h1 className="section-title">
          All <span className="gradient-text">Projects</span>
        </h1>
        <p className="page-subtitle">A collection of my projects and creations</p>

        <div className="project-grid">
          {siteContent.projects.map((project, index) => (
            <article key={project.slug} id={project.slug} className="project-tile">
              <div className="project-tile-media">
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <span className="project-tile-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="project-tile-body">
                <h2 className="project-tile-title">{project.title}</h2>
                <p className="project-tile-category">{project.category}</p>
                <p className="project-tile-description">{project.description}</p>
                <ProjectStack stack={project.stack} />
                <ProjectLinks links={project.links} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
