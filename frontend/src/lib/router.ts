import { useSyncExternalStore } from 'react'

/*
 * Minimal client-side router built on the History API, so pages can be added
 * without a new dependency. Swap for react-router if routing needs grow
 * (nested routes, params, data loading).
 */

const NAVIGATE_EVENT = 'app:navigate'

function subscribe(onChange: () => void) {
  window.addEventListener('popstate', onChange)
  window.addEventListener(NAVIGATE_EVENT, onChange)
  return () => {
    window.removeEventListener('popstate', onChange)
    window.removeEventListener(NAVIGATE_EVENT, onChange)
  }
}

// "/projects/" and "/projects" are the same page.
const normalize = (pathname: string) => pathname.replace(/\/+$/, '') || '/'

/** Current path (without hash/query); re-renders the caller on navigation. */
export function usePathname() {
  return useSyncExternalStore(
    subscribe,
    () => normalize(window.location.pathname),
    () => '/',
  )
}

// How long a jumped-to element stays marked before its highlight fades away.
const HASH_TARGET_HIGHLIGHT_MS = 2000
let highlightTimer: number | undefined

/**
 * Scroll to the element named by the URL hash, or to the top when there is none.
 *
 * The element is also marked with `data-hash-target` for a moment, so it can
 * flash a highlight showing where the jump landed. (`pushState` navigation
 * doesn't update the CSS `:target` pseudo-class, and `:target` would stay on
 * for as long as the hash is in the URL, so style `[data-hash-target]`.)
 */
export function scrollToHash() {
  window.clearTimeout(highlightTimer)
  document.querySelectorAll('[data-hash-target]').forEach((el) => el.removeAttribute('data-hash-target'))

  const id = decodeURIComponent(window.location.hash.slice(1))
  const target = id ? document.getElementById(id) : null
  if (target) {
    target.setAttribute('data-hash-target', '')
    target.scrollIntoView()
    highlightTimer = window.setTimeout(
      () => target.removeAttribute('data-hash-target'),
      HASH_TARGET_HIGHLIGHT_MS,
    )
  } else {
    window.scrollTo(0, 0)
  }
}

export function navigate(to: string) {
  const url = new URL(to, window.location.href)
  const isSameUrl = url.href === window.location.href
  if (!isSameUrl) window.history.pushState(null, '', url)
  window.dispatchEvent(new Event(NAVIGATE_EVENT))
  // Wait for React to render the new page before scrolling within it.
  requestAnimationFrame(scrollToHash)
}
