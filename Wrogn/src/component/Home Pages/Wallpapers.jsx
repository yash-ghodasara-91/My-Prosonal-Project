import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

// Sample wallpaper images
const wallpapers = [
    {
        image: "https://wrogn.com/cdn/shop/files/wally1.jpg?v=1741259895&width=360",
    },
    {
        image: "https://wrogn.com/cdn/shop/files/wally3.jpg?v=1741259896&width=360",
    },
    {
        image: "https://wrogn.com/cdn/shop/files/wally2.jpg?v=1741259895&width=360",
    },
];

// Store images
const storeImages = [
    {
        image: "https://wrogn.com/cdn/shop/files/Big.webp?v=1741680133",
    },
    {
        image: "https://wrogn.com/cdn/shop/files/Big.webp?v=1741680133",
    },
    {
        image: "https://wrogn.com/cdn/shop/files/small2.webp?v=1741680132",
    },
    {
        image: "https://wrogn.com/cdn/shop/files/small1.webp?v=1741680132",
    },
];

function WrognWallpapers() {
    return (
        <div className="max-w-7xl mx-auto  py-12">

            <h2 className="text-center font-bold text-2xl tracking-widest mb-7">
                WROGN WALLPAPERS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                {wallpapers.map((wallpaper, index) => (
                    <div
                        key={index}
                        className="relative rounded-2xl h-[600px] overflow-hidden shadow-lg group"
                    >
                        <img
                            src={wallpaper.image}
                            alt={`Wallpaper ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <a
                            href={wallpaper.image}
                            download
                            className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white p-2 rounded text-xl hover:bg-opacity-100 transition"
                            title="Download"
                        >
                            <AiOutlineArrowDown />
                        </a>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-0 items-center mb-6">

                <div className="w-[350px] mt-0 mb-15">
                    <h3 className="text-lg font-semibold tracking-widest">WROGN STORE.</h3>
                    <h2 className="text-4xl font-bold mt-2 mb-3">RIGHT PLACE.</h2>
                    <p className="text-gray-600 mb-4 text-sm">
                        Find how close you're to going wrogn!
                    </p>
                    <button className="bg-black text-white w-[350px] px-6 py-2 rounded-[10px] text-sm hover:bg-opacity-90 transition">
                        See All Stores
                    </button>
                </div>


                <div className="rounded-xl  border-2 border-black h-[350px] overflow-hidden shadow-md">
                    <img
                        src={storeImages[0].image}
                        alt="Wrogn Store 1"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="flex gap-6">
                <div className="w-full md:w-1/2 border-2 border-black rounded-xl h-[350px] overflow-hidden shadow-md">
                    <img
                        src={storeImages[1].image}
                        alt="Wrogn Store 2"
                        className="w-full h-full object-cover"
                    />
                </div>


                <div className="w-full md:w-1/4  border-2 border-black rounded-xl h-[350px] overflow-hidden shadow-md">
                    <img
                        src={storeImages[2].image}
                        alt="Wrogn Store 3"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full md:w-1/4  border-2 border-black rounded-xl h-[350px] overflow-hidden shadow-md">
                    <img
                        src={storeImages[3].image}
                        alt="Wrogn Store 4"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default WrognWallpapers;
