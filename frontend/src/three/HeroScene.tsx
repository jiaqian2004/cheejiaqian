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
  const [isMobile, setIsMobile] = useState(false)

  // Drag-to-orbit competes with page scroll on touch screens, so it's
  // disabled below the breakpoint; the idle auto-rotation keeps running either way.
  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY)
    const update = () => setIsMobile(mediaQuery.matches)
    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
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
    <div className="hero-canvas-wrapper">
      <Canvas camera={{ position: [0, 1.1, 4.8], fov: 42 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 5, 2]} intensity={1.3} />
        <pointLight position={[-2.5, 1.5, -1.5]} intensity={2} color="#a8e63a" />
        <pointLight position={[2.5, 0.5, -2]} intensity={1.2} color="#ff8a1e" />
        <Suspense fallback={null}>
          <MainCharacter isInteractingRef={isInteractingRef} />
        </Suspense>
        <OrbitControls
          makeDefault
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
