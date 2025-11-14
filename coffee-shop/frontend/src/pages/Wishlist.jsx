import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectWishlistItems, removeFromWishlist } from '../store/wishlistSlice';
import { addToCart } from '../store/cartSlice';

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector(selectWishlistItems);

  if (wishlistItems.length === 0) {
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h2 className="text-3xl font-serif text-text-secondary mb-4">Your Wishlist is Empty</h2>
          <p className="text-text-secondary mb-8">Start adding your favorite coffees to your wishlist!</p>
          <Link
            to="/"
            className="inline-block bg-accent text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-serif text-text-secondary mb-8">My Wishlist</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-primary rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-6">
              <Link to={`/product/${item.id}`}>
                <h3 className="text-xl font-serif text-text-primary mb-2 hover:text-accent transition-colors">
                  {item.name}
                </h3>
              </Link>
              <p className="text-text-secondary text-sm mb-4 line-clamp-2">{item.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-accent text-lg font-semibold">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      dispatch(addToCart({ product: item }));
                      dispatch(removeFromWishlist(item.id));
                    }}
                    className="bg-accent text-primary px-4 py-2  hover:bg-[#8B4513] border-2 border-[#6B3410] hover:text-white rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 border-2 border-[#6B3410] rounded-lg"
                      fill="currentColor"
                      viewBox="-2.5 -3 29 29"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

