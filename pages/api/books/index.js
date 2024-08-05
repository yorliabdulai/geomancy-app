import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  try {
    await client.connect();
    const database = client.db('your_database_name');
    const books = database.collection('books');

    if (req.method === 'GET') {
      const allBooks = await books.find({}).toArray();
      res.status(200).json(allBooks);
    } else if (req.method === 'POST') {
      const { title, author, price, description } = req.body;
      const newBook = await books.insertOne({ title, author, price, description });
      res.status(201).json(newBook.ops[0]);
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to connect to the database' });
  } finally {
    await client.close();
  }
}
