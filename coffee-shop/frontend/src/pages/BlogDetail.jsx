import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBlogByIdAPI } from '../utils/api';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    setLoading(true);
    const data = await getBlogByIdAPI(id);
    setPost(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#e3d1c4] dark:bg-[#e3d1c4] flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-text-secondary text-xl">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#e3d1c4] dark:bg-[#e3d1c4] flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-text-secondary mb-4">Article not found</h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#8B4513] border-2 border-[#6B3410] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#6B3410] hover:border-[#4a2410] transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e3d1c4] dark:bg-[#e3d1c4] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6 flex items-center gap-2 text-sm text-text-secondary">
          <span>{new Date(post.date || post.createdAt).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <h1 className="text-5xl font-serif text-text-primary mb-4">{post.title}</h1>
        {post.image && (
          <div className="mb-6">
            <img 
              src={`http://localhost:5000${post.image}`} 
              alt={post.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}
        <p className="text-lg text-text-secondary leading-8 bg-primary rounded-2xl p-6 border border-border whitespace-pre-line">
          {post.content}
        </p>
        <div className="mt-8">
          <Link
            to="/blog"
            className="text-accent hover:text-accent-hover font-semibold"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
