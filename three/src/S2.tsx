import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export const Sk2 = () => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    (ref.current.rotation.x += delta);
    (ref.current.rotation.y += delta);
  })

  const boxParams = {
    width: 10,
    height: 1,
    depth: 1,
    widthSegments: 1,
    heightSegments: 1,
    depthSegments: 1,
  }

  return <mesh ref={ref}>
    <boxGeometry parameters={boxParams} />
    <meshStandardMaterial color={'hotpink'} />
  </mesh>
}

