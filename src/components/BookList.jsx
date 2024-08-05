// src/components/BookList.jsx
import React from 'react';

const BookList = ({ books, setSelectedBook }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id} className="book-item" onClick={() => setSelectedBook(book)}>
          <img src={book.coverImage.url} alt={book.title} />
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>Price: ${book.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
