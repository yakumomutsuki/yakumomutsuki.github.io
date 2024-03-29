import '@/styles/globals.css';
import 'bulma/css/bulma.min.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      {/* charset=utf-8 が一番上にくるおまじない */}
      <meta name="viewport" content="width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
{
}
