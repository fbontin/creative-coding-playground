import { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';

type LineProps = {
  points: [number, number, number][],
  color: string
}

const Line = ({ points, color }: LineProps) => {
  const ref = useRef<THREE.BufferGeometry>(null!);

  useLayoutEffect(() => {
    ref.current.setFromPoints(points.map(p => new THREE.Vector3(...p)))
  }, [points])

  return (
    <line>
      <bufferGeometry ref={ref} />
      <lineBasicMaterial color={color} />
    </line>
  )
}

export default Line
