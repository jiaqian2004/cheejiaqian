import { useRef } from 'react'
import type { MutableRefObject } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import type { Group } from 'three'

const MODEL_PATH = '/models/main.glb'
const IDLE_ROTATION_SPEED = 0.25

interface MainCharacterProps {
  isInteractingRef: MutableRefObject<boolean>
}

export default function MainCharacter({ isInteractingRef }: MainCharacterProps) {
  const { scene } = useGLTF(MODEL_PATH)
  const groupRef = useRef<Group>(null)

  useFrame((_, delta) => {
    if (!isInteractingRef.current && groupRef.current) {
      groupRef.current.rotation.y += delta * IDLE_ROTATION_SPEED
    }
  })

  return (
    <group ref={groupRef} position={[0, -1.4, 0]}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(MODEL_PATH)
