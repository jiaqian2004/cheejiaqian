import { siteContent } from '../content/siteContent'
import { IconGithub, IconLinkedin, IconMail } from './icons'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <a href={`mailto:${siteContent.social.email}`} aria-label="Email">
        <IconMail />
      </a>
      <a href={siteContent.social.github} aria-label="GitHub" target="_blank" rel="noreferrer">
        <IconGithub />
      </a>
      <a href={siteContent.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
        <IconLinkedin />
      </a>
    </div>
  )
}
