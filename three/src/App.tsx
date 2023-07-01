import { Canvas } from '@react-three/fiber'
import Sphere from './Sphere';
import './App.css'

const range = (a: number, b: number, step = 1) => {
  const r: number[] = [];
  for (let i = a; i <= b; i += step) {
    r.push(i);
  }
  return r;
};

const combine = (a1: number[], a2: number[]): [number, number][] => {
  return a1.flatMap(n1 => a2.map((n2: number): [number, number] => [n1, n2]));
}

const Spheres = () => {
  const points = combine(range(-10, 10, 1), range(-10, 10, 1));
  return points.map(([x, y]) => {
    const r = Math.abs(y * 15);
    const g = Math.abs(x + y + 100);
    const b = Math.abs(x * 10);
    return <Sphere
      key={`${x}-${y}`}
      position={[x, y, -5]}
      color={`rgb(${r}, ${g}, ${b})`}
    />
  })
}

const App = () => {

  return (<div style={{ width: '100vw', height: '100vh' }}>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Spheres />
    </Canvas>
  </div>);
}

export default App
