import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CoolMode } from "./magicui/cool-mode";


const products = [
  {
    id: 1,
    title: "Solid Stretch Slim Fit Shirt | Navy",
    image: "https://wrogn.com/cdn/shop/files/1_92b0a01a-7483-4cd2-b4dd-3de89cb156c3.jpg?v=1749127210&width=360",
    price: 1439,
    originalPrice: 2399,
    tag: "EXCLUSIVE",
  },
  {
    id: 2,
    title: "Solid Stretch Slim Fit Shirt | Blue",
    image: "https://wrogn.com/cdn/shop/files/1_22770138-d500-46cd-a547-564e14747619.jpg?v=1749127284&width=360",
    price: 1439,
    originalPrice: 2399,
    tag: "EXCLUSIVE",
  },
  {
    id: 3,
    title: "Solid Stretch Cotton Blend Shirt | Black",
    image: "https://wrogn.com/cdn/shop/files/1_374f0826-8747-49be-b905-1202a1e7802e.jpg?v=1749127532&width=360",
    price: 1799,
    originalPrice: 2999,
    tag: "EXCLUSIVE",
  },
  {
    id: 4,
    title: "Solid Stretch Cotton Blend Shirt | Pink",
    image: "https://wrogn.com/cdn/shop/files/1_56912672-25ee-4257-80ae-e25a58b31850.jpg?v=1749127372&width=360",
    price: 1799,
    originalPrice: 2999,
    tag: "EXCLUSIVE",
  },
  {
    id: 5,
    title: "Solid Stretch Cotton Blend Shirt | Navy",
    image: "https://wrogn.com/cdn/shop/files/1_264f2564-279e-46ff-985f-4e4bbaaf4102.jpg?v=1749127497&width=360",
    price: 1799,
    originalPrice: 2999,
    tag: "EXCLUSIVE",
  },
  {
    id: 6,
    title: "Silver Foil Print Slim Fit T-Shirt | Rust",
    image: "https://wrogn.com/cdn/shop/files/1_110e6c61-01c4-470d-a742-5127a0b27940.jpg?v=1749128408&width=360",
    price: 899,
    originalPrice: 899,
    tag: "NEW",
  },
  {
    id: 7,
    title: "Silver Foil Print Slim Fit T-Shirt | Olive",
    image: "https://wrogn.com/cdn/shop/files/1_43bcc19c-a8db-4cfa-a41e-ed0c24bf22e3.jpg?v=1749128384&width=360",
    price: 899,
    originalPrice: 899,
    tag: "NEW",
  },
];

const ViratFashionPage = () => {
  return (
    <div className="bg-white py-7 space-y-10">
      <h2 className="text-center font-bold text-2xl mb-4">VIRAT HAS A MESSAGE FOR YOU</h2>
      <div className="bg-[#f3f3f3] max-w-7xl mx-auto rounded-2xl pb-1">
        <div className="relative max-w-7xl mx-1 overflow-hidden">
          <video
            className="w-[1070px] h-[600px] object-cover rounded-3xl"
            autoPlay
            muted
            loop
            controls
          >
            <source src="virat-video.mp4" type="video/mp4" />
          </video>
          <div className="hidden md:block absolute top-1/2 right-[-40px] -translate-y-1/2 rotate-90">
            <p className="font-bold text-black text-2xl">VIRAT HAS A MESSAGE FOR YOU</p>
          </div>
        </div>


        <div className="bg-white rounded-3xl mx-1 mt-1">
          <div className="pb-6 pt-6">
            <h3 className="text-center font-bold text-2xl">SEASON'S TOP PICKS</h3>
          </div>
          <div className="max-w-7xl mx-auto px-2">
               <CoolMode>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={50}
              slidesPerView={1.3}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                768: { slidesPerView: 3.2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  
                  <div className="bg-white  rounded-xl shadow-sm p-2 min-w-[260px] max-w-[280px]">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="rounded-xl w-full h-[340px] object-cover"
                      />
                      {product.tag && (
                        <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded font-semibold">
                          {product.tag}
                        </div>
                      )}
                    </div>
                    <div className="mt-2 px-2 space-y-1 relative">
                      <p className="text-sm font-bold">
                        ₹{product.price.toLocaleString()}{" "}
                        <span className="line-through text-gray-400 text-xs">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>{" "}
                        <span className="text-green-600 text-xs font-semibold">
                          (40% OFF)
                        </span>
                      </p>
                      <p className="text-xs text-gray-700">{product.title}</p>
                      <CoolMode>
                      <button className="w-full mt-2 border border-black text-sm py-1 rounded hover:bg-black hover:text-white transition">
                        Add to Bag
                      </button>
                    </CoolMode>
                  </div>
                </div>
                </SwiperSlide>
              ))}
          </Swiper>
          </CoolMode>
        </div>
      </div>
    </div>
    </div >
  );
};

export default ViratFashionPage;
