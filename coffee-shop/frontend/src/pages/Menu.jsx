import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProductsAPI } from '../utils/api';

const Menu = () => {
  const [searchParams] = useSearchParams();
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

  return (
    <div className="min-h-screen bg-[#e3d1c4] dark:bg-[#e3d1c4] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-text-primary dark:text-text-primary-dark mb-4 font-bold">
            Our Menu
          </h1>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            Discover our wide selection of premium coffees, teas, and delicious pastries. 
            Each item is carefully crafted to provide you with the perfect coffee experience.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-primary dark:bg-primary-dark text-text-primary dark:text-text-primary-dark border-2 border-border dark:border-border-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-accent text-[#8B4513] shadow-lg'
                      : 'bg-primary dark:bg-primary-dark text-text-primary dark:text-text-primary-dark border-2 border-border dark:border-border-dark hover:border-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <p className="text-text-secondary dark:text-text-secondary-dark text-center">
            Showing {filteredProducts.length} item{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <p className="text-text-secondary dark:text-text-secondary-dark text-xl">Loading menu...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-text-secondary dark:text-text-secondary-dark text-xl mb-4">No items found</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-accent hover:text-accent-hover underline"
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
    </div>
  );
};

export default Menu;
