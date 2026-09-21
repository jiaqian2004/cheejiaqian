import { siteContent } from '../content/siteContent'
import { useTimelineScroll } from '../hooks/useTimelineScroll'
import './Work.css'

export default function Work() {
  const { timelineRef, reachedCount } = useTimelineScroll<HTMLDivElement>()

  return (
    <section id="work" className="work">
      <div className="section-inner">
        <div className="work-heading">
          <h2 className="section-title">
            Work
            <span className="gradient-text work-title-accent">Experience</span>
          </h2>
          <img
            className="work-character"
            src="/img/work_character.webp"
            alt=""
            width={1086}
            height={1448}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-line" aria-hidden="true">
            <span className="timeline-line-fill" />
            <span className="timeline-dot" />
          </div>

          <ol className="timeline-list">
            {siteContent.experience.map((exp, index) => (
              <li
                className={`timeline-row${index < reachedCount ? ' is-reached' : ''}`}
                data-timeline-row
                key={exp.role + exp.company}
              >
                <div className="timeline-left">
                  <div className="timeline-role">
                    <h3>{exp.role}</h3>
                    <p>{exp.company}</p>
                  </div>
                  <div className="timeline-year">
                    <span className="timeline-year-value">{exp.year}</span>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                </div>
                <p className="timeline-summary">{exp.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
