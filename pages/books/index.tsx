import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import BookList from '../../src/components/BookList';
import Checkout from '../../src/components/Checkout';
import DeliveryStatus from '../../src/components/DeliveryStatus';

// GraphCMS query to fetch books
const GET_BOOKS = gql`
  query {
    books {
      id
      title
      author
      coverImage {
        url
      }
      price
      stock
    }
  }
`;

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [deliveryStatus, setDeliveryStatus] = useState(null);
  
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching books</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Books for Sale</h1>
      <BookList 
        books={data.books} 
        setSelectedBook={setSelectedBook} 
      />
      {selectedBook && (
        <Checkout 
          book={selectedBook} 
          setDeliveryStatus={setDeliveryStatus} 
        />
      )}
      {deliveryStatus && <DeliveryStatus status={deliveryStatus} />}
    </div>
  );
};

export default Books;
