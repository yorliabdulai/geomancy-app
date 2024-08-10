import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.BOOKS_API_ENDPOINT;

export const getBooks = async () => {
  const query = gql`
  query MyQuery {
    booksConnection {
      edges {
        cursor
        node {
          author
          coverImage {
            url
          }
          id
          price
          stock
          title
        }
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query, {
    headers: {
      Authorization: `Bearer ${process.env.BOOKS_TOKEN}`,
    },
  });

  return result.books;
};
