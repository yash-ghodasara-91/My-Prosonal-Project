import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/userSlice';

const AdminOrders = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/admin/login');
      return;
    }
    fetchOrders();
  }, [user, navigate]);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/orders', {
        credentials: 'include'
      });
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        fetchOrders();
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-[#e3d1c4] flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#e3d1c4] dark:bg-[#e3d1c4] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-[#8B4513] mb-8 font-bold">Manage Orders</h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="bg-primary dark:bg-primary-dark rounded-xl shadow-lg border-2 border-[#6B3410] p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-serif text-[#8B4513]">Order #{order._id.slice(-6)}</h3>
                  <p className="text-text-secondary text-sm">
                    {order.user?.firstName} {order.user?.lastName} - {order.user?.email}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#8B4513]">${order.total.toFixed(2)}</p>
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                    className="mt-2 px-4 py-2 bg-secondary rounded-lg border-2 border-[#6B3410] focus:border-[#8B4513] focus:outline-none"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-[#6B3410] pt-4">
                <h4 className="font-semibold text-text-primary mb-2">Items:</h4>
                <div className="space-y-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-text-secondary">
                      <span>{item.name} x {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#6B3410] pt-4 mt-4">
                <h4 className="font-semibold text-text-primary mb-2">Shipping Address:</h4>
                <p className="text-text-secondary text-sm">
                  {order.shipping?.address}, {order.shipping?.city}, {order.shipping?.zipCode}
                </p>
              </div>
            </div>
          ))}
        </div>

        {orders.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-secondary text-xl">No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;

