import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  X as XIcon,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#131300] text-gray-400 px-6 h-[500px] py-12">
      <div className="max-w-7xl mx-auto grid text-center grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-4 w-[430px]">
          <img src="Footer-logo.webp" alt="Logo" className="h-30" />
          <h2 className="text-5xl ps-0 font-extrabold text-gray-300">
            FOR THE RIGHT <br /> KIND OF MAN.
          </h2>
          <p className="text-lg text-start ms-7">© 2024, Wrogn Powered by TMRW</p>
          <div className="flex gap-4 mt-4 ms-6">
            <Instagram className="w-7 h-7" />
            <Facebook className="w-7 h-7" />
            <XIcon className="w-7 h-7" />
            <Twitter className="w-7 h-7" />
            <Youtube className="w-8 h-8" />
          </div>
        </div>

        <div className="ms-30 ">
          <h3 className="text-white font-bold text-lg mb-4">HELP</h3>
          <ul className="space-y-2 text-lg">
            <li>My Account</li>
            <li>Privacy Policy</li>
            <li>Anti Corruption Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="ms-30">
          <h3 className="text-white font-bold text-lg mb-4">ORDER SUPPORT</h3>
          <ul className="space-y-2 text-lg">
            <li>Return & Refund Policy</li>
            <li>FAQ</li>
            <li>Shipping Policy</li>
            <li>Cancellation</li>
          </ul>
        </div>

        <div className="ms-30">
          <h3 className="text-white font-bold text-lg mb-4">ABOUT US</h3>
          <ul className="space-y-2 text-lg">
            <li>About Us</li>
            <li>Find a Store</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-end mt-8 me-4">
        <i
          className="bg-white text-black p-2.5 rounded-[5px] shadow cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="w-5 h-5" />
        </i>
      </div>
    </footer>
  );
};

export default Footer;
