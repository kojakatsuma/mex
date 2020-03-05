import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import 'prism-themes/themes/prism-vs.css';
import { useEffect } from 'react';

const colorCode = '#ffffff'

const mPlusRoundedlc = {
  fontFamily: 'M PLUS Rounded 1c'
}

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
        '@font-face': [mPlusRoundedlc],
        'backgroundColor': 'white',
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
