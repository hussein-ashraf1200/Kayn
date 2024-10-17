import React from 'react';
import logo from "../components/asests/logo.jpg";
import { FaWhatsappSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";




const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-4 pb-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or image */}
        <div className='justify-center flex'>
          <img src={logo} alt="Logo" className="w-20  rounded-xl" />
        </div>
        
        {/* Text and app links */}
        <div className="text-center">
          <p className="mb-4">
            Kayan Store for all  to all</p>
          
        </div>
          <div className='grid   gap-2  items-center'>
          <FaWhatsappSquare className='hover:text-cyan-400 text-2xl cursor-pointer'/>
          <ImFacebook2 className='hover:text-cyan-400 text-xl cursor-pointer'/>
          <RiInstagramFill className='hover:text-cyan-400 text-2xl cursor-pointer'/> 
          </div>



      </div>
    </footer>
  );
}

export default Footer;
