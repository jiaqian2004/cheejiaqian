import { siteContent } from '../content/siteContent'
import './Work.css'

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="section-inner">
        <h2>Work</h2>
        <div className="project-list">
          {siteContent.projects.map((project) => (
            <a
              key={project.title}
              className="card project-card"
              href={project.link || '#'}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noreferrer' : undefined}
            >
              <h3>{project.title}</h3>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span className="skill-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
