import * as React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import 'bulma/css/bulma.min.css'

export default function MyApp ({ Component, pageProps }) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />

    {/* main contents */}
    <Component {...pageProps} />

    <Footer />

    <style jsx global>{`
      /* タブレット・モバイル用 */
      @media screen and (max-width: 1023px) {
        .lead,.side {
          padding:1.5rem;
        }
      }
      
      /* PCデバイス用  */
      @media screen and (min-width: 1024px) {
        .lead,.side {
          padding: 3rem;
        }
      }
    `}</style>
  </>
}
