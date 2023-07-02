import { combine, range } from '../helpers';

export const Sk3 = () => {
  const colors = [
    '#155263',
    '#ff6f3c',
    '#ff9a3c',
    '#ffc93c',
  ];

  const points = combine(range(-10, 10, 1), range(-10, 10, 1));
  return points.map(([x, y]) => {
    const c = colors[Math.abs(x + y) % 4 - 1];

    return <mesh position={[x, y, -10]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color={c} />
    </mesh>
  })
}
