const products = [
  // Hot Coffee
  {
    id: 1,
    name: 'Espresso',
    description: 'A strong, full-bodied coffee with a rich aroma. Perfect for those who love intense coffee flavor.',
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348',
    category: 'Hot Coffee',
    rating: 4.8,
    reviews: 120,
    inStock: true
  },
  {
    id: 2,
    name: 'Latte',
    description: 'A creamy coffee with a perfect balance of espresso and steamed milk. Smooth and comforting.',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    category: 'Hot Coffee',
    rating: 4.9,
    reviews: 245,
    inStock: true
  },
  {
    id: 3,
    name: 'Cappuccino',
    description: 'A classic coffee with equal parts espresso, steamed milk, and foam. The perfect morning pick-me-up.',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc',
    category: 'Hot Coffee',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 4,
    name: 'Americano',
    description: 'A smooth coffee made with espresso and hot water. Bold yet smooth, perfect for any time of day.',
    price: 3.00,
    image: 'https://images.unsplash.com/photo-1570968915860-d1a13f87a90b',
    category: 'Hot Coffee',
    rating: 4.6,
    reviews: 156,
    inStock: true
  },
  {
    id: 5,
    name: 'Mocha',
    description: 'A delicious blend of espresso, chocolate, and steamed milk. Indulgent and rich.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1572441710534-680f9c2eea52',
    category: 'Hot Coffee',
    rating: 4.8,
    reviews: 203,
    inStock: true
  },
  {
    id: 6,
    name: 'Macchiato',
    description: 'A shot of espresso with a dollop of foamed milk. Simple yet elegant.',
    price: 2.75,
    image: 'https://images.unsplash.com/photo-1570968915860-d1a13f87a90b',
    category: 'Hot Coffee',
    rating: 4.5,
    reviews: 134,
    inStock: true
  },
  {
    id: 7,
    name: 'Flat White',
    description: 'A velvety smooth coffee with microfoam. Stronger than a latte, smoother than a cappuccino.',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1520201163981-8a62acae648d',
    category: 'Hot Coffee',
    rating: 4.7,
    reviews: 98,
    inStock: true
  },
  {
    id: 8,
    name: 'Cortado',
    description: 'Equal parts espresso and warm milk. Balanced and smooth.',
    price: 3.25,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348',
    category: 'Hot Coffee',
    rating: 4.6,
    reviews: 87,
    inStock: true
  },

  // Cold Coffee
  {
    id: 9,
    name: 'Iced Latte',
    description: 'Refreshing cold latte with espresso and chilled milk over ice.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87',
    category: 'Cold Coffee',
    rating: 4.8,
    reviews: 167,
    inStock: true
  },
  {
    id: 10,
    name: 'Cold Brew',
    description: 'Smooth, naturally sweet coffee brewed cold for 12 hours. Less acidic, more flavorful.',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1594633313593-bb19f1cbb4f5',
    category: 'Cold Coffee',
    rating: 4.9,
    reviews: 234,
    inStock: true
  },
  {
    id: 11,
    name: 'Iced Mocha',
    description: 'Chilled espresso with chocolate and cold milk. Perfect for hot days.',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1612197537132-027f23f4f3a1',
    category: 'Cold Coffee',
    rating: 4.7,
    reviews: 145,
    inStock: true
  },
  {
    id: 12,
    name: 'Frappuccino',
    description: 'Blended coffee drink with ice, milk, and flavoring. Cool and creamy.',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1605478371373-d9c1a5b4370e',
    category: 'Cold Coffee',
    rating: 4.6,
    reviews: 198,
    inStock: true
  },

  // Coffee Beans
  {
    id: 13,
    name: 'Arabica Premium Blend',
    description: 'Premium Arabica beans from Ethiopia. Notes of chocolate and berries. 500g pack.',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1461988091159-192b6df7054f',
    category: 'Coffee Beans',
    rating: 4.9,
    reviews: 312,
    inStock: true
  },
  {
    id: 14,
    name: 'Robusta Dark Roast',
    description: 'Bold and strong Robusta beans. Perfect for espresso lovers. 500g pack.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    category: 'Coffee Beans',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 15,
    name: 'Colombian Supremo',
    description: 'Smooth and balanced Colombian coffee. Medium roast with caramel notes. 500g pack.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1534791547704-5f32b8bdbca0',
    category: 'Coffee Beans',
    rating: 4.8,
    reviews: 267,
    inStock: true
  },
  {
    id: 16,
    name: 'Italian Espresso Blend',
    description: 'Traditional Italian blend. Rich and full-bodied. 500g pack.',
    price: 17.99,
    image: 'https://images.unsplash.com/photo-1473922170307-9c05c0b0a593',
    category: 'Coffee Beans',
    rating: 4.8,
    reviews: 201,
    inStock: true
  },

  // Tea (using coffee images)
  {
    id: 17,
    name: 'Green Tea',
    description: 'Fresh and light green tea. Antioxidant-rich and refreshing.',
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1608431421944-0b2d30075cf0',
    category: 'Tea',
    rating: 4.5,
    reviews: 98,
    inStock: true
  },
  {
    id: 18,
    name: 'Earl Grey',
    description: 'Classic black tea with bergamot. Aromatic and elegant.',
    price: 2.75,
    image: 'https://images.unsplash.com/photo-1581404917879-42c7e48a2709',
    category: 'Tea',
    rating: 4.6,
    reviews: 112,
    inStock: true
  },
  {
    id: 19,
    name: 'Chai Latte',
    description: 'Spiced tea with steamed milk. Warm and comforting.',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1594633313593-bb19f1cbb4f5',
    category: 'Tea',
    rating: 4.7,
    reviews: 156,
    inStock: true
  },

  // Pastries (using coffee images)
  {
    id: 20,
    name: 'Croissant',
    description: 'Buttery, flaky French croissant. Perfect with coffee.',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc',
    category: 'Pastries',
    rating: 4.8,
    reviews: 223,
    inStock: true
  },
  {
    id: 21,
    name: 'Chocolate Muffin',
    description: 'Rich chocolate muffin with chocolate chips. Moist and delicious.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    category: 'Pastries',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 22,
    name: 'Blueberry Scone',
    description: 'Traditional scone with fresh blueberries. Perfect for breakfast.',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348',
    category: 'Pastries',
    rating: 4.6,
    reviews: 145,
    inStock: true
  }
];

export const categories = ['All', 'Hot Coffee', 'Cold Coffee', 'Coffee Beans', 'Tea', 'Pastries'];

export default products;