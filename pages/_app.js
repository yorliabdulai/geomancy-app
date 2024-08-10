import React from 'react';
import client from '../src/lib/apolloClient';
import '../src/styles/globals.scss';
import { Layout } from '../src/components';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;