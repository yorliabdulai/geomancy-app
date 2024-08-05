import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.BOOKS_API_ENDPOINT, // Replace with your GraphCMS endpoint
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.BOOKS_TOKEN}`, // Replace with your API token
  },
});

export default client;
