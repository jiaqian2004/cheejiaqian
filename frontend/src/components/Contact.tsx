import { siteContent } from '../content/siteContent'
import { IconGithub, IconLinkedin, IconMail } from './icons'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-inner">
        <h2>Let's talk</h2>
        <p className="contact-lead">
          Feel free to reach out — I'm always open to new opportunities and conversations.
        </p>
        <div className="contact-links">
          <a href={`mailto:${siteContent.social.email}`}>
            <IconMail /> {siteContent.social.email}
          </a>
          <a href={siteContent.social.github || '#'}>
            <IconGithub /> GitHub
          </a>
          <a href={siteContent.social.linkedin || '#'}>
            <IconLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
