import { siteContent } from '../content/siteContent'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#about', label: 'ABOUT' },
  { href: '#work', label: 'WORK' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#top" className="navbar-logo">
        {siteContent.initials}
      </a>
      <ul className="navbar-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
