import { useEffect, useRef } from 'react'
import type { MutableRefObject } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Box3, Vector3 } from 'three'
import type { Group } from 'three'

const MODEL_PATH = '/models/main.glb'
const IDLE_ROTATION_SPEED = 0.25
// Every model gets rescaled to this height so the camera framing in
// HeroScene doesn't have to be re-guessed for each source file's own scale.
const TARGET_HEIGHT = 2

interface MainCharacterProps {
  isInteractingRef: MutableRefObject<boolean>
}

export default function MainCharacter({ isInteractingRef }: MainCharacterProps) {
  const { scene } = useGLTF(MODEL_PATH)
  const groupRef = useRef<Group>(null)
  const innerRef = useRef<Group>(null)

  // Measure the model's actual bounding box and re-center/rescale it so its
  // feet sit at y = 0 and it's centered on x/z, regardless of how the
  // original file was authored (pivot point, units, etc.).
  useEffect(() => {
    if (!innerRef.current) return

    const box = new Box3().setFromObject(scene)
    const size = new Vector3()
    const center = new Vector3()
    box.getSize(size)
    box.getCenter(center)

    const scale = TARGET_HEIGHT / (size.y || 1)
    innerRef.current.scale.setScalar(scale)
    innerRef.current.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale)
  }, [scene])

  useFrame((_, delta) => {
    if (!isInteractingRef.current && groupRef.current) {
      groupRef.current.rotation.y += delta * IDLE_ROTATION_SPEED
    }
  })

  return (
    <group ref={groupRef}>
      <group ref={innerRef}>
        <primitive object={scene} />
      </group>
    </group>
  )
}

useGLTF.preload(MODEL_PATH)
