import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from "../components/asests/logo.jpg";
import { IoIosLogIn } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";  // استيراد useLocation
import Cart from './Cart';
import Login from './Login';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // الحصول على المسار الحالي

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // دالة للتحقق من إذا ما كان الرابط نشطًا
  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-500' : 'hover:text-blue-500';
  };

  return (
    <nav className="bg-white shadow-md w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-14 rounded-md" src={logo} alt="Logo" />
          <span className="ml-2 text-xl font-bold">KaYn Store</span>
        </div>

        {/* Icon for mobile view */}
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            size="lg"
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>

        {/* Links for larger screens */}
        <div className={`lg:flex space-x-8 hidden`}>
          <ul className="flex items-center space-x-7 font-semibold">
            <li className={`${isActive('/')} cursor-pointer`}>
              <Link to="/"> Home </Link>
            </li>
            <li className={`${isActive('/Makup')} cursor-pointer`}>
              <Link to="/Makup"> Makaup </Link>
            </li>
            <li className={`${isActive('/Kids')} cursor-pointer`}>
              <Link to="/Kids"> Toys </Link>
            </li>
            <li className={`${isActive('/Colect')} cursor-pointer`}>
              <Link to="/Colect"> Collection </Link>
            </li>
          </ul>
        </div>
        <div className='flex'>
          <div>
            <Link to="/Login">
              <IoIosLogIn className="text-3xl cursor-pointer " /> 
            </Link>
          </div>
          <div>
           
          <Link to="/cart"> <Cart/> </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`absolute top-16 left-0 w-full bg-white lg:hidden transition-transform transform ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex items-center space-x-7 font-semibold">
            <li className={`${isActive('/')} cursor-pointer`}>
              <Link to="/"> Home </Link>
            </li>
            <li className={`${isActive('/Makup')} cursor-pointer`}>
              <Link to="/Makup"> Makaup </Link>
            </li>
            <li className={`${isActive('/Kids')} cursor-pointer`}>
              <Link to="/Kids"> Toys </Link>
            </li>
            <li className={`${isActive('/Colect')} cursor-pointer`}>
              <Link to="/Colect"> Collection </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
