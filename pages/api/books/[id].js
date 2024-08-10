import { connectToDatabase } from '../../../src/utils/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'DELETE') {
    await db.collection('books').deleteOne({ _id: new ObjectId(id) });
    res.status(204).end();
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
