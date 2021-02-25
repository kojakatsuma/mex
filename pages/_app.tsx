import { AppProps } from 'next/app';
import Link from 'next/link';
import Router from 'next/router';
import 'react-notion/src/styles.css';
import 'prism-themes/themes/prism-a11y-dark.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { GA_ID, pageview } from '../libs/gtag';
import { ColorModeToggle } from 'components/ColorModeToggle';

const MyApp = ({ Component, pageProps }: AppProps) => {
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
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300" rel="stylesheet" />
      </Head>
      <style jsx={true} global={true}>
        {`
          .inactive-link {
            text-decoration: none;
            color: inherit;
          }
          a {
            color: inherit;
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
            font-family: 'M PLUS Rounded 1c', sans-serif, 'Hiragino Sans', sans-serif;
            color: inherit;
          }
          .log-text .notion {
            line-height: 30px;
          }
          .notion-link {
            color: #0366d6;
            text-decoration: none;
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
          .notion-bookmark {
            border-color: inherit;
          }
          .notion-bookmark * {
            color: inherit !important;
          }
          body.light-mode {
            background-color: #fff;
            color: #333;
            transition: background-color 0.3s ease;
          }
          body.dark-mode {
            background-color: #1a1919;
            color: #ffffff;
            transition: background-color 0.3s ease;
          }
          body {
            color: var(--color-text);
            background: var(--color-background);
          }
        `}
      </style>
      <div style={{ maxWidth: 900, padding: '5px', marginLeft: 'auto', marginRight: 'auto' }}>
        <ColorModeToggle />
        <div className='header'>
          <Link href='/'>
            <h1>Mex</h1>
          </Link>
          <h3>here is mexico.</h3>
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
