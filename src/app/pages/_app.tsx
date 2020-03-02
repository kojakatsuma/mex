import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import 'prism-themes/themes/prism-vs.css';

const colorCode = '#ffffff'

const mPlusRoundedlc = {
  fontFamily: 'MPLUSRounded1c',
  src: `url(/static/fonts/MPLUSRounded1c-Light.ttf) format('truetype')`,
}

const theme = createMuiTheme({
  palette: {
    background: {
      paper: colorCode,
      default: colorCode,
    },
  },
  typography: {
    fontFamily: 'MPLUSRounded1c,sans-serif',
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
