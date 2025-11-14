import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CoolMode } from "./magicui/cool-mode";

const slides = [
  {
    id: 1,
    mainImage: "https://wrogn.com/cdn/shop/files/WUTS1035S_B.webp?v=1745566268",
    products: [
      {
        id: 11,
        thumbnail: "https://wrogn.com/cdn/shop/files/WUTS1035S_92a0c68c-be7a-4fa9-87fb-ba958f07b1a3.webp?v=1748934982&width=360",
        title: "Heavy GSM Printed Monster T-Shirt | Red",
        price: "₹839",
        original: "₹1,399",
        discount: "40% OFF",
      },
      {
        id: 12,
        thumbnail: "https://wrogn.com/cdn/shop/files/1_0854be46-8a65-482a-bc51-8c88ff50ec5a.jpg?v=1749124066&width=360",
        title: "Light Fade Anti Fit Jeans | Dark Blue",
        price: "₹1,739",
        original: "₹2,899",
        discount: "40% OFF",
      },
    ],
  },
  {
    id: 2,
    mainImage: "https://wrogn.com/cdn/shop/files/WUSH0130S_131dd034-96ee-4a0a-8229-b1b65af6e727.webp?v=1745565305",
    products: [
      {
        id: 21,
        thumbnail: "https://wrogn.com/cdn/shop/files/WUSH0130S_169aebdc-2b75-480f-8892-7a1d0be04924.webp?v=1748928413&width=360",
        title: "AOP Fluid Light Weight Viscose Shirt | Multicolour",
        price: "₹1,199",
        original: "₹1,999",
        discount: "40% OFF",
      },
      {
        id: 22,
        thumbnail: "https://wrogn.com/cdn/shop/files/1_0854be46-8a65-482a-bc51-8c88ff50ec5a.jpg?v=1749124066&width=360",
        title: "Classic Slim Fit Jeans | Black",
        price: "₹1,299",
        original: "₹2,599",
        discount: "50% OFF",
      },
    ],
  },
  {
    id: 3,
    mainImage: "https://wrogn.com/cdn/shop/files/WTTS1578W_d356bced-ae72-47b7-94b4-2fc09fadf632.webp?v=1745564005",
    products: [
      {
        id: 31,
        thumbnail: "https://wrogn.com/cdn/shop/files/yem12r88sgtxdgs5ydrv.webp?v=1744697675&width=360",
        title: "Colour Blocked Varsity Polo T-Shirt | Off White",
        price: "₹1,169",
        original: "₹1,799",
        discount: "35% OFF",
      },
      {
        id: 32,
        thumbnail: "https://wrogn.com/cdn/shop/files/1_4c458730-2eb1-4cea-bc4d-ff011854c061.webp?v=1738840403&width=360",
        title: "Solid Anti Fit Denim Cargo | Black",
        price: "₹1,689",
        original: "₹2,599",
        discount: "35% OFF",
      },
    ],
  },
  {
    id: 4,
    mainImage: "https://wrogn.com/cdn/shop/files/Virat1.jpg?v=1739260589",
    products: [
      {
        id: 41,
        thumbnail: "https://wrogn.com/cdn/shop/files/1_ae92e28f-524f-4270-99c6-a0873931f0a1.jpg?v=1733229217&width=360",
        title: "Next Level Pure Cotton T-Shirt",
        price: "₹449",
        original: "₹899",
        discount: "50% OFF",
      },
      {
        id: 42,
        thumbnail: "https://wrogn.com/cdn/shop/files/1_ae92e28f-524f-4270-99c6-a0873931f0a1.jpg?v=1733229217&width=360",
        title: "Solid Anti Fit Denim Cargo | Black",
        price: "₹1,689",
        original: "₹2,599",
        discount: "35% OFF",
      },
    ],
  },
  {
    id: 5,
    mainImage: "https://wrogn.com/cdn/shop/files/Virat4.jpg?v=1739260589",
    products: [
      {
        id: 51,
        thumbnail: "https://wrogn.com/cdn/shop/files/1_950898da-bb36-45b6-9a48-e3a249616dab.webp?v=1744697752&width=360",
        title: "Puff Print Oversized T-Shirt | Brown",
        price: "₹719",
        original: "₹1,199",
        discount: "40% OFF",
      },
      {
        id: 52,
        thumbnail: "https://wrogn.com/cdn/shop/files/1_96291886-3011-41eb-b141-2b0bac47ea4d.webp?v=1738657237&width=360",
        title: "Casual Anti Fit Jeans | Beige",
        price: "₹1,679",
        original: "₹2,799",
        discount: "40% OFF",
      },
    ],
  },
  {
    id: 6,
    mainImage: "https://wrogn.com/cdn/shop/files/WUSH0118S_fd5e03a4-7f31-4f2b-89b9-5eefdf3d4a9b.webp?v=1745564655",
    products: [
      {
        id: 61,
        thumbnail: "https://wrogn.com/cdn/shop/files/WUSH0118S_ecf0e38e-0f40-4649-9b0a-54c7c6004d38.webp?v=1741271155&width=360",
        title: "AOP Fluid Viscose Shirt | Khaki",
        price: "₹999",
        original: "₹1,999",
        discount: "50% OFF",
      },
      {
        id: 62,
        thumbnail: "https://wrogn.com/cdn/shop/files/WTWJ4028S.jpg?v=1745295746&width=360",
        title: "Grey Straight Fit Cargo Trousers",
        price: "₹1,649",
        original: "₹3,299",
        discount: "50% OFF",
      },
    ],
  },
  {
    id: 7,
    mainImage: "https://wrogn.com/cdn/shop/files/WUSH0137S_552ce50d-4fe8-4250-9bf9-ab208e4c0c38.webp?v=1745565568",
    products: [
      {
        id: 71,
        thumbnail: "https://wrogn.com/cdn/shop/files/WUSH0137S_d3a45096-498b-43f5-9601-78764b8bf7f3.webp?v=1741271246&width=360",
        title: "AOP Fluid Viscose Shirt | Yellow",
        price: "₹1,199",
        original: "₹1,999",
        discount: "40% OFF",
      },
      {
        id: 72,
        thumbnail: "https://wrogn.com/cdn/shop/files/1_0854be46-8a65-482a-bc51-8c88ff50ec5a.jpg?v=1749124066&width=360",
        title: "Light Fade Anti Fit Jeans | Dark Blue",
        price: "₹1,739",
        original: "₹2,899",
        discount: "40% OFF",
      },
    ],
  },
  {
    id: 8,
    mainImage: "https://wrogn.com/cdn/shop/files/WUSH0123S_1.webp?v=1745565051",
    products: [
      {
        id: 81,
        thumbnail: "https://wrogn.com/cdn/shop/files/WUSH0123S_159ee32f-24f1-4b01-9ffc-1c542a198826.webp?v=1741271178&width=360",
        title: "Patchwork Printed AOP Shirt | Red",
        price: "₹1,099",
        original: "₹2,199",
        discount: "50% OFF",
      },
      {
        id: 82,
        thumbnail: "https://wrogn.com/cdn/shop/files/1_e5ab70ca-cbbe-4e7b-b146-ef7f1e6dbfd6.jpg?v=1746190013&width=360",
        title: "Heavy Fade Anti Fit Jeans | Blue",
        price: "₹1,399",
        original: "₹2,799",
        discount: "50% OFF",
      },
    ],
  },
];


