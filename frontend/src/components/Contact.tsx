import { siteContent } from '../content/siteContent'
import { IconGithub, IconLinkedin, IconMail } from './icons'
import './Contact.css'

// Decorative characters flanking the contact details.
const SIDE_ART = [
  { side: 'left', src: '/img/dog-walking-character.webp' },
  { side: 'right', src: '/img/eating_character.webp' },
] as const

export default function Contact() {
  const [leftArt, rightArt] = SIDE_ART

  const renderArt = ({ side, src }: (typeof SIDE_ART)[number]) => (
    <img
      className={`contact-art contact-art--${side}`}
      src={src}
      alt=""
      width={1086}
      height={1448}
      loading="lazy"
      decoding="async"
    />
  )

  return (
    <section id="contact" className="contact">
      <div className="section-inner">
        <div className="contact-layout">
          {renderArt(leftArt)}

          <div className="contact-content">
            <h2>Contact Me</h2>
            <p className="contact-name">{siteContent.name}</p>
            <p className="contact-lead">
              Feel free to reach out — I'm always open to new opportunities and conversations.
            </p>
            <div className="contact-links">
              <a href={`mailto:${siteContent.social.email}`}>
                <IconMail /> Email
              </a>
              <a href={siteContent.social.github} target="_blank" rel="noreferrer">
                <IconGithub /> GitHub
              </a>
              <a href={siteContent.social.linkedin} target="_blank" rel="noreferrer">
                <IconLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          {renderArt(rightArt)}
        </div>
      </div>

      <p className="site-footer">Design and Dev by CHEE JIA QIAN @2026</p>
    </section>
  )
}
