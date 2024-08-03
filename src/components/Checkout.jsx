import { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import axios from 'axios';

const Checkout = ({ book, setDeliveryStatus }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');

  const paystackConfig = {
    email,
    amount: book.price * 100, // Paystack expects amount in kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    text: 'Buy Now',
    onSuccess: async (reference) => {
      // Save order and get delivery status
      const orderData = {
        name,
        email,
        phone,
        address,
        deliveryInstructions,
        bookId: book.id,
        paymentReference: reference.reference,
      };

      try {
        const response = await axios.post('/api/orders', orderData);
        setDeliveryStatus(`Order placed successfully! Tracking number: ${response.data.trackingNumber}`);
      } catch (error) {
        console.error(error);
        setDeliveryStatus('There was an error processing your order. Please try again.');
      }
    },
    onClose: () => alert('Transaction was not completed, window closed.'),
  };

  return (
    <div className="mt-6 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Delivery Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Delivery Instructions</label>
        <textarea
          value={deliveryInstructions}
          onChange={(e) => setDeliveryInstructions(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>
      <PaystackButton {...paystackConfig} className="bg-blue-600 text-white px-4 py-2 rounded" />
    </div>
  );
};

export default Checkout;
