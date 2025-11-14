import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header className="flex items-center justify-between py-4 px-8 bg-[#1a1a1a]">
            {/* Logo or Brand Name */}
            <div className="flex items-center gap-2">
                <img src={logo} className='h-8 w-8' alt="restorant logo" />
                <h1 className="text-lg font-semibold text-[#f5f5f5]">RestroOrder</h1>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
                <FaSearch className="text-[#f5f5f5]" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
                />
            </div>

            {/* Logged User Details */}
            <div className="flex items-center gap-4">
                <div className="bg-[#1f1f1f] p-3 rounded-[15px] cursor-pointer">
                    <FaBell className="text-[#f5f5f5] text-2xl" />
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                    <FaUserCircle className="text-[#f5f5f5] text-4xl" />
                </div>
                <div className="flex flex-col items-strart">
                    <h1 className="text-md text-[#f5f5f5] font-semibold">Jone Dev</h1>
                    <p className="text-xs text-[#ababab] font-medium">Admin</p>
                </div>
            </div>
        </header>
    )
}

export default Header