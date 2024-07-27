import { AppProps } from 'next/app';
import "../src/styles/globals.scss";
import Navigation from '@/components/navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
