import { AppProps } from 'next/app';
import 'prism-themes/themes/prism-material-dark.css';
import Head from 'next/head';
import { PageTransition } from 'next-page-transitions';
const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <title>here is mexico</title>
      </Head>
      <style jsx={true} global={true}>
        {`
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
          a {
            color: #0366d6;
            text-decoration: none;
          }
          .inactive-link {
            color: #111111;
            text-decoration: none;
          }
          body,h2,h1 {
            font-family: "Hiragino Sans",sans-serif;
            font-weight: 200;
          }
        `}
      </style>
      <div style={{ maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
        <h1>Mex</h1>
        <h2>here is mexico.</h2>
        <PageTransition timeout={100} classNames='page-transition'>
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </div>
    </>
  );
};

export default MyApp;
