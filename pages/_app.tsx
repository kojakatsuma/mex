import { AppProps } from 'next/app';
import Link from 'next/link';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import 'react-notion-dev/src/styles.css';
import 'prism-themes/themes/prism-a11y-dark.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { GA_ID, pageview } from '../libs/gtag';
const Animation = dynamic<{}>(() => import('../components/Animation'), { ssr: false });

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    if (!GA_ID) {
      return;
    }
    const handleRouteChange = (path) => {
      pageview(path);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  return (
    <>
      <Head>
        <title>here is mexico</title>
      </Head>
      <style jsx={true} global={true}>
        {`
          .inactive-link {
            color: #111111;
            text-decoration: none;
          }
          a {
            color: #0366d6;
            text-decoration: none;
          }
          .notion,
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
          .log-text .notion {
            line-height: 30px;
          }
          .notion-link {
            color: #0366d6;
            text-decoration: none;
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
          .notion {
            line-height: 30px;
          }
          .notion .notion-code {
            font-size: 15px;
          }
          .header {
            margin-top: 50px;
            margin-bottom: 10px;
          }
          .header > h1 {
            font-size: 104px;
            margin-bottom: 20px;
            cursor: pointer;
          }
          .menu {
            cursor: pointer;
            color: #0366d6;
            text-decoration: none;
          }
          .notion-quote {
            color: #777777;
            font-size: 16px;
          }
        `}
      </style>
      <div style={{ maxWidth: 900, padding: '5px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className='header'>
          <Link href='/'>
            <h1>Mex</h1>
          </Link>
          <h3>here is mexico.</h3>
        </div>
        <Component {...pageProps} />
      </div>
      {(router.route === '/' || router.route.match(/(whoami|text)$/)) && <Animation />}
    </>
  );
};

export default MyApp;
