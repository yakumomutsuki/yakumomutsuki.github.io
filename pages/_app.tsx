import Head from 'next/head'
import { Header } from '@/components/Header'

import 'bulma/css/bulma.min.css'

// eslint-disable-next-line react/prop-types
export default function MyApp ({ Component, pageProps }) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
}
