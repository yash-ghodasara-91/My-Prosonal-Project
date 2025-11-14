import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CoolMode } from "./magicui/cool-mode";

const trendingCategories = [
  {
    image: "https://wrogn.com/cdn/shop/files/POLO_d0966b4f-d65a-4770-a3b9-c191f6b96ba2.webp?v=1743745695&width=1066",
  },
  {
    image: "https://wrogn.com/cdn/shop/files/SHOP-HALF-SLEEVE-SHIRTS-WEBSIT_2.webp?v=1747733244&width=1066",
  },
  {
    image: "https://wrogn.com/cdn/shop/files/SHOP-FULL-SLEEVE-SHIRTS-WEBSIT_2.webp?v=1747733910&width=1066",
  },
  {
    image: "https://wrogn.com/cdn/shop/files/OVERSIZED.webp?v=1743745809&width=1066",
  },
  {
    image: "https://wrogn.com/cdn/shop/files/DENIMS.webp?v=1743745819&width=1066",
  },
];

const newTrendingProducts = [
  {
    id: 1,
    title: "Tonal AOP Oversized T-Shirt | White",
    image: "https://wrogn.com/cdn/shop/files/1_bdb7e932-036f-43f1-b91d-727642aaf3a9.jpg?v=1748169665&width=360",
    price: 991,
    originalPrice: 1599,
    tag: "Exclusive",
  },
  {
    id: 2,
    title: "Embroidered Oversized Fit T-Shirt | Charcoal",
    image: "https://wrogn.com/cdn/shop/files/1_d8c60b53-7ec4-4efd-97de-291e0dff9747.jpg?v=1748169684&width=360",
    price: 840,
    originalPrice: 1399,
    tag: "Exclusive",
  },
  {
    id: 3,
    title: "Puff Print Oversized T-Shirt | Dark Blue",
    image: "https://wrogn.com/cdn/shop/files/2_4aa86c20-4fb6-44c8-966f-e6feb72c2d66.jpg?v=1748324366&width=360",
    price: 840,
    originalPrice: 1399,
    tag: "Exclusive",
  },
  {
    id: 4,
    title: "Embroidered Oversized Fit T-Shirt | Peach",
    image: "https://wrogn.com/cdn/shop/files/1_26bb7bde-b819-451e-9cf5-fa9d60516150.jpg?v=1748169710&width=360",
    price: 899,
    originalPrice: 1499,
    tag: "Exclusive",
  },
  {
    id: 5,
    title: "Embroidered Solid Oversized T-Shirt | Black",
    image: "https://wrogn.com/cdn/shop/files/1_c0d1d180-9cbc-458d-b68f-c3bf8c2598b4.jpg?v=1748169726&width=360",
    price: 749,
    originalPrice: 1499,
    tag: "Exclusive",
  },
  {
    id: 6,
    title: "Solid Oversized Fit Polo T-Shirt | Beige",
    image: "https://wrogn.com/cdn/shop/files/1_4376ce27-c1f4-444c-af36-dcbc6582f462.jpg?v=1748169739&width=360",
    price: 975,
    originalPrice: 1599,
    tag: "Exclusive",
  },
  {
    id: 7,
    title: "Sneakers | Negroni Frost",
    image: "https://wrogn.com/cdn/shop/files/WVCS010.webp?v=1748436974&width=360",
    price: 2699,
    originalPrice: 4499,
    tag: "New",
  },
];


const TrendingCategories = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 ">

      <h2 className="text-center font-bold text-2xl pt-0 tracking-wider mb-6">
        TRENDING CATEGORIES
      </h2>


      <div className="grid grid-cols-2 gap-4 mb-8">

        <div className="relative rounded-lg overflow-hidden">
          <img
            src={trendingCategories[0].image}
            className="w-full h-full object-cover aspect-[3/2]"
          />
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={trendingCategories[1].image}
            className="w-full h-full object-cover aspect-[3/2]"
          />
        </div>

        <div className="col-span-2 grid grid-cols-3 gap-4">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={trendingCategories[2].image}
              className="w-full h-full object-cover aspect-[3/3]"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={trendingCategories[3].image}
              className="w-full h-full object-cover aspect-[3/3]"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={trendingCategories[4].image}
              className="w-full h-full object-cover aspect-[3/3]"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full rounded-lg overflow-hidden mt-17">
        <img
          src="download.webp"
          alt="New and Trending"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6">
          <h2 className="text-white text-3xl font-bold text-center mt-5">
          
          </h2>

          <div className="self-end w-full md:w-[70%] lg:w-[50%]">
            <CoolMode>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={16}
              slidesPerView={3}
              className="mySwiper"
            >
              {newTrendingProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="bg-white rounded-lg  shadow-md relative">
                    <span className="absolute top-3 left-[-1px] bg-red-400 text-white text-[10px] font-bold px-3 py-1 rounded-[4px] ">
                      {product.tag}
                    </span>

                    <img
                      src={product.image}
                      alt={product.title}
                      className="rounded-lg mb-2 w-full h-auto object-cover"
                    />
                    <div className="text-xs font-semibold text-gray-800 truncate">
                      {product.title}
                    </div>
                    <div className="text-xs text-gray-600">
                      ₹{product.price}{' '}
                      <span className="line-through text-blue-400">
                        ₹{product.originalPrice}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </CoolMode>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TrendingCategories;
