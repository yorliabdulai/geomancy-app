import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('/api/orders');
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  const handleUpdateOrder = async (id, status) => {
    await axios.put(`/api/orders/${id}`, { status });
    setOrders(orders.map(order => order.id === id ? { ...order, status } : order));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id} className="border p-4 mb-2">
            <h3 className="text-xl font-bold">{order.book.title}</h3>
            <p>{order.name}</p>
            <p>{order.email}</p>
            <p>{order.phone}</p>
            <p>{order.address}</p>
            <p>{order.deliveryInstructions}</p>
            <p>Status: {order.status}</p>
            <button onClick={() => handleUpdateOrder(order.id, 'shipped')} className="bg-blue-600 text-white px-4 py-2">Mark as Shipped</button>
            <button onClick={() => handleUpdateOrder(order.id, 'delivered')} className="bg-green-600 text-white px-4 py-2">Mark as Delivered</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminOrders;
