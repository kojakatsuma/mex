import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import 'prism-themes/themes/prism-material-dark.css';
import { useEffect } from 'react';
import Head from 'next/head';
import { Container, Typography } from '@material-ui/core';
import { PageTransition } from 'next-page-transitions'

const colorCode = '#ffffff'

const theme = createMuiTheme({
  palette: {
    background: {
      paper: colorCode,
      default: colorCode,
    },
  },
  typography: {
    fontFamily: `'M PLUS 1p', sans-serif`,
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

const MyApp = ({ Component, pageProps, router }: AppProps) => {
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
        <link href='https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300&display=swap' rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <style jsx={true} global={true}> {`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}
        </style>
        <Container maxWidth={false} style={{ maxWidth: 900 }}>
          <Typography variant='h1'>Mex</Typography>
          <Typography variant='h6'>here is mexico.</Typography>
          <PageTransition timeout={100} classNames='page-transition'>
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        </ Container>
      </ThemeProvider>
    </>
  )
}

export default MyApp
