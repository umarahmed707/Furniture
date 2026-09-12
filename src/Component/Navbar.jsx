import React, { useState } from 'react';
import logo from '../assets/Project logo.png'; 
import { FaUser } from 'react-icons/fa';
import { IoIosSearch, IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'; 

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-white w-full border-b border-gray-100">
      {/* Main Container */}
      <div className="flex items-center justify-between h-[80px] sm:h-[100px] px-4 sm:px-8 md:px-12 lg:px-[100px]">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Furniro Logo" className="w-[35px] sm:w-[50px] h-auto" />
          <h1 className="text-2xl sm:text-[34px] font-bold tracking-tight">Furniro</h1>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 font-medium text-base">
          <li className="hover:text-[#B88E2F] cursor-pointer transition-colors">Home</li>
          <li className="hover:text-[#B88E2F] cursor-pointer transition-colors">Shop</li>
          <li className="hover:text-[#B88E2F] cursor-pointer transition-colors">About</li>
          <li className="hover:text-[#B88E2F] cursor-pointer transition-colors">Contact</li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <FaUser className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-[#B88E2F] transition-colors" />
          <IoIosSearch className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer hover:text-[#B88E2F] transition-colors" />
          <IoMdHeartEmpty className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer hover:text-[#B88E2F] transition-colors" />
          <MdOutlineShoppingCart className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer hover:text-[#B88E2F] transition-colors" />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-[#B88E2F] focus:outline-none p-2"
          >
            {isOpen ? <HiOutlineX className="w-7 h-7" /> : <HiOutlineMenu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Toggle on click) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-6 shadow-lg absolute top-full left-0 w-full z-50">
          
          {/* Navigation Links */}
          <ul className="flex flex-col gap-4 font-semibold text-lg text-gray-800">
            <li className="hover:text-[#B88E2F] cursor-pointer" onClick={() => setIsOpen(false)}>Home</li>
            <li className="hover:text-[#B88E2F] cursor-pointer" onClick={() => setIsOpen(false)}>Shop</li>
            <li className="hover:text-[#B88E2F] cursor-pointer" onClick={() => setIsOpen(false)}>About</li>
            <li className="hover:text-[#B88E2F] cursor-pointer" onClick={() => setIsOpen(false)}>Contact</li>
          </ul>

          {/* Action Icons */}
          <div className="flex items-center justify-around pt-4 border-t border-gray-100">
            <FaUser className="w-6 h-6 text-gray-700 cursor-pointer hover:text-[#B88E2F]" />
            <IoIosSearch className="w-6 h-6 text-gray-700 cursor-pointer hover:text-[#B88E2F]" />
            <IoMdHeartEmpty className="w-6 h-6 text-gray-700 cursor-pointer hover:text-[#B88E2F]" />
            <MdOutlineShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-[#B88E2F]" />
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;