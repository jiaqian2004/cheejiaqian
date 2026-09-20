import { siteContent } from '../content/siteContent'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner">
        <h2>About</h2>
        <p className="about-bio">{siteContent.bio}</p>

        <div className="experience-list">
          {siteContent.experience.map((exp) => (
            <div className="card experience-card" key={exp.role + exp.company}>
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-summary">{exp.summary}</p>
            </div>
          ))}
        </div>

        <div className="skills">
          {siteContent.skills.map((group) => (
            <div key={group.category} className="skill-group">
              <h4>{group.category}</h4>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
