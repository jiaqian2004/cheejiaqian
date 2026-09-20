import { useProgress } from '@react-three/drei'
import './LoadingOverlay.css'

export default function LoadingOverlay() {
  const { active, progress } = useProgress()

  if (!active) return null

  return (
    <div className="loading-overlay">
      <div className="loading-bar">
        <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <span className="loading-label">Loading {Math.round(progress)}%</span>
    </div>
  )
}
