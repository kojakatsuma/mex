import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import 'prism-themes/themes/prism-material-dark.css';
import { useEffect } from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';

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
        backgroundColor: 'white',
        a: {
          'color': '#0366d6',
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
          <Component {...pageProps} />
        </ Container>
      </ThemeProvider>
    </>
  )
}

export default MyApp
