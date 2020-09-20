import p5 from 'p5';
import React, { useRef, useEffect } from 'react';

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };
  let theta = 0;
  p.draw = () => {
    p.background(255);
    p.frameRate(30);
    p.stroke(0);
    const a = (p.mouseY / p.width) * 180;
    theta = p.radians(a);
    p.translate(p.width / 2, p.height);
    p.line(0, 0, 0, -10);
    p.translate(0, -10);
    branch(40);
  };
  const branch = (h = 400) => {
    h *= 0.66;
    if (h > 1) {
      p.push();
      p.rotate(theta);
      p.line(0, 0, 0, -h);
      p.translate(0, -h);
      branch(h);
      p.pop();
      p.push();
      p.rotate(-theta);
      p.line(0, 0, 0, -h);
      p.translate(0, -h);
      branch(h);
      p.pop();
    }
  };
};

const Animation: React.FC = () => {
  const target = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (target && target.current) {
      // tslint:disable-next-line:no-unused-expression
      new p5(sketch, target.current);
    }
  }, []);
  return <div style={{ top: 0, left: 0, position: 'fixed', zIndex: -10 }} ref={target} />;
};

export default Animation;
