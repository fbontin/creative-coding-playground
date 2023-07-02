import { useRef } from 'react';
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';

type BoxProps = {
  position: [number, number, number],
  color: string
}

const Box = ({ position, color }: BoxProps) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((_, delta) => (ref.current.rotation.x += delta))

  return (
    <mesh position={position} ref={ref} key={position.join(',')}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Box
