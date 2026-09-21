import { siteContent } from '../content/siteContent'
import HeroScene from '../three/HeroScene'
import AmbientGlow from './AmbientGlow'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow hero-glow-center" aria-hidden="true" />
      <AmbientGlow />

      <div className="hero-text-right">
        {siteContent.heroRoleLines.map((line) => (
          <h2 key={line}>{line}</h2>
        ))}
      </div>

      <HeroScene />

      <div className="hero-text-left">
        <p className="hero-greeting">{siteContent.heroGreeting}</p>
        <h1 className="hero-name">{siteContent.name}</h1>
      </div>

    </section>
  )
}