export default function Card() {
  return (
    <div className="w-full max-w-7xl mx-auto py-16 pb-8">
      <h2 className="text-center text-2xl font-bold mb-8">WEAR IT LIKE VIRAT</h2>
    <CoolMode>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={4} 
        spaceBetween={28}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-gradient-to-t from-[#B99690] to-[#EAEAEA] w-[300px] rounded-lg shadow p-3">
              <img
                src={slide.mainImage}
                alt=""
                className="w-full h-[400px] object-cover rounded mb-4"
              />

              <div className="flex overflow-x-auto space-x-3 pb-2 scroll-hide">
                {slide.products.map((product) => (
                  <div
                    key={product.id}
                    className="min-w-[215px] max-w-[245px] bg-white rounded shadow p-2 flex shrink-0"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-28 h-28 object-cover rounded"
                    />
                    <div className="flex flex-col px-2">
                      <h3 className="text-xs font-medium line-clamp-2 mb-2">
                        {product.title}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-bold">{product.price}</span>
                        <span className="text-xs line-through text-gray-500">{product.original}</span>
                        <span className="text-xs text-green-600">{product.discount}</span>
                      </div>
                      <div className='flex justify-between items-center mt-5'>
                          <a href="#"><button className='uppercase text-[11px] font-bold py-2  border w-[90px]'>quick view</button></a>
                          <div className='border p-1 '>
                            <svg className='rotate-50 text-red-500' xmlns="http://www.w3.org/2000/svg" width="24.5" height="24.5" viewBox="0 0 24 24"><path fill="currentColor" d="m12.354 5.646l5 5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-4.146 4.147a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0"/></svg>
                          </div>
                        </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </CoolMode>
    </div>
  );
}
