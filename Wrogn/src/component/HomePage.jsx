import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Navbar from './Home Pages/Navbar';
import Sliderone from './Home Pages/Sliderone';
import Card from './Home Pages/Card';
import ViratFashionPage from './Home Pages/ViratFashionPage';
import TrendingCategories from './Home Pages/TrendingCategories';
import BestSellers from './Home Pages/BestSellers';
import WeAreWrogn from './Home Pages/WeAreWrogn';
import WrognWallpapers from './Home Pages/Wallpapers';
import ServiceHighlights from './Home Pages/ServiceHighlights';
import Footer from './Home Pages/Footer';




function HomePage() {

  return (
    <>
      <Navbar />
      <Sliderone />
      <Card />
      <ViratFashionPage />
      <TrendingCategories />
      <BestSellers />
      <WeAreWrogn />
      <WrognWallpapers />
      <ServiceHighlights />
      <Footer />
    </>
  );
}

export default HomePage;