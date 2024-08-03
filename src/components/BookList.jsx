import { useEffect, useState } from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/solid';

const BookList = ({ setSelectedBook }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from your API
    axios.get('/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map(book => (
        <div key={book.id} className="border p-4 rounded">
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p className="mb-2">{book.description}</p>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={`h-5 w-5 ${i < book.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
            ))}
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => setSelectedBook(book)}
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
