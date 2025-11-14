import React from 'react';
import "./Commancss.css";

function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">About Our Coffee Journey</h2>

      <p className="about-paragraph">
        Welcome to our Coffee Haven! This platform is dedicated to all coffee lovers who appreciate the rich aroma, bold flavors, and the unique culture that surrounds every cup of coffee. Whether you're a casual drinker or a passionate connoisseur, our mission is to bring the best coffee experience right to your screen.
      </p>

      <p className="about-paragraph">
        At Coffee Haven, we believe that coffee is more than just a beverage—it's a lifestyle, a ritual, and a way to connect with people and cultures around the world. Our team is committed to sourcing the finest beans, roasting them to perfection, and sharing stories behind every blend.
      </p>

      <h3 className="about-subtitle">Our Story</h3>

      <p className="about-paragraph">
        Founded in 2025 by a group of passionate coffee enthusiasts, Coffee Haven started as a simple idea: to create an online space where coffee lovers can discover, learn, and enjoy the art of coffee. Over the years, we've grown into a vibrant community, sharing everything from brewing tips and recipes to product recommendations and reviews.
      </p>

      <h3 className="about-subtitle">What Makes Us Unique</h3>

      <ul className="about-list">
        <li>Curated Selection: We carefully handpick coffee beans from ethical farms worldwide, ensuring quality and sustainability.</li>
        <li>Expert Brewing Guides: Whether you prefer espresso, French press, or cold brew, our tutorials help you brew the perfect cup every time.</li>
        <li>Community Engagement: Join our forums and events to connect with fellow coffee aficionados and share your passion.</li>
        <li>Innovative Coffee Products: From grinders to mugs, we feature only the best tools to enhance your coffee experience.</li>
        <li>Educational Content: Learn about coffee history, bean varieties, roasting methods, and more through our detailed articles.</li>
      </ul>

      <h3 className="about-subtitle">Our Commitment to Sustainability</h3>

      <p className="about-paragraph">
        Sustainability is at the heart of everything we do. We partner with coffee farms that prioritize eco-friendly farming practices, fair trade, and support for local communities. By choosing Coffee Haven, you're contributing to a better future for coffee growers and the planet.
      </p>

      <p className="about-paragraph">
        We are constantly evolving and striving to bring you fresh, inspiring coffee content and products. Explore our site, try our recommended blends, and become a part of the Coffee Haven family. Your perfect cup awaits!
      </p>
    </section>
  );
}

export default About;
