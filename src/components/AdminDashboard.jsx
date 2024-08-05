import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newBook, setNewBook] = useState({ title: '', author: '', price: '', description: '' });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/books');
        setBooks(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/books', newBook);
      setBooks([...books, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`/api/books/${id}`);
      setBooks(books.filter(book => book._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (books.length === 0) return <div>No books available</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <form onSubmit={handleAddBook} className="mb-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newBook.price}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newBook.description}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Add Book</button>
      </form>
      <ul>
        {books.map(book => (
          <li key={book._id} className="border p-4 mb-2">
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.price}</p>
            <p>{book.description}</p>
            <button onClick={() => handleDeleteBook(book._id)} className="bg-red-600 text-white px-4 py-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
