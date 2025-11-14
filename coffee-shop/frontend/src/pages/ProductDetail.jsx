import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductByIdAPI, addToCartAPI, addToWishlistAPI, removeFromWishlistAPI, getWishlistAPI } from '../utils/api';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart } from '../store/cartSlice';
import { selectUser } from '../store/userSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    fetchProduct();
    if (user) {
      checkWishlist();
    }
  }, [id, user]);

  const fetchProduct = async () => {
    setLoading(true);
    const data = await getProductByIdAPI(id);
    setProduct(data);
    setLoading(false);
  };

  const checkWishlist = async () => {
    const wishlist = await getWishlistAPI();
    if (wishlist && wishlist.products) {
      const found = wishlist.products.some(p => p._id === id || p === id);
      setIsInWishlist(found);
  }
  };

  const handleAddToCart = async () => {
    if (!user) {
      alert('Please login to add items to cart!');
      navigate('/login');
      return;
    }
    
    await addToCartAPI(id, quantity);
    dispatch(addToCart({ product, quantity }));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleWishlistToggle = async () => {
    if (!user) {
      alert('Please login to add items to wishlist!');
      navigate('/login');
      return;
    }

    if (isInWishlist) {
      await removeFromWishlistAPI(id);
      setIsInWishlist(false);
    } else {
      await addToWishlistAPI(id);
      setIsInWishlist(true);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <p className="text-text-secondary text-xl">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-serif text-text-secondary mb-4">Product not found</h2>
        <Link to="/" className="text-accent hover:underline">Go back to home</Link>
      </div>
    );
    }

  const productImage = product.image 
    ? (product.image.startsWith('http') ? product.image : `http://localhost:5000${product.image}`)
    : 'https://images.unsplash.com/photo-1511920170033-f8396924c348';

  return (
    <div className="container mx-auto py-16 px-4 min-h-screen bg-[#e3d1c4] dark:bg-[#e3d1c4]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <img
            src={productImage}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-text-secondary text-sm">{product.category}</span>
            {product.inStock && (
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                In Stock
              </span>
            )}
          </div>
          <h2 className="text-4xl font-serif text-text-primary mb-4">{product.name}</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating || 0)
                      ? 'text-yellow-400'
                      : 'text-gray-400'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-text-secondary">
              {product.rating || 0} ({product.reviews || 0} reviews)
            </span>
          </div>
          <p className="text-accent text-3xl font-semibold mb-6">${product.price.toFixed(2)}</p>
          <p className="text-text-secondary mb-8 leading-relaxed">{product.description}</p>

          <div className="mb-6">
            <label className="block text-text-secondary mb-2">Quantity</label>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-600 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-text-primary hover:bg-gray-700 transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 text-text-primary">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-text-primary hover:bg-gray-700 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#8B4513] border-2 border-[#6B3410] text-white px-10 py-4 rounded-xl text-xl font-semibold hover:bg-[#6B3410] hover:border-[#4a2410] transition-all"
            >
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>
            <button
              onClick={handleWishlistToggle}
              className={`px-6 py-4 rounded-xl transition-colors ${
                isInWishlist
                  ? 'bg-red-500/20 text-red-400'
                  : 'bg-gray-700 text-text-primary hover:bg-gray-600'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
          </div>

          {addedToCart && (
            <Link
              to="/cart"
              className="block text-center text-accent hover:underline mb-4"
            >
              View Cart →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
