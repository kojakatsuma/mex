import { ColorThemeScript } from 'components/ColorThemeScript';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_ID } from '../libs/gtag';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {GA_ID && (
            <>
              <script async={true} src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <ColorThemeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
