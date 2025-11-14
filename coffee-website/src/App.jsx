// App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './componets/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Offers from './pages/Offers';
import Footer from './componets/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="offers" element={<Offers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
