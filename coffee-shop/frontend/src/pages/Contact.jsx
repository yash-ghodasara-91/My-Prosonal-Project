import { useState, useEffect } from 'react';
import { useAppSelector } from '../store/hooks';
import { selectUser } from '../store/userSlice';
import { sendContactMessageAPI } from '../utils/api';

const Contact = () => {
  const user = useAppSelector(selectUser);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: `${user?.firstName || ''} ${user?.lastName || ''}`.trim(),
        email: user?.email || '',
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name || `${user?.firstName || ''} ${user?.lastName || ''}`.trim(),
      email: formData.email || user?.email || '',
      message: formData.message,
      userId: user?._id || user?.id || undefined,
    };
    try {
      const data = await sendContactMessageAPI(payload);
      if (data) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch {
      setSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e3d1c4] dark:bg-[#e3d1c4] py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-text-primary dark:text-text-primary-dark mb-4 font-bold">
            Contact Us
          </h1>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            Have a question or feedback? We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Get in Touch */}
          <div>
            <div className="bg-primary dark:bg-primary-dark rounded-2xl shadow-xl border-2 border-border dark:border-border-dark p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center shadow-lg">
                  <span className="text-2xl">☕</span>
                </div>
                <h2 className="text-3xl font-serif text-text-primary dark:text-text-primary-dark font-bold">
                  Get in Touch
                </h2>
              </div>
              
              <p className="text-text-secondary dark:text-text-secondary-dark mb-8 leading-relaxed">
                We're here to help! Whether you have a question about our products, need assistance with an order, or just want to share your coffee experience, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary dark:hover:bg-secondary-dark transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-primary dark:text-text-primary-dark font-bold mb-1">Email</p>
                    <a href="mailto:info@coffeeshop.com" className="text-accent hover:text-accent-hover transition-colors">
                      info@coffeeshop.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary dark:hover:bg-secondary-dark transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-primary dark:text-text-primary-dark font-bold mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-accent hover:text-accent-hover transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary dark:hover:bg-secondary-dark transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-primary dark:text-text-primary-dark font-bold mb-1">Address</p>
                    <p className="text-text-secondary dark:text-text-secondary-dark">
                      123 Coffee Street<br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary dark:hover:bg-secondary-dark transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-primary dark:text-text-primary-dark font-bold mb-1">Business Hours</p>
                    <p className="text-text-secondary dark:text-text-secondary-dark">
                      Monday - Saturday: 7AM - 9PM<br />
                      Sunday: 8AM - 8PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-primary dark:bg-primary-dark rounded-2xl shadow-xl border-2 border-border dark:border-border-dark p-8 h-full">
              <h2 className="text-3xl font-serif text-text-primary dark:text-text-primary-dark mb-6 font-bold">
                Send us a Message
              </h2>

              {submitted && (
                <div className="bg-green-500/20 border-2 border-green-500 text-green-600 dark:text-green-400 px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-text-primary dark:text-text-primary-dark font-semibold mb-2 text-sm">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required={!user}
                    className="w-full px-4 py-3 bg-secondary dark:bg-secondary-dark text-text-primary dark:text-text-primary-dark rounded-xl border-2 border-border dark:border-border-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text-primary dark:text-text-primary-dark font-semibold mb-2 text-sm">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required={!user}
                    className="w-full px-4 py-3 bg-secondary dark:bg-secondary-dark text-text-primary dark:text-text-primary-dark rounded-xl border-2 border-border dark:border-border-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-primary dark:text-text-primary-dark font-semibold mb-2 text-sm">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                    className="w-full px-4 py-3 bg-secondary dark:bg-secondary-dark text-text-primary dark:text-text-primary-dark rounded-xl border-2 border-border dark:border-border-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent via-accent-light to-accent-hover text-[#8B4513] hover:text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 border-2 border-[#6B3410] hover:bg-[#6B3410] hover:border-[#4a2410] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-6 transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;