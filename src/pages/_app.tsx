import '@/styles/globals.css';
import 'bulma/css/bulma.min.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
