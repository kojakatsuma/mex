import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Card, CardMedia, CardHeader, makeStyles, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(_theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}))

const Thumbnail = ({ image, title, url }) => {
  const { root, media } = useStyles()
  return (
    <Card className={root}>
      <Link href={url} underline='none' target="_blank" rel="noopener">
        <CardHeader title={<Typography variant='body2'> {title} </Typography>} />
        <CardMedia className={media} image={image} title={title} />
      </Link>
    </Card>

  )
}

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
  }, [og, Axios])

  return (
    <>{og ? <Thumbnail image={og.image} title={og.title} url={url} /> : 'loading'}</>
  );
}
