import p5 from 'p5';
import React, { useRef, useEffect } from 'react';

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(10);
  };

  p.draw = () => {
    let theta = 0;
    p.background(255);
    const a = (p.frameCount / p.width) * 180;
    if (a > 40) {
      p.noLoop();
    }
    theta = p.radians(a);
    p.translate(p.width / 2, p.height);
    p.translate(0, -100);
    branch(10, theta);
    branch2(10, -theta);
  };
  const branch = (h = 400, theta) => {
    h *= 0.66;
    if (h > 1) {
      p.push();
      p.stroke(p.random(100), p.random(100), p.random(255), 100);
      p.rotate(theta);
      p.line(0, 0, 0, -h - p.random(20));
      p.translate(0, -h - p.random(20));
      branch(h, theta);
      p.pop();
      p.push();
      p.stroke(p.random(100), p.random(100), p.random(200), 100);
      p.rotate(-theta);
      p.line(0, 0, 0, -h - p.random(20));
      p.translate(0, -h - p.random(20));
      branch(h, theta);
      p.pop();
    }
  };
  const branch2 = (h = 400, theta) => {
    h *= 0.66;
    if (h > 1) {
      p.push();
      p.stroke(p.random(200), p.random(100), p.random(100), 100);
      p.rotate(-theta);
      p.line(0, 0, 0, h + p.random(20));
      p.translate(0, h + p.random(20));
      branch2(h, -theta);
      p.pop();
      p.push();
      p.stroke(p.random(100), p.random(200), p.random(100), 100);
      p.rotate(theta);
      p.line(0, 0, 0, h + p.random(20));
      p.translate(0, h + p.random(20));
      branch2(h, -theta);
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
