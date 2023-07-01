import { Canvas } from '@react-three/fiber'
import Box from './Box'
import './App.css'

const range = (a: number, b: number, step = 1) => {
  const r: number[] = [];
  for (let i = a; i <= b; i += step) {
    r.push(i);
  }
  return r;
};

const combine = (a1: number[], a2: number[]): number[][] => {
  return a1.flatMap(n1 => a2.map(n2 => [n1, n2]));
}

const Boxes = () => {
  const points = combine(range(-10, 10, 1), range(-10, 10, 1));
  return points.map(([x, y]) => <Box
    key={`${x}-${y}`}
    position={[x, y, 0]}
    color={`rgb(${Math.abs(x) * 40}, 100, ${Math.abs(y) * 40})`}
  />)
}

const App = () => {

  return (<div style={{ width: '100vw', height: '100vh' }}>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Boxes />
    </Canvas>
  </div>);
}

export default App
