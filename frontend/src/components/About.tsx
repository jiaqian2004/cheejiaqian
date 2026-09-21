import { siteContent } from '../content/siteContent'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner">
        <h2 className="section-title">About Me</h2>

        <div className="about-intro">
          <div className="about-portrait">
            <img src="/img/about-character.webp" alt={siteContent.name} />
          </div>

          <div className="about-fields">
            <dl>
              {siteContent.aboutFields.map((field) => (
                <div className="about-field-row" key={field.label}>
                  <dt>{field.label}</dt>
                  <dd>{field.value}</dd>
                </div>
              ))}
            </dl>

            <div className="skills" id="skills">
              <h3 className="skills-title">Skills</h3>
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
        </div>
      </div>
    </section>
  )
}
