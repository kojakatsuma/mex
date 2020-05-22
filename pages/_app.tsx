import { AppProps } from 'next/app';
import 'react-notion/src/styles.css';
import 'prism-themes/themes/prism-vs.css';
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
          .inactive-link {
            color: #111111;
            text-decoration: none;
          }
          p,
          body,
          h1,
          h2,
          h3,
          h4,
          h6,
          h6 {
            font-family: 'Hiragino Sans', sans-serif;
            font-weight: 200;
          }
          hr {
            border: none;
            height: 1px;
            background-color: #3333331f;
          }
          h1 {
            font-size: 42.667px;
            line-height: 52px;
            margin-top: 0px;
            margin-bottom: 0px;
          }
          h2 {
            font-size: 25.6px;
            line-height: 64px;
            margin-top: 0px;
            margin-bottom: 0px;
          }
          h3 {
            font-size: 18.286px;
            line-height: 40px;
            margin-top: 0px;
            margin-bottom: 0px;
          }
          p,body {
            font-size: 16px !important;
            line-height: 30px !important;
            margin-top: 0px !important;
            margin-bottom: 0px !important;
          }
          .header {
            margin-top: 50px;
            margin-bottom: 10px;
          }
          .header > h1 {
            font-size: 104px;
            margin-bottom: 20px;
          }
          .menu {
            cursor: pointer;
            color: #0366d6;
            text-decoration: none;
          }
        `}
      </style>
      <div style={{ maxWidth: 900, padding: '5px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className='header'>
          <h1>Mex</h1>
          <h3>here is mexico.</h3>
        </div>
        <PageTransition timeout={100} classNames='page-transition'>
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </div>
    </>
  );
};

export default MyApp;
