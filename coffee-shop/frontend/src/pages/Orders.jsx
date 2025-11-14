import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUserOrdersAPI } from '../utils/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getUserOrdersAPI();
        setOrders(data || []);
      } catch {
        setOrders([]);
      }
    };
    fetchOrders();
  }, []);

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-2xl mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h2 className="text-3xl font-serif text-text-secondary mb-4">No Orders Yet</h2>
          <p className="text-text-secondary mb-8">Start shopping to see your orders here!</p>
          <Link
            to="/"
            className="inline-block bg-accent text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-serif text-text-secondary mb-8">My Orders</h1>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order._id || order.id} className="bg-primary rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-4 border-b border-gray-700">
              <div>
                <h3 className="text-xl font-serif text-text-primary mb-2">
                  Order #{(order._id || order.id).toString().slice(-8).toUpperCase()}
                </h3>
                <p className="text-text-secondary text-sm">
                  {new Date(order.createdAt || order.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                  (order.status || 'confirmed') === 'confirmed' 
                    ? 'bg-green-500/20 text-green-400' 
                    : (order.status || '') === 'shipped'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {((order.status || 'confirmed')).charAt(0).toUpperCase() + ((order.status || 'confirmed')).slice(1)}
                </span>
                <p className="text-text-primary text-xl font-semibold mt-2">
                  ${Number(order.total || 0).toFixed(2)}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-text-primary font-semibold mb-2">Items:</h4>
              <div className="space-y-2">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-text-secondary">
                    <span>{(item.name || item.product?.name)} x {item.quantity}</span>
                    <span>${(Number(item.price || item.product?.price || 0) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <h4 className="text-text-primary font-semibold mb-2">Shipping Address:</h4>
              <p className="text-text-secondary text-sm">
                {order.shipping?.firstName} {order.shipping?.lastName}<br />
                {order.shipping?.address}<br />
                {order.shipping?.city}, {order.shipping?.zipCode}<br />
                {order.shipping?.email} | {order.shipping?.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

