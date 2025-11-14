import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export default function Sliderone() {
    // const prevRef = useRef(null);
    // const nextRef = useRef(null);
    return (
        <div className='relative mt-3 ms-5 mx-5 w-auto h-full'>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2000
                }}
                // navigation={{
                //     prevEl: prevRef.current,
                //     nextEl: nextRef.current
                // }}
                pagination={{ clickable: true, el: '.custom-pagination' }}
                onBeforeInit={(swiper) => {
                    // swiper.params.navigation.prevEl = prevRef.current;
                    // swiper.params.navigation.nextEl = nextRef.current;
                    swiper.params.pagination.el = '.custom-pagination';
                }}

            >

                <SwiperSlide>
                    <div>
                        <img className='rounded-lg' src="https://wrogn.com/cdn/shop/files/OFFER-WEBSITE-BANNER-EOSS-1.webp?v=1749493160" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='rounded-lg' src="https://wrogn.com/cdn/shop/files/WEABSITE-BANNER.webp?v=1749638686" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='rounded-lg max-h-full' src="https://wrogn.com/cdn/shop/files/SS25-BANNER-5_1.webp?v=1747128395" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='rounded-lg' src="https://wrogn.com/cdn/shop/files/Dekstop_Banner.jpg?v=1750165122" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='rounded-lg max-h-full' src="https://wrogn.com/cdn/shop/files/InnerDesktop-Banner.webp?v=1740998390" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='rounded-lg' src="https://wrogn.com/cdn/shop/files/WEBSITE-BANNER-1.webp?v=1750425641" alt="" />
                    </div>
                </SwiperSlide>
                {/* <button
                    ref={prevRef}
                    className="absolute top-1/2 left-1/6 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 z-10"
                >
                    &#8592;
                </button>
                <button
                    ref={nextRef}
                    className="absolute top-1/2 right-1/6 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 z-10"
                >
                    &#8594;
                </button> */}

                <div className="relative">
                    <div className="custom-pagination justify-end absolute bottom-7 right-4 flex gap-2 z-10" />
                </div>
            </Swiper>
        </div>

    )
}
