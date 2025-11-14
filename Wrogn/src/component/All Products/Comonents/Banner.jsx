import React from 'react';
import FastBanner from '../../../assets/AllProducts/CATEGORY-BANNER-WEBSITE-1.webp';

const Banner = () => {
  return (
    <div className="w-[1400px]  mx-auto my-10">
      <img
        src={FastBanner}
        alt="End of Season Sale"
        className="w-full object-cover rounded-3xl"
      />
    </div>
  );
};

export default Banner;
