// Backend API helper functions
const API_BASE = 'http://localhost:5000/api';

// Make authenticated request (cookie-based)
const authFetch = async (url, options = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  return fetch(`${API_BASE}${url}`, {
    ...options,
    headers,
    credentials: 'include'
  });
};

// Auth APIs
export const loginAPI = async (email, password) => {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include'
  });
  return response.json();
};

export const signupAPI = async (userData) => {
  const response = await fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
    credentials: 'include'
  });
  return response.json();
};

export const getMeAPI = async () => {
  const response = await authFetch('/auth/me');
  return response.json();
};

export const updateMeAPI = async (userData) => {
  const response = await authFetch('/auth/me', {
    method: 'PUT',
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const sendContactMessageAPI = async (payload) => {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  return response.json();
};

export const getAdminMessagesAPI = async () => {
  const response = await authFetch('/admin/messages');
  return response.json();
};

// Product APIs
export const getProductsAPI = async (search, category) => {
  const params = new URLSearchParams();
  if (search) params.append('search', search);
  if (category && category !== 'All') params.append('category', category);
  
  const response = await fetch(`${API_BASE}/products?${params}`);
  return response.json();
};

export const getProductByIdAPI = async (id) => {
  const response = await fetch(`${API_BASE}/products/${id}`);
  return response.json();
};

// Cart APIs
export const getCartAPI = async () => {
  const response = await authFetch('/cart');
  return response.json();
};

export const addToCartAPI = async (productId, quantity = 1) => {
  const response = await authFetch('/cart/add', {
    method: 'POST',
    body: JSON.stringify({ productId, quantity }),
  });
  return response.json();
};

export const updateCartItemAPI = async (itemId, quantity) => {
  const response = await authFetch(`/cart/update/${itemId}`, {
    method: 'PUT',
    body: JSON.stringify({ quantity }),
  });
  return response.json();
};

export const removeFromCartAPI = async (itemId) => {
  const response = await authFetch(`/cart/remove/${itemId}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const clearCartAPI = async () => {
  const response = await authFetch('/cart/clear', {
    method: 'DELETE',
  });
  return response.json();
};

// Order APIs
export const createOrderAPI = async (orderData) => {
  const response = await authFetch('/orders', {
    method: 'POST',
    body: JSON.stringify(orderData),
  });
  return response.json();
};

export const getUserOrdersAPI = async () => {
  const response = await authFetch('/orders');
  return response.json();
};

// Wishlist APIs
export const getWishlistAPI = async () => {
  const response = await authFetch('/wishlist');
  return response.json();
};

export const addToWishlistAPI = async (productId) => {
  const response = await authFetch('/wishlist/add', {
    method: 'POST',
    body: JSON.stringify({ productId }),
  });
  return response.json();
};

export const removeFromWishlistAPI = async (productId) => {
  const response = await authFetch(`/wishlist/remove/${productId}`, {
    method: 'DELETE',
  });
  return response.json();
};

// Blog APIs
export const getBlogsAPI = async () => {
  const response = await fetch(`${API_BASE}/blogs`, { credentials: 'include' });
  return response.json();
};

export const getBlogByIdAPI = async (id) => {
  const response = await fetch(`${API_BASE}/blogs/${id}`, { credentials: 'include' });
  return response.json();
};

export const getCategoriesAPI = async () => {
  const response = await fetch(`${API_BASE}/categories`, { credentials: 'include' });
  return response.json();
};

