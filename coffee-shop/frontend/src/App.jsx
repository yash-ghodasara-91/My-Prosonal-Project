import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { login } from './store/userSlice';
import { setWishlistItems } from './store/wishlistSlice';
import { getMeAPI, getWishlistAPI } from './utils/api';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Orders from './pages/Orders';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminBlogs from './pages/admin/AdminBlogs';
import AdminOrders from './pages/admin/AdminOrders';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = async () => {
      try {
        const data = await getMeAPI();
        if (data && data.user) {
          dispatch(login(data.user));
          try {
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
          } catch {}
        }
      } catch (e) {
        console.warn(e);
      }
    };
    init();
  }, [dispatch]);

  return (
    <Router>
      <div className="bg-[#e3d1c4] dark:bg-[#e3d1c4] font-sans min-h-screen flex flex-col transition-colors duration-300">
        <Header />
        <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin/products" element={<AdminProducts />} />
                  <Route path="/admin/blogs" element={<AdminBlogs />} />
                  <Route path="/admin/orders" element={<AdminOrders />} />
                </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
