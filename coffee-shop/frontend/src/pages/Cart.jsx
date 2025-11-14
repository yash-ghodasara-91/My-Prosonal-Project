import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectCartItems, selectCartTotal, removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';
import { selectUser } from '../store/userSlice';

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const user = useAppSelector(selectUser);

  const handleCheckout = () => {
    if (!user) {
      alert('Please login to proceed to checkout!');
      navigate('/login');
      return;
    }
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h2 className="text-3xl font-serif text-text-secondary mb-4">Your Cart is Empty</h2>
          <p className="text-text-secondary mb-8">Start adding some delicious coffee to your cart!</p>
          <Link
            to="/"
            className="inline-block bg-accent text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-serif text-text-secondary mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-primary rounded-lg shadow-lg p-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-6 border-b border-gray-700 last:border-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-text-primary mb-2">{item.name}</h3>
                  <p className="text-text-secondary text-sm mb-2">{item.description}</p>
                  <p className="text-accent text-lg font-semibold">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-600 rounded-lg">
                  <button
                    onClick={() => dispatch(updateQuantity({ productId: item.id, quantity: item.quantity - 1 }))}
                    className="px-3 py-2 text-text-primary hover:bg-gray-700 transition-colors"
                  >
                    −
                  </button>
                    <span className="px-4 py-2 text-text-primary">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(updateQuantity({ productId: item.id, quantity: item.quantity + 1 }))}
                      className="px-3 py-2 text-text-primary hover:bg-gray-700 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-text-primary text-lg font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <button
                onClick={() => dispatch(clearCart())}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-primary rounded-lg shadow-lg p-6 sticky top-4">
            <h2 className="text-2xl font-serif text-text-primary mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
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
            <button
              onClick={handleCheckout}
              className="block w-full bg-accent text-primary text-center px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors mb-4"
            >
              Proceed to Checkout
            </button>
            <Link
              to="/"
              className="block w-full text-center text-text-primary hover:text-accent transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

