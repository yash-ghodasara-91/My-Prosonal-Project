import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CoolMode } from "./magicui/cool-mode";

const slides = [
    {
        image: "https://wrogn.com/cdn/shop/files/DESKTOP-BANNER-1.webp?v=1741677539&width=720",
    },
    {
        image: "https://wrogn.com/cdn/shop/files/DESKTOP-BANNER-3.webp?v=1741677750&width=720",
    },
    {
        image: "https://wrogn.com/cdn/shop/files/SS25-BANNER-5.webp?v=1741677777&width=720",
    },
    {
        image: "https://wrogn.com/cdn/shop/files/SS25-BANNER-4.webp?v=1741678817&width=720",
    },
    {
        image: "https://wrogn.com/cdn/shop/files/DESKTOP-BANNER-2.webp?v=1741678831&width=720",
    },
];

function WeAreWrogn() {
    return (
        <div className="max-w-7xl mx-auto py-10">
            <h2 className="text-center font-bold text-2xl tracking-widest mb-6">
                WE ARE WROGN
            </h2>
            <CoolMode>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    slidesPerView={1}
                    className="rounded-lg overflow-hidden"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-full">
                                <img
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                />

                                <div className="absolute left-0 top-0 bottom-0 z-10 flex overflow-hidden">
                                    <div className="animate-marquee-vertical text-pink-500 text-[70px] font-bold writing-vertical whitespace-nowrap">
                                        MAD {"  "}WROGN{"  "}STAY

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CoolMode>
        </div>
    );
}

export default WeAreWrogn;
