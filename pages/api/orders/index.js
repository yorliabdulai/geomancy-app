import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  try {
    await client.connect();
    const database = client.db('your_database_name');
    const orders = database.collection('orders');

    if (req.method === 'GET') {
      const allOrders = await orders.find({}).toArray();
      res.status(200).json(allOrders);
    } else if (req.method === 'PUT') {
      const { id, status } = req.body;
      const updatedOrder = await orders.updateOne({ _id: id }, { $set: { status } });
      res.status(200).json(updatedOrder);
    } else {
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to connect to the database' });
  } finally {
    await client.close();
  }
}
