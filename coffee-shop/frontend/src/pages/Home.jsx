import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProductsAPI } from '../utils/api';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, searchQuery]);

  const fetchProducts = async () => {
    setLoading(true);
    const products = await getProductsAPI(searchQuery, selectedCategory);
    
    // Extract unique categories
    const uniqueCategories = ['All', ...new Set(products.map(p => p.category))];
    setCategories(uniqueCategories);
    
    setFilteredProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  return (
    <main className="bg-[#e3d1c4]">
      <section className="relative text-text-primary py-32 overflow-hidden">
        <div className="absolute inset-0 z-10" aria-hidden="true">
          <picture>
            <source media="(min-width: 2560px)" srcSet="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=3840&auto=format&fit=crop" />
            <source media="(min-width: 1280px)" srcSet="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2560&auto=format&fit=crop" />
            <source media="(min-width: 768px)" srcSet="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1920&auto=format&fit=crop" />
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1280&auto=format&fit=crop"
              alt="Coffee background"
              className="h-full w-full object-cover blur-[5px] md:blur-[3px] scale-110"
              loading="eager"
              decoding="async"
            />
          </picture>
          <div className="pointer-events-none absolute top-0 inset-x-0 h-24 backdrop-blur-[4px]" />
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 backdrop-blur-[4px]" />
        </div>

        <div className="container mx-auto text-center px-4 z-10 relative">
          <h2 className="text-6xl text-white font-serif mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">Awaken Your Senses</h2>
          <p className="text-xl text-white mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">Experience the art of coffee like never before.</p>
          <a
            href="#products"
            className="bg-[#8B4513] border-2 border-[#6B3410] text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-[#6B3410] hover:border-[#4a2410] hover:shadow-xl transition-all inline-block"
          >
            Explore Our Blends
          </a>
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-serif text-center text-text-secondary mb-8">Our Products</h3>

          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 border-2 border-border dark:border-border-dark rounded-lg">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pb-5 bg-primary text-text-primary rounded-lg focus:outline-none focus:ring-3 focus:ring-accent"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-3 pt-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-1 rounded-full font-semibold whitespace-nowrap transition-colors ${selectedCategory === category
                        ? 'bg-accent text-primary border-2 border-border dark:border-border-dark'
                        : 'bg-primary text-text-dark  hover:bg-[#8B4513] hover:text-white'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-text-secondary text-center">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          {loading ? (
            <div className="text-center py-16">
              <p className="text-text-secondary text-xl">Loading products...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-secondary text-xl mb-4">No products found</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-accent hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
