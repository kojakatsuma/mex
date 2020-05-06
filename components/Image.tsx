import React from 'react';
import { Lazy } from './Lazy';

export const Image = ({ src, width = '50%' }) => {
  return (
    <Lazy>
      <img src={src} width={width} />
    </Lazy>
  );
};
