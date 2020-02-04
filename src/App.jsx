import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Divider, createMuiTheme, ThemeProvider, CssBaseline, Fade } from '@material-ui/core';
import { Posts } from './mdx';
import FontFaceObserver from 'fontfaceobserver';
import 'github-markdown-css'
import './index.css'

import MPLUSRounded1c from './fonts/MPLUSRounded1c-Light.ttf';


const mPlusRoundedlc = {
  fontFamily: 'MPLUSRounded1c',
  fontDisplay: 'swap',
  src: `
  local('MPLUSRounded1c'), url(${MPLUSRounded1c}) format('truetype');
  `
}

const colorCode = '#ffffff'


const theme = createMuiTheme({
  palette: {
    background: {
      paper: colorCode,
      default: colorCode
    }
  },
  typography: {
    fontFamily: "MPLUSRounded1c,sans-serif",
  }, overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [mPlusRoundedlc],
        backgroundColor: 'white'
      },
    }
  }
})

export default () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const font = new FontFaceObserver('MPLUSRounded1c')
    font.load().then(() => {
      setLoaded(true)
    })
  })
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} style={{maxWidth: 680}}>
        <CssBaseline />
        {loaded ? <Fade in={loaded} timeout={{ enter: 800 }}>
          <Paper elevation={0}>
            <Typography variant="h2" >mex</Typography>
            <Typography variant="subtitle2" paragraph>here is mexico.</Typography>
            {
              Posts.map((Post, i) => {
                return (
                  <React.Fragment key={i}>
                    <Divider />
                    <Paper style={{ marginBottom: '2em' }} square elevation={0} className='markdown-body' >
                      <Typography component='article' >
                        <Post />
                      </Typography>
                    </Paper>
                  </React.Fragment>
                )
              })
            }
          </Paper>
        </Fade> : <div>loading</div>
        }
      </Container>
    </ThemeProvider>
  )
}
