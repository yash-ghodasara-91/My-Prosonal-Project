import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="left">
        <div className="logo">CoffeeTime <span className="coffee">☕</span></div>
      </div>

      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/offers" className="nav-link">Offers</Link>
      </nav>

      <div className="right">
        <select className="dropdown">
          <option value="all">All</option>
          <option value="hot">Hot Coffee</option>
          <option value="cold">Cold Coffee</option>
        </select>
        <div className="cart-icon">🛒</div>
      </div>
    </header>
  );
}

export default Header;
