import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleUpdateOrder = async (id, status) => {
    try {
      await axios.put(`/api/orders/${id}`, { status });
      setOrders(orders.map(order => order._id === id ? { ...order, status } : order));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (orders.length === 0) return <div>No orders available</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id} className="border p-4 mb-2">
            <h3 className="text-xl font-bold">{order.book.title}</h3>
            <p>{order.name}</p>
            <p>{order.email}</p>
            <p>{order.phone}</p>
            <p>{order.address}</p>
            <p>{order.deliveryInstructions}</p>
            <p>Status: {order.status}</p>
            <button onClick={() => handleUpdateOrder(order._id, 'shipped')} className="bg-blue-600 text-white px-4 py-2">Mark as Shipped</button>
            <button onClick={() => handleUpdateOrder(order._id, 'delivered')} className="bg-green-600 text-white px-4 py-2">Mark as Delivered</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminOrders;
