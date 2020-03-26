import React from 'react';
import { Lazy } from './Lazy';

export const Image = ({ src }) => {
  return (
    <Lazy>
      <img src={src} width={'50%'} />
    </Lazy>
  );
}
