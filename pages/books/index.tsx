import { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import BookList from '../../src/components/BookList';
import Checkout from '../../src/components/Checkout';
import DeliveryStatus from '../../src/components/DeliveryStatus';
import { getBooks } from '../../src/services/books'

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [deliveryStatus, setDeliveryStatus] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks();
        setBooks(booksData);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err)); // Ensure error is a string
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('Error fetching books:', error);
    return <p>Error fetching books: {error}</p>; // Render error as string
  }

  if (!books || books.length === 0) {
    return <p>No books available</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Books for Sale</h1>
      <BookList books={books} setSelectedBook={setSelectedBook} />
      {selectedBook && (
        <Checkout book={selectedBook} setDeliveryStatus={setDeliveryStatus} />
      )}
      {deliveryStatus && <DeliveryStatus status={deliveryStatus} />}
    </div>
  );
};

export default Books;