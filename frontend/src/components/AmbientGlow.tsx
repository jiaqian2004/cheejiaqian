import './AmbientGlow.css'

/**
 * The two soft lime glows that stay fixed to the viewport while the page scrolls.
 * Rendered by every page that should share the site's background.
 *
 * Place it *before* the page content (and give that content its own
 * `position: relative; z-index: 1`) so text and cards sit on top of the glows.
 */
export default function AmbientGlow() {
  return (
    <>
      <div className="ambient-glow ambient-glow--a" aria-hidden="true" />
      <div className="ambient-glow ambient-glow--b" aria-hidden="true" />
    </>
  )
}
