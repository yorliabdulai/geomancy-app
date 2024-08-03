import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, address, deliveryInstructions, bookId, paymentReference } = req.body;

    // Connect to the database
    const { db } = await connectToDatabase();

    // Save the order information
    const newOrder = {
      name,
      email,
      phone,
      address,
      deliveryInstructions,
      bookId,
      paymentReference,
      createdAt: new Date(),
      status: 'pending', // Initial status
      trackingNumber: generateTrackingNumber(),
    };

    try {
      const result = await db.collection('orders').insertOne(newOrder);
      res.status(201).json({ trackingNumber: newOrder.trackingNumber });
    } catch (error) {
      console.error('Error saving order:', error);
      res.status(500).json({ error: 'Failed to save order' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

function generateTrackingNumber() {
  return `TRK${Math.floor(Math.random() * 1000000)}`;
}
