import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/userSlice';
import { getAdminMessagesAPI } from '../../utils/api';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/admin/login');
      return;
    }

    fetchStats();
    fetchMessages();
  }, [user, navigate]);

  const fetchStats = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/stats', {
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async () => {
    try {
      const data = await getAdminMessagesAPI();
      if (Array.isArray(data)) {
        setMessages(data);
      } else if (data && data.messages) {
        setMessages(data.messages);
      }
    } catch {
      setMessages([]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#e3d1c4] dark:bg-[#e3d1c4] flex items-center justify-center">
        <div className="text-2xl text-[#8B4513]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e3d1c4] dark:bg-[#e3d1c4] py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-[#8B4513] mb-2 font-bold">Admin Dashboard</h1>
          <p className="text-text-secondary">Welcome back, {user?.firstName}!</p>
        </div>

        {stats && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-primary dark:bg-primary-dark rounded-xl shadow-lg border-2 border-[#6B3410] p-6">
                <h3 className="text-text-secondary text-sm mb-2">Total Users</h3>
                <p className="text-3xl font-bold text-[#8B4513]">{stats.stats.totalUsers}</p>
              </div>
              <div className="bg-primary dark:bg-primary-dark rounded-xl shadow-lg border-2 border-[#6B3410] p-6">
                <h3 className="text-text-secondary text-sm mb-2">Total Products</h3>
                <p className="text-3xl font-bold text-[#8B4513]">{stats.stats.totalProducts}</p>
              </div>
              <div className="bg-primary dark:bg-primary-dark rounded-xl shadow-lg border-2 border-[#6B3410] p-6">
                <h3 className="text-text-secondary text-sm mb-2">Total Orders</h3>
                <p className="text-3xl font-bold text-[#8B4513]">{stats.stats.totalOrders}</p>
              </div>
              <div className="bg-primary dark:bg-primary-dark rounded-xl shadow-lg border-2 border-[#6B3410] p-6">
                <h3 className="text-text-secondary text-sm mb-2">Total Revenue</h3>
                <p className="text-3xl font-bold text-[#8B4513]">${stats.stats.totalRevenue.toFixed(2)}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-primary dark:bg-primary-dark rounded-xl shadow-lg border-2 border-[#6B3410] p-6">
                <h2 className="text-2xl font-serif text-[#8B4513] mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => navigate('/admin/products')}
                    className="bg-[#8B4513] text-white px-6 py-3 rounded-lg border-2 border-[#6B3410] hover:bg-[#6B3410] transition-all"
                  >
                    Manage Products
                  </button>
                  <button
                    onClick={() => navigate('/admin/blogs')}
                    className="bg-[#8B4513] text-white px-6 py-3 rounded-lg border-2 border-[#6B3410] hover:bg-[#6B3410] transition-all"
                  >
                    Manage Blogs
                  </button>
                  <button
                    onClick={() => navigate('/admin/orders')}
                    className="bg-[#8B4513] text-white px-6 py-3 rounded-lg border-2 border-[#6B3410] hover:bg-[#6B3410] transition-all"
                  >
                    View Orders
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    className="bg-[#6B3410] text-white px-6 py-3 rounded-lg border-2 border-[#4a2410] hover:bg-[#4a2410] transition-all"
                  >
                    View Site
                  </button>
                </div>
              </div>

              <div className="bg-primary dark:bg-primary-dark rounded-xl shadow-lg border-2 border-[#6B3410] p-6">
                <h2 className="text-2xl font-serif text-[#8B4513] mb-4">Recent Orders</h2>
                <div className="space-y-3">
                  {stats.recentOrders.length === 0 ? (
                    <p className="text-text-secondary">No recent orders</p>
                  ) : (
                    stats.recentOrders.map((order) => (
                      <div key={order._id} className="border-b border-[#6B3410] pb-2">
                        <p className="text-sm text-text-secondary">
                          Order #{order._id.slice(-6)} - ${order.total.toFixed(2)}
                        </p>
                        <p className="text-xs text-text-secondary">{order.status}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <div className="lg:col-span-3 bg-primary dark:bg-primary-dark rounded-xl shadow-lg border-2 border-[#6B3410] p-6">
                <h2 className="text-2xl font-serif text-[#8B4513] mb-4">Contact Messages</h2>
                <div className="space-y-3">
                  {messages.length === 0 ? (
                    <p className="text-text-secondary">No messages</p>
                  ) : (
                    messages.slice(0, 10).map((m) => (
                      <div key={m._id || m.id} className="border-b border-[#6B3410] pb-2">
                        <p className="text-sm text-text-secondary">
                          {(m.name || `${m.user?.firstName || ''} ${m.user?.lastName || ''}`.trim())} — {m.email || m.user?.email || ''}
                        </p>
                        <p className="text-xs text-text-secondary">{new Date(m.createdAt || Date.now()).toLocaleString()}</p>
                        <p className="text-text-secondary mt-1">{m.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

