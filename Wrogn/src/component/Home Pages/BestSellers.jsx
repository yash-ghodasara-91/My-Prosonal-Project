import React from "react";

function BestSellers() {
  const bestSellers = [
    {
      image: "https://wrogn.com/cdn/shop/files/CHECKED-SHIRTS-WEBSITE.webp?v=1741353836&width=360",
    },
    {
      image: "https://wrogn.com/cdn/shop/files/MM-website-BANNER-T-SHIRTS_1.webp?v=1738849318&width=360",
    },
    {
      image: "https://wrogn.com/cdn/shop/files/CARGOS-_-JOGGERS-WEBSITE.webp?v=1741353814&width=360",
    },
    {
      image: "https://wrogn.com/cdn/shop/files/MM-website-BANNER-JEANS_1.webp?v=1738849319&width=360",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 ">
      <h2 className="text-center font-bold text-2xl tracking-wider mb-6">BEST SELLERS</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bestSellers.map((item, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
