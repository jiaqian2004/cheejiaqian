import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { navigate } from '../lib/router'

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string
}

/**
 * Anchor that navigates without a full page reload. It keeps a real `href`,
 * so open-in-new-tab, copy-link and middle-click all still work.
 */
export default function Link({ to, onClick, target, ...rest }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    const isPlainLeftClick =
      event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey
    if (event.defaultPrevented || !isPlainLeftClick || (target && target !== '_self')) return

    event.preventDefault()
    navigate(to)
  }

  return <a href={to} target={target} onClick={handleClick} {...rest} />
}
