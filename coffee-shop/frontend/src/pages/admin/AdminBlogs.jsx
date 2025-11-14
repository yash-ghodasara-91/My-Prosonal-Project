import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/userSlice';

const AdminBlogs = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    image: null
  });

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/admin/login');
      return;
    }
    fetchBlogs();
  }, [user, navigate]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
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
      const url = editingBlog
        ? `http://localhost:5000/api/admin/blogs/${editingBlog._id}`
        : 'http://localhost:5000/api/admin/blogs';
      
      const method = editingBlog ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Authorization': `Bearer ${token}` },
        body: formDataToSend
      });

      if (response.ok) {
        fetchBlogs();
        setShowForm(false);
        setEditingBlog(null);
        setFormData({
          title: '',
          content: '',
          excerpt: '',
          author: '',
          image: null
        });
      }
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/admin/blogs/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        fetchBlogs();
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt,
      author: blog.author,
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
          <h1 className="text-4xl font-serif text-[#8B4513] font-bold">Manage Blogs</h1>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditingBlog(null);
              setFormData({
                title: '',
                content: '',
                excerpt: '',
                author: '',
                image: null
              });
            }}
            className="bg-[#8B4513] text-white px-6 py-3 rounded-lg border-2 border-[#6B3410] hover:bg-[#6B3410] transition-all"
          >
            {showForm ? 'Cancel' : 'Add Blog'}
          </button>
        </div>

        {showForm && (
          <div className="bg-primary dark:bg-primary-dark rounded-xl shadow-lg border-2 border-[#6B3410] p-6 mb-8">
            <h2 className="text-2xl font-serif text-[#8B4513] mb-4">
              {editingBlog ? 'Edit Blog' : 'Add New Blog'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-text-primary mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 bg-secondary rounded-lg border-2 border-[#6B3410] focus:border-[#8B4513] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-text-primary mb-2">Excerpt *</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-4 py-2 bg-secondary rounded-lg border-2 border-[#6B3410] focus:border-[#8B4513] focus:outline-none"
                  rows="2"
                  required
                />
              </div>
              <div>
                <label className="block text-text-primary mb-2">Content *</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-2 bg-secondary rounded-lg border-2 border-[#6B3410] focus:border-[#8B4513] focus:outline-none"
                  rows="6"
                  required
                />
              </div>
              <div>
                <label className="block text-text-primary mb-2">Author *</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-4 py-2 bg-secondary rounded-lg border-2 border-[#6B3410] focus:border-[#8B4513] focus:outline-none"
                  required
                />
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
              <button
                type="submit"
                className="bg-[#8B4513] text-white px-6 py-3 rounded-lg border-2 border-[#6B3410] hover:bg-[#6B3410] transition-all"
              >
                {editingBlog ? 'Update Blog' : 'Create Blog'}
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-primary dark:bg-primary-dark rounded-xl shadow-lg border-2 border-[#6B3410] p-6">
              {blog.image && (
                <img
                  src={`http://localhost:5000${blog.image}`}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-xl font-serif text-[#8B4513] mb-2">{blog.title}</h3>
              <p className="text-text-secondary text-sm mb-2">{blog.excerpt}</p>
              <p className="text-text-secondary text-xs mb-4">By {blog.author}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="flex-1 bg-[#8B4513] text-white px-4 py-2 rounded-lg hover:bg-[#6B3410] transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
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

export default AdminBlogs;

