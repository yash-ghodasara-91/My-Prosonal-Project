import React from "react";
import "./Commancss.css";

const offersData = [
  {
    title: "50% Off on Espresso",
    description: "Enjoy our signature espresso shots at half the price.",
    comment: "Perfect for that midday caffeine boost! ☕️✨",
    imageUrl: "Offers Espresso .jpg",
  },
  {
    title: "Buy 1 Get 1 Free",
    description: "Order any latte and get another one absolutely free.",
    comment: "Double the fun, double the delight! 🎉",
    imageUrl: "Buy 1 Get 1 Free.jpg",
  },
  {
    title: "Free Pastry with Coffee",
    description: "Every coffee purchase comes with a complimentary pastry.",
    comment: "Sweet treat to pair with your favorite brew. 🥐☕",
    imageUrl: "Free Pastry with Coffee.jpg",
  },
  {
    title: "Weekend Special",
    description: "Flat 30% off on all cappuccinos this weekend!",
    comment: "Celebrate the weekend vibes with your favorite coffee! 🎊",
    imageUrl: "Weekend Special.jpg",
  },
  {
    title: "Happy Hour",
    description: "20% off on all drinks from 4pm to 6pm.",
    comment: "Evening chills and coffee thrills! 🌆",
    imageUrl: "Happy Hour.jpg",
  },
  {
    title: "Morning Bliss",
    description: "Free cookie with any coffee before 11am.",
    comment: "Kickstart your morning with something sweet! 🌞🍪",
    imageUrl: "Morning Bliss.jpg",
  },
  {
    title: "Student Discount",
    description: "15% off for students with valid ID.",
    comment: "A little perk for the hardworking minds! 📚",
    imageUrl: "Student Discount.jpg",
  },
  {
    title: "New Flavor Trial",
    description: "Try our new seasonal coffee flavors at 10% off.",
    comment: "Explore exciting new tastes! 🍂☕️",
    imageUrl: "New Flavor Trial.jpg",
  },
  {
    title: "Loyalty Reward",
    description: "Get a free drink on your 10th visit.",
    comment: "Your loyalty deserves a delicious reward! 🎁",
    imageUrl: "Loyalty Reward.jpg",
  },
  {
    title: "Evening Relax",
    description: "Buy any coffee and get 30% off on any dessert after 7pm.",
    comment: "Wind down with a sweet treat and a hot cup. 🌙",
    imageUrl: "Evening Relax.jpg",
  },
];

const Offers = () => {
  return (
    <section className="offers-container">
      <h1 className="offers-title">Special Coffee Offers</h1>
      <p className="offers-description">
        Don’t miss out on our exclusive coffee deals!
      </p>

      <div className="offers-grid">
        {offersData.map((offer, index) => (
          <div className="offer-card" key={index}>
            <img src={offer.imageUrl} alt={offer.title} className="offer-image" />
            <h3 className="offer-title">{offer.title}</h3>
            <p className="offer-description">{offer.description}</p>
            <p className="offer-comment">{offer.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
