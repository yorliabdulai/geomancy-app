import { connectToDatabase } from '../../../utils/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === 'GET') {
    const books = await db.collection('books').find().toArray();
    res.status(200).json(books);
  } else if (req.method === 'POST') {
    const { title, author, price, description } = req.body;
    const newBook = { title, author, price, description, createdAt: new Date() };
    const result = await db.collection('books').insertOne(newBook);
    res.status(201).json(newBook);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
