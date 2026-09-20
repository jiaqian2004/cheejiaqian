import { siteContent } from '../content/siteContent'
import HeroScene from '../three/HeroScene'
import { IconGithub, IconLinkedin, IconMail } from './icons'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <HeroScene />

      <div className="hero-content">
        <p className="hero-greeting">{siteContent.heroGreeting}</p>
        <h1 className="hero-name">{siteContent.name}</h1>
        <p className="hero-tagline">{siteContent.tagline}</p>
        {/* TODO: point to the hosted resume file once it's added to /public */}
        <a className="hero-resume-btn" href="#">
          RESUME
        </a>
      </div>

      <div className="hero-social-card">
        <a href={`mailto:${siteContent.social.email}`} aria-label="Email">
          <IconMail />
        </a>
        <a href={siteContent.social.github || '#'} aria-label="GitHub">
          <IconGithub />
        </a>
        <a href={siteContent.social.linkedin || '#'} aria-label="LinkedIn">
          <IconLinkedin />
        </a>
      </div>
    </section>
  )
}
