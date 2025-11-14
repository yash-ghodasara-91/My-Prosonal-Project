import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (loginError) setLoginError('');
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          setLoginError(data.message || 'Login failed');
          return;
        }

        // Save token
        localStorage.setItem('token', data.token);
        
        // Update Redux store
        dispatch(login(data.user));
        navigate('/');
      } catch (error) {
        setLoginError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#e3d1c4] dark:bg-[#e3d1c4] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-accent to-accent-hover shadow-lg mb-4">
            <span className="text-3xl">☕</span>
          </div>
          <h1 className="text-5xl font-serif text-text-primary dark:text-text-primary-dark mb-3 font-bold">
            Welcome Back
          </h1>
          <p className="text-text-secondary dark:text-text-secondary-dark text-lg">
            Login to continue your coffee journey
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-primary dark:bg-primary-dark rounded-2xl shadow-2xl border border-border dark:border-border-dark p-8 md:p-10">
          {loginError && (
            <div className="bg-red-500/20 border-2 border-red-500 text-red-500 px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
              <span>⚠</span> {loginError}
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
                placeholder="your.email@example.com"
                className={`w-full px-4 py-3 bg-secondary dark:bg-secondary-dark text-text-primary dark:text-text-primary-dark rounded-xl border-2 transition-all ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-border dark:border-border-dark focus:border-accent focus:ring-2 focus:ring-accent/20'
                } focus:outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                  <span>⚠</span> {errors.email}
                </p>
              )}
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
                className={`w-full px-4 py-3 bg-secondary dark:bg-secondary-dark text-text-primary dark:text-text-primary-dark rounded-xl border-2 transition-all ${
                  errors.password
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-border dark:border-border-dark focus:border-accent focus:ring-2 focus:ring-accent/20'
                } focus:outline-none`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                  <span>⚠</span> {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#8B4513] text-white px-6 py-4 rounded-xl text-lg font-bold border-2 border-[#6B3410] hover:bg-[#6B3410] hover:border-[#4a2410] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-6 transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-text-secondary dark:text-text-secondary-dark">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-accent font-semibold hover:text-accent-hover transition-colors underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;