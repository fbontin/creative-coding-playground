import { useRef } from 'react';
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import './App.css'

type SphereProps = {
  position: [number, number, number],
  color: string
}

const Sphere = ({ position, color }: SphereProps) => {
  const radius = 0.714;

  return (
    <mesh position={position}>
      <sphereGeometry args={[radius, 50, 50]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Sphere
