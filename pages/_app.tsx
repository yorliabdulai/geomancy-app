import { AppProps } from 'next/app';
import "../src/styles/globals.scss";
import Navigation from '@/components/navigation';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
