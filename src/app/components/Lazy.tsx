import React, { useEffect, useRef, useState } from 'react';

export const Lazy = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  const target = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (target && target.current) {
      const { top } = target.current.getBoundingClientRect()
      const fire = () => {
        if (!mounted && (window.pageYOffset + window.innerHeight) > top) {
          setMounted(true)
          window.removeEventListener('scroll', fire)
        }
      }
      if ((window.pageYOffset + window.innerHeight) > top) {
        fire()
      } else {
        window.addEventListener('scroll', fire)
      }
      return () => window.removeEventListener('scroll', fire)
    }
  }, [setMounted]);
  return (
    <div ref={target}>
      {mounted ? children : <div>loading</div>}
    </div>
  );
}
