import type { ProjectLink } from '../content/siteContent'
import { IconGithub, IconPlay } from './icons'
import './ProjectLinks.css'

const LINK_ICONS: Record<ProjectLink['kind'], typeof IconGithub> = {
  demo: IconPlay,
  github: IconGithub,
}

interface ProjectLinksProps {
  links: ProjectLink[]
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
  if (links.length === 0) return null

  return (
    <div className="project-links">
      {links.map((link) => {
        const Icon = LINK_ICONS[link.kind]
        // The video demo is the primary call to action, so it's the filled one.
        const variant = link.kind === 'demo' ? ' pill-btn--filled' : ''
        return (
          <a
            key={link.href}
            className={`pill-btn${variant}`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <Icon /> {link.label}
          </a>
        )
      })}
    </div>
  )
}
