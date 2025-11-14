import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logout } from '../store/userSlice';
import { selectCartItemsCount } from '../store/cartSlice';
import { selectWishlistItems } from '../store/wishlistSlice';
import { selectUser } from '../store/userSlice';
import { toggleTheme, selectTheme } from '../store/themeSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const cartItemsCount = useAppSelector(selectCartItemsCount);
  const user = useAppSelector(selectUser);
  const wishlistItems = useAppSelector(selectWishlistItems);
  const theme = useAppSelector(selectTheme);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className="bg-[#8B4513] dark:bg-[#4a2410] shadow-xl border-b-2 border-[#6B3410] dark:border-[#2d1810] sticky top-0 z-50 animate-fadeIn">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#A0522D] via-[#8B4513] to-[#6B3410] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce-slow">
            <span className="text-2xl">☕</span>
          </div>
          <span className="text-2xl font-serif text-white font-bold group-hover:text-[#d4c4b0] transition-colors duration-300">The Coffee Shop</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">

          <nav className="flex space-x-6">
            <Link to="/" className="text-white hover:text-[#d4c4b0] transition-all duration-300 font-medium relative group py-2">
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A0522D] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/menu" className="text-white hover:text-[#d4c4b0] transition-all duration-300 font-medium relative group py-2">
              <span className="relative z-10">Menu</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A0522D] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/blog" className="text-white hover:text-[#d4c4b0] transition-all duration-300 font-medium relative group py-2">
              <span className="relative z-10">Blog</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A0522D] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-white hover:text-[#d4c4b0] transition-all duration-300 font-medium relative group py-2">
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A0522D] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="text-white hover:text-[#d4c4b0] transition-all duration-300 font-medium relative group py-2">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A0522D] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <form onSubmit={handleSearch} className="relative group">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/95 dark:bg-[#2d1810]/95 backdrop-blur-sm text-[#3d2817] dark:text-white border-2 border-white/40 dark:border-[#4a2410] rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#A0522D] focus:border-[#A0522D] w-64 transition-all duration-300 placeholder:text-[#6B4E3D] dark:placeholder:text-[#d4c4b0]"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8B4513] dark:text-[#A0522D] hover:text-[#6B3410] hover:scale-110 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="text-white hover:text-[#d4c4b0] transition-all duration-300 p-2 rounded-lg hover:bg-white/20 backdrop-blur-sm hover:scale-110"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <Link to="/wishlist" className="relative text-white hover:text-[#d4c4b0] transition-all duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#A0522D] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse-slow shadow-lg">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative text-white hover:text-[#d4c4b0] transition-all duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#A0522D] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse-slow shadow-lg">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <div className="relative">
              <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="text-white hover:text-[#d4c4b0] transition-all duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1a0f0a] border-2 border-[#d4c4b0] dark:border-[#4a2410] rounded-xl shadow-2xl py-2 z-10 animate-slideIn backdrop-blur-sm">
                  {user ? (
                    <>
                      <Link to="/profile" className="block px-4 py-2 text-sm text-[#3d2817] dark:text-white hover:bg-[#f5f1eb] dark:hover:bg-[#2d1810] transition-colors">Your Profile</Link>
                      <Link to="/orders" className="block px-4 py-2 text-sm text-[#3d2817] dark:text-white hover:bg-[#f5f1eb] dark:hover:bg-[#2d1810] transition-colors">My Orders</Link>
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-[#3d2817] dark:text-white hover:bg-[#f5f1eb] dark:hover:bg-[#2d1810] transition-colors">Logout</button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="block px-4 py-2 text-sm text-[#3d2817] dark:text-white hover:bg-[#f5f1eb] dark:hover:bg-[#2d1810] transition-colors">Login</Link>
                      <Link to="/signup" className="block px-4 py-2 text-sm text-[#3d2817] dark:text-white hover:bg-[#f5f1eb] dark:hover:bg-[#2d1810] transition-colors">Sign Up</Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-[#d4c4b0] transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#6B3410] dark:bg-[#2d1810] shadow-lg py-4 animate-slideIn border-t-2 border-[#4a2410] dark:border-[#1a0f0a]">
          <nav className="flex flex-col space-y-4 px-4">
            <Link to="/" className="text-white hover:text-[#d4c4b0] transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/menu" className="text-white hover:text-[#d4c4b0] transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link to="/blog" className="text-white hover:text-[#d4c4b0] transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/about" className="text-white hover:text-[#d4c4b0] transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="text-white hover:text-[#d4c4b0] transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="border-t border-[#4a2410] dark:border-[#1a0f0a] pt-4 mt-4">
              {user ? (
                <>
                  <Link to="/profile" className="block py-2 text-white hover:text-[#d4c4b0] transition-colors" onClick={() => setIsMenuOpen(false)}>Your Profile</Link>
                  <Link to="/orders" className="block py-2 text-white hover:text-[#d4c4b0] transition-colors" onClick={() => setIsMenuOpen(false)}>My Orders</Link>
                  <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="block w-full text-left py-2 text-white hover:text-[#d4c4b0] transition-colors">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block py-2 text-white hover:text-[#d4c4b0] transition-colors" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  <Link to="/signup" className="block py-2 text-white hover:text-[#d4c4b0] transition-colors" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                </>
              )}
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => dispatch(toggleTheme())}
                className="text-white hover:text-[#d4c4b0] transition-colors p-2 rounded-lg hover:bg-white/20 backdrop-blur-sm hover:scale-110"
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              >
                {theme === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;