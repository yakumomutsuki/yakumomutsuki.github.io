import * as React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument<{}> {
  render () {
    return (
      <Html lang="ja">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <body>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
