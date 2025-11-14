import React from "react";
import "./Commancss.css";

const Gallery = () => {
  const images = [
    { url: "Coffee Beans.jpg", name: "Coffee Beans" },
    { url: "Latte Art.jpg", name: "Latte Art" },
    { url: "Coffee Cup.jpg", name: "Coffee Cup" },
    { url: "Coffee Shop.jpg", name: "Coffee Shop" },
    { url: "Coffee Art.jpg", name: "Coffee Art" },
    { url: "Coffee Brewing.jpg", name: "Coffee Brewing" },
    { url: "Espresso Shot.jpg", name: "Espresso Shot" },
    { url: "Barista at Work.jpg", name: "Barista at Work" },
    { url: "Coffee Grinder.jpg", name: "Coffee Grinder" },
    { url: "Filter Coffee-gallery.jpg", name: "Filter Coffee" },
    { url: "Drip Coffee.jpg", name: "Drip Coffee" },
    { url: "Coffee Roastery.jpg", name: "Coffee Roastery" },
    { url: "Coffee Mug.jpg", name: "Coffee Mug" },
    { url: "Steaming Coffee.jpg", name: "Steaming Coffee" },
    { url: "Coffee & Breakfast.jpg", name: "Coffee & Breakfast" },
    { url: "Iced Coffee.jpg", name: "Iced Coffee" },
    { url: "Coffee Table.jpg", name: "Coffee Table" },
    { url: "Coffee Syrup.jpg", name: "Coffee Syrup" },
    { url: "Creamy Coffee.jpg", name: "Creamy Coffee" },
    { url: "Coffee & Dessert.jpg", name: "Coffee & Dessert" },
  ];

  return (
    <section className="gallery-container">
      <h1 className="gallery-title">Coffee Moments Gallery</h1>
      <p className="gallery-description">
        Explore our curated collection of coffee moments from around the world.
      </p>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.url} alt={image.name} />
            <p className="gallery-image-name">{image.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
