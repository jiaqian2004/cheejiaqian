import { useEffect, useRef, useState } from 'react'

// Progress is 0 when the top of the timeline first peeks in at this fraction
// of the viewport height, and 1 once the last row's centre reaches END_RATIO.
const START_RATIO = 0.9
const END_RATIO = 0.6
// Share of the remaining distance the dot covers per frame (higher = snappier).
const EASE = 0.12
// The line runs this far past the last row's centre, so the final dot rests
// just below the last entry instead of sitting in the middle of it.
const TAIL_PX = 64

/**
 * Drives a scroll-linked timeline.
 *
 * Attach `timelineRef` to the timeline wrapper and mark each row with
 * `data-timeline-row`. The hook writes two CSS custom properties onto the
 * wrapper (`--timeline-length` in px and `--timeline-progress`, 0..1), so the
 * line/dot animate in CSS without a React re-render per frame. Scrolling only
 * moves the *target*; the displayed progress eases toward it, which is what
 * makes the dot glide instead of jumping with the wheel.
 *
 * It also returns how many rows the dot has passed, which changes only a few
 * times per scroll, so it is safe to keep in React state.
 */
export function useTimelineScroll<T extends HTMLElement>() {
  const timelineRef = useRef<T>(null)
  const [reachedCount, setReachedCount] = useState(0)

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let target = 0
    let current = 0
    let frame = 0

    const measure = () => {
      const rows = Array.from(timeline.querySelectorAll<HTMLElement>('[data-timeline-row]'))
      const lastRow = rows[rows.length - 1]
      if (!lastRow) return null

      const timelineTop = timeline.getBoundingClientRect().top
      const lastRect = lastRow.getBoundingClientRect()
      // The line runs from the top of the list to just below the last row's centre.
      const length = lastRect.top + lastRect.height / 2 - timelineTop + TAIL_PX
      const rowCentres = rows.map((row) => {
        const rect = row.getBoundingClientRect()
        return rect.top + rect.height / 2 - timelineTop
      })
      return { timelineTop, length, rowCentres }
    }

    const apply = (progress: number, length: number, rowCentres: number[]) => {
      timeline.style.setProperty('--timeline-length', `${length}px`)
      timeline.style.setProperty('--timeline-progress', String(progress))
      setReachedCount(rowCentres.filter((centre) => centre <= progress * length).length)
    }

    const tick = () => {
      frame = 0
      const layout = measure()
      if (!layout) return

      const settled = prefersReducedMotion || Math.abs(target - current) < 0.0005
      current = settled ? target : current + (target - current) * EASE
      apply(current, layout.length, layout.rowCentres)
      if (!settled) frame = requestAnimationFrame(tick)
    }

    const schedule = () => {
      const layout = measure()
      if (!layout) return

      const viewportHeight = window.innerHeight
      const start = viewportHeight * START_RATIO
      const distance = start - (viewportHeight * END_RATIO - layout.length)
      target = Math.min(1, Math.max(0, (start - layout.timelineTop) / distance))

      if (!frame) frame = requestAnimationFrame(tick)
    }

    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return { timelineRef, reachedCount }
}
