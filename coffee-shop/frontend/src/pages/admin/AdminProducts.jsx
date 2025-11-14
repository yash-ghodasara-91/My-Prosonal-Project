import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/userSlice';

const AdminProducts = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    inStock: true,
    image: null
  });

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/admin/login');
      return;
    }
    fetchProducts();
  }, [user, navigate]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formDataToSend = new FormData();
    
    Object.keys(formData).forEach(key => {
      if (key !== 'image') {
        formDataToSend.append(key, formData[key]);
      }
    });
    
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      const url = editingProduct
        ? `http://localhost:5000/api/admin/products/${editingProduct._id}`
        : 'http://localhost:5000/api/admin/products';
      
      const method = editingProduct ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Authorization': `Bearer ${token}` },
        body: formDataToSend
      });

      if (response.ok) {
        fetchProducts();
        setShowForm(false);
        setEditingProduct(null);
        setFormData({
          name: '',
          description: '',
          price: '',
          category: '',
          inStock: true,
          image: null
        });
      }
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/admin/products/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        fetchProducts();
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      inStock: product.inStock,
      image: null
    });
    setShowForm(true);
  };

  if (loading) {
    return <div className="min-h-screen bg-[#e3d1c4] flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#e3d1c4] dark:bg-[#e3d1c4] py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-serif text-[#8B4513] font-bold">Manage Products</h1>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditingProduct(null);
              setFormData({
                name: '',
                description: '',
                price: '',
                category: '',
                inStock: true,
                image: null
              });
            }}
            className="bg-[#8B4513] text-white px-6 py-3 rounded-lg border-2 border-[#6B3410] hover:bg-[#6B3410] transition-all"
          >
            {showForm ? 'Cancel' : 'Add Product'}
          </button>
        </div>

        {showForm && (
          <div className="bg-primary dark:bg-primary-dark rounded-xl shadow-lg border-2 border-[#6B3410] p-6 mb-8">
            <h2 className="text-2xl font-serif text-[#8B4513] mb-4">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-text-primary mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-secondary rounded-lg border-2 border-[#6B3410] focus:border-[#8B4513] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-text-primary mb-2">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 bg-secondary rounded-lg border-2 border-[#6B3410] focus:border-[#8B4513] focus:outline-none"
                  rows="3"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-primary mb-2">Price *</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-2 bg-secondary rounded-lg border-2 border-[#6B3410] focus:border-[#8B4513] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-text-primary mb-2">Category *</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 bg-secondary rounded-lg border-2 border-[#6B3410] focus:border-[#8B4513] focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-text-primary mb-2">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                  className="w-full px-4 py-2 bg-secondary rounded-lg border-2 border-[#6B3410] focus:border-[#8B4513] focus:outline-none"
                />
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.inStock}
                    onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                    className="mr-2"
                  />
                  <span className="text-text-primary">In Stock</span>
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#8B4513] text-white px-6 py-3 rounded-lg border-2 border-[#6B3410] hover:bg-[#6B3410] transition-all"
              >
                {editingProduct ? 'Update Product' : 'Create Product'}
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-primary dark:bg-primary-dark rounded-xl shadow-lg border-2 border-[#6B3410] p-6">
              <img
                src={product.image ? `http://localhost:5000${product.image}` : '/images/placeholder.png'}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-serif text-[#8B4513] mb-2">{product.name}</h3>
              <p className="text-text-secondary text-sm mb-2">${product.price}</p>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEdit(product)}
                  className="flex-1 bg-[#8B4513] text-white px-4 py-2 rounded-lg hover:bg-[#6B3410] transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;

