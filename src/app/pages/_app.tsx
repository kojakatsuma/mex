import { AppProps } from 'next/app';
import 'prism-themes/themes/prism-vs.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
