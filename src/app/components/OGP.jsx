import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Lazy } from './Lazy';

export const OGP = ({ url }) => {
  const [og, setOg] = useState(null)

  useEffect(() => {
    if (!og) {
      Axios.get(url, { responseType: 'document' }).then((res) => {
        let [image, title] = ['', '']
        res.data.head.childNodes.forEach((child) => {
          if (child.nodeName === 'META') {
            if (child.getAttribute('property') === 'og:image') {
              image = child.getAttribute('content')
            }
            if (child.getAttribute('property') === 'og:title') {
              title = child.getAttribute('content')
            }
          }
        })
        setOg({ image, title })
      })
    }
  }, [og])

  return (
    <Lazy>{og ? <> <p>{og.title}</p> <img src={og.image} width={'50%'} /> </> : 'loading'}</Lazy>
  );
}
