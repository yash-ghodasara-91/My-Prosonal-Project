import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/userSlice';

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      if (data.user.role !== 'admin') {
        setError('Access denied. Admin only.');
        return;
      }

      // Save token and user
      localStorage.setItem('token', data.token);
      dispatch(login(data.user));
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#e3d1c4] dark:bg-[#e3d1c4] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[#A0522D] via-[#8B4513] to-[#6B3410] flex items-center justify-center shadow-xl mb-4">
            <span className="text-3xl">☕</span>
          </div>
          <h1 className="text-5xl font-serif text-text-primary dark:text-text-primary-dark mb-3 font-bold">
            Admin Login
          </h1>
          <p className="text-text-secondary dark:text-text-secondary-dark text-lg">
            Access admin dashboard
          </p>
        </div>

        <div className="bg-primary dark:bg-primary-dark rounded-2xl shadow-2xl border-2 border-[#6B3410] dark:border-[#6B3410] p-8 md:p-10">
          {error && (
            <div className="bg-red-500/20 border-2 border-red-500 text-red-500 px-4 py-3 rounded-xl mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-text-primary dark:text-text-primary-dark font-semibold mb-2 text-sm">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@coffeeshop.com"
                className="w-full px-4 py-3 bg-secondary dark:bg-secondary-dark text-text-primary dark:text-text-primary-dark rounded-xl border-2 border-[#6B3410] dark:border-[#6B3410] focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 focus:outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-text-primary dark:text-text-primary-dark font-semibold mb-2 text-sm">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-secondary dark:bg-secondary-dark text-text-primary dark:text-text-primary-dark rounded-xl border-2 border-[#6B3410] dark:border-[#6B3410] focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 focus:outline-none transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#8B4513] text-white px-6 py-4 rounded-xl text-lg font-bold border-2 border-[#6B3410] hover:bg-[#6B3410] hover:border-[#4a2410] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-6"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

