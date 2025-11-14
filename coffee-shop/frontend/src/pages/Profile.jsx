import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectUser, logout, updateUser } from '../store/userSlice';
import { updateMeAPI } from '../utils/api';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: user?.city || '',
    zipCode: user?.zipCode || '',
  });
  useEffect(() => {
    if (!user) return;
    setFormData({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      phone: user.phone || '',
      address: user.address || '',
      city: user.city || '',
      zipCode: user.zipCode || '',
    });
  }, [user]);

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen text-center">
        <h2 className="text-3xl font-serif text-text-secondary mb-4">Please Login</h2>
        <p className="text-text-secondary mb-8">You need to be logged in to view your profile.</p>
        <Link
          to="/login"
          className="inline-block bg-accent text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Login
        </Link>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      zipCode: formData.zipCode,
    };
    try {
      const data = await updateMeAPI(payload);
      if (data && data.user) {
        dispatch(updateUser(data.user));
        alert('Profile updated successfully!');
      }
    } catch (err) {
      alert('Failed to update profile');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-serif text-text-secondary mb-8">My Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-primary rounded-2xl shadow-2xl p-6 border-2 border-[#6B3410]/25">
            <h2 className="text-2xl font-serif text-text-primary mb-6">Personal Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-secondary mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-text-secondary mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                />
              </div>
              <div>
                <label className="block text-text-secondary mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                />
              </div>
              <div>
                <label className="block text-text-secondary mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-secondary mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary mb-2">Zip Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#8B4513] border-2 border-[#6B3410] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[#6B3410] hover:border-[#4a2410] hover:shadow-xl transition-all"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-primary rounded-2xl shadow-2xl p-6 mb-6 border-2 border-[#6B3410]/25">
            <h2 className="text-2xl font-serif text-text-primary mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                to="/orders"
                className="block w-full bg-secondary text-text-secondary px-4 py-3 rounded-lg border-2 border-[#6B3410]/20 hover:bg-[#e9dacf] transition-colors text-center"
              >
                My Orders
              </Link>
              <Link
                to="/wishlist"
                className="block w-full bg-secondary text-text-secondary px-4 py-3 rounded-lg border-2 border-[#6B3410]/20 hover:bg-[#e9dacf] transition-colors text-center"
              >
                My Wishlist
              </Link>
              <Link
                to="/cart"
                className="block w-full bg-secondary text-text-secondary px-4 py-3 rounded-lg border-2 border-[#6B3410]/20 hover:bg-[#e9dacf] transition-colors text-center"
              >
                Shopping Cart
              </Link>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-[#8B4513]/10 text-[#8B4513] border-2 border-[#6B3410]/25 px-4 py-3 rounded-xl hover:bg-[#8B4513]/20 hover:shadow-lg transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;