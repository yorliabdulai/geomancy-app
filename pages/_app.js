import React from 'react';

import '../src/styles/globals.scss';
import { Layout } from '../src/components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;