const BookList = ({ books, setSelectedBook }) => (
    <div>
      {books.map((book) => (
        <div key={book.id} onClick={() => setSelectedBook(book)}>
          <img src={book.coverImage.url} alt={book.title} />
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>${book.price}</p>
        </div>
      ))}
    </div>
  );
  
  export default BookList;
  