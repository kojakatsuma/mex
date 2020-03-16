import React, { useEffect, useRef, useState } from 'react';

export const Image = ({ src }) => {
  const [mounted, setMounted] = useState(false)
  const img = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (img && img.current) {
      const { top } = img.current.getBoundingClientRect()
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
    <div ref={img}>
      {mounted ? <img src={src} width={'50%'} /> : <div>loading</div>}
    </div>
  );
}
