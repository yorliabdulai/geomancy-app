import { connectToDatabase } from '../../../utils/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { status } = req.body;
    await db.collection('orders').updateOne({ _id: new ObjectId(id) }, { $set: { status } });
    res.status(204).end();
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
