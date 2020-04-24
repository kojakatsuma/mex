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
            line-height: 104px;
            margin-block-start: 0px;
            margin-block-end: 0px;
          }
          h2 {
            font-size: 25.6px;
            line-height: 64px;
            margin-block-start: 0px;
            margin-block-end: 0px;
          }
          h3 {
            font-size: 18.286px;
            line-height: 40px;
            margin-block-start: 0px;
            margin-block-end: 0px;
          }
          body {
            font-size: 16px;
            line-height: 24px;
            margin-block-start: 0px;
            margin-block-end: 0px;
          }
          .header {
            font-size: 64px;
          }
          .menu {
            line-height: 64px;
            cursor: pointer;
          }
        `}
      </style>
      <div style={{ maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
        <h1 className='header'>Mex</h1>
        <h3>here is mexico.</h3>
        <PageTransition timeout={100} classNames='page-transition'>
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </div>
    </>
  );
};

export default MyApp;
