import React, { useState } from 'react'
// import logo from "../components/asests/logo.jpg"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import data_product from './asests/data'; // استيراد البيانات من ملف data_product




const Mostmakup = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? data_product.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === data_product.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className='grid grid-cols-3 gap-y-0 justify-center items-center mt-8'>
<FaArrowAltCircleLeft className='text-2xl ' onClick={goToPrevious}  />
<div>
  <div className=' mx-auto text-center mb-4'>
    <p className='text-black font-bold text-xl'>Most Orderd </p>
    <hr className=' border-t-2 w-1/3 mx-auto border-black ' />
  </div>
<img 
  src={data_product[currentIndex].image} 
  alt={data_product[currentIndex].name} 
  className="w-[600px] h-[300px] object-cover rounded-lg shadow-lg" 
/>
</div>
<FaArrowAltCircleRight className='text-2xl p-0 m-0' onClick={goToNext} />
</div>
  )
}

export default Mostmakup
