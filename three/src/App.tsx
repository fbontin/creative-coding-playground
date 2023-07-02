import { Canvas } from '@react-three/fiber'
import './App.css'
import { Sk1 } from './sketches/S1';
import { Sk2 } from './sketches/S2';
import { Sk3 } from './sketches/S3';
import { useState } from 'react';

enum Sketch {
  S1 = 'S1',
  S2 = 'S2',
  S3 = 'S3',
}

const ChosenSketch = ({ sketch }: { sketch: string }) => {
  switch (sketch) {
    case Sketch.S1:
      return <Sk1 />
    case Sketch.S2:
      return <Sk2 />
    case Sketch.S3:
      return <Sk3 />
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
