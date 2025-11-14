import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectCartItems, selectCartTotal, setCartItems } from '../store/cartSlice';
import { selectUser } from '../store/userSlice';
import { createOrderAPI } from '../utils/api';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const user = useAppSelector(selectUser);

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: user?.city || '',
    zipCode: user?.zipCode || '',
    paymentMethod: 'card',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!user) {
      alert('Please login to proceed to checkout!');
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData.cardName.trim()) newErrors.cardName = 'Card name is required';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      (async () => {
        try {
          await createOrderAPI({
            shipping: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              phone: formData.phone,
              address: formData.address,
              city: formData.city,
              zipCode: formData.zipCode,
            },
            paymentMethod: formData.paymentMethod,
          });
        } catch (e) {
          console.warn(e);
        }
        dispatch(setCartItems([]));
        navigate('/orders');
      })();
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen text-center">
        <h2 className="text-3xl font-serif text-text-secondary mb-4">Your Cart is Empty</h2>
        <p className="text-text-secondary mb-8">Add items to your cart before checkout.</p>
        <Link
          to="/"
          className="inline-block bg-accent text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-serif text-text-secondary mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Information */}
          <div className="bg-primary rounded-2xl shadow-2xl p-6 border-2 border-[#6B3410]/25">
            <h2 className="text-2xl font-serif text-text-primary mb-6">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-text-secondary mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513] ${errors.firstName ? 'border-red-500' : ''}`}
                />
                {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-text-secondary mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513] ${errors.lastName ? 'border-red-500' : ''}`}
                />
                {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
              </div>
              <div>
                <label className="block text-text-secondary mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513] ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-text-secondary mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513] ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block text-text-secondary mb-2">Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513] ${errors.address ? 'border-red-500' : ''}`}
                />
                {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address}</p>}
              </div>
              <div>
                <label className="block text-text-secondary mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513] ${errors.city ? 'border-red-500' : ''}`}
                />
                {errors.city && <p className="text-red-400 text-sm mt-1">{errors.city}</p>}
              </div>
              <div>
                <label className="block text-text-secondary mb-2">Zip Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513] ${errors.zipCode ? 'border-red-500' : ''}`}
                />
                {errors.zipCode && <p className="text-red-400 text-sm mt-1">{errors.zipCode}</p>}
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-primary rounded-2xl shadow-2xl p-6 border-2 border-[#6B3410]/25">
            <h2 className="text-2xl font-serif text-text-primary mb-6">Payment Method</h2>
            <div className="space-y-4 mb-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleChange}
                  className="mr-3"
                />
                <span className="text-text-primary">Credit/Debit Card</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === 'cash'}
                  onChange={handleChange}
                  className="mr-3"
                />
                <span className="text-text-primary">Cash on Delivery</span>
              </label>
            </div>

            {formData.paymentMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-text-secondary mb-2">Card Number *</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    className={`w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513] ${errors.cardNumber ? 'border-red-500' : ''}`}
                  />
                  {errors.cardNumber && <p className="text-red-400 text-sm mt-1">{errors.cardNumber}</p>}
                </div>
                <div>
                  <label className="block text-text-secondary mb-2">Cardholder Name *</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513] ${errors.cardName ? 'border-red-500' : ''}`}
                  />
                  {errors.cardName && <p className="text-red-400 text-sm mt-1">{errors.cardName}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-secondary mb-2">Expiry Date *</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      maxLength="5"
                      className={`w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513] ${errors.expiryDate ? 'border-red-500' : ''}`}
                    />
                    {errors.expiryDate && <p className="text-red-400 text-sm mt-1">{errors.expiryDate}</p>}
                  </div>
                  <div>
                    <label className="block text-text-secondary mb-2">CVV *</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      maxLength="3"
                      className={`w-full px-4 py-2 bg-secondary text-text-secondary rounded-lg border-2 border-[#6B3410]/25 focus:outline-none focus:ring-2 focus:ring-[#8B4513] ${errors.cvv ? 'border-red-500' : ''}`}
                    />
                    {errors.cvv && <p className="text-red-400 text-sm mt-1">{errors.cvv}</p>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-primary rounded-2xl shadow-2xl p-6 sticky top-4 border-2 border-[#6B3410]/25">
            <h2 className="text-2xl font-serif text-text-primary mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-text-secondary">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-gray-700 pt-4 space-y-2">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Tax</span>
                  <span>${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between text-text-primary text-xl font-semibold">
                    <span>Total</span>
                    <span>${(cartTotal * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#8B4513] border-2 border-[#6B3410] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#6B3410] hover:border-[#4a2410] hover:shadow-xl transition-all"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

