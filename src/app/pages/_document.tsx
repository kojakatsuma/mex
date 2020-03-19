import React from 'react';
import Document, { Head, Main, NextScript, Html, DocumentContext } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core';

export default class extends Document {
  public static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
  }

  public render() {
    return (
      <Html>
        <Head >
          <title>here is mexico</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
