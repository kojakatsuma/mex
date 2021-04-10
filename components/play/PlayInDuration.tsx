import p5 from 'p5';
import React, { useEffect, useRef } from 'react';

const sketch = (p: p5) => {
  let startDatetime = 0;
  let r = 0;
  let diff = 0;
  let cr = 0;
  const BLACK = p.color(0, 0, 0);
  const WHITE = p.color(255, 255, 255);
  const COLORS = [BLACK, WHITE];
  
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    startDatetime = Date.now();
    r = p.random(1,5);
    cr = Math.floor(p.random(0, 2));
    p.colorMode(p.HSB);
  };

  p.draw = () => {
    if (diff < 0) {
      r = p.random(1, 5);
      startDatetime = Date.now();
      cr = Math.floor(p.random(0, 2));
    }
    p.clear();
    const progress = (Date.now() - startDatetime) / 1000;
    p.textSize(30);
    diff = r - progress;
    const COLOR = COLORS[cr];
    p.fill(COLOR);
    p.ellipse(p.windowWidth / 2, p.windowHeight / 2, diff * 100);
    const TEXTCOLOR = COLOR === BLACK ? WHITE : p.color(p.saturation(COLOR))
    p.fill(TEXTCOLOR);
    p.text(Math.floor(diff), p.windowWidth / 2 - 10, p.windowHeight / 2);
  };
};

const PlayInDuration: React.FC = () => {
  const target = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (target && target.current) {
      // tslint:disable-next-line:no-unused-expression
      new p5(sketch, target.current);
    }
  }, []);
  return <div style={{ top: 0, left: 0, position: 'fixed', zIndex: -10 }} ref={target} />;
};

export default PlayInDuration;
