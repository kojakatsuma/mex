import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import 'prism-themes/themes/prism-material-dark.css';
import { useEffect } from 'react';
import Head from 'next/head';
import { Container, Typography } from '@material-ui/core';
import { Router } from 'next/router';


Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  const loading = document.createElement('h1')
  loading.innerText = 'loading'
  loading.id = 'loading'
  document.body.appendChild(loading)
})
Router.events.on('routeChangeComplete', () => {
  const laoding = document.getElementById('loading')
  if (laoding) {
    document.body.removeChild(laoding)
  }
})

const colorCode = '#ffffff'

const theme = createMuiTheme({
  palette: {
    background: {
      paper: colorCode,
      default: colorCode,
    },
  },
  typography: {
    fontFamily: `'M PLUS Rounded 1c', sans-serif`,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'a': {
          'color': '#0366d6',
          'text-decoration': 'none'
        },
        '.inactive-link': {
          'color': '#111111',
          'text-decoration': 'none'
        }
      },
    },
  },
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>here is mexico</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <style jsx={true} global={true}> {`
        @font-face {
          font-family: 'M PLUS Rounded 1c';
            src: url('/fonts/MPLUSRounded1c-Light.ttf');
            font-display: swap;
        }
      `}
        </style>
        <Container maxWidth={false} style={{ maxWidth: 900 }}>
          <Typography variant='h1'>Mex</Typography>
          <Typography variant='h6'>here is mexico.</Typography>
          <Component {...pageProps} />
        </ Container>
      </ThemeProvider>
    </>
  )
}

export default MyApp
