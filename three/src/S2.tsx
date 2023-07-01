import { combine, range } from './helpers';
import { Sphere } from './Sphere';

export const Sk2 = () => {
  const points = combine(range(-10, 10, 1), range(-10, 10, 1));
  return points.map(([x, y]) => {
    const r = Math.abs(y * 15);
    const g = Math.abs(x + y + 100);
    const b = 0;

    return <Sphere
      key={`${x}-${y}`}
      position={[x, y, -5]}
      color={`rgb(${r}, ${g}, ${b})`}
    />
  })
}

