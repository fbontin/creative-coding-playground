import { combine, range } from './helpers';
import { Sphere } from './Sphere';

export const Sk1 = () => {
  const points = combine(range(-10, 10, 1), range(-10, 10, 1));
  return points.map(([x, y]) => {
    const r = Math.abs(x * 15) + 50;
    const g = Math.abs(y * 13) + 50;
    const b = 80;
    return <Sphere
      key={`${x}-${y}`}
      position={[x, y, -5]}
      color={`rgb(${r}, ${g}, ${b})`}
    />
  })
}
