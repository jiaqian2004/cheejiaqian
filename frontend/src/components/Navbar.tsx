import { siteContent } from '../content/siteContent'
import { usePathname } from '../lib/router'
import Link from './Link'
import './Navbar.css'

// The file served from public/, and the name the visitor's browser saves it as.
const RESUME_URL = '/resume/resume.pdf'
const RESUME_DOWNLOAD_NAME = 'cheejiaqian_Resume.pdf'

// `to` uses absolute paths ("/#about") so the links also work from other pages.
// `hideOnMobile` links are dropped on narrow screens, where the bar can't fit them all.
const NAV_LINKS = [
  { to: '/#about', label: 'ABOUT ME' },
  { to: '/#skills', label: 'SKILLS', hideOnMobile: true },
  { to: '/#work', label: 'WORK', hideOnMobile: true },
  { to: '/projects', label: 'PROJECTS' },
  { to: '/#contact', label: 'CONTACT' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="navbar">
      <Link to="/#top" className="navbar-logo">
        {siteContent.initials}
      </Link>
      <a href={`mailto:${siteContent.social.email}`} className="navbar-email">
        {siteContent.social.email}
      </a>
      <ul className="navbar-links">
        {NAV_LINKS.map((link) => (
          <li key={link.to} className={link.hideOnMobile ? 'navbar-hide-mobile' : undefined}>
            <Link to={link.to} aria-current={link.to === pathname ? 'page' : undefined}>
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a className="navbar-resume-btn" href={RESUME_URL} download={RESUME_DOWNLOAD_NAME}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}
