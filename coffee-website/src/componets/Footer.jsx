import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave" />

      <div className="footer-content">
        <div className="footer-logo">
          <h2>CoffeeTime <span>☕</span></h2>
          <p>Wake up and smell the coffee. Brewed fresh daily for you.</p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@coffeetime.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Mumbai, India</p>
        </div>

        <div className="footer-subscribe">
          <h3>Subscribe</h3>
          <p>Get the latest coffee deals and updates</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CoffeeTime. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
