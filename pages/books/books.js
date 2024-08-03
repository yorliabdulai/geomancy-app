import { useState } from 'react';
import BookList from '../components/BookList';
import Checkout from '../components/Checkout';
import DeliveryStatus from '../components/DeliveryStatus';

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Books for Sale</h1>
      <BookList setSelectedBook={setSelectedBook} />
      {selectedBook && (
        <Checkout book={selectedBook} setDeliveryStatus={setDeliveryStatus} />
      )}
      {deliveryStatus && <DeliveryStatus status={deliveryStatus} />}
    </div>
  );
};

export default Books;
