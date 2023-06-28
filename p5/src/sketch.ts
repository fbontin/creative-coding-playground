import p5 from 'p5';

const sketch = (s: p5) => {
  s.setup = () => {
    s.createCanvas(1200, 800);
  }

  s.draw = () => {
    s.background('#f0d030');
  }
}

new p5(sketch);
