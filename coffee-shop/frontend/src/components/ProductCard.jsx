import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setCartItems } from '../store/cartSlice';
import { addToCartAPI, getCartAPI } from '../utils/api';
import { setWishlistItems, selectIsInWishlist } from '../store/wishlistSlice';
import { addToWishlistAPI, removeFromWishlistAPI, getWishlistAPI } from '../utils/api';
import { selectUser } from '../store/userSlice';

const ProductCard = ({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const productId = product._id || product.id;
  const isInWishlist = useAppSelector(selectIsInWishlist(productId));
  const user = useAppSelector(selectUser);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      alert('Please login to add items to cart!');
      navigate('/login');
      return;
    }
    await addToCartAPI(productId, 1);
    const cart = await getCartAPI();
    if (cart && cart.items) {
      const mapped = cart.items.map(ci => ({
        id: ci.product._id,
        name: ci.product.name,
        description: ci.product.description,
        price: ci.product.price,
        image: ci.product.image?.startsWith('http') ? ci.product.image : (ci.product.image ? `http://localhost:5000${ci.product.image}` : 'https://images.unsplash.com/photo-1511920170033-f8396924c348'),
        quantity: ci.quantity,
        cartItemId: ci._id
      }));
      dispatch(setCartItems(mapped));
    }
  };

  const handleWishlistToggle = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      alert('Please login to add items to wishlist!');
      navigate('/login');
      return;
    }
    if (isInWishlist) {
      await removeFromWishlistAPI(productId);
    } else {
      await addToWishlistAPI(productId);
    }
    const wishlist = await getWishlistAPI();
    if (wishlist && wishlist.products) {
      const mapped = wishlist.products.map(p => ({
        id: p._id,
        name: p.name,
        description: p.description,
        price: p.price,
        image: p.image?.startsWith('http') ? p.image : (p.image ? `http://localhost:5000${p.image}` : 'https://images.unsplash.com/photo-1511920170033-f8396924c348'),
      }));
      dispatch(setWishlistItems(mapped));
    }
  };

  return (
    <div className="bg-primary rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative">
      <Link to={`/product/${product._id || product.id}`}>
        <div className="relative">
          <img 
            src={product.image 
              ? (product.image.startsWith('http') ? product.image : `http://localhost:5000${product.image}`)
              : 'https://images.unsplash.com/photo-1511920170033-f8396924c348'
            } 
            alt={product.name} 
            className="w-full h-64 object-cover" 
          />
          {product.inStock && (
            <span className="absolute top-2 right-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
              In Stock
            </span>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-text-secondary text-xs">{product.category}</span>
            <div className="flex items-center gap-1">
              <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-text-secondary text-xs">{product.rating}</span>
            </div>
          </div>
          <h4 className="text-xl font-serif text-text-primary mb-2">{product.name}</h4>
          <p className="text-text-secondary text-sm mb-4 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-accent font-semibold text-lg">${product.price.toFixed(2)}</p>
            <div className="flex items-center gap-2">
              <button
                onClick={handleWishlistToggle}
                className={`p-2 rounded-lg transition-colors ${isInWishlist
                    ? 'text-red-400 bg-red-500/20'
                    : 'text-text-primary hover:bg-[#8B4513] border-2 border-[#6B3410] hover:text-white'
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill={isInWishlist ? 'currentColor' : 'none'}
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
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-accent hover:bg-[#8B4513] hover:text-white border-2 border-[#6B3410] text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;