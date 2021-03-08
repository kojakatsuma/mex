import p5 from 'p5';
import React, { useEffect, useRef } from 'react';

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(2)
  };
  p.draw = () => {
    p.clear();
    const r = Math.floor(p.random(0, 10));
    if(r > 4) {
        p.ellipse(p.windowWidth / 2, p.windowHeight / 2, 100);
    }
  };
};

const PointToPoint: React.FC = () => {
  const target = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (target && target.current) {
      // tslint:disable-next-line:no-unused-expression
      new p5(sketch, target.current);
    }
  }, []);
  return <div style={{ top: 0, left: 0, position: 'fixed', zIndex: -10 }} ref={target} />;
};

export default PointToPoint;
