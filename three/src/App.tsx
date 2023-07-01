import { Canvas } from '@react-three/fiber'
import './App.css'
import { Sk1 } from './S1';
import { Sk2 } from './S2';
import { useState } from 'react';

enum Sketch {
  S1 = 'S1',
  S2 = 'S2'
}

const ChosenSketch = ({ sketch }: { sketch: string }) => {
  switch (sketch) {
    case Sketch.S1:
      return <Sk1 />
    case Sketch.S2:
      return <Sk2 />
  }
  return null;
}

const App = () => {
  const [sketch, setSketch] = useState<string>(Sketch.S1);

  return (<div style={{ width: '80vw', height: '80vh' }}>
    <select value={sketch} onChange={e => setSketch(e.target.value)}>
      {Object.keys(Sketch).map(k => <option key={k} value={k}>{k}</option>)}
    </select>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ChosenSketch sketch={sketch} />
    </Canvas>
  </div>);
}

export default App
