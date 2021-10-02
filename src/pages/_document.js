import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png"/>

          <title>Signum Dev Meetup Promo</title>
          <meta name="title" content="Signum Dev Meetup Promo"/>
          <meta name="description" content="Checkout our upcoming Dev Meetup on Discord"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://signum-promo.vercel.app"/>
          <meta property="og:title" content="Signum Dev Meetup Promo"/>
          <meta property="og:description" content="Checkout our upcoming Dev Meetup on Discord"/>
          <meta property="og:image" content="https://signum-promo.vercel.app/signum-promo.jpg"/>
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://signum-promo.vercel.app/"/>
          <meta property="twitter:title" content="Signum Dev Meetup Promo"/>
          <meta property="twitter:description" content="Checkout our upcoming Dev Meetup on Discord"/>
          <meta property="twitter:image" content="https://signum-promo.vercel.app/signum-promo.jpg"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}
