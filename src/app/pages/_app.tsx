import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import 'prism-themes/themes/prism-vs.css';

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <ThemeProvider theme={createMuiTheme({})}>
  <CssBaseline />
  <Component {...pageProps} />
</ThemeProvider>
  )
}

export default MyApp
