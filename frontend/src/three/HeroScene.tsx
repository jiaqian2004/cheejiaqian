import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import MainCharacter from './MainCharacter'
import LoadingOverlay from './LoadingOverlay'

// After the user releases a drag, wait this long before auto-rotation resumes.
const AUTO_ROTATE_RESUME_DELAY_MS = 2500
const MOBILE_QUERY = '(max-width: 768px)'

export default function HeroScene() {
  const isInteractingRef = useRef(false)
  const resumeTimeoutRef = useRef<number | undefined>(undefined)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  // Drag-to-orbit competes with page scroll on touch screens, so it's
  // disabled below the breakpoint; the idle auto-rotation keeps running either way.
  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY)
    const update = () => setIsMobile(mediaQuery.matches)
    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  // R3F renders every frame by default even when off-screen, which fights
  // the browser for the main thread during scroll. Pausing the render loop
  // (frameloop="never") whenever the canvas scrolls out of view avoids that.
  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleDragStart = () => {
    isInteractingRef.current = true
    window.clearTimeout(resumeTimeoutRef.current)
  }

  const handleDragEnd = () => {
    resumeTimeoutRef.current = window.setTimeout(() => {
      isInteractingRef.current = false
    }, AUTO_ROTATE_RESUME_DELAY_MS)
  }

  return (
    <div className="hero-canvas-wrapper" ref={wrapperRef}>
      <Canvas
        camera={{ position: [0, 1.35, 4.2], fov: 35 }}
        gl={{ alpha: true }}
        dpr={[1, 1.5]}
        frameloop={isVisible ? 'always' : 'never'}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 5, 2]} intensity={2} />
        <directionalLight position={[-3, 2, 4]} intensity={1} />
        <pointLight position={[-2.5, 1.5, -1.5]} intensity={2} color="#a8e63a" />
        <pointLight position={[2.5, 0.5, -2]} intensity={1.2} color="#ff8a1e" />
        <Suspense fallback={null}>
          <MainCharacter isInteractingRef={isInteractingRef} />
        </Suspense>
        <OrbitControls
          makeDefault
          target={[0, 1.15, 0]}
          enablePan={false}
          enableZoom={false}
          enableRotate={!isMobile}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 1.8}
          onStart={handleDragStart}
          onEnd={handleDragEnd}
        />
      </Canvas>
      <LoadingOverlay />
    </div>
  )
}
