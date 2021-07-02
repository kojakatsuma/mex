import React, { useEffect, useRef, useState } from 'react';

export const useScroll = (target: React.RefObject<HTMLDivElement>) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!mounted && target && target.current) {
      const { top, bottom } = target.current.getBoundingClientRect();
      const windowBottom = window.pageYOffset + window.innerHeight;
      const elementTopYoffset = window.pageYOffset + top;

      const windowTop = window.pageYOffset;
      const elemetBottomYoffset = window.pageYOffset + bottom;

      if (windowBottom > elementTopYoffset && windowTop < elemetBottomYoffset) {
        setMounted(true);
      }
    }
  }, [setMounted]);
  useEffect(() => {
    const fire = () => {
      if (!mounted && target && target.current) {
        const { top, bottom } = target.current.getBoundingClientRect();
        const windowBottom = window.pageYOffset + window.innerHeight;
        const elementTopYoffset = window.pageYOffset + top;

        const windowTop = window.pageYOffset;
        const elemetBottomYoffset = window.pageYOffset + bottom;

        if (windowBottom > elementTopYoffset && windowTop < elemetBottomYoffset) {
          setMounted(true);
        }
      }
    };
    if (!mounted) {
      window.addEventListener('scroll', fire);
    } else {
      window.removeEventListener('scroll', fire);
    }
    return () => window.removeEventListener('scroll', fire);
  }, [setMounted]);
  return mounted;
};

export const Lazy = ({ children }: { children: React.ReactNode }) => {
  const target = useRef<HTMLDivElement>(null);
  const mounted = useScroll(target);
  return (
    <div style={{ opacity: mounted ? 1 : 0.2, transition: 'all 1s', WebkitTransition: 'all 1s' }} ref={target}>
      {mounted ? children : <div>loading</div>}
    </div>
  );
};
