import React from 'react';
import './Commancss.css';

const coffeeMenu = [
 {
  name: 'Iced Americano',
  description: 'Chilled espresso with water for a bold yet refreshing drink.',
  price: '₹110',
  image: 'Iced Americano.jpeg',
  popular: true,
},
  {
    name: 'Cold Brew',
    description: 'Smooth cold brewed coffee, perfect for a summer day.',
    price: '₹140',
    image: 'Cold Brew.jpeg',
  },
  {
    name: 'Café Latte',
    description: 'Mild espresso with creamy steamed milk.',
    price: '₹120',
    image: 'Café Latte.jpg',
    popular: true,
  },
  {
    name: 'Cappuccino',
    description: 'Espresso, steamed milk, and foam, perfectly balanced.',
    price: '₹130',
    image: 'Cappuccino.jpg',
  },
  {
    name: 'Mocha',
    description: 'Espresso with chocolate and creamy milk foam.',
    price: '₹150',
    image: 'Mocha.jpg',
  },
  {
    name: 'Iced Latte',
    description: 'Espresso with chilled milk and ice for a cool treat.',
    price: '₹130',
    image: 'Iced Latte.jpg',
  },
  {
    name: 'Filter Coffee',
    description: 'Authentic South Indian filter coffee with rich flavor.',
    price: '₹80',
    image: 'Filter Coffee.jpg',
    popular: true,
  },
  {
    name: 'Espresso',
    description: 'Strong and intense espresso shot.',
    price: '₹90',
    image: 'Espresso.jpg',
  },
  {
    name: 'Caramel Frappe',
    description: 'Blended cold coffee with caramel flavor.',
    price: '₹160',
    image: 'Caramel-Frappe.jpg',
  },
  {
    name: 'Hazelnut Iced Coffee',
    description: 'Chilled coffee blended with hazelnut flavor.',
    price: '₹150',
    image: 'Hazelnut Iced Coffee.jpg',
  },
  {
    name: 'Flat White',
    description: 'Espresso with silky steamed milk.',
    price: '₹140',
    image: 'Flat White.jpg',
  },
  {
    name: 'Macchiato',
    description: 'Espresso topped with a dollop of foam.',
    price: '₹100',
    image: 'Macchiato.jpg',
  },
  {
    name: 'Choco Chip Frappe',
    description: 'Blended cold coffee with chocolate chips.',
    price: '₹170',
    image: 'Choco Chip Frappe.jpg',
  },
  {
    name: 'Classic Iced Coffee',
    description: 'Simple and refreshing chilled coffee over ice.',
    price: '₹120',
    image: 'Classic Iced Coffee.jpg',
  },
  {
    name: 'Turkish Coffee',
    description: 'Rich, thick coffee brewed in a traditional style.',
    price: '₹160',
    image: 'Turkish Coffee.jpg',
  },
  {
    name: 'Irish Coffee',
    description: 'Coffee blended with a splash of Irish cream liqueur.',
    price: '₹180',
    image: 'Irish Coffee.jpg',
    popular: true,
  },
  {
    name: 'Vanilla Cold Coffee',
    description: 'Cold coffee infused with smooth vanilla flavor.',
    price: '₹140',
    image: 'Vanilla Cold Coffee.jpg',
  },
  {
    name: 'Mint Cold Coffee',
    description: 'Cold coffee with a refreshing minty twist.',
    price: '₹130',
    image: 'Mint Cold Coffee.jpg',
  },
  {
    name: 'Café Au Lait',
    description: 'Brewed coffee with steamed milk for a smooth flavor.',
    price: '₹110',
    image: 'Café Au Lait.jpg',
  },
  {
    name: 'Hot Chocolate Mocha',
    description: 'Delightful mix of hot chocolate and coffee.',
    price: '₹150',
    image: 'Hot Chocolate Mocha.jpg',
  },
];

const Menu = () => {
  const handleAddToCart = (item) => {
    alert(`Added "${item.name}" to cart!`);
  };

  return (
    <section className="menu-page">
      <h1 className="menu-heading">Our Coffee Menu</h1>
      <p className="menu-subtitle">A perfect blend of hot and cold coffee varieties.</p>

      <div className="menu-list">
        {coffeeMenu.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-info">
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <span className="price">{item.price}</span>

              {/* ✅ Button below price */}
              <div className="button-container">
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;