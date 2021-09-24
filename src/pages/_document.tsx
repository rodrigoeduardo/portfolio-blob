import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="assets/icons/blob-circle-gray.svg" />

          <meta property="og:url"                content="https://blobteam.tech" />
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="Blob Team - Portfólio" />
          <meta property="og:description"        content="A web development team." />
          <meta property="og:image"              content="https://media-exp1.licdn.com/dms/image/C4E0BAQFy68xj5OiETg/company-logo_200_200/0/1632447900442?e=1640822400&v=beta&t=pjqwNMWjrEl6nDfbD638LqijbhmTNQLi_xFzX_68YDo" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
