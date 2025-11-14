import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogsAPI } from '../utils/api';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    const blogs = await getBlogsAPI();
    setBlogPosts(blogs);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#e3d1c4] dark:bg-[#e3d1c4] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-text-primary dark:text-text-primary-dark mb-4 font-bold">
            Coffee Blog
          </h1>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            Stay updated with the latest coffee trends, brewing tips, and stories from the coffee world.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <p className="text-text-secondary dark:text-text-secondary-dark text-xl">Loading blogs...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post._id}
                className="bg-primary dark:bg-primary-dark rounded-2xl shadow-lg border border-border dark:border-border-dark overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {post.image ? (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={`http://localhost:5000${post.image}`} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center">
                    <span className="text-6xl">☕</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark mb-3">
                    <span>{new Date(post.date || post.createdAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <Link to={`/blog/${post._id}`} className="block">
                    <h2 className="text-2xl font-serif text-text-primary dark:text-text-primary-dark mb-3 font-bold hover:underline">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-text-secondary dark:text-text-secondary-dark mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post._id}`}
                    className="text-accent hover:text-accent-hover  hover:bg-[#8B4513] border-2 border-[#6B3410] px-3 py-1 hover:text-white rounded-lg  font-semibold transition-colors inline-flex items-center"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && blogPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-secondary dark:text-text-secondary-dark text-xl">No blog posts available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
